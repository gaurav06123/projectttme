import React from 'react';
import { ArrowRight } from 'lucide-react';

const UseCaseCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-[#0c0c0c] border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors duration-300 text-center h-full flex flex-col items-center justify-center">
    <h3 className="text-3xl md:text-4xl font-serif-display font-medium mb-4 bg-gradient-to-b from-white via-white/90 to-white/30 bg-clip-text text-transparent pb-1">
      {title}
    </h3>
    <p className="text-kortex-muted text-sm md:text-base leading-relaxed font-light max-w-[90%]">
      {description}
    </p>
  </div>
);

const Hero: React.FC = () => {
  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative pt-40 pb-20 overflow-hidden flex flex-col items-center">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center z-10 mb-32">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs text-kortex-muted tracking-wide uppercase">HelpMe! IS LIVE</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif-display font-medium leading-[1.1] tracking-tight mb-8 animate-slide-up">
          Think clearly. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50">
            Choose better.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-kortex-muted max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up [animation-delay:200ms] opacity-0">
          Compare everything that matters and find the smartphone that truly fits your needs. Simple, clear, and made for smart choices.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up [animation-delay:400ms] opacity-0">
          <button 
            onClick={scrollToFeatures}
            className="group relative px-8 py-4 bg-white text-black rounded-full font-medium text-lg overflow-hidden transition-all hover:pr-10"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Comparing <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>

      {/* Used By Section */}
      <div className="w-full max-w-7xl px-6 animate-slide-up [animation-delay:600ms] opacity-0">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif-display font-medium text-white mb-2">
              Used By Those Who Want
            </h2>
            <h2 className="text-4xl md:text-6xl font-serif-display font-medium text-blue-400">
               Better Decisions
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UseCaseCard 
            title="Smart Shoppers" 
            description="Compare products across categories and choose the best value for your needs and budget." 
          />
          <UseCaseCard 
            title="Professionals" 
            description="Make confident choices for tools, services, and solutions that fit your work requirements." 
          />
          <UseCaseCard 
            title="Students" 
            description="Compare courses, gadgets, platforms, and resources to pick what works best for your learning." 
          />
          <UseCaseCard 
            title="Everyday Users" 
            description="From daily essentials to big purchases, compare options and decide without confusion." 
          />
          <UseCaseCard 
            title="Tech & Power Users" 
            description="Dive deeper into features, performance, and trade-offs before making the final call." 
          />
          <UseCaseCard 
            title="Teams & Families" 
            description="Compare multiple options together and choose what works best for everyone involved." 
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;