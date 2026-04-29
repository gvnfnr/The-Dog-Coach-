import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('thedogcoach_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (type: 'all' | 'essential') => {
    localStorage.setItem('thedogcoach_cookie_consent', type);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-[100]"
        >
          <div className="bg-white rounded-[32px] p-6 shadow-2xl border border-gray-100 space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-secondary-trust/10 p-2 rounded-xl text-secondary-trust">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-text-slate">Privacy Preference</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  We use cookies to personalize your AI training plan and analyze our traffic. By clicking "Accept All", you consent to our use of cookies in accordance with GDPR and nLPD.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => handleConsent('all')}
                className="flex-1 bg-primary-neural text-white py-3 rounded-xl text-sm font-bold shadow-sm hover:opacity-90 transition-all"
              >
                Accept All
              </button>
              <button 
                onClick={() => handleConsent('essential')}
                className="flex-1 bg-bg-soft text-gray-400 py-3 rounded-xl text-sm font-bold hover:text-text-slate transition-all"
              >
                Essential Only
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
