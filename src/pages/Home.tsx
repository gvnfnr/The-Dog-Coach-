import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { 
  Star, 
  Volume2, 
  Magnet, 
  Clock, 
  ShieldAlert, 
  MessageCircle, 
  Droplets,
  ArrowRight,
  CheckCircle2,
  Brain,
  Zap,
  ChevronDown,
  ArrowUpCircle,
  UserMinus,
  Lock,
  Instagram,
  Twitter,
  Facebook,
  Play,
  Check,
  Plus,
  MessageSquare,
  BarChart3,
  Smartphone,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { getDogImage } from '../lib/dogImages';

export default function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem('thedogcoach_quiz');
    if (saved) setData(JSON.parse(saved));
  }, []);

  const heroImage = "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1200";
  const fallbackImage = "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=1200";

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="bg-primary-neural p-1.5 rounded-lg">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-lg md:text-xl text-primary-neural">The Dog Coach</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <button onClick={() => navigate('/how-it-works')} className="hover:text-primary-neural transition-colors">How it works</button>
            <button onClick={() => navigate('/results')} className="hover:text-primary-neural transition-colors">Results</button>
            <button onClick={() => navigate('/pricing')} className="hover:text-primary-neural transition-colors">Pricing</button>
            <button onClick={() => navigate('/login')} className="bg-primary-neural text-white px-5 py-2 rounded-full hover:bg-opacity-90 transition-all font-semibold">
              Login
            </button>
          </nav>
          <button 
            onClick={() => navigate('/quiz')}
            className="md:hidden bg-primary-neural text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-soft"
          >
            Start
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-20 px-4 overflow-hidden bg-[#F5F2EE]">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left relative z-10 w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold leading-[1.1] tracking-tight text-primary-neural">
              Turn Your "Problem Dog" <br className="hidden lg:block" /> into a Perfect Companion <br className="hidden lg:block" /> <span className="text-[#E67E22]">in 15 Minutes a Day.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              No expensive trainers. No confusing books. Just a custom-built roadmap for your dog powered by the world’s most advanced Canine AI.
            </p>

            <div className="flex flex-col items-center lg:items-start gap-4 pt-4">
              <motion.button 
                animate={{
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                onClick={() => navigate('/quiz')}
                className="w-full sm:w-auto bg-[#E67E22] text-white px-10 py-5 rounded-2xl text-xl font-black shadow-[0_20px_40px_-10px_rgba(230,126,34,0.3)] hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                Start My Dog's Transformation →
              </motion.button>
              <div className="flex items-center gap-3 text-gray-500 font-bold text-sm">
                <div className="flex -space-x-3">
                  {[45, 32, 28].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Happy Parent" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-start leading-tight">
                  <div className="flex items-center gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[#F1C40F] text-[#F1C40F]" />)}
                    <span className="text-sm font-black text-primary-neural ml-1">4.9/5</span>
                  </div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">VERIFIED BY 50,000+ DOG PARENTS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Container */}
          <div className="flex-1 relative w-full flex justify-center items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-xl"
            >
              <img 
                src="https://lh3.googleusercontent.com/d/1HSy4RnvbUKVfXT5lyeFMGuebm58P0gYg" 
                alt="Golden Retriever Puppy" 
                className="w-full h-auto object-cover object-center rounded-3xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Does this sound familiar?</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Problem behaviors shouldn't ruin your relationship with your dog.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Check className="w-5 h-5" />, title: "Constant Barking", desc: "Constant barking that ruins your peace and wakes the neighbors." },
              { icon: <Check className="w-5 h-5" />, title: "Anxious Separation", desc: "Coming home to chewed boots and a howling, stressed dog." },
              { icon: <Check className="w-5 h-5" />, title: "Aggressive Pulling", desc: "Walks that feel like a wrestling match you never win." },
              { icon: <Check className="w-5 h-5" />, title: "Unpredictable Reactivity", desc: "Lunging at guests, cars, or strangers out of nowhere." },
              { icon: <Check className="w-5 h-5" />, title: "Household Destruction", desc: "Endless digging and chewing that costs you a fortune." },
              { icon: <Check className="w-5 h-5" />, title: "Inappropriate Jumping", desc: "Embarrassing greets where paws never stay on the floor." },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[24px] bg-bg-soft border border-gray-100 hover:border-primary-neural/30 transition-all group">
                <div className="bg-primary-neural/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary-neural mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-secondary-trust bg-secondary-trust/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  <CheckCircle2 className="w-3 h-3" />
                  Permanent fix roadmap
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Happier Dog Section - New Added section */}
      <section className="py-20 bg-white px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-5xl font-bold text-center tracking-tight">The Science of a Happier, <br className="hidden md:block" /> Harmonious Life with Your Dog</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=400&h=400",
              "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400&h=400",
              "https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&q=80&w=400&h=400",
              "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=400&h=400",
              "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&q=80&w=400&h=400",
              "https://images.unsplash.com/photo-1563460716037-460a3ad24ba9?auto=format&fit=crop&q=80&w=400&h=400"
            ].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="aspect-square rounded-[32px] overflow-hidden shadow-lg border-4 border-white"
              >
                <img src={img} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Happy Dog" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Studio Section - Redesigned to match screenshot */}
      <section className="py-24 bg-[#1a3a34] px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 space-y-10 text-center lg:text-left">
            <h2 className="text-4xl md:text-7xl font-bold leading-[1.05] text-white tracking-tight">
              A complete <br />
              <span className="italic">training studio,</span> <br />
              in your pocket.
            </h2>
            
            <div className="space-y-8 max-w-lg mx-auto lg:mx-0">
              {[
                { 
                  title: "Real-time AI Chat", 
                  desc: "Get answers to 'Why is he doing this?' in seconds.", 
                  icon: <MessageSquare className="w-5 h-5 text-white" /> 
                },
                { 
                  title: "Progress Analytics", 
                  desc: "Watch your dog's obedience score climb weekly.", 
                  icon: <BarChart3 className="w-5 h-5 text-white" /> 
                },
                { 
                  title: "5-Min Missions", 
                  desc: "Bite-sized video lessons for busy owners.", 
                  icon: <Smartphone className="w-5 h-5 text-white" /> 
                }
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/5 shrink-0">
                    {feature.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-xl text-white">{feature.title}</h4>
                    <p className="text-white/60 text-lg leading-snug">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl -z-10 scale-150"></div>
            <motion.div
              initial={{ rotate: 10, y: 40, opacity: 0 }}
              whileInView={{ rotate: -8, y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full max-w-[340px] aspect-[9/18.5] bg-white rounded-[56px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] p-3 border-[10px] border-white/10 overflow-hidden"
            >
              {/* Inner screen content */}
              <div className="w-full h-full bg-white rounded-[44px] overflow-hidden flex flex-col relative">
                {/* Phone Speaker */}
                <div className="absolute top-0 inset-x-0 h-8 flex justify-center items-center z-20">
                  <div className="w-16 h-1 bg-black/10 rounded-full" />
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800" 
                  alt="App interface" 
                  className="w-full h-full object-cover"
                />
                
                {/* Simulated UI elements overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-8 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg space-y-2 translate-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Live AI Analysis</span>
                    </div>
                    <p className="font-bold text-sm">Treat-seeking behavior detected</p>
                    <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-[75%]" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison section */}
      <section className="py-20 bg-bg-soft px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-[40px] shadow-soft overflow-hidden border border-gray-100">
           <div className="p-8 md:p-12 text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">AI vs. Traditional Trainers</h2>
              <p className="text-gray-500">Why thousands are switching to a digital behavioral coach.</p>
           </div>
           <div className="overflow-x-auto">
             <table className="w-full text-left">
               <thead>
                 <tr className="border-y border-gray-100">
                   <th className="p-6 md:p-8 text-gray-400 font-medium">Feature</th>
                   <th className="p-6 md:p-8 text-gray-600 font-bold">Traditional Trainer</th>
                   <th className="p-6 md:p-8 bg-primary-neural/5 text-primary-neural font-bold">The Dog Coach (AI)</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray-100">
                 {[
                                       ["Investment", "€1,200+ per course", "Less than €1 / day"],
                                       ["Response Time", "2-3 Days", "Instant / 24/7"],
                                       ["Personalization", "Standardized lessons", "Adaptive AI Profile"],
                   ["Breed Knowledge", "Varies by experience", "Trained on 50k+ dogs"],
                   ["Plan Updates", "Stationary until next call", "Updates every 24h"],
                 ].map(([feature, trad, ai], i) => (
                   <tr key={i}>
                     <td className="p-6 md:p-8 font-medium text-gray-700">{feature}</td>
                     <td className="p-6 md:p-8 text-gray-500">{trad}</td>
                     <td className="p-6 md:p-8 bg-primary-neural/5 text-primary-neural font-bold">{ai}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-20 px-4 text-center space-y-12" id="pricing">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Ready to transform your life?</h2>
            <div className="bg-primary-neural rounded-[32px] p-8 md:p-16 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-accent-coral/20 rounded-full blur-3xl"></div>
               
               <div className="relative z-10 space-y-6">
                 <p className="text-xl md:text-2xl font-medium opacity-90 max-w-2xl mx-auto">
                    Start your 14-day behavioral challenge today. Most owners see significant improvement in the first week.
                 </p>
                 <button 
                  onClick={() => navigate('/quiz')}
                  className="bg-white text-primary-neural px-12 py-5 rounded-full text-xl font-bold shadow-xl hover:bg-gray-100 transition-all scale-105 active:scale-100 mx-auto block"
                 >
                   Take the 60-second quiz
                 </button>
                 <p className="text-sm opacity-70">See your dog's custom plan to unlock detailed pricing</p>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-text-slate text-white/60 py-12 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-2 grayscale brightness-200">
            <Brain className="w-6 h-6" />
            <span className="font-display font-bold text-xl">The Dog Coach</span>
          </div>
          <div className="flex gap-8 text-sm">
            <button onClick={() => navigate('/terms')} className="hover:text-white transition-colors">Terms</button>
            <button onClick={() => navigate('/privacy')} className="hover:text-white transition-colors">Privacy</button>
            <button onClick={() => navigate('/support')} className="hover:text-white transition-colors">Support</button>
            <button onClick={() => navigate('/refund')} className="hover:text-white transition-colors">Refund Policy</button>
            <a 
              href="https://instagram.com/thedogcoach.co" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 hover:text-[#E4405F] transition-colors"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
          </div>
          <p className="text-xs uppercase tracking-widest font-bold">© 2026 The Dog Coach Co.</p>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 w-full p-4 md:hidden z-50 bg-gradient-to-t from-bg-soft to-transparent">
        <button 
            onClick={() => navigate('/quiz')}
            className="w-full bg-accent-coral text-white py-4 rounded-xl font-bold shadow-2xl active:scale-95 transition-all text-lg"
        >
          Start the free quiz
        </button>
      </div>
    </div>
  );
}
