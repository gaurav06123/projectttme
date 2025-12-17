import React from 'react';

interface FooterProps {
  onContactClick: () => void;
  onAboutClick: () => void;
  onFAQClick: () => void;
  onPrivacyClick: () => void;
  onHowItWorksClick: () => void;
  onComparisonsClick: () => void;
  onCategoriesClick: () => void;
  onFeaturesClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ 
  onContactClick, 
  onAboutClick, 
  onFAQClick, 
  onPrivacyClick,
  onHowItWorksClick,
  onComparisonsClick,
  onCategoriesClick,
  onFeaturesClick
}) => {
  return (
    <footer className="bg-kortex-black py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <span className="text-2xl font-serif-display font-medium text-white block mb-6">HelpMe!</span>
          <p className="text-kortex-muted max-w-sm mb-8">
            The ecosystem for comparing options and making the right choice. Clarity, control, and confidence in every purchase.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">𝕏</a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">In</a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">Yt</a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6">Product</h4>
          <ul className="space-y-4 text-kortex-muted text-sm">
            <li>
              <button 
                onClick={onFeaturesClick} 
                className="hover:text-white transition-colors text-left"
              >
                Features
              </button>
            </li>
            <li>
              <button 
                onClick={onHowItWorksClick} 
                className="hover:text-white transition-colors text-left"
              >
                How It Works
              </button>
            </li>
            <li>
              <button 
                onClick={onComparisonsClick} 
                className="hover:text-white transition-colors text-left"
              >
                Comparisons
              </button>
            </li>
            <li>
              <button 
                onClick={onCategoriesClick} 
                className="hover:text-white transition-colors text-left"
              >
                Categories
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6">Company</h4>
          <ul className="space-y-4 text-kortex-muted text-sm">
            <li>
              <button 
                onClick={onAboutClick} 
                className="hover:text-white transition-colors text-left"
              >
                About Us
              </button>
            </li>
            <li>
              <button 
                onClick={onContactClick} 
                className="hover:text-white transition-colors text-left"
              >
                Contact Us
              </button>
            </li>
            <li>
              <button 
                onClick={onFAQClick} 
                className="hover:text-white transition-colors text-left"
              >
                FAQ
              </button>
            </li>
            <li>
              <button 
                onClick={onPrivacyClick} 
                className="hover:text-white transition-colors text-left"
              >
                Privacy and Terms
              </button>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center md:text-left text-xs text-kortex-muted">
        <p>© {new Date().getFullYear()} HelpMe! Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;