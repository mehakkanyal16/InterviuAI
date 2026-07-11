import { Lightbulb, Volume2 } from 'lucide-react';
import React, { useState, useEffect } from 'react';

function QuestionsSection({ mockInterviewQuestion, activeQuestionIndex }) {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const textToSpeech = (text) => {
    if (typeof window === 'undefined') return; // Guard for SSR

    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        // Cancel ongoing speech if any before starting new
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      }

      const speech = new SpeechSynthesisUtterance(text);

      speech.onstart = () => {
        setIsSpeaking(true);
      };
      speech.onend = () => {
        setIsSpeaking(false);
      };
      speech.onerror = () => {
        setIsSpeaking(false);
      };

      window.speechSynthesis.speak(speech);
    } else {
      alert('Sorry, your browser does not support text-to-speech');
    }
  };

  if (!mockInterviewQuestion || !Array.isArray(mockInterviewQuestion) || mockInterviewQuestion.length === 0) {
    return null;
  }

  const isValidIndex = activeQuestionIndex >= 0 && activeQuestionIndex < mockInterviewQuestion.length;
  const currentQuestion = isValidIndex ? mockInterviewQuestion[activeQuestionIndex]?.question : 'No question selected';

  return (
    <div className="p-5 border rounded-lg my-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {mockInterviewQuestion.map((question, index) => (
          <h2
            key={index}
            className={`p-2.5 border rounded-full text-xs md:text-sm font-medium text-center cursor-pointer transition-colors ${
              activeQuestionIndex === index
                ? 'bg-primary text-white border-primary'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            Question #{index + 1}
          </h2>
        ))}
      </div>
      <h2 className="my-5 text-md md:text-lg text-gray-800">{currentQuestion}</h2>
      <Volume2
        className={`cursor-pointer text-primary hover:text-primary/80 ${isSpeaking ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={() => {
          if (!isSpeaking) {
            textToSpeech(currentQuestion);
          }
        }}
        title={isSpeaking ? 'Speaking...' : 'Speak question'}
      />

      <div className="border rounded-lg p-5 bg-blue-100 mt-20">
        <h2 className="flex gap-2 items-center text-primary">
          <Lightbulb />
          <strong>Note:</strong>
        </h2>
        <p className="text-sm text-primary my-2">
          {process.env.NEXT_PUBLIC_QUESTION_NOTE || 'Please provide your answer to the question.'}
        </p>
      </div>
    </div>
  );
}

export default QuestionsSection;
