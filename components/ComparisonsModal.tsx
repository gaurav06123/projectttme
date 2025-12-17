import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComparisonsModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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
          Comparisons
        </h3>
        
        <div className="text-kortex-muted text-sm leading-relaxed space-y-4">
          <p>
            Comparisons are at the core of our platform. We present options side by side so you can easily evaluate strengths, limitations, and key differences in one place. Our comparison system is designed to highlight what truly matters rather than flooding you with unnecessary specifications or complex terminology.
          </p>
          <p>
            Each comparison focuses on practical insights, real-world relevance, and decision-critical factors. This allows you to clearly see trade-offs and understand how each option fits your specific needs. Whether you are comparing simple everyday items or more complex choices, our platform ensures that comparisons remain transparent, meaningful, and easy to understand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComparisonsModal;