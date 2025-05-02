import Head from 'next/head';
import Header from './dashboard/_components/Header';
import Hero from './dashboard/_components/Hero';
import Features from './dashboard/_components/Features';
import HowItWorks from './dashboard/_components/HowItWorks';
import Testimonials from './dashboard/_components/Testimonials';
import Pricing from './dashboard/_components/Pricing';
import CallToAction from './dashboard/_components/CallToAction';
import Companies from './dashboard/_components/Companies';
import Footer from './dashboard/_components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>InterviewSpark - Your Personal AI Interview Coach</title>
        <meta name="description" content="Master interviews with AI coaching" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Header />
      <Hero />
      

      {/* Main Container for Centered Content */}
      <div className="w-full max-w-7xl px-4 mx-auto flex-grow">
       
       
        {/* <Companies /> */}
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
