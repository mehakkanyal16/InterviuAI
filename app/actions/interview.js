'use server';

import { currentUser } from '@clerk/nextjs/server';
import { db } from '@/utils/db';
import { MockInterview, UserAnswer } from '@/utils/schema';
import { createChatSession } from '@/utils/GeminiAIModal';
import { and, desc, eq } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

async function requireUserEmail() {
  const user = await currentUser();
  const email = user?.primaryEmailAddress?.emailAddress;
  if (!email) {
    throw new Error('Unauthorized');
  }
  return email;
}

function extractJson(text) {
  const match = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
  const raw = match ? match[1] : text;
  return raw.trim();
}

export async function generateMockInterview({ jobPosition, jobDesc, jobExperience }) {
  const email = await requireUserEmail();
  const questionCount = process.env.INTERVIEW_QUESTION_COUNT || 5;

  const inputPrompt = `Job Position: ${jobPosition}, Job Description: ${jobDesc}, Job Experience: ${jobExperience}. Based on this information, please provide ${questionCount} interview questions and answers in JSON format. Respond ONLY with a JSON array like: [{"question": "...", "answer": "..."}]`;

  const chat = createChatSession();
  const result = await chat.sendMessage(inputPrompt);
  const rawJson = extractJson(result.response.text());

  const parsedResponse = JSON.parse(rawJson);
  if (!Array.isArray(parsedResponse) || parsedResponse.length === 0) {
    throw new Error('AI did not return valid interview questions');
  }

  const mockId = uuidv4();
  await db.insert(MockInterview).values({
    mockId,
    jsonMockResp: rawJson,
    jobPosition,
    jobDesc,
    jobExperience,
    createdBy: email,
    createdAt: moment().format('DD-MM-YYYY'),
  });

  return { mockId };
}

export async function getUserInterviews() {
  const email = await requireUserEmail();
  return db
    .select()
    .from(MockInterview)
    .where(eq(MockInterview.createdBy, email))
    .orderBy(desc(MockInterview.id));
}

export async function getInterviewByMockId(mockId) {
  const email = await requireUserEmail();
  const result = await db
    .select()
    .from(MockInterview)
    .where(and(eq(MockInterview.mockId, mockId), eq(MockInterview.createdBy, email)));
  return result[0] ?? null;
}

export async function submitAnswerFeedback({ mockId, question, correctAns, userAns }) {
  const email = await requireUserEmail();

  const owned = await getInterviewByMockId(mockId);
  if (!owned) {
    throw new Error('Interview not found');
  }

  const feedbackPrompt = `Question: ${question}, User Answer: ${userAns}. Please provide a rating and feedback for improvement in JSON format with rating and feedback fields.`;

  const chat = createChatSession();
  const result = await chat.sendMessage(feedbackPrompt);
  const rawJson = extractJson(result.response.text());
  const feedback = JSON.parse(rawJson);

  await db.insert(UserAnswer).values({
    mockIdRef: mockId,
    question,
    correctAns,
    userAns,
    feedback: feedback?.feedback,
    rating: feedback?.rating != null ? String(feedback.rating) : null,
    userEmail: email,
    createdAt: moment().format('DD-MM-YYYY'),
  });

  return { success: true };
}

export async function getFeedbackForInterview(mockId) {
  const email = await requireUserEmail();
  return db
    .select()
    .from(UserAnswer)
    .where(and(eq(UserAnswer.mockIdRef, mockId), eq(UserAnswer.userEmail, email)))
    .orderBy(UserAnswer.id);
}
