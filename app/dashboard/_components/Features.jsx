import { Brain, Target, LineChart, Clock, Video, MessageSquare } from "lucide-react";

const FeatureCard = ({
  icon: Icon,
  title,
  description
}) => (
  <div className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/20">
    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-primary">
      <Icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-white" />
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
      title: "Question-by-Question Feedback",
      description: "Get a rating and feedback right after each answer, not just a summary at the end, so you can see exactly what to improve."
    },
    {
      icon: Video,
      title: "Video Interview Practice",
      description: "Practice for video interviews with camera and microphone integration for a realistic experience."
    },
    {
      icon: MessageSquare,
      title: "Sample Answers",
      description: "See a model answer alongside your own for every question, so you know exactly what a strong response looks like."
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
