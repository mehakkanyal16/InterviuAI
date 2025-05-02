'use client';

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { chatSession } from "@/utils/GeminiAIModal";
import { LoaderCircle } from "lucide-react";
import { MockInterview } from "@/utils/schema";
import { db } from "@/utils/db.js";
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import moment from 'moment';

function AddNewInterview() {
  const [openDailog, setOpenDailog] = useState(false);
  const [jobPosition, setJobPosition] = useState('');
  const [jobDesc, setJobDesc] = useState('');
  const [jobExperience, setJobExperience] = useState('');
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const { user } = useUser();
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const inputPrompt = `Job Position: ${jobPosition}, Job Description: ${jobDesc}, Job Experience: ${jobExperience}. Based on this information, please provide ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION} interview questions and answers in JSON format. Include both "questions" and "answers" fields.`;

    const result = await chatSession.sendMessage(inputPrompt);
    const rawResponse = result.response.text().replace('```json', '').replace('```', '');

    try {
      const parsedResponse = JSON.parse(rawResponse);
      setJsonResponse(parsedResponse);

      const resp = await db.insert(MockInterview).values({
        mockId: uuidv4(),
        jsonMockResp: rawResponse,
        jobPosition,
        jobDesc,
        jobExperience,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format('DD-MM-YYYY'),
      }).returning({ mockId: MockInterview.mockId });

      if (resp) {
        setOpenDailog(false);
        router.push(`/dashboard/interview/${resp[0]?.mockId}`);
      }
    } catch (err) {
      console.error('Error parsing AI response:', err);
    }

    setLoading(false);
  };

  return (
    <div>
      <div
        className="p-6 border border-dashed border-gray-300 rounded-xl bg-secondary/30 hover:bg-secondary/50 hover:scale-105 hover:shadow-md transition-all cursor-pointer text-center"
        onClick={() => setOpenDailog(true)}
      >
        <h2 className="text-lg font-medium text-primary">+ Add New Interview</h2>
      </div>

      <Dialog open={openDailog} onOpenChange={setOpenDailog}>
        <DialogContent className="max-w-2xl p-6 sm:p-8">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-primary">
              Create Your Mock Interview
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-600">
              Provide your role, tech stack, and experience. We’ll generate AI-based questions.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={onSubmit} className="space-y-5 mt-6">
            <div>
              <label className="block text-sm font-medium mb-1">Job Role / Position</label>
              <Input
                placeholder="Ex. Full Stack Developer"
                required
                value={jobPosition}
                onChange={(e) => setJobPosition(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Tech Stack / Job Description</label>
              <Input
                placeholder="Ex. React, Next.js, Node.js, MySQL"
                required
                value={jobDesc}
                onChange={(e) => setJobDesc(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Years of Experience</label>
              <Input
                type="number"
                placeholder="Ex. 2"
                max="50"
                required
                value={jobExperience}
                onChange={(e) => setJobExperience(e.target.value)}
              />
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setOpenDailog(false)}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <LoaderCircle className="animate-spin mr-2 w-4 h-4" />
                    Generating...
                  </>
                ) : (
                  "Start Interview"
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
