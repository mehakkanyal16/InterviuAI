'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';
import { motion } from 'framer-motion';

function InterviewItemCard({ interview }) {
  const router = useRouter();

  const handleStart = () => {
    router.push(`/dashboard/interview/${interview?.mockId}`);
  };

  const handleFeedback = () => {
    router.push(`/dashboard/interview/${interview?.mockId}/feedback`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="border border-gray-200 shadow-md rounded-2xl p-6 bg-white transition-all hover:shadow-xl"
    >
      <div className="mb-3">
        <h2 className="text-xl font-semibold text-primary mb-1 tracking-wide">
          {interview?.jobPosition || 'Unknown Position'}
        </h2>
        <h3 className="text-sm text-muted-foreground">
          {interview?.jobExperience ?? '0'} Years of Experience
        </h3>
        <p className="text-xs text-gray-400 mt-1">
          Created on: {interview?.createdAt ? new Date(interview.createdAt).toLocaleDateString() : 'N/A'}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-5">
        <Button
          size="sm"
          variant="outline"
          className="w-full border-gray-300 hover:border-primary hover:text-primary"
          onClick={handleFeedback}
        >
          View Feedback
        </Button>
        <Button
          size="sm"
          className="w-full bg-primary hover:bg-primary/90 text-white"
          onClick={handleStart}
        >
          Start Interview
        </Button>
      </div>
    </motion.div>
  );
}

export default InterviewItemCard;
