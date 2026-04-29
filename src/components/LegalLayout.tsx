import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, ArrowLeft } from 'lucide-react';

const LegalLayout = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-bg-soft min-h-screen pb-20">
      <nav className="p-6 max-w-7xl mx-auto flex justify-between items-center bg-white/50 backdrop-blur-sm rounded-full mt-4 sticky top-4 z-50">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <div className="flex items-center justify-center overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/d/1PUbju6RYTE2CN5m_n55Xc7AKIo0ubcuF" 
              alt="Logo Icon" 
              className="w-10 h-10 object-contain"
              style={{ filter: 'invert(1)' }}
              referrerPolicy="no-referrer"
            />
          </div>
          <img 
            src="https://lh3.googleusercontent.com/d/1vN7uB3yL8M2C4z-yv_Y_Z4jT3o7Q5g1R" 
            alt="The Dog Coach" 
            className="h-6 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-primary-neural transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
      </nav>
      <div className="max-w-4xl mx-auto px-6 pt-16">
        <h1 className="text-4xl font-extrabold mb-12">{title}</h1>
        <div className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-[40px] shadow-soft border border-gray-100 text-gray-600 leading-relaxed space-y-6">
          {children}
        </div>
        <div className="mt-20 border-t border-gray-200 pt-12 flex flex-col items-center gap-8">
           <PaymentTrustStrip />
           <p className="text-xs font-bold text-gray-400">© 2026 THE DOG COACH CO.</p>
        </div>
      </div>
    </div>
  );
};

import { PaymentTrustStrip } from './PaymentTrustStrip';

export default LegalLayout;
