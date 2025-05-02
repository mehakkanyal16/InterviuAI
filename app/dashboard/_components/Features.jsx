import { Brain, Target, LineChart, Clock, Video, MessageSquare } from "lucide-react";

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}) => (
  <div className="feature-card bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Feedback",
      description: "Get instant, personalized feedback on your interview responses with advanced natural language processing."
    },
    {
      icon: Target,
      title: "Industry-Specific Questions",
      description: "Practice with questions tailored to your industry, from software engineering to marketing and finance."
    },
    {
      icon: LineChart,
      title: "Performance Analytics",
      description: "Track your progress over time and identify areas for improvement with detailed performance metrics."
    },
    {
      icon: Clock,
      title: "Real-time Coaching",
      description: "Receive guidance during your mock interviews, just like having a personal interview coach by your side."
    },
    {
      icon: Video,
      title: "Video Interview Practice",
      description: "Practice for video interviews with camera and microphone integration for a realistic experience."
    },
    {
      icon: MessageSquare,
      title: "Answer Library",
      description: "Access a library of example answers to common questions to help you craft your perfect responses."
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">FEATURES</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to ace your interviews</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI interview coach provides all the tools you need to practice, improve, and succeed in your job interviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
