import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import AboutModal from './components/AboutModal';
import FAQModal from './components/FAQModal';
import PrivacyModal from './components/PrivacyModal';
import HowItWorksModal from './components/HowItWorksModal';
import ComparisonsModal from './components/ComparisonsModal';
import CategoriesModal from './components/CategoriesModal';
import FeaturesModal from './components/FeaturesModal';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isFAQModalOpen, setIsFAQModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  
  const [isFeaturesModalOpen, setIsFeaturesModalOpen] = useState(false);
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);
  const [isComparisonsOpen, setIsComparisonsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <div className="min-h-screen bg-kortex-black text-kortex-text selection:bg-white/20">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer 
        onContactClick={() => setIsContactModalOpen(true)} 
        onAboutClick={() => setIsAboutModalOpen(true)}
        onFAQClick={() => setIsFAQModalOpen(true)}
        onPrivacyClick={() => setIsPrivacyModalOpen(true)}
        onFeaturesClick={() => setIsFeaturesModalOpen(true)}
        onHowItWorksClick={() => setIsHowItWorksOpen(true)}
        onComparisonsClick={() => setIsComparisonsOpen(true)}
        onCategoriesClick={() => setIsCategoriesOpen(true)}
      />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
      />
      <FAQModal
        isOpen={isFAQModalOpen}
        onClose={() => setIsFAQModalOpen(false)}
      />
      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
      <FeaturesModal
        isOpen={isFeaturesModalOpen}
        onClose={() => setIsFeaturesModalOpen(false)}
      />
      <HowItWorksModal
        isOpen={isHowItWorksOpen}
        onClose={() => setIsHowItWorksOpen(false)}
      />
      <ComparisonsModal
        isOpen={isComparisonsOpen}
        onClose={() => setIsComparisonsOpen(false)}
      />
      <CategoriesModal
        isOpen={isCategoriesOpen}
        onClose={() => setIsCategoriesOpen(false)}
      />
    </div>
  );
}

export default App;