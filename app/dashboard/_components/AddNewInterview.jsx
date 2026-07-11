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
import { LoaderCircle } from "lucide-react";
import { generateMockInterview } from "@/app/actions/interview";
import { useRouter } from "next/navigation";

function AddNewInterview() {
  const [openDailog, setOpenDailog] = useState(false);
  const [jobPosition, setJobPosition] = useState('');
  const [jobDesc, setJobDesc] = useState('');
  const [jobExperience, setJobExperience] = useState('');
  const [questionCount, setQuestionCount] = useState(5);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { mockId } = await generateMockInterview({ jobPosition, jobDesc, jobExperience, questionCount });
      setOpenDailog(false);
      router.push(`/dashboard/interview/${mockId}`);
    } catch (err) {
      console.error("Error generating interview:", err);
      alert("Failed to generate interview questions. Please try again.");
    } finally {
      setLoading(false);
    }
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

            <div>
              <label className="block text-sm font-medium mb-1">Number of Questions</label>
              <Input
                type="number"
                placeholder="Ex. 5"
                min="3"
                max="15"
                required
                value={questionCount}
                onChange={(e) => setQuestionCount(e.target.value)}
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
