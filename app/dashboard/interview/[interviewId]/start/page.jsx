"use client";

import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react"; // removed unused `use`
import { Button } from "@/components/ui/button";
import Link from "next/link";

import QuestionsSection from "./_components/QuestionsSections";
import RecordAnswerSection from "./_components/RecordAnswerSection";

function StartInterview({ params }) {
  const interviewId = params?.interviewId; // correct destructuring

  const [interviewData, setInterviewData] = useState(null);
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  useEffect(() => {
    GetInterviewDetails();
  }, []);

  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, interviewId));

    const jsonMockResp = JSON.parse(result[0].jsonMockResp);
    setMockInterviewQuestion(jsonMockResp);
    setInterviewData(result[0]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10 space-y-8">
      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section: Questions */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <QuestionsSection
            mockInterviewQuestion={mockInterviewQuestion}
            activeQuestionIndex={activeQuestionIndex}
          />
        </div>

        {/* Right Section: Recording */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <RecordAnswerSection
            mockInterviewQuestion={mockInterviewQuestion}
            activeQuestionIndex={activeQuestionIndex}
            interviewData={interviewData}
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-end gap-4 pt-4">
        {activeQuestionIndex > 0 && (
          <Button
            variant="outline"
            onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
          >
            Previous Question
          </Button>
        )}
        {activeQuestionIndex !== mockInterviewQuestion?.length - 1 && (
          <Button onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}>
            Next Question
          </Button>
        )}
        {activeQuestionIndex === mockInterviewQuestion?.length - 1 && (
          <Link href={`/dashboard/interview/${interviewData?.mockId}/feedback`}>
            <Button variant="destructive">End Interview</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default StartInterview;
