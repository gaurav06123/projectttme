import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CategoriesModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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
          Categories
        </h3>
        
        <div className="text-kortex-muted text-sm leading-relaxed space-y-4">
          <p>
            Categories help organize the platform and make discovery effortless. We offer a wide range of categories covering different needs, use cases, and decision types. This structured approach allows you to quickly find relevant options without wasting time searching across multiple sources.
          </p>
          <p>
            Each category is designed to guide you toward better comparisons by grouping similar options together. As the platform evolves, new categories will continue to be added to support more decision scenarios. Whether you are making quick choices or detailed evaluations, our category system ensures a smooth and efficient experience from start to finish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoriesModal;