import React from 'react';
import { TestimonialProps } from '../types';

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role }) => (
  <div className="flex flex-col gap-6 p-8 border-l border-white/10 hover:border-white/40 transition-colors">
    <p className="text-xl md:text-2xl font-serif-display leading-relaxed text-white">"{quote}"</p>
    <div>
      <p className="text-white font-medium">{author}</p>
      <p className="text-kortex-muted text-sm">{role}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 flex flex-col justify-center">
            <h2 className="text-4xl font-serif-display mb-6">Trusted by smart shoppers.</h2>
            <p className="text-kortex-muted mb-8">
              Join thousands of tech enthusiasts and smart buyers who trust HelpMe! to make the right choice.
            </p>
            <div className="flex items-center gap-4">
               <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-neutral-800 flex items-center justify-center text-xs text-white/50">
                        {i === 1 && "JD"}
                        {i === 2 && "AS"}
                        {i === 3 && "MR"}
                    </div>
                  ))}
               </div>
               <span className="text-sm text-white font-medium">+ 15,000 others</span>
            </div>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Testimonial 
              quote="Finally, a way to compare phones without having 50 tabs open. Found my perfect upgrade in minutes."
              author="Shubham Singh"
              role="Software Engineer"
            />
            <Testimonial 
              quote="The personalized recommendations were spot on. It understood I care about battery life more than cameras."
              author="Jasmine Naik"
              role="Doctor"
            />
            <Testimonial 
              quote="I usually get overwhelmed by specs. HelpMe! stripped away the marketing fluff and showed me what matters."
              author="Priyal Kaware"
              role="Student"
            />
            <Testimonial 
              quote="Saved me over $200 by showing me a model that had everything I needed without the flagship price tag."
              author="Gaurav Singh"
              role="Student"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;