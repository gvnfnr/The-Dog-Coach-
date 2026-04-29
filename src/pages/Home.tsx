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
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="bg-primary-neural p-1 rounded-xl flex items-center justify-center overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/d/1PUbju6RYTE2CN5m_n55Xc7AKIo0ubcuF" 
                alt="Logo" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <img 
              src="https://lh3.googleusercontent.com/d/10cplC5E3eU1xPsmYAqA1usW9-e7dfHMM" 
              alt="The Dog Coach" 
              className="h-8 md:h-10 w-auto object-contain"
            />
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
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left relative z-10 w-full order-1 lg:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold leading-[1.1] tracking-tight text-primary-neural">
              Turn Your "Problem Dog" <br className="hidden lg:block" /> into a Perfect Companion <br className="hidden lg:block" /> <span className="text-[#E67E22]">in 15 Minutes a Day.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              No expensive trainers. No confusing books. Just a custom-built roadmap for your dog built on 50,000+ real behavioral case studies.
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
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150" alt="Sarah" className="w-full h-full object-cover" title="Sarah & Max, Labrador" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150" alt="Mark" className="w-full h-full object-cover" title="Mark & Bella, Frenchie" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150" alt="Elena" className="w-full h-full object-cover" title="Elena & Rocky, GSD" />
                  </div>
                </div>
                <div className="flex flex-col items-start leading-tight">
                  <div className="flex items-center gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[#F1C40F] text-[#F1C40F]" />)}
                    <span className="text-sm font-black text-primary-neural ml-1">4.9/5</span>
                  </div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">TRUSTED BY 50,000+ DOG PARENTS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Container */}
          <div className="flex-1 relative w-full flex justify-center items-center order-2 lg:order-2">
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
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: <Volume2 className="w-5 h-5" />, title: "Constant Barking", desc: "Wakes the neighbors and ruins peace." },
              { icon: <UserMinus className="w-5 h-5" />, title: "Anxiety", desc: "Chewed boots and howling when you leave." },
              { icon: <ArrowUpCircle className="w-5 h-5" />, title: "Aggressive Pulling", desc: "A wrestling match you never win." },
              { icon: <Zap className="w-5 h-5" />, title: "Reactivity", desc: "Lunging at guests or other dogs." },
              { icon: <Droplets className="w-5 h-5" />, title: "Destruction", desc: "Endless digging and furniture chewing." },
              { icon: <Plus className="w-5 h-5" />, title: "Jumping", desc: "Embarrassing greets with muddy paws." },
            ].map((item, i) => (
              <div key={i} className="p-4 md:p-8 rounded-[24px] bg-bg-soft border border-gray-100 hover:border-primary-neural/30 transition-all group">
                <div className="bg-primary-neural/10 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-primary-neural mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2">{item.title}</h3>
                <p className="text-xs md:text-base text-gray-600 mb-3 md:mb-4 leading-relaxed">{item.desc}</p>
                <div className="hidden md:inline-flex items-center gap-2 text-[10px] font-bold text-secondary-trust bg-secondary-trust/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  <CheckCircle2 className="w-3 h-3" />
                  Fix roadmap
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Strip */}
      <section className="py-16 bg-[#FDFBF9] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-neural">Real owners, real changes.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                dog: "Lola, Golden Retriever",
                result: "Lola stopped barking by week 2",
                text: "Before The Dog Coach, we couldn't have guests over. The 15-minute daily missions were easy to follow and the AI chat was active whenever I had a 'why is she doing this' moment.",
                img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200"
              },
              {
                name: "David K.",
                dog: "Rocky, GSD",
                result: "Walks are finally peaceful",
                text: "Rocky used to pull so hard my shoulder hurt. The custom desensitization protocol for city noises changed everything. Best €149 I've spent on him.",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
              },
              {
                name: "Elena G.",
                dog: "Bear, Mixed Breed",
                result: "Separation anxiety fixed",
                text: "Highly personalized. It felt like having a pro trainer in my pocket. Bear no longer destroys the house when I'm at work. The progress analytics are addictive!",
                img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
              }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 flex flex-col h-full gap-4">
                <div className="flex items-center gap-4">
                  <img src={t.img} className="w-14 h-14 rounded-full object-cover" alt={t.name} />
                  <div>
                    <p className="font-bold text-primary-neural">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.dog}</p>
                  </div>
                </div>
                <div className="bg-accent-coral/5 px-3 py-1 rounded-full inline-block self-start">
                  <p className="text-accent-coral font-bold text-xs uppercase tracking-wider">{t.result}</p>
                </div>
                <p className="text-gray-600 leading-relaxed italic italic-quote">"{t.text}"</p>
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
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Simple 3-Step Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16 border-b border-white/10">
            {[
              { step: "01", title: "60-sec Quiz", desc: "Tell us about Buddy's breed and habits." },
              { step: "02", title: "Custom Plan", desc: "Get a personalized 14-day roadmap." },
              { step: "03", title: "15-min Training", desc: "Follow bite-sized daily missions." },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 items-center">
                <span className="text-4xl font-black text-white/10">{s.step}</span>
                <div>
                  <p className="text-white font-bold text-lg">{s.title}</p>
                  <p className="text-white/50 text-sm">{s.desc}</p>
                </div>
                {i < 2 && <ArrowRight className="hidden md:block w-5 h-5 text-white/20" />}
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
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
      </div>
    </section>

      {/* Comparison section */}
      <section className="py-20 bg-bg-soft px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-[40px] shadow-soft overflow-hidden border border-gray-100">
           <div className="p-8 md:p-12 text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-primary-neural">AI vs. Alternatives</h2>
              <p className="text-gray-500">Why thousands are switching to a digital behavioral coach.</p>
           </div>
           <div className="overflow-x-auto">
             <table className="w-full text-left">
               <thead>
                 <tr className="border-y border-gray-100">
                   <th className="p-6 md:p-8 text-gray-400 font-medium whitespace-nowrap">Feature</th>
                   <th className="p-6 md:p-8 text-danger font-bold opacity-30 whitespace-nowrap">YouTube / DIY</th>
                   <th className="p-6 md:p-8 text-gray-600 font-bold whitespace-nowrap">Traditional Trainer</th>
                   <th className="p-6 md:p-8 bg-primary-neural/5 text-primary-neural font-bold whitespace-nowrap">The Dog Coach (AI)</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray-100">
                 {[
                                       ["Investment", "€1,200+ per course", "Less than €1 / day"],
                                       ["Response Time", "2-3 Days", "Instant / 24/7"],
                                       ["Personalization", "Standardized lessons", "Adaptive AI Profile"],
                   ["Breed Knowledge", "Varies by experience", "Trained on 50k+ dogs"],
                   ["Plan Updates", "Stationary until next call", "Updates every 24h"],
                 ].map(([feature, diy, trad, ai], i) => (
                   <tr key={i}>
                     <td className="p-6 md:p-8 font-bold text-primary-neural whitespace-nowrap">{feature}</td>
                     <td className="p-6 md:p-8 text-gray-400">{diy}</td>
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

      {/* FAQ Section */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-neural">Questions? We have answers.</h2>
            <p className="text-gray-500">Everything you need to know before starting Buddy's transformation.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "Will this work for my specific breed and age?", a: "Yes. Our AI is trained on 50,000+ behavioral cases across all major breeds. Whether you have a 3-month-old puppy or a 10-year-old rescue, the roadmap adapts to their specific neuro-patterns." },
              { q: "What if it doesn't work for my dog?", a: "We offer a 100% risk-free 14-day money-back guarantee. If you don't see a visible change in Buddy's behavior within the first two weeks, we'll refund you every cent." },
              { q: "Is this an app or a website?", a: "The Dog Coach is a progressive web app. You can access it on any device (iPhone, Android, Desktop) without needing to download anything from the App Store." },
              { q: "How much time does it really take?", a: "We designed the '15-Minute Missions' for busy owners. Most exercises take 5-10 minutes in the morning and 5 minutes in the evening. Consistency beats intensity." },
              { q: "Can I cancel my subscription anytime?", a: "Absolutely. You can cancel your subscription with one click in your dashboard settings. No phone calls, no hassle." },
              { q: "is this safe for reactive or aggressive dogs?", a: "Our methods focus on positive reinforcement and sensory management. For severe aggression that poses a physical risk, we recommend use of our AI alongside a local specialist." },
            ].map((faq, i) => (
              <details key={i} className="group bg-bg-soft rounded-2xl border border-gray-100 overflow-hidden text-left">
                <summary className="p-6 flex items-center justify-between cursor-pointer list-none font-bold text-primary-neural group-open:bg-primary-neural/5 transition-colors">
                  {faq.q}
                  <Plus className="w-5 h-5 text-gray-400 group-open:rotate-45 transition-transform" />
                </summary>
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 bg-white/50">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text-slate text-white/60 py-20 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="space-y-6 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="bg-primary-neural p-1 rounded-xl flex items-center justify-center grayscale brightness-200 overflow-hidden">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1PUbju6RYTE2CN5m_n55Xc7AKIo0ubcuF" 
                    alt="Logo" 
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <img 
                  src="https://lh3.googleusercontent.com/d/10cplC5E3eU1xPsmYAqA1usW9-e7dfHMM" 
                  alt="The Dog Coach" 
                  className="h-9 w-auto object-contain brightness-0 invert opacity-80"
                />
              </div>
              <p className="text-sm leading-relaxed">
                AI behavioral coaching that turns problem dogs into great companions. Built with certified canine behaviorists.
              </p>
              <div className="flex gap-4">
                <a href="https://facebook.com/thedogcoach.co" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                </a>
                <a href="https://instagram.com/thedogcoach.co" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 flex-1">
              <div className="space-y-4">
                <h5 className="text-white font-bold text-sm uppercase tracking-widest">Platform</h5>
                <nav className="flex flex-col gap-3 text-sm">
                  <button onClick={() => navigate('/how-it-works')} className="hover:text-white text-left">How it works</button>
                  <button onClick={() => navigate('/results')} className="hover:text-white text-left">Results Gallery</button>
                  <button onClick={() => navigate('/pricing')} className="hover:text-white text-left">Pricing</button>
                </nav>
              </div>
              <div className="space-y-4">
                <h5 className="text-white font-bold text-sm uppercase tracking-widest">Legal</h5>
                <nav className="flex flex-col gap-3 text-sm">
                  <button onClick={() => navigate('/terms')} className="hover:text-white text-left">Terms of Service</button>
                  <button onClick={() => navigate('/privacy')} className="hover:text-white text-left">Privacy Policy</button>
                  <button onClick={() => navigate('/refund')} className="hover:text-white text-left">Refund Policy</button>
                </nav>
              </div>
              <div className="space-y-4">
                <h5 className="text-white font-bold text-sm uppercase tracking-widest">Contact</h5>
                <p className="text-sm">Discover Group Sàrl</p>
                <a href="mailto:contact@thedogcoach.co" className="text-sm hover:text-white transition-colors cursor-pointer block">contact@thedogcoach.co</a>
                <div className="pt-4 flex flex-wrap gap-2 items-center grayscale opacity-50">
                  <img src="https://lh3.googleusercontent.com/d/1oobA6Dhx4a6Dg18iN7oTBs8na-ayteM5" className="h-6 w-auto object-contain" alt="Payment logo 1" />
                  <img src="https://lh3.googleusercontent.com/d/1D8PWrv7IUtBLZyYhZfjv3G64WxkCDh6o" className="h-6 w-auto object-contain" alt="Payment logo 2" />
                  <img src="https://lh3.googleusercontent.com/d/18IMpOj2MPPgqq0HTMfUJODjCmL5UGK_J" className="h-6 w-auto object-contain" alt="Payment logo 3" />
                  <img src="https://lh3.googleusercontent.com/d/1D_mOKVLah5tRIjwYb1R-188lQsq0W-4c" className="h-6 w-auto object-contain" alt="Payment logo 4" />
                  <img src="https://lh3.googleusercontent.com/d/168cnwzGN5soWTmzGEhz_bOKW6Wla_4Be" className="h-6 w-auto object-contain" alt="Payment logo 5" />
                  <img src="https://lh3.googleusercontent.com/d/1F8XZQOxPp50QIRDF3CgcBhJ9AwFsBe6Q" className="h-6 w-auto object-contain" alt="Payment logo 6" />
                  <img src="https://lh3.googleusercontent.com/d/1aH1yhNgGi36w76buMz-l-Gr-3sv1KqR_" className="h-6 w-auto object-contain" alt="Payment logo 7" />
                  <img src="https://lh3.googleusercontent.com/d/1n14XoHGupIbBSkbtTb-eEfj9NWMRNKe9" className="h-6 w-auto object-contain" alt="Payment logo 8" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-xs font-bold uppercase tracking-widest">
            <p>© 2026 THE DOG COACH CO.</p>
            <p className="text-white/20">TRUSTED BY 50,000+ OWNERS GLOBALLY</p>
          </div>
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
