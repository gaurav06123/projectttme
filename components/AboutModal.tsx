import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  // Prevent scrolling when modal is open
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
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl p-8 z-10 max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="space-y-6">
          <h3 className="text-2xl font-serif-display font-medium text-white mb-2">
            About Us
          </h3>
          
          <div className="text-kortex-muted text-sm leading-relaxed space-y-4">
            <p>
              We are building a platform designed to simplify decision-making in a world filled with endless choices. Today, people often spend hours searching across multiple websites, comparing information that is scattered, inconsistent, or difficult to understand. Our goal is to change that by bringing everything together into one clear, reliable, and easy-to-use space.
            </p>
            <p>
              Our platform helps users compare options side by side, understand what truly matters, and make confident choices based on their personal needs, preferences, and priorities. Instead of overwhelming users with technical jargon or long lists of specifications, we focus on meaningful insights, real-world relevance, and clarity. Every feature is designed with a user-first mindset to reduce confusion and save time.
            </p>
            <p>
              We believe that good decisions come from good information presented the right way. That’s why transparency, simplicity, and accuracy are at the core of everything we build. Whether you are making a small everyday choice or an important long-term decision, our platform is built to support you at every step.
            </p>
            <p>
              Our mission is to make smarter decision-making accessible to everyone. By removing unnecessary complexity and highlighting what truly matters, we empower users to choose confidently and with peace of mind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;