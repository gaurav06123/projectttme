import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HowItWorksModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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
          className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <h3 className="text-2xl font-serif-display font-medium text-white mb-6 border-b border-white/5 pb-4">
          How It Works
        </h3>
        
        <div className="text-kortex-muted text-sm leading-relaxed space-y-4">
          <p>
            Our platform is designed to make decision-making simple, clear, and stress-free. To get started, you choose what you want to compare from the available categories. You can then select multiple options and define your preferences based on what matters most to you, such as budget, features, or specific requirements.
          </p>
          <p>
            Once your selections are made, the platform organizes all relevant information into a clean and structured layout. Instead of presenting overwhelming technical details, we focus on clarity and usability, helping you understand differences quickly. Secure authentication ensures a safe experience, while our privacy-first approach means no personal data or user profiles are collected. From first exploration to final decision, the entire process is built to save time and reduce confusion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksModal;