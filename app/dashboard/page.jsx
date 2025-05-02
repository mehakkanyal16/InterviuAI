import React from 'react';
import AddNewInterview from './_components/AddNewInterview';
import InterviewList from './interview/[interviewId]/start/_components/InterviewList';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50 px-6 py-8 md:px-12 md:py-12 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4"></div>
      </div>

      {/* Header Section */}
      <header className="mb-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            InterviuAI Dashboard
          </h1>
          <p className="mt-3 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Elevate your interview skills with AI-powered practice and insights.
          </p>
        </div>
      </header>

      {/* Create New Interview Section */}
      <section className="mb-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Start a New Mock Interview
          </h2>
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
            <AddNewInterview />
          </div>
        </div>
      </section>

      {/* Previous Interviews Section */}
      <section className="relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Recent Mock Interviews
          </h2>
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-xl shadow-md overflow-hidden">
            <InterviewList />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;