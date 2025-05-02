import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-pattern py-16 lg:py-24 overflow-hidden w-full">
      {/* Gradient Orbs - full width background elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animation-delay-2000 animate-float" />

      {/* Centered content container */}
      <div className="w-full mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Text content - centered */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center py-1 px-1 pr-4 mb-7 text-sm rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <span className="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">
                New
              </span>
              <span className="text-sm font-medium text-primary">
                AI-powered interview prep that actually works
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
              Your{" "}
              <span className="text-gradient">Personal AI Interview Coach</span>{" "}
              for Career Success
            </h1>

            <p className="mb-8 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Double your chances of landing that dream job with personalized
              AI-powered interview preparation that adapts to your industry and
              role.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link
                href={"/dashboard"}
                prefetch={true} 
                aria-describedby="tier-standard"
                className="bg-primary hover:bg-purple-700 text-white text-lg px-8 py-3 rounded-md flex items-center justify-center gap-2"
              >
                Continue with free
              </Link>
              <button className="border border-gray-300 hover:bg-gray-100 text-lg px-8 py-3 rounded-md flex items-center justify-center gap-2">
                <Play className="h-5 w-5 text-primary" />
                Watch Demo
              </button>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {[
                "Personalized Feedback",
                "24/7 Availability",
                "Industry-specific Questions",
                "Voice Analysis",
              ].map((feature, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white rounded-full text-sm border border-gray-200 shadow-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Image - centered with max width */}
          <div className="mt-16 mx-auto max-w-5xl relative">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="aspect-[16/9] w-full bg-gray-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full max-w-2xl px-8 py-12 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 text-center">
                    <h3 className="text-xl font-bold mb-4">
                      Mock Interview in Progress
                    </h3>
                    <div className="flex justify-center gap-6 mb-6">
                      <div className="flex flex-col items-center">
                        <div className="h-16 w-16 rounded-full bg-gray-200 mb-2"></div>
                        <p className="text-sm">You</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                          <span className="font-bold text-primary">AI</span>
                        </div>
                        <p className="text-sm">InterviewSpark</p>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg mb-4">
                      <p className="text-gray-700 text-left">
                        <span className="font-bold">Question:</span> Tell me
                        about a time when you had to adapt to a significant
                        change in project requirements.
                      </p>
                    </div>
                    <div className="animate-pulse">
                      <div className="h-2 w-16 bg-gray-300 rounded-full mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interface Controls */}
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg border border-gray-100 px-6 py-2 flex gap-4">
              <div className="h-10 w-10 rounded-full bg-red-500 flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 9a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                </svg>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
