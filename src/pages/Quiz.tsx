import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ChevronRight, 
  Brain, 
  CheckCircle2, 
  Volume2, 
  Magnet, 
  Clock, 
  ShieldAlert, 
  MessageCircle, 
  Droplets,
  Search,
  Zap,
  ArrowUpCircle,
  UserMinus,
  Lock,
  Wind,
  VolumeX,
  Users,
  Plane,
  ShieldCheck
} from 'lucide-react';
import { QUIZ_QUESTIONS } from '../constants';
import { PaymentTrustStrip } from '../components/PaymentTrustStrip';

const icons: Record<string, any> = {
  Volume2, Magnet, Clock, ShieldAlert, MessageCircle, Droplets, Zap, ArrowUpCircle, UserMinus, Lock, Wind, VolumeX, Users, Plane, ShieldCheck
};

export default function Quiz() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisText, setAnalysisText] = useState("");

  const question = QUIZ_QUESTIONS[currentStep];
  const stepNumber = currentStep + 1;
  const totalSteps = QUIZ_QUESTIONS.length;
  const progress = (stepNumber / totalSteps) * 100;

  const handleNext = (val: any) => {
    const newAnswers = { ...answers, [question.id]: val };
    setAnswers(newAnswers);

    // Analysis milestones inspired by high-conversion behavior funnels
    if (currentStep === 4) {
      triggerAnalysis(`Comparing ${newAnswers.name || 'your dog'}'s profile to 50,000+ successful cases...`, 4000, () => setCurrentStep(currentStep + 1));
    } else if (currentStep === 8) {
      triggerAnalysis("Analyzing breed-specific neuro-patterns and habit triggers...", 5000, () => setCurrentStep(currentStep + 1));
    } else if (currentStep === QUIZ_QUESTIONS.length - 1) {
      triggerAnalysis(`${newAnswers.name || 'Your dog'}’s Behavioral Analysis is Ready.`, 6000, () => {
        localStorage.setItem('thedogcoach_quiz', JSON.stringify(newAnswers));
        navigate('/result');
      });
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const triggerAnalysis = (text: string, duration: number, callback: () => void) => {
    setIsAnalyzing(true);
    setAnalysisText(text);
    setTimeout(() => {
      setIsAnalyzing(false);
      callback();
    }, duration);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
    else navigate('/');
  };

  if (isAnalyzing) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-primary-neural text-white text-center space-y-8">
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.8, 1, 0.8] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="relative flex flex-col items-center gap-4"
        >
          <div className="bg-white/10 p-12 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
            <img 
              src="https://raw.githubusercontent.com/gvnfnr/The-Dog-Coach-/main/src/DogCoachingwhite500px.png" 
              alt="AI Analysis" 
              className="w-32 h-32 object-contain"
              style={{ filter: 'invert(1)' }}
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">{analysisText}</h2>
          <div className="w-48 h-1 bg-white/20 mx-auto rounded-full overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="w-full h-full bg-white"
            />
          </div>
        </div>
        <p className="text-sm opacity-60 max-w-xs uppercase tracking-widest font-bold">
          Trusted by 50,000+ owners globally
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-bg-soft">
      {/* Header */}
      <div className="p-4 flex items-center justify-between bg-white border-b border-gray-100">
        <button onClick={handleBack} className="p-2 text-gray-400 hover:text-primary-neural transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex-1 mx-4">
          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-primary-neural"
            />
          </div>
        </div>
        <div className="text-xs font-bold text-gray-400 w-16">{stepNumber} of {totalSteps}</div>
      </div>

      {/* Question Area */}
      <div className="flex-1 overflow-y-auto p-6 md:p-12">
        <div className="max-w-xl mx-auto space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <h2 className="text-2xl md:text-4xl font-extrabold">
                  {question.id === 'email' 
                    ? `${answers.name || 'Your dog'}’s Behavioral Profile is Ready.` 
                    : question.question.replace("[dogName]", answers.name || "your dog")}
                </h2>
                {question.id === 'email' && (
                  <p className="text-gray-500 font-medium">
                    We’ve identified exactly why {answers.name} struggles. Where should we send your custom 14-day transformation roadmap?
                  </p>
                )}
              </div>

              {/* Render Question Inputs */}
              <div className="space-y-4">
                {question.type === 'text' && (
                  <div className="space-y-4">
                    <input 
                      type="text"
                      placeholder={question.placeholder}
                      className="w-full p-6 text-xl rounded-2xl border-2 border-gray-200 focus:border-primary-neural outline-none transition-all shadow-sm bg-white"
                      autoFocus
                      onKeyDown={(e) => e.key === 'Enter' && (e.target as any).value && handleNext((e.target as any).value)}
                    />
                    <button 
                       onClick={() => {
                        const input = document.querySelector('input');
                        if (input?.value) handleNext(input.value);
                       }}
                       className="w-full bg-primary-neural text-white py-5 rounded-2xl font-bold text-lg"
                    >
                      Continue
                    </button>
                  </div>
                )}

                {question.type === 'select' && (
                  <div className="grid grid-cols-1 gap-3">
                    {(question.options as any[])?.map((opt: string) => (
                      <button 
                        key={opt}
                        onClick={() => handleNext(opt)}
                        className="w-full p-5 text-left rounded-2xl border-2 border-gray-200 bg-white hover:border-primary-neural hover:bg-primary-neural/5 transition-all flex justify-between items-center group font-medium"
                      >
                        {opt}
                        <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary-neural" />
                      </button>
                    ))}
                  </div>
                )}

                {question.type === 'grid-select' && (
                  <div className="grid grid-cols-2 gap-4">
                    {question.options?.map((opt: any) => {
                      const Icon = icons[opt.icon];
                      return (
                        <button 
                          key={opt.label}
                          onClick={() => handleNext(opt.label)}
                          className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-primary-neural hover:bg-primary-neural/5 transition-all gap-4 text-center group"
                        >
                          <div className="bg-bg-soft w-12 h-12 rounded-xl flex items-center justify-center text-primary-neural group-hover:scale-110 transition-transform">
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="font-bold text-sm tracking-tight">{opt.label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {question.type === 'multi-select' && (
                   <div className="space-y-3">
                      <div className="grid grid-cols-1 gap-3">
                        {(question.options as any[])?.map((opt: string) => (
                          <button 
                            key={opt}
                            onClick={() => {
                                const current = answers[question.id] || [];
                                const next = current.includes(opt) ? current.filter((c:any) => c !== opt) : [...current, opt];
                                setAnswers({...answers, [question.id]: next});
                            }}
                            className={`w-full p-5 text-left rounded-2xl border-2 transition-all flex justify-between items-center font-medium ${
                                (answers[question.id] || []).includes(opt) ? 'border-primary-neural bg-primary-neural/5' : 'border-gray-200 bg-white'
                            }`}
                          >
                            {opt}
                            {(answers[question.id] || []).includes(opt) && <CheckCircle2 className="w-5 h-5 text-primary-neural" />}
                          </button>
                        ))}
                      </div>
                      <button 
                         onClick={() => handleNext(answers[question.id] || [])}
                         className="w-full bg-primary-neural text-white py-5 rounded-2xl font-bold text-lg mt-4"
                      >
                        Continue
                      </button>
                   </div>
                )}

                {question.type === 'email' && (
                  <div className="space-y-4">
                    <input 
                      type="email"
                      placeholder={question.placeholder}
                      className="w-full p-6 text-xl rounded-2xl border-2 border-gray-200 focus:border-primary-neural outline-none transition-all shadow-sm bg-white"
                      autoFocus
                    />
                    <button 
                      onClick={() => {
                        const input = document.querySelector('input');
                        if (input?.value.includes('@')) handleNext(input.value);
                      }}
                      className="w-full bg-accent-coral text-white py-5 rounded-2xl font-bold text-xl shadow-xl shadow-accent-coral/20"
                    >
                      Send My Roadmap →
                    </button>
                    <div className="flex flex-col items-center gap-2">
                       <p className="text-center text-xs text-secondary-trust flex items-center justify-center gap-2 font-bold uppercase tracking-wider">
                          <ShieldCheck className="w-4 h-4" />
                          🔒 GDPR Compliant & Private
                       </p>
                       <p className="text-center text-[10px] text-gray-400 leading-snug">
                          We'll never share Buddy's profile. Unsubscribe in 1 click.
                       </p>
                    </div>
                  </div>
                )}

                {question.type === 'searchable-select' && (
                   <div className="space-y-4">
                      <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input 
                           type="text" 
                           id="breed-search"
                           placeholder="Search or type breed..." 
                           onChange={(e) => {
                             const term = e.target.value.toLowerCase();
                             const buttons = document.querySelectorAll('.breed-btn');
                             const popularSection = document.getElementById('popular-breeds');
                             if (popularSection) popularSection.style.display = term.length > 0 ? 'none' : 'block';
                             
                             let visibleCount = 0;
                             buttons.forEach((btn: any) => {
                               const text = btn.innerText.toLowerCase();
                               const match = text.includes(term);
                               btn.style.display = match ? 'block' : 'none';
                               if (match) visibleCount++;
                             });
                             
                             const customBtn = document.getElementById('custom-breed-btn');
                             const customText = document.getElementById('custom-breed-text');
                             if (customBtn && customText) {
                               customBtn.style.display = term.length > 0 ? 'block' : 'none';
                               customText.innerText = e.target.value;
                             }
                             
                             const noResults = document.getElementById('no-breed-results');
                             if (noResults) {
                               noResults.style.display = visibleCount === 0 && term.length > 0 ? 'block' : 'none';
                             }
                           }}
                           className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-100 outline-none focus:border-primary-neural transition-all bg-white"
                        />
                      </div>
                      <div id="popular-breeds" className="space-y-3">
                         <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">Most Common</p>
                         <div className="grid grid-cols-2 gap-2">
                           {['Labrador', 'French Bulldog', 'Golden Retriever', 'Mixed Breed'].map(b => (
                             <button 
                               key={b}
                               onClick={() => handleNext(b)}
                               className="p-3 text-left rounded-xl bg-white border border-gray-200 text-xs font-bold hover:border-primary-neural transition-all"
                             >
                               {b}
                             </button>
                           ))}
                         </div>
                      </div>

                      <div className="grid grid-cols-1 gap-2 max-h-[300px] overflow-y-auto pr-2">
                        <button 
                          id="custom-breed-btn"
                          style={{ display: 'none' }}
                          onClick={() => {
                            const input = document.getElementById('breed-search') as HTMLInputElement;
                            if (input?.value) handleNext(input.value);
                          }}
                          className="w-full p-4 text-left rounded-xl bg-primary-neural/5 border border-primary-neural text-primary-neural font-bold transition-all flex items-center gap-3"
                        >
                          <span className="flex-1 text-sm font-bold">Use custom: "<span id="custom-breed-text">...</span>"</span>
                          <ChevronRight className="w-5 h-5 mr-1" />
                        </button>
                        
                        <div id="no-breed-results" style={{ display: 'none' }} className="p-6 text-center bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                           <p className="text-gray-400 text-sm font-bold mb-4 uppercase">No exact match found</p>
                           <button 
                              onClick={() => {
                                const input = document.getElementById('breed-search') as HTMLInputElement;
                                if (input?.value) handleNext(input.value);
                              }}
                              className="bg-primary-neural text-white px-8 py-3 rounded-xl font-bold"
                           >
                              Use my breed
                           </button>
                        </div>

                        {(question.options as any[])?.map((opt: string) => (
                           <button 
                               key={opt}
                               onClick={() => handleNext(opt)}
                               className="breed-btn w-full p-4 text-left rounded-xl bg-white border border-gray-100 hover:bg-primary-neural/5 hover:border-primary-neural font-medium transition-all flex items-center gap-3"
                           >
                               <span className="flex-1 text-sm font-bold">{opt}</span>
                               <ChevronRight className="w-4 h-4 text-gray-300 mr-2" />
                           </button>
                        ))}
                      </div>
                      <div className="p-6 rounded-2xl bg-bg-soft border border-gray-100">
                         <p className="text-sm font-bold text-gray-500 mb-2">Can't see your breed?</p>
                         <p className="text-xs text-gray-400">Simply start typing above and we'll analyze it using behavioral science data for your dog's specific profile.</p>
                      </div>
                   </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Quiz Trust Banner */}
      <div className="bg-white p-6 border-t border-gray-100 hidden md:block">
        <div className="max-w-xl mx-auto space-y-4">
           <PaymentTrustStrip />
           <div className="flex items-center justify-between text-[10px] uppercase tracking-widest font-bold text-slate-400">
              <div className="flex items-center gap-2">
                 <CheckCircle2 className="w-3 h-3 text-secondary-trust" />
                 50,000+ owners coached
              </div>
              <div className="flex items-center gap-2">
                 <ShieldCheck className="w-3 h-3 text-secondary-trust" />
                 Veterinary endorsed
              </div>
              <div className="flex items-center gap-2">
                 <Brain className="w-3 h-3 text-secondary-trust" />
                 AI Algorithm v4.2
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
