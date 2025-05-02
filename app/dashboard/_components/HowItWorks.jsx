import { AtomIcon, Edit, Share2 } from "lucide-react";

const Step = ({ 
  number, 
  icon: Icon, 
  title, 
  description 
}) => (
  <div className="relative">
    <div className="absolute -left-4 md:left-1/2 md:-ml-[13px] top-0 h-full w-1 bg-gradient-to-b from-primary to-primary/20 md:h-1 md:w-full md:-top-4 md:left-0 md:bg-gradient-to-r" style={{ display: number === 3 ? 'none' : 'block' }}></div>
    
    <div className="flex flex-col md:items-center text-center relative">
      <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold mb-4 z-10">
        {number}
      </div>
      
      <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 max-w-xs">{description}</p>
    </div>
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      icon: AtomIcon,
      title: "Select an Interview Type",
      description: "Choose from various interview types like behavioral, technical, or case interviews tailored to your industry."
    },
    {
      icon: Edit,
      title: "Practice with AI",
      description: "Engage in realistic mock interviews with our AI interviewer and receive immediate feedback on your responses."
    },
    {
      icon: Share2,
      title: "Review & Improve",
      description: "Analyze your performance, review suggested improvements, and practice again to build confidence."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">HOW IT WORKS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Master interviews in three simple steps</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our streamlined process helps you prepare for your interviews efficiently and effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-4xl mx-auto relative">
          {steps.map((step, index) => (
            <Step 
              key={index}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
