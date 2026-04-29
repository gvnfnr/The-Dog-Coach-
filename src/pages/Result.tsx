import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Star, 
  CheckCircle2, 
  Lock, 
  Zap, 
  Brain, 
  Clock, 
  ShieldCheck, 
  TrendingUp,
  CreditCard,
  X
} from 'lucide-react';
import { getDogImage } from '../lib/dogImages';
import { PaymentTrustStrip } from '../components/PaymentTrustStrip';

export default function Result() {
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [breedImage, setBreedImage] = useState<string>("");
  const [billingCycle, setBillingCycle] = useState<'monthly' | '6month' | 'annual'>('annual');

  useEffect(() => {
    const saved = localStorage.getItem('thedogcoach_quiz');
    if (saved) {
      const parsed = JSON.parse(saved);
      setData(parsed);
      
      // Initial image
      const initialImage = getDogImage(parsed.breed);
      setBreedImage(initialImage);

      // Dynamic fallback for specific breeds not in our main list
      if (initialImage.includes('photo-1543466835-00a7907e9de1') && parsed.breed !== 'Other') {
        // Simple search-like fallback using Dog CEO API
        const breedName = parsed.breed.toLowerCase().split(' ').reverse()[0]; // Try to get the main breed name
        fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
          .then(res => res.json())
          .then(resData => {
            if (resData.status === 'success') {
              setBreedImage(resData.message);
            }
          })
          .catch(() => {}); // Fallback to generic if API fails
      }
    } else {
      navigate('/quiz');
    }

    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0) setShowExitPopup(true);
    };
    document.addEventListener('mouseleave', handleMouseOut);
    return () => document.removeEventListener('mouseleave', handleMouseOut);
  }, [navigate]);

  if (!data) return null;

  return (
    <div className="flex-1 bg-bg-soft pb-32">
      {/* Header */}
      <div className="bg-white p-4 border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
           <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="flex items-center justify-center overflow-hidden">
              <img 
                src="/src/DogCoaching_white500px.png" 
                alt="Logo Icon" 
                className="w-10 h-10 object-contain"
                style={{ filter: 'invert(1)' }}
                referrerPolicy="no-referrer"
              />
            </div>
            <img 
              src="/src/DogCoaching_text%20copy.png" 
              alt="The Dog Coach" 
              className="h-8 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-bold text-secondary-trust">
             <div className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" />
                Guaranteed Results
             </div>
             <div className="flex items-center gap-1">
                <CreditCard className="w-4 h-4" />
                Secure Checkout
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-8 space-y-8">
        {/* Profile Card */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[32px] shadow-soft border border-gray-100 overflow-hidden"
        >
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <img 
                src={breedImage} 
                className="w-32 h-32 md:w-48 md:h-48 rounded-[40px] object-cover ring-8 ring-primary-neural/5 shadow-xl"
                alt="Dog Profile"
              />
              <div className="absolute -bottom-2 -right-2 bg-secondary-trust text-white p-2 rounded-xl shadow-lg ring-4 ring-white">
                <Zap className="w-5 h-5 fill-current" />
              </div>
            </div>
            <div className="text-center md:text-left space-y-4">
               <h1 className="text-3xl md:text-4xl font-extrabold">{data.name}’s Behavioral Transformation Roadmap</h1>
               <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                  <span className="bg-bg-soft px-4 py-1.5 rounded-full text-sm font-bold border border-gray-100">{data.breed}</span>
                  <span className="bg-bg-soft px-4 py-1.5 rounded-full text-sm font-bold border border-gray-100">{data.age}</span>
                  <span className="bg-secondary-trust/10 text-secondary-trust px-4 py-1.5 rounded-full text-sm font-bold border border-secondary-trust/20 flex items-center gap-2">
                     <TrendingUp className="w-4 h-4" />
                     Outcome: {data.outcome || 'Success'}
                  </span>
               </div>
               <div className="space-y-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-gray-400">
                     <span>Behavioral Health Score</span>
                     <span className={`${data.issueSeverity === 'Severe' ? 'text-red-600' : 'text-orange-500'}`}>
                        {data.issueSeverity === 'Severe' ? 'Urgent Action Required' : 'Action Recommended'}
                     </span>
                  </div>
                  <div className="grid grid-cols-4 gap-1 h-2">
                     <div className="bg-red-500 rounded-full" />
                     <div className={data.issueSeverity === 'Severe' || data.issueSeverity === 'Moderate' ? 'bg-orange-400 rounded-full' : 'bg-gray-100 rounded-full'} />
                     <div className="bg-gray-100 rounded-full" />
                     <div className="bg-gray-100 rounded-full" />
                  </div>
                  <p className="text-sm font-medium text-gray-500 italic">
                    "Based on {data.breed} tendencies and {data.name}'s {data.energy} energy profile, we’ve identified that the {data.issue} behavior is likely a result of {data.environment === 'Apartment' ? 'spatial frustration' : 'sensory overload'}. {data.breed}s like {data.name} specifically struggle with {data.issue} because of their high intelligence and need for clear leadership structures."
                  </p>
               </div>
            </div>
          </div>
        </motion.div>

        {/* The Plan Preview */}
        <div className="space-y-6">
           <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold">Expert-Validated 14-day Roadmap</h2>
              <p className="text-gray-500">Structured by behaviorists for {data.name}'s success</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { 
                  phase: "Phase 1: Days 1–4", 
                  title: "Foundation & Reset", 
                  status: "Unlocked",
                  items: ["5-min Morning Routine", "Environment Reset", "Mood Tracking"]
                },
                { 
                  phase: "Phase 2: Days 5–10", 
                  title: "Pattern Interruption", 
                  status: "Locked",
                  items: ["Counter-Conditioning Protocol", "Reactive-Trigger Desensitization", "Reward Timing Refinement"]
                },
                { 
                  phase: "Phase 3: Days 11–14", 
                  title: "Reinforcement", 
                  status: "Locked",
                  items: ["Advanced Command Chain", "Public Space Trials", "Boundaries Strengthening"]
                },
              ].map((p, i) => (
                <div key={i} className={`p-6 rounded-[24px] bg-white border border-gray-100 shadow-sm relative ${i > 0 ? 'opacity-90' : ''}`}>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{p.phase}</p>
                  <h3 className="font-bold text-lg mb-4">{p.title}</h3>
                  <div className="space-y-3">
                    {p.items.map((item, idx) => (
                      <div key={idx} className={`flex items-center gap-3 text-sm font-medium ${i > 0 ? 'text-gray-300' : 'text-gray-600'}`}>
                         <CheckCircle2 className={`w-4 h-4 ${i > 0 ? 'text-gray-200' : 'text-secondary-trust'}`} />
                         <span className={i > 0 ? 'blur-[3px] select-none' : ''}>{item}</span>
                      </div>
                    ))}
                  </div>
                  {i > 0 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/10 backdrop-blur-[1px] rounded-[24px] cursor-pointer" onClick={() => {
                        const el = document.getElementById('pricing');
                        el?.scrollIntoView({ behavior: 'smooth' });
                    }}>
                       <div className="bg-white p-3 rounded-full shadow-lg border border-gray-100">
                          <Lock className="w-5 h-5 text-primary-neural" />
                       </div>
                    </div>
                  )}
                </div>
              ))}
           </div>
        </div>

        {/* Audit: Added Comparison & Guarantee */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-12">
           <div className="bg-white p-8 md:p-10 rounded-[40px] border border-gray-100 shadow-sm space-y-6 flex flex-col justify-between italic">
              <div className="space-y-4">
                 <h3 className="text-2xl font-black italic">The Price of Inaction</h3>
                 <p className="text-gray-500 font-medium">A professional trainer costs €150/hour. Today, get a full year of AI coaching for the price of one session.</p>
              </div>
              <div className="space-y-3">
                 <div className="flex items-center gap-3 text-sm font-bold text-gray-400">
                    <X className="w-4 h-4 text-red-500" /> Human Trainers: €1,200/yr (avg)
                 </div>
                 <div className="flex items-center gap-3 text-sm font-bold text-secondary-trust">
                    <CheckCircle2 className="w-4 h-4" /> The Dog Coach: €149/yr
                 </div>
              </div>
           </div>
           <div className="bg-primary-neural/5 p-8 md:p-10 rounded-[40px] border border-primary-neural/10 shadow-sm space-y-4 text-center">
              <ShieldCheck className="w-12 h-12 text-primary-neural mx-auto" />
              <h3 className="text-2xl font-black">14-Day "Good Boy" Guarantee</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed italic">
                 If your dog isn't behaving better within 14 days, we'll refund every cent. No questions asked. We take all the risk so {data.name} can live their best life.
              </p>
           </div>
        </div>

        {/* Pricing */}
        <div className="pt-8" id="pricing">
           <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-black mb-4">Give {data.name} the Gift of a Stress-Free Life</h2>
              <p className="text-gray-500 font-medium max-w-2xl mx-auto">Join 50,000+ dog parents who have traded frustration for peace of mind. Costs less than a single bag of high-quality treats per month.</p>
           </div>

           {/* Billing Toggle */}
           <div className="flex justify-center mb-12">
             <div className="bg-white p-1.5 rounded-2xl border border-gray-200 flex items-center shadow-sm">
               <button 
                 onClick={() => setBillingCycle('monthly')}
                 className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${billingCycle === 'monthly' ? 'bg-primary-neural text-white shadow-md' : 'text-gray-400 hover:text-gray-600'}`}
               >
                 Monthly
               </button>
               <button 
                 onClick={() => setBillingCycle('6month')}
                 className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${billingCycle === '6month' ? 'bg-primary-neural text-white shadow-md' : 'text-gray-400 hover:text-gray-600'}`}
               >
                 6 Months
               </button>
               <button 
                 onClick={() => setBillingCycle('annual')}
                 className={`px-6 py-3 rounded-xl font-bold text-sm transition-all relative ${billingCycle === 'annual' ? 'bg-primary-neural text-white shadow-md' : 'text-gray-400 hover:text-gray-600'}`}
               >
                 Annual
                 {billingCycle !== 'annual' && (
                   <span className="absolute -top-3 -right-3 bg-accent-coral text-white text-[8px] px-1.5 py-0.5 rounded-full font-black uppercase tracking-tighter shadow-sm animate-bounce">Save 60%</span>
                 )}
               </button>
             </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto">
              {/* Behavioral Reset - 6 Months */}
              <div 
                onClick={() => setBillingCycle('6month')}
                className={`bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-6 flex flex-col justify-between cursor-pointer transition-all duration-500 ${billingCycle === '6month' ? 'opacity-100 scale-105 ring-4 ring-primary-neural/10' : 'opacity-40 scale-95'}`}
              >
                 <div className="space-y-4">
                    <div className="space-y-2">
                       <h3 className="text-xl font-bold text-gray-400">Behavioral Reset</h3>
                       <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-extrabold text-text-slate">€79</span>
                          <span className="text-gray-400 font-medium">/6mo</span>
                       </div>
                       <p className="text-[10px] font-bold text-secondary-trust bg-secondary-trust/5 w-fit px-2 py-1 rounded tracking-tight uppercase">
                          Permanent fix roadmap
                       </p>
                    </div>
                    <ul className="space-y-4 text-sm font-medium">
                       <li className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-secondary-trust" /> 6 Months Full Access
                       </li>
                       <li className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-secondary-trust" /> Custom Behavioral Profile
                       </li>
                    </ul>
                 </div>
                 <button 
                  onClick={(e) => { e.stopPropagation(); navigate('/dashboard'); }}
                  className="w-full py-4 rounded-xl font-bold border-2 border-primary-neural text-primary-neural hover:bg-primary-neural/5 transition-all mt-4"
                 >
                    Select Reset
                 </button>
              </div>

              {/* Annual - Recommended */}
              <div 
                onClick={() => setBillingCycle('annual')}
                className={`bg-primary-neural p-8 rounded-[32px] shadow-2xl space-y-6 text-white relative overflow-hidden group cursor-pointer transition-all duration-500 flex flex-col justify-between ${billingCycle === 'annual' ? 'opacity-100 scale-110 border-4 border-accent-coral/30 z-10' : 'opacity-40 scale-95'}`}>
                 <div className="absolute top-0 right-0 bg-accent-coral px-4 py-1.5 font-bold text-xs uppercase tracking-widest rounded-bl-xl shadow-lg">
                    Most Successful Plan
                 </div>
                 <div className="space-y-4">
                    <div className="space-y-2">
                       <h3 className="text-xl font-bold opacity-80 underline decoration-accent-coral decoration-4">Full Access Annual</h3>
                       <div className="flex items-baseline gap-1">
                          <span className="text-5xl font-extrabold">€149</span>
                          <span className="opacity-60 font-medium">/year</span>
                       </div>
                       <p className="text-[10px] font-black text-accent-coral bg-white/10 w-fit px-2 py-1 rounded tracking-tight uppercase whitespace-nowrap">
                          Only €0.40 per day — Billed annually
                       </p>
                    </div>
                    <ul className="space-y-4 text-sm font-bold">
                       <li className="flex items-center gap-3 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-accent-coral" /> Lifetime Plan Updates
                       </li>
                       <li className="flex items-center gap-3 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-accent-coral" /> Priority AI Chat
                       </li>
                       <li className="flex items-center gap-3 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-accent-coral" /> Exclusive Masterclasses
                       </li>
                    </ul>
                 </div>
                 <button 
                  onClick={(e) => { e.stopPropagation(); navigate('/dashboard'); }}
                  className="w-full py-5 rounded-xl font-extrabold bg-accent-coral text-white shadow-xl hover:scale-[1.02] active:scale-95 transition-all text-xl mt-4"
                 >
                    Start {data.name}'s Plan
                 </button>
                 <PaymentTrustStrip className="mt-4" />
              </div>

              {/* Monthly */}
              <div 
                onClick={() => setBillingCycle('monthly')}
                className={`bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-6 flex flex-col justify-between cursor-pointer transition-all duration-500 ${billingCycle === 'monthly' ? 'opacity-100 scale-105 ring-4 ring-primary-neural/10' : 'opacity-40 scale-95'}`}
              >
                 <div className="space-y-4">
                    <div className="space-y-2">
                       <h3 className="text-xl font-bold text-gray-400">Monthly Kickstart</h3>
                       <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-extrabold text-text-slate">€29</span>
                          <span className="text-gray-400 font-medium">/mo</span>
                       </div>
                       <p className="text-[10px] font-bold text-secondary-trust bg-secondary-trust/5 w-fit px-2 py-1 rounded tracking-tight uppercase">
                          €0.97 per day — Cancel anytime
                       </p>
                    </div>
                    <ul className="space-y-4 text-sm font-medium">
                       <li className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-secondary-trust" /> 14-day Kickstart
                       </li>
                       <li className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-secondary-trust" /> Progress Reports
                       </li>
                    </ul>
                 </div>
                 <button 
                  onClick={(e) => { e.stopPropagation(); navigate('/dashboard'); }}
                  className="w-full py-4 rounded-xl font-bold bg-primary-neural text-white shadow-lg hover:bg-opacity-90 transition-all font-bold mt-4"
                 >
                    Try for 1 Month
                 </button>
              </div>
           </div>
        </div>

        {/* trust Footer */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 py-12 pt-16">
           <div className="text-center space-y-2">
              <div className="text-primary-neural font-bold text-3xl">14-Day</div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Money Back Guarantee</p>
           </div>
           <div className="text-center space-y-2">
              <ShieldCheck className="w-10 h-10 text-secondary-trust mx-auto" />
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Secure Payments</p>
           </div>
           <div className="text-center space-y-2">
              <TrendingUp className="w-10 h-10 text-primary-neural mx-auto" />
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Trackable Progress</p>
           </div>
        </div>
      </div>

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-text-slate/60 backdrop-blur-md">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-[40px] p-8 max-w-md w-full relative overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setShowExitPopup(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="text-center space-y-6">
                <div className="bg-accent-coral/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-accent-coral">
                  <Clock className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-extrabold tracking-tight">Wait — {data.name} still needs you!</h2>
                  <p className="text-gray-500">Don't let problem behaviors worsen. Get 20% off your first month if you start in the next 10 minutes.</p>
                </div>
                <div className="bg-bg-soft p-4 rounded-2xl border-2 border-dashed border-accent-coral/30">
                   <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Coupon Applied</p>
                   <p className="text-2xl font-black text-accent-coral">COACH20</p>
                </div>
                <button 
                  onClick={() => setShowExitPopup(false)}
                  className="w-full bg-primary-neural text-white py-5 rounded-2xl font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all"
                >
                  Claim My Discount
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

       {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 w-full bg-white/80 backdrop-blur-md p-4 border-t border-gray-100 z-40 md:hidden">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
           <button 
            onClick={() => {
                const el = document.getElementById('pricing');
                el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex-1 bg-accent-coral text-white py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-all text-center"
           >
              Unlock {data.name}'s Plan →
           </button>
        </div>
      </div>
    </div>
  );
}
