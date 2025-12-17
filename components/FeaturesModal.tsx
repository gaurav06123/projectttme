import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeaturesModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 animate-[fadeIn_0.2s_ease-out_forwards]">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-2xl bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl p-8 z-10 max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors z-20"
        >
          <X size={20} />
        </button>

        <div className="space-y-8">
          <h3 className="text-2xl font-serif-display font-medium text-white mb-6 border-b border-white/5 pb-4 sticky top-0 bg-[#1a1a1a] z-10">
            Features
          </h3>
          
          <div className="space-y-8">
            <div className="space-y-2">
              <h4 className="text-white font-medium text-base">Smart Side-by-Side Comparisons</h4>
              <p className="text-kortex-muted text-sm leading-relaxed">
                Compare multiple options in one clear view and instantly understand the differences that matter most. Our comparison system removes unnecessary details and highlights key factors so you can make informed decisions faster and with confidence.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-white font-medium text-base">Personalized Results Without Personal Data</h4>
              <p className="text-kortex-muted text-sm leading-relaxed">
                Get relevant recommendations based on your selected preferences and inputs — without creating profiles or sharing personal information. All personalization is session-based and focused only on your current needs.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-white font-medium text-base">Feature-Focused Insights</h4>
              <p className="text-kortex-muted text-sm leading-relaxed">
                Instead of overwhelming specifications, we surface practical insights such as strengths, limitations, and real-world use cases. This helps you understand how each option performs beyond just numbers.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-white font-medium text-base">Clean & Distraction-Free Interface</h4>
              <p className="text-kortex-muted text-sm leading-relaxed">
                A simple, clutter-free design keeps your focus on decision-making. Every interaction is optimized for clarity, speed, and ease of use across all devices.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-white font-medium text-base">Category-Based Exploration</h4>
              <p className="text-kortex-muted text-sm leading-relaxed">
                Browse and compare across multiple categories from one platform. Whether it’s everyday essentials or complex choices, categories help you quickly find relevant options.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-white font-medium text-base">Privacy-First Design</h4>
              <p className="text-kortex-muted text-sm leading-relaxed">
                Your privacy is built into the platform. No personal profiles, no data selling, and no tracking beyond essential session functionality.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-white font-medium text-base">Always Improving</h4>
              <p className="text-kortex-muted text-sm leading-relaxed">
                The platform is continuously updated with better comparisons, clearer insights, and expanded categories to improve your experience over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesModal;