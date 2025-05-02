import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-white h-screen overflow-hidden">
      <div className="grid h-full lg:grid-cols-12">
        {/* Image Section */}
        <aside className="relative hidden lg:block lg:col-span-6">
        <img
            alt="Tech Illustration"
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1887&auto=format&fit=crop"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        {/* SignUp Section */}
        <main className="flex items-center justify-center px-6 py-1 sm:px-8 lg:col-span-6">
          <div className="w-full max-w-md">
            <a className="block text-blue-600 mb-4" href="#">
              <span className="sr-only">Home</span>
              <svg
                className="h-8 sm:h-10"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Logo Path */}
                <path
                  d="M0.41 10.3847C1.14777 7.4194 ... (truncated for brevity)"
                  fill="currentColor"
                />
              </svg>
            </a>

            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Welcome to <span className="text-blue-600">InterviuAI 🦑</span>
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Simulate real tech interviews and prepare with confidence.
            </p>

            <div className="mt-6 " >
              <SignUp appearance={{
                elements: {
                  card: "shadow-xl rounded-2xl p-4",
                },
              }} />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
