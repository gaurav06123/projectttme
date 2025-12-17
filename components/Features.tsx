import React from 'react';
import { Sparkles, Zap, Layout, Check, Star, Smartphone, Sliders, EyeOff } from 'lucide-react';

// Large Feature Section Component
const FeatureSection: React.FC<{ 
  title: string; 
  description: React.ReactNode; 
  alignment: 'left' | 'right';
  children: React.ReactNode; 
}> = ({ title, description, alignment, children }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 py-12 md:py-24 ${alignment === 'right' ? 'md:flex-row-reverse' : ''}`}>
      {/* Visual Side */}
      <div className="flex-1 w-full">
        <div className="rounded-2xl bg-kortex-card border border-white/5 p-6 md:p-10 relative overflow-hidden shadow-2xl min-h-[400px] flex items-center justify-center group">
           <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>
           {children}
        </div>
      </div>

      {/* Text Side */}
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif-display font-medium leading-tight">{title}</h2>
        <div className="text-lg text-kortex-muted leading-relaxed space-y-6 font-light">
          {description}
        </div>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 bg-kortex-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Intro Text */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif-display mb-6">Build your decision base.</h2>
          <p className="text-kortex-muted text-lg">
             A complete ecosystem for comparing options and making the right choice — from first consideration to final decision.
          </p>
        </div>

        {/* Feature 1: Smart Side-by-Side Comparisons */}
        <FeatureSection
           title="Smart Side-by-Side Comparisons"
           alignment="left"
           description={
             <>
               <p>Compare multiple options in one clear view and instantly understand the differences that matter most.</p>
               <p>Our comparison system removes unnecessary details and highlights key factors so you can make informed decisions faster and with confidence.</p>
             </>
           }
        >
            {/* Mock UI: Comparison Table */}
            <div className="w-full max-w-md bg-kortex-black border border-white/10 rounded-xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                {/* Header */}
                <div className="flex border-b border-white/10 bg-white/5">
                   <div className="flex-1 p-4 border-r border-white/10">
                      <div className="w-full h-24 bg-neutral-900 rounded mb-2 flex items-center justify-center text-xs text-white/20">Prod A</div>
                      <div className="h-3 w-16 bg-white/20 rounded mx-auto"></div>
                   </div>
                   <div className="flex-1 p-4">
                      <div className="w-full h-24 bg-neutral-800 rounded mb-2 flex items-center justify-center text-xs text-white/20 relative">
                        Prod B
                        <div className="absolute top-2 right-2 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"><Check size={10} className="text-black"/></div>
                      </div>
                      <div className="h-3 w-20 bg-white rounded mx-auto"></div>
                   </div>
                </div>
                {/* Rows */}
                <div className="p-4 space-y-4">
                    <div className="flex items-center gap-4 text-xs">
                        <span className="w-20 text-kortex-muted">Performance</span>
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-[70%] bg-white/20"></div>
                        </div>
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-[90%] bg-green-500"></div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                        <span className="w-20 text-kortex-muted">Battery</span>
                        <div className="flex-1 text-center text-white/50">18h</div>
                        <div className="flex-1 text-center text-green-400 font-bold">24h</div>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                        <span className="w-20 text-kortex-muted">Rating</span>
                        <div className="flex-1 flex justify-center gap-0.5 text-white/30"><Star size={10}/><Star size={10}/><Star size={10}/></div>
                        <div className="flex-1 flex justify-center gap-0.5 text-yellow-500"><Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/></div>
                    </div>
                </div>
            </div>
        </FeatureSection>

        {/* Feature 2: Personalized Results Without Personal Data */}
        <FeatureSection
           title="Personalized Results Without Personal Data"
           alignment="right"
           description={
             <>
               <p>Get relevant recommendations based on your selected preferences and inputs — without creating profiles or sharing personal information.</p>
               <p>All personalization is session-based and focused only on your current needs.</p>
             </>
           }
        >
            {/* Mock UI: Recommendation Card */}
            <div className="relative w-full max-w-sm">
                {/* User Input Bubble */}
                <div className="absolute -top-12 -left-4 z-10 bg-white text-black px-4 py-2 rounded-xl rounded-bl-none shadow-lg text-sm font-medium animate-slide-up">
                    "I need good battery life & under $500"
                </div>

                {/* Main Card */}
                <div className="bg-kortex-black border border-white/10 rounded-xl p-6 shadow-2xl relative mt-4">
                    <div className="absolute top-0 right-0 bg-green-500 text-black text-[10px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider">
                        98% Match
                    </div>
                    <div className="flex gap-4 mb-4">
                        <div className="w-16 h-20 bg-neutral-800 rounded-lg flex items-center justify-center">
                            <Sparkles className="text-white/20" size={24} />
                        </div>
                        <div>
                            <div className="h-4 w-32 bg-white/20 rounded mb-2"></div>
                            <div className="h-3 w-20 bg-white/10 rounded mb-3"></div>
                            <div className="flex gap-1">
                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-white">Value Pick</span>
                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-white">Long Life</span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs text-kortex-muted">
                            <span>Budget Fit</span>
                            <span className="text-green-400">Perfect</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-full bg-green-500"></div>
                        </div>
                    </div>
                </div>
            </div>
        </FeatureSection>

        {/* Feature 3: Feature-Focused Insights */}
        <FeatureSection
           title="Feature-Focused Insights"
           alignment="left"
           description={
             <>
               <p>Instead of overwhelming specifications, we surface practical insights such as strengths, limitations, and real-world use cases.</p>
               <p>This helps you understand how each option performs beyond just numbers.</p>
             </>
           }
        >
            {/* Mock UI: Insights Dashboard */}
            <div className="bg-kortex-black border border-white/10 rounded-xl p-8 max-w-md w-full shadow-2xl">
               <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                     <div className="p-2.5 rounded-lg bg-blue-500/20 text-blue-400"><Smartphone size={20} /></div>
                     <div>
                        <div className="text-white font-medium">Daily Drivers</div>
                        <div className="text-xs text-kortex-muted">Real-world analysis</div>
                     </div>
                  </div>
                  <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] border border-white/10 uppercase tracking-widest text-kortex-muted">Analysis</div>
               </div>

               <div className="space-y-6">
                  {/* Insight Item 1 */}
                  <div className="group">
                     <div className="flex justify-between items-end mb-2">
                        <div className="flex items-center gap-2 text-sm text-white">
                           <Zap size={14} className="text-yellow-400" />
                           <span>Performance</span>
                        </div>
                        <span className="text-xs text-green-400 font-bold bg-green-400/10 px-2 py-0.5 rounded">Excellent</span>
                     </div>
                     <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[92%] bg-gradient-to-r from-yellow-600 to-yellow-400 relative">
                           <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite]"></div>
                        </div>
                     </div>
                     <p className="mt-2 text-xs text-kortex-muted leading-relaxed pl-6 border-l border-white/10 ml-1">
                        "Handles 4K video editing and heavy gaming without throttling. Best in class thermal management."
                     </p>
                  </div>

                  {/* Insight Item 2 */}
                  <div className="group">
                     <div className="flex justify-between items-end mb-2">
                        <div className="flex items-center gap-2 text-sm text-white">
                           <EyeOff size={14} className="text-purple-400" />
                           <span>PWM Dimming</span>
                        </div>
                        <span className="text-xs text-white/60 bg-white/5 px-2 py-0.5 rounded">Average</span>
                     </div>
                     <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[60%] bg-white/30"></div>
                     </div>
                  </div>
               </div>
            </div>
        </FeatureSection>

        {/* Feature 4: Clean & Distraction-Free Interface */}
        <FeatureSection
           title="Clean & Distraction-Free Interface"
           alignment="right"
           description={
             <>
               <p>A simple, clutter-free design keeps your focus on decision-making.</p>
               <p>Every interaction is optimized for clarity, speed, and ease of use across all devices.</p>
             </>
           }
        >
            {/* Mock UI: Zen Mode Interface */}
            <div className="relative w-full max-w-sm flex flex-col items-center">
                {/* Mode Toggle */}
                <div className="absolute -top-10 bg-neutral-900 border border-white/10 rounded-full p-1 flex items-center gap-2 pr-4 shadow-lg animate-fade-in">
                   <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center text-black shadow-sm">
                      <Layout size={12} />
                   </div>
                   <span className="text-[10px] font-medium text-white uppercase tracking-wider">Zen Mode On</span>
                </div>

                {/* Minimal Card */}
                <div className="w-full bg-white text-black rounded-xl p-8 shadow-[0_0_50px_rgba(255,255,255,0.1)] flex flex-col items-center text-center transform transition-all duration-700 hover:scale-105">
                   <div className="w-20 h-20 bg-gray-50 rounded-2xl mb-6 flex items-center justify-center border border-gray-100">
                      <Sliders size={32} className="text-gray-400" />
                   </div>
                   <h4 className="font-serif-display font-bold text-2xl mb-2">The Essentials</h4>
                   <p className="text-sm text-gray-500 mb-8 max-w-[200px]">No ads. No popups. Just the data you need to decide.</p>
                   
                   <div className="w-full h-px bg-gray-100 mb-6"></div>
                   
                   <div className="flex gap-8">
                      <div className="flex flex-col gap-1">
                         <span className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">Price</span>
                         <span className="font-medium">$499</span>
                      </div>
                      <div className="flex flex-col gap-1">
                         <span className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">Score</span>
                         <span className="font-medium">9.2/10</span>
                      </div>
                   </div>
                </div>
            </div>
        </FeatureSection>

      </div>
    </section>
  );
};

export default Features;