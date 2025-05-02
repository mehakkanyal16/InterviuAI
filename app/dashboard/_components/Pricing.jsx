import Link from "next/link";
import React from "react";

const Pricing = () => {
  return (
    <section
      className="flex items-center justify-center my-10 pb-10"
      id="pricing"
    >
      <div
        className="p-4 sm:px-10 flex flex-col justify-center items-center text-base h-100vh mx-auto"
        id="pricing"
      >
       <div className="container px-4">
  <div className="text-center mb-16">
    <p className="text-primary font-medium mb-2">PRICING</p>
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Simple, Transparent <span className="text-purple-700">Pricing</span>
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Get started for free or upgrade to unlock powerful features
    </p>
  </div>
</div>
        <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="ring-1 ring-gray-200 rounded-3xl p-8 xl:p-10">
            <div className="flex items-center justify-between gap-x-4">
              <h3
                id="tier-standard"
                className="text-gray-900 text-2xl font-semibold leading-8"
              >
                Free
              </h3>
            </div>
            <p className="mt-4 text-base leading-6 text-gray-600">
              Use free plan for unlimited AI interviews
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-5xl font-bold tracking-tight text-gray-900">
                $0
              </span>
            </p>
            <Link
              href={"/dashboard"}
              aria-describedby="tier-standard"
              className="text-purple-600 ring-1 ring-inset ring-purple-200 hover:ring-purple-300 mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
            >
              Continue with free
            </Link>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
            >
              <li className="flex gap-x-3 text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-purple-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Lifetime access
              </li>
              <li className="flex gap-x-3 text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-purple-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Limited customization options
              </li>
            </ul>
          </div>
          <div className="ring-2 ring-purple-600 rounded-3xl p-8 xl:p-10">
            <div className="flex items-center justify-between gap-x-4">
              <h3
                id="tier-extended"
                className="text-purple-600 text-2xl font-semibold leading-8"
              >
                Pro
              </h3>
              <p className="rounded-full bg-purple-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-purple-600">
                Coming Soon
              </p>
            </div>
            <p className="mt-4 text-base leading-6 text-gray-600">
              Smart, personalized interview prep for every candidate
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="line-through text-2xl font-sans text-gray-500/70">
                $59
              </span>
              <span className="text-5xl font-bold tracking-tight text-gray-900">
                $39
              </span>
            </p>
            <div
              aria-describedby="tier-extended"
              className="bg-purple-600 hover:bg-purple-400 text-white shadow-sm mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600  cursor-not-allowed"
            >
              Buy now
            </div>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
            >
              <li className="flex gap-x-3 text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-purple-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Lifetime access
              </li>
              <li className="flex gap-x-3 text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-purple-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                All AI features
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
