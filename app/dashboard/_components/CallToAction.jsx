import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden w-full">
      {/* Full-width background gradient */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600/5 via-purple-600/10 to-pink-600/5 z-0" />

      <div className="w-full px-4 relative z-10">
        {/* Centered container with max width */}
        <div className="max-w-7xl mx-auto">
          {/* Centered content box */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to ace your next interview?
                </h2>
                <p className="text-gray-600 mb-6">
                  Join thousands of job seekers who have improved their
                  interview skills and landed their dream jobs with InterviuAI.
                </p>

                <ul className="mb-8 space-y-3">
                  {[
                    "Free access to basic interview practice",
                    "Personalized feedback to improve your responses",
                    "Realistic simulation of interview environments",
                    "Available 24/7 whenever you want to practice",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/dashboard"
                  className="bg-primary hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-md inline-flex items-center transition-colors duration-200"
                >
                  Start Practicing Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 md:p-12 text-white flex flex-col justify-center">
                <div className="mb-6">
                  <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className="h-6 w-6 text-yellow-300 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xl italic mb-4">
                    "InterviuAI transformed how I prepare for interviews. The AI
                    feedback was spot-on and helped me improve areas I didn't
                    even realize were issues."
                  </p>
                  <p className="font-medium">— Verified User</p>
                </div>

                <div>
                  <div className="flex items-center gap-6">
                    <div className="flex -space-x-4">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div
                          key={i}
                          className="h-10 w-10 rounded-full bg-white/20 border-2 border-white flex items-center justify-center"
                        >
                          <span className="text-sm font-bold">
                            {String.fromCharCode(65 + i)}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="font-medium">Join 10,000+ users</p>
                      <p className="text-sm text-white/80">
                        who improved their interview skills
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
