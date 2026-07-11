import Header from './dashboard/_components/Header';
import Hero from './dashboard/_components/Hero';
import Features from './dashboard/_components/Features';
import HowItWorks from './dashboard/_components/HowItWorks';
import Testimonials from './dashboard/_components/Testimonials';
import Pricing from './dashboard/_components/Pricing';
import CallToAction from './dashboard/_components/CallToAction';
import Footer from './dashboard/_components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Hero />

      {/* Main Container for Centered Content */}
      <div className="w-full max-w-7xl px-4 mx-auto flex-grow">
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
      </div>
      <CallToAction />

      {/* Full-width Background Section - Footer */}
      <Footer />
    </div>
  );
}
