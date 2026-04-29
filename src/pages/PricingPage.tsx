import { useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  Brain, 
  ShieldCheck, 
  CreditCard, 
  HelpCircle,
  ChevronDown,
  Star
} from 'lucide-react';
import { motion } from 'motion/react';

export default function PricingPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-bg-soft min-h-screen pb-32">
      {/* Simple Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="bg-primary-neural p-1.5 rounded-lg">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-lg md:text-xl text-primary-neural">The Dog Coach</span>
          </div>
          <button 
            onClick={() => navigate('/quiz')}
            className="md:hidden bg-primary-neural text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-soft"
          >
            Start
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 pt-32 pb-16">
        <div className="text-center space-y-6 max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
             <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 55}`} className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
                ))}
             </div>
             <div className="flex flex-col items-center md:items-start">
               <div className="flex text-yellow-500 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-current" />)}
               </div>
               <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">4.9/5 Average Rating</span>
             </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Plans for every <br /> member of the pack
          </h1>
          <p className="text-lg md:text-xl text-gray-500">
            Start with our 60-second quiz to find the perfect plan for your dog's behavioral needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
           {/* Behavioral Reset - 6 Months */}
           <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm space-y-8 h-fit">
              <div className="space-y-4">
                 <h2 className="text-2xl font-bold text-gray-400">Behavioral Reset</h2>
                 <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black">€79</span>
                    <span className="text-gray-400 font-bold">/6mo</span>
                 </div>
                 <p className="text-gray-500 text-sm">Targeted behavioral correction with expert-verified protocols.</p>
              </div>
              <ul className="space-y-5">
                 {[
                   "Outcome: Primary Problem Solved",
                   "6-Month Access & Support",
                   "Advanced Recall Protocols",
                   "Breed-Specific Logic",
                 ].map((feat, i) => (
                   <li key={i} className="flex items-center gap-3 text-sm font-bold text-text-slate">
                      <CheckCircle2 className="w-5 h-5 text-secondary-trust" /> {feat}
                   </li>
                 ))}
              </ul>
              <button 
                onClick={() => navigate('/quiz')}
                className="w-full py-4 rounded-2xl font-bold border-2 border-primary-neural text-primary-neural hover:bg-primary-neural/5 transition-all"
              >
                Select Reset
              </button>
           </div>

           {/* Annual - Featured */}
           <div className="bg-primary-neural p-10 rounded-[48px] shadow-2xl space-y-8 text-white relative lg:scale-110 overflow-hidden">
              <div className="absolute top-0 right-0 bg-accent-coral px-6 py-2 rounded-bl-3xl font-black text-xs h-fit uppercase tracking-widest shadow-lg">
                 Most Popular
              </div>
              <div className="space-y-4">
                 <h2 className="text-2xl font-bold opacity-80 underline decoration-accent-coral decoration-4">Full Access</h2>
                 <div className="flex items-baseline gap-1">
                    <span className="text-6xl font-black">€149</span>
                    <span className="opacity-60 font-bold">/year</span>
                 </div>
                 <p className="font-bold text-accent-coral bg-white/10 w-fit px-3 py-1 rounded-full text-xs">Saves €199 per year</p>
              </div>
              <ul className="space-y-5">
                 {[
                   "Universal AI Coach (24/7)",
                   "Lifetime Plan Updates",
                   "Multi-dog Profiles",
                   "Priority Video Support",
                   "Scientific Insight Logs"
                 ].map((feat, i) => (
                   <li key={i} className="flex items-center gap-3 text-sm font-bold">
                      <CheckCircle2 className="w-5 h-5 text-accent-coral" /> {feat}
                   </li>
                 ))}
              </ul>
              <button 
                onClick={() => navigate('/quiz')}
                className="w-full py-5 rounded-2xl font-black bg-accent-coral text-white shadow-xl hover:scale-105 active:scale-95 transition-all text-xl"
              >
                Claim This Plan
              </button>
              <p className="text-center text-xs opacity-50 font-bold">Cancel anytime • Secure checkout</p>
           </div>

           {/* Monthly */}
           <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm space-y-8 h-fit">
              <div className="space-y-4">
                 <h2 className="text-2xl font-bold text-gray-400">Monthly</h2>
                 <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black">€29</span>
                    <span className="text-gray-400 font-bold">/mo</span>
                 </div>
                 <p className="text-gray-500 text-sm">Best for trying out the AI coaching methodology.</p>
              </div>
              <ul className="space-y-5">
                 {[
                   "Adaptive 14-day Plan",
                   "24/7 AI Coach Chat",
                   "Basic Progress Tracking",
                   "Cancel Anytime"
                 ].map((feat, i) => (
                   <li key={i} className="flex items-center gap-3 text-sm font-bold text-text-slate">
                      <CheckCircle2 className="w-5 h-5 text-secondary-trust" /> {feat}
                   </li>
                 ))}
              </ul>
              <button 
                onClick={() => navigate('/quiz')}
                className="w-full py-4 rounded-2xl font-bold border-2 border-gray-100 text-gray-400 hover:border-primary-neural hover:text-primary-neural transition-all"
              >
                Choose Monthly
              </button>
           </div>
        </div>

        {/* FAQ - Accordion style */}
        <div className="mt-40 max-w-3xl mx-auto space-y-12">
           <h2 className="text-3xl font-black text-center">Frequently Asked Questions</h2>
           <div className="space-y-4">
              {[
                { q: "How does the AI know what to do?", a: "Our AI model is trained on 50,000+ behavioral sessions and uses breed-specific protocols validated by certified trainers." },
                { q: "Can I cancel anytime?", a: "Yes, you can manage and cancel your subscription directly from the dashboard with one click." },
                { q: "Is there a money-back guarantee?", a: "Absolutely. If you don't see progress in the first 14 days, we'll refund you 100%—no questions asked." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                   <div className="flex items-center justify-between cursor-pointer group">
                      <h4 className="font-bold text-lg group-hover:text-primary-neural transition-colors">{faq.q}</h4>
                      <ChevronDown className="w-5 h-5 text-gray-300" />
                   </div>
                   <p className="mt-4 text-gray-500 leading-relaxed text-sm">
                     {faq.a}
                   </p>
                </div>
              ))}
           </div>
        </div>

        {/* Truststrip */}
        <div className="flex flex-wrap justify-center gap-12 mt-32 opacity-40 grayscale">
            <div className="flex items-center gap-2 font-display font-black text-xl"><ShieldCheck className="w-6 h-6"/> Guaranteed</div>
            <div className="flex items-center gap-2 font-display font-black text-xl"><CreditCard className="w-6 h-6"/> Secure</div>
            <div className="flex items-center gap-2 font-display font-black text-xl"><HelpCircle className="w-6 h-6"/> Support</div>
        </div>
      </div>
    </div>
  );
}
