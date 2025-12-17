import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState('');

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

  const handleSend = () => {
    const subject = encodeURIComponent("Feedback / Help Request");
    const body = encodeURIComponent(message);
    window.location.href = `mailto:support@helpme.co?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 animate-[fadeIn_0.2s_ease-out_forwards]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-lg bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl p-8 z-10">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="space-y-4">
          <h3 className="text-xl font-medium text-white">
            Need help or want to share feedback?
          </h3>
          
          <p className="text-kortex-muted text-sm leading-relaxed">
            Our team is here to help you get the best experience possible. Reach out anytime with questions, suggestions, or concerns.
          </p>

          <textarea
            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white text-sm focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors resize-none h-32 placeholder:text-white/20"
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
            <span className="text-sm text-kortex-muted">
              Email us at <a href="mailto:support@helpme.co" className="text-white hover:underline decoration-white/30 underline-offset-4 transition-all">support@helpme.co</a>
            </span>
            <button 
              onClick={handleSend}
              className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium rounded-lg transition-colors min-w-[100px] text-center"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;