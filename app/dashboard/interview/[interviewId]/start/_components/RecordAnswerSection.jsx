"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import { Mic, StopCircle } from 'lucide-react'
import { toast } from 'sonner'
import { submitAnswerFeedback } from '@/app/actions/interview'

let useSpeechToText;
if (typeof window !== "undefined") {
  useSpeechToText = require('react-hook-speech-to-text').default;
}

function RecordAnswerSection({ mockInterviewQuestion, activeQuestionIndex, interviewData }) {
  if (!useSpeechToText) return null; // prevents server side or non-browser execution

  const [userAnswer, setUserAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });

  useEffect(() => {
    results?.forEach((result) => {
      setUserAnswer(prevAns => prevAns + result?.transcript);
    });
  }, [results]);

  useEffect(() => {
    if (!isRecording && userAnswer?.length > 10) {
      UpdateUserAnswer();
    }
  }, [userAnswer]);

  const StartStopRecording = async () => {
    if (isRecording) {
      stopSpeechToText();
    } else {
      startSpeechToText();
    }
  };

  const UpdateUserAnswer = async () => {
    setLoading(true);

    try {
      await submitAnswerFeedback({
        mockId: interviewData?.mockId,
        question: mockInterviewQuestion[activeQuestionIndex]?.question,
        correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
        userAns: userAnswer,
      });

      toast('User Answer recorded successfully');
      setUserAnswer('');
      setResults([]);
    } catch (e) {
      toast.error('Failed to save answer or parse response.');
    }
    setLoading(false);
  };

  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='flex flex-col mt-20 justify-center items-center bg-black rounded-2xl shadow-xl border border-gray-800 p-5 relative overflow-hidden'>
        {isRecording && (
          <div className='absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-red-600 text-white text-xs font-medium px-3 py-1 rounded-full'>
            <span className='h-2 w-2 rounded-full bg-white animate-pulse' />
            Recording
          </div>
        )}
        <Image src={'/webcam.png'} width={200} height={200} alt='webcam' className='absolute' />
        <Webcam
          mirrored={true}
          style={{
            height: 500,
            width: 500,
            zIndex: 10,
            borderRadius: '0.75rem',
          }}
        />
      </div>
      <Button
        disabled={loading}
        variant="outline"
        className="my-10 px-6 py-5"
        onClick={StartStopRecording}
      >
        {isRecording ?
          <span className='text-red-600 animate-pulse flex gap-2 items-center'>
            <StopCircle />Stop Recording
          </span>
          :
          <span className='text-primary flex gap-2 items-center'>
            <Mic /> Record Answer
          </span>}
      </Button>
    </div>
  );
}

export default RecordAnswerSection;
