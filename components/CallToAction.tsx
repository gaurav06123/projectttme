import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/[0.02]"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif-display mb-8">Stop guessing. Start deciding.</h2>
        <p className="text-xl text-kortex-muted mb-10 max-w-2xl mx-auto">
          Join the waitlist for the smartest way to compare options and choose your next device with confidence.
        </p>
        
        <form className="max-w-md mx-auto flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
             <input 
               type="email" 
               placeholder="Enter your email address" 
               className="w-full px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white focus:outline-none focus:border-white/30 transition-colors"
             />
             <button 
                type="submit"
                className="absolute right-2 top-2 bottom-2 px-6 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors"
             >
               Join Waitlist
             </button>
          </div>
          <p className="text-xs text-kortex-muted">No spam. Unsubscribe anytime.</p>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;