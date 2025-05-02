"use client";
import { Star } from "lucide-react";
import { useEffect, useRef } from "react";

const TestimonialCard = ({ content, stars = 5 }) => (
  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow w-[380px] flex-shrink-0 mx-4">
    <div className="flex mb-4">
      {Array.from({ length: stars }).map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
    <p className="text-gray-600 mb-6 italic">"{content}"</p>
    <div className="flex items-center">
      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
        ✓
      </div>
      <div className="ml-4">
        <p className="font-medium">Verified User</p>
        <p className="text-sm text-gray-500">InterviuAI Member</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const scrollContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const cards = cardsRef.current;

    // Clone cards for seamless looping
    const cardNodes = cards.children;
    const cardCount = cardNodes.length;
    for (let i = 0; i < cardCount; i++) {
      const clone = cardNodes[i].cloneNode(true);
      cards.appendChild(clone);
    }

    const startScrolling = () => {
      scrollIntervalRef.current = setInterval(() => {
        if (scrollContainer) {
          scrollContainer.scrollLeft += 1;

          // Reset to start when reaching halfway (original cards)
          if (
            scrollContainer.scrollLeft >=
            cardNodes[0].offsetWidth * cardCount
          ) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }, 30);
    };

    startScrolling();

    // Pause on hover
    const pauseScrolling = () => clearInterval(scrollIntervalRef.current);
    const resumeScrolling = () => startScrolling();

    scrollContainer.addEventListener("mouseenter", pauseScrolling);
    scrollContainer.addEventListener("mouseleave", resumeScrolling);
    scrollContainer.addEventListener("touchstart", pauseScrolling);
    scrollContainer.addEventListener("touchend", resumeScrolling);

    return () => {
      clearInterval(scrollIntervalRef.current);
      scrollContainer.removeEventListener("mouseenter", pauseScrolling);
      scrollContainer.removeEventListener("mouseleave", resumeScrolling);
      scrollContainer.removeEventListener("touchstart", pauseScrolling);
      scrollContainer.removeEventListener("touchend", resumeScrolling);
    };
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container px-4">
        <div className="text-center mb-8">
          <p className="text-primary font-medium mb-2">TESTIMONIALS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What our users are saying
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how InterviuAI is helping professionals land their
            dream jobs with personalized AI interview coaching.
          </p>
        </div>

        {/* Horizontal scrolling container */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="overflow-x-hidden py-4 hide-scrollbar"
          >
            <div ref={cardsRef} className="flex w-max">
              {/* <TestimonialCard
                content="Went from nervous to prepared in just a week. Highly recommend!"
                stars={5}
              /> */}
              <TestimonialCard
                content="The realistic mock interviews made all the difference. I felt so much more confident during my actual interviews and could anticipate questions better. Worth every penny."
                stars={5}
              />
              <TestimonialCard
                content="As someone with interview anxiety, this tool was a game changer. Being able to practice with an AI that gives constructive feedback helped me overcome my nervousness."
                stars={4}
              />
              <TestimonialCard
                content="The speech analysis feature helped me improve my communication clarity. My interviewers now compliment how articulate I sound."
                stars={5}
              />
              <TestimonialCard
                content="Went from multiple rejections to 3 job offers in one month. The practice sessions were exactly what I needed."
                stars={5}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
