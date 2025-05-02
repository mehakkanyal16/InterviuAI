"use client";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function Feedback({ params }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    GetFeedback();
  }, []);

  const GetFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);
    setFeedbackList(result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8 md:p-12">
      <div className="max-w-4xl mx-auto">
        {feedbackList?.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-600 animate-pulse">
              No Interview Feedback Found
            </h2>
            <Button
              onClick={() => router.replace("/dashboard")}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 transition-all duration-300"
            >
              Return to Dashboard
            </Button>
          </div>
        ) : (
          <>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-green-600 animate-fade-in">
                Congratulations!
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
                Your Interview Feedback
              </h3>
              <p className="text-gray-500 mt-2 text-sm md:text-base">
                Review your performance with detailed insights below
              </p>
            </div>

            <div className="space-y-6">
              {feedbackList.map((item, index) => (
                <Collapsible
                  key={index}
                  className="bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <CollapsibleTrigger className="p-6 flex justify-between items-center text-left w-full bg-gray-50 rounded-t-2xl hover:bg-gray-100 transition-colors">
                    <span className="font-semibold text-gray-800 text-lg flex-1 pr-4">
                      {item.question}
                    </span>
                    <ChevronsUpDown className="h-6 w-6 text-gray-500" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-6 bg-white rounded-b-2xl">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 p-4 bg-amber-50 rounded-xl">
                        <Star className="h-5 w-5 text-amber-500" />
                        <span className="text-amber-700 font-medium">
                          <strong>Rating:</strong> {item.rating}/5
                        </span>
                      </div>
                      <div className="p-4 bg-red-50 rounded-xl text-red-800">
                        <strong className="font-medium">Your Answer:</strong>
                        <p className="mt-2 text-sm">{item.userAns}</p>
                      </div>
                      <div className="p-4 bg-green-50 rounded-xl text-green-800">
                        <strong className="font-medium">Correct Answer:</strong>
                        <p className="mt-2 text-sm">{item.correctAns}</p>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-xl text-blue-800">
                        <strong className="font-medium">Feedback:</strong>
                        <p className="mt-2 text-sm">{item.feedback}</p>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button
                onClick={() => router.replace("/dashboard")}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Back to Dashboard
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Feedback;
