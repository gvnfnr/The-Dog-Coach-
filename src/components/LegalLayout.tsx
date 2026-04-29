import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, ArrowLeft } from 'lucide-react';

const LegalLayout = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-bg-soft min-h-screen pb-20">
      <nav className="p-6 max-w-7xl mx-auto flex justify-between items-center bg-white/50 backdrop-blur-sm rounded-full mt-4 sticky top-4 z-50">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <Brain className="w-6 h-6 text-primary-neural" />
          <span className="font-display font-bold text-xl text-primary-neural">The Dog Coach</span>
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
      </div>
    </div>
  );
};

export default LegalLayout;
