import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const faqs = [
  {
    question: "What is this platform used for?",
    answer: "This platform helps you compare different products, services, or options in one place. It highlights key differences, important features, and practical insights so you can make confident decisions based on your needs."
  },
  {
    question: "What types of things can I compare?",
    answer: "You can compare a wide range of categories, including products, services, tools, and other options. We continuously expand our categories to cover more use cases and everyday decision needs."
  },
  {
    question: "Is the platform free to use?",
    answer: "Yes, the platform is currently free to use. You can explore features, run comparisons, and get recommendations without any cost."
  },
  {
    question: "How do comparisons work?",
    answer: "You select the options you want to compare, and we present them side by side in a clear and structured format. This makes it easy to understand differences without dealing with unnecessary technical details."
  },
  {
    question: "How are recommendations generated?",
    answer: "Recommendations are based on your preferences, requirements, and usage needs. We focus on matching options that best align with what matters most to you."
  },
  {
    question: "Do I need to create an account to use the platform?",
    answer: "No account is required for basic comparisons. However, creating an account may unlock additional features like saved comparisons or personalized experiences in the future."
  },
  {
    question: "How accurate is the information provided?",
    answer: "We aim to provide accurate, up-to-date, and reliable information. Data is gathered from trusted sources and regularly reviewed to ensure quality and relevance."
  },
  {
    question: "Is my personal data safe?",
    answer: "Yes. We take privacy seriously and follow strict practices to protect your data. We only collect necessary information and never misuse or sell personal data."
  },
  {
    question: "Can I suggest a feature or report an issue?",
    answer: "Absolutely. We welcome feedback and suggestions. You can contact us through the support section or email us directly to help improve the platform."
  },
  {
    question: "How often is the platform updated?",
    answer: "We regularly update the platform with new categories, improved comparisons, and better insights to ensure you always have access to relevant and current information."
  }
];

const FAQModal: React.FC<FAQModalProps> = ({ isOpen, onClose }) => {
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
      <div className="relative w-full max-w-2xl bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl p-8 z-10 max-h-[85vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors z-20"
        >
          <X size={20} />
        </button>

        <div className="space-y-8">
          <h3 className="text-2xl font-serif-display font-medium text-white mb-2 sticky top-0 bg-[#1a1a1a] pb-4 border-b border-white/5 z-10">
            FAQs
          </h3>
          
          <div className="space-y-8 pb-4">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-2">
                <h4 className="text-white font-medium text-base">{faq.question}</h4>
                <p className="text-kortex-muted text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQModal;