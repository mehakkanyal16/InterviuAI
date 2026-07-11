import { ArrowRight, Check, Sparkles } from "lucide-react";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden w-full">
      {/* Full-width background gradient */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600/5 via-purple-600/10 to-primary/5 z-0" />

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
                  Get personalized, AI-powered interview practice that adapts
                  to your role and experience level — so you can walk into
                  your next interview prepared and confident.
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
                  className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md inline-flex items-center transition-colors duration-200"
                >
                  Start Practicing Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-8 md:p-12 text-white flex flex-col justify-center items-start">
                <Sparkles className="h-10 w-10 mb-6 text-white/80" />
                <p className="text-2xl font-semibold mb-4">
                  Practice smarter. Walk in confident.
                </p>
                <p className="text-white/80">
                  Every session adapts to your role and experience level, so
                  you're always practicing what matters most for your next
                  interview.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
