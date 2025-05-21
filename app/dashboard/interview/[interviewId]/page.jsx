"use client"
import { useParams } from 'next/navigation'; // ✅ Required
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db.js';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import Link from 'next/link';
import { Lightbulb, Webcam, VideoOff, Mic, MicOff, ChevronRight, AlertCircle } from "lucide-react";
import React, { use,useEffect, useState } from 'react'
import WebcamComponent from 'react-webcam';


function Interview({params}) {
  const unwrappedParams = use(params);  // ✅ Proper way to access dynamic param

  const [interviewData, setInterviewData] = useState(null);
  const [webCamEnabled, setWebCamEnabled] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getInterviewDetails();
  }, []);

  const getInterviewDetails = async () => {
    try {
      const result = await db.select().from(MockInterview).where(eq(MockInterview.mockId,unwrappedParams.interviewId));
      setInterviewData(result[0]);
    } catch (error) {
      console.error("Error fetching interview details:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleWebcam = () => {
    setWebCamEnabled(!webCamEnabled);
    if (!webCamEnabled) setAudioEnabled(false);
  };

  const toggleAudio = () => {
    if (webCamEnabled) setAudioEnabled(!audioEnabled);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          <p className="text-gray-600">Loading interview details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Interview Preparation
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get ready for your <span className="font-semibold text-primary">{interviewData?.jobPosition}</span> interview
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Interview Details Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-8 rounded-full bg-primary"></div>
                <h2 className="text-2xl font-bold text-gray-800">Interview Details</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-50 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">POSITION</h3>
                    <p className="mt-1 text-lg font-semibold text-gray-900">{interviewData?.jobPosition}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-purple-50 text-purple-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">EXPERIENCE LEVEL</h3>
                    <p className="mt-1 text-lg font-semibold text-gray-900">{interviewData?.jobExperience} years</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-green-50 text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">TECHNOLOGY STACK</h3>
                    <p className="mt-1 text-gray-700">{interviewData?.jobDesc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips Section */}
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-t border-yellow-100 p-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-yellow-100 text-yellow-600">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-yellow-800">PRO TIP</h3>
                  <p className="mt-2 text-sm text-yellow-700">
                    {process.env.NEXT_PUBLIC_INFORMATION || "Ensure you're in a quiet, well-lit environment. Test your equipment before starting."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Setup Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-8 rounded-full bg-primary"></div>
                <h2 className="text-2xl font-bold text-gray-800">Setup Check</h2>
              </div>
              
              <div className="flex flex-col items-center">
                {/* Webcam Feed */}
                <div className="relative w-full aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden mb-6 flex items-center justify-center border-2 border-gray-200">
                  {webCamEnabled ? (
                    <WebcamComponent
                      mirrored={true}
                      className="h-full w-full object-cover"
                      audio={audioEnabled}
                      onUserMedia={() => setWebCamEnabled(true)}
                      onUserMediaError={() => {
                        setWebCamEnabled(false);
                        setAudioEnabled(false);
                      }}
                    />
                  ) : (
                    <div className="flex flex-col items-center p-8 text-gray-400">
                      <Webcam className="h-16 w-16 mb-3" />
                      <p className="text-center">Camera preview will appear here</p>
                    </div>
                  )}
                </div>

                {/* Status Indicators */}
                <div className="flex gap-4 mb-6 w-full">
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${webCamEnabled ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                    <div className={`h-2 w-2 rounded-full ${webCamEnabled ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                    <span className="text-sm font-medium">Camera {webCamEnabled ? 'On' : 'Off'}</span>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${audioEnabled ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                    <div className={`h-2 w-2 rounded-full ${audioEnabled ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                    <span className="text-sm font-medium">Mic {audioEnabled ? 'On' : 'Off'}</span>
                  </div>
                </div>

                {/* Control Buttons */}
                <div className="flex gap-4 w-full">
                  <Button
                    onClick={toggleWebcam}
                    variant={webCamEnabled ? "outline" : "default"}
                    className="flex-1 gap-2 h-12"
                  >
                    {webCamEnabled ? (
                      <>
                        <VideoOff className="h-5 w-5" />
                        Disable Camera
                      </>
                    ) : (
                      <>
                        <Webcam className="h-5 w-5" />
                        Enable Camera
                      </>
                    )}
                  </Button>

                  <Button
                    onClick={toggleAudio}
                    disabled={!webCamEnabled}
                    variant={audioEnabled ? "outline" : "default"}
                    className="flex-1 gap-2 h-12"
                  >
                    {audioEnabled ? (
                      <>
                        <MicOff className="h-5 w-5" />
                        Mute
                      </>
                    ) : (
                      <>
                        <Mic className="h-5 w-5" />
                        Unmute
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Start Interview Button */}
        <div className="mt-16 text-center">
          {!webCamEnabled && (
            <div className="flex items-center justify-center gap-2 mb-4 text-amber-600">
              <AlertCircle className="h-5 w-5" />
              <p className="text-sm font-medium">Please enable your camera to continue</p>
            </div>
          )}
          <Link href={`/dashboard/interview/${unwrappedParams.interviewId}/start`} className="inline-block">
            <Button 
              size="lg" 
              className="px-12 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
              disabled={!webCamEnabled}
            >
              Start Mock Interview
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Interview;