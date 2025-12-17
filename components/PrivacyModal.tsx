import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
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
      <div className="relative w-full max-w-3xl bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl p-8 z-10 max-h-[85vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors z-20"
        >
          <X size={20} />
        </button>

        <div className="space-y-12">
          
          {/* Privacy Policy Section */}
          <section>
            <h3 className="text-2xl font-serif-display font-medium text-white mb-6 sticky top-0 bg-[#1a1a1a] py-2 z-10 border-b border-white/5">
              Privacy Policy
            </h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="text-white font-medium text-base">What information do we collect?</h4>
                <p className="text-kortex-muted text-sm leading-relaxed">
                  We do not collect personal information such as names, usernames, phone numbers, or addresses. Authentication is used only to securely identify sessions and provide access to the platform.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-medium text-base">Why is login required?</h4>
                <p className="text-kortex-muted text-sm leading-relaxed">
                  Login and authentication are used solely for security purposes, preventing misuse and ensuring a safe and reliable experience for all users.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-medium text-base">Do you store personal data?</h4>
                <p className="text-kortex-muted text-sm leading-relaxed">
                  No. We do not store personal user profiles or identifiable information. Authentication data is handled securely and is not used for tracking or profiling users.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-medium text-base">Do you track user activity?</h4>
                <p className="text-kortex-muted text-sm leading-relaxed">
                  We may collect limited, non-identifiable usage data to understand how the platform is used and to improve performance and features. This data cannot be used to identify individual users.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-medium text-base">Are cookies used?</h4>
                <p className="text-kortex-muted text-sm leading-relaxed">
                  We may use essential cookies strictly required for authentication and session management. No tracking or advertising cookies are used.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-medium text-base">Is my data shared with third parties?</h4>
                <p className="text-kortex-muted text-sm leading-relaxed">
                  No. We do not sell, rent, or share user data with third parties.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-medium text-base">How is data secured?</h4>
                <p className="text-kortex-muted text-sm leading-relaxed">
                  We use standard security practices to protect authentication and session data from unauthorized access or misuse.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-medium text-base">Can I delete my data?</h4>
                <p className="text-kortex-muted text-sm leading-relaxed">
                  Since no personal data or profiles are stored, there is no personal information to delete.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-medium text-base">Is this platform suitable for children?</h4>
                <p className="text-kortex-muted text-sm leading-relaxed">
                  The platform is not intended for users under the age of 13.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-medium text-base">Will this policy change?</h4>
                <p className="text-kortex-muted text-sm leading-relaxed">
                  If changes are made, they will be clearly communicated on this page.
                </p>
              </div>
            </div>
          </section>

          {/* Terms & Conditions Section */}
          <section>
            <h3 className="text-2xl font-serif-display font-medium text-white mb-6 sticky top-0 bg-[#1a1a1a] py-2 z-10 border-b border-white/5">
              Terms & Conditions
            </h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="text-white font-medium text-base">Purpose of the platform</h4>
                <p className="text-kortex-muted text-sm leading-relaxed">
                  This platform provides comparison tools and insights to help users make informed decisions. All information is provided for general guidance only.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-medium text-base">User responsibility</h4>
                <p className="text-kortex-muted text-sm leading-relaxed">
                  Users are responsible for how they use the information provided and for verifying important details before making decisions.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-medium text-base">Account and authentication</h4>
                <p className="text-kortex-muted text-sm leading-relaxed">
                  Authentication is required to access the platform. Users must not attempt to bypass or misuse authentication systems.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-medium text-base">Acceptable use</h4>
                <p className="text-kortex-muted text-sm leading-relaxed">
                  You agree not to misuse the platform, interfere with its operation, or attempt unauthorized access.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-medium text-base">No personal data guarantee</h4>
                <p className="text-kortex-muted text-sm leading-relaxed">
                  The platform does not collect or store personal user information beyond what is required for secure authentication.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-medium text-base">Accuracy of information</h4>
                <p className="text-kortex-muted text-sm leading-relaxed">
                  We strive to keep information accurate and updated, but we do not guarantee completeness or real-time accuracy.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-medium text-base">Platform availability</h4>
                <p className="text-kortex-muted text-sm leading-relaxed">
                  We may modify, update, or temporarily suspend the platform to improve performance or security.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-medium text-base">Intellectual property</h4>
                <p className="text-kortex-muted text-sm leading-relaxed">
                  All content, structure, and design on this platform are protected and may not be reused without permission.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-medium text-base">Limitation of liability</h4>
                <p className="text-kortex-muted text-sm leading-relaxed">
                  We are not responsible for decisions made based on the platform’s information.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-medium text-base">Contact</h4>
                <p className="text-kortex-muted text-sm leading-relaxed">
                  For questions regarding privacy or terms, please contact us through the support section.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;