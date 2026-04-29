import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { 
  Brain, 
  Smartphone, 
  CheckCircle2, 
  Target, 
  Zap, 
  MessageSquare,
  BarChart3,
  ArrowRight
} from 'lucide-react';

export default function HowItWorks() {
  const navigate = useNavigate();

  return (
    <div className="bg-bg-soft min-h-screen pb-20">
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

      <div className="max-w-7xl mx-auto px-4 pt-32 pb-16 space-y-24">
        {/* Hero Concept */}
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-secondary-trust/10 text-secondary-trust px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              The Science of AI Coaching
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              How your AI Coach <br /> transforms behavior
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              We combined the expertise of 50+ certified behaviorists with GPT-4 class AI to create a trainer that lives in your pocket.
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white"
          >
            <img 
              src="https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=1600" 
              className="w-full h-[300px] md:h-[500px] object-cover"
              alt="Professional dog training session"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-bottom p-8 md:p-12">
              <div className="mt-auto text-left flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl border border-white/30">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Real-time correction results</p>
                  <p className="text-white/80 text-sm">Behavior improved in 94% of users within 7 days</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              step: "01",
              icon: <Brain className="w-8 h-8" />,
              image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=400&h=300",
              title: "Deep Analysis",
              desc: "First, our algorithm analyzes your dog's breed, environment, and specific triggers across 18 unique data points."
            },
            {
              step: "02",
              icon: <Target className="w-8 h-8" />,
              image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400&h=300",
              title: "Personalized Roadmap",
              desc: "The AI generates a 14-day training schedule that adapts daily based on your dog's speed of learning."
            },
            {
              step: "03",
              icon: <Zap className="w-8 h-8" />,
              image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=400&h=300",
              title: "Instant Guidance",
              desc: "Whenever you're stuck, the 24/7 AI chat provides instant corrections and video-based tactical advice."
            }
          ].map((item, i) => (
            <div key={i} className="relative group bg-white rounded-[32px] shadow-soft border border-gray-100 hover:border-primary-neural/20 transition-all overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
              </div>
              <div className="p-8">
                <div className="absolute top-2 right-4 text-5xl font-black text-primary-neural/5 group-hover:text-primary-neural/10 transition-colors">
                  {item.step}
                </div>
                <div className="bg-bg-soft w-14 h-14 rounded-2xl flex items-center justify-center text-primary-neural mb-6 -mt-12 relative z-10 shadow-lg border-4 border-white">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile App Preview - Redesigned to match Home */}
        <div className="bg-[#1a3a34] rounded-[40px] overflow-hidden text-white flex flex-col lg:flex-row items-center gap-12 p-8 md:p-20 shadow-2xl relative">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           <div className="flex-1 space-y-8 relative z-10 text-left">
              <h2 className="text-3xl md:text-6xl font-bold font-display italic leading-tight">A complete training studio, in your pocket.</h2>
              <div className="space-y-6">
                {[
                  { icon: <MessageSquare className="w-5 h-5" />, title: "Real-time AI Chat", text: "Get answers to 'Why is he doing this?' in seconds." },
                  { icon: <BarChart3 className="w-5 h-5" />, title: "Progress Analytics", text: "Watch your dog's obedience score climb weekly." },
                  { icon: <Smartphone className="w-5 h-5" />, title: "5-Min Missions", text: "Bite-sized video lessons for busy owners." },
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/5 shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <p className="font-bold text-xl">{feature.title}</p>
                      <p className="text-white/60 text-lg leading-snug">{feature.text}</p>
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
              className="relative w-full max-w-[300px] aspect-[9/18.5] bg-white rounded-[48px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] p-2.5 border-[8px] border-white/10 overflow-hidden"
            >
              <div className="w-full h-full bg-white rounded-[38px] overflow-hidden flex flex-col relative">
                <div className="absolute top-0 inset-x-0 h-6 flex justify-center items-center z-20">
                  <div className="w-12 h-1 bg-black/10 rounded-full" />
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800" 
                  alt="App interface" 
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg space-y-1.5 translate-y-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-[8px] font-bold uppercase tracking-widest text-gray-400">Live AI Analysis</span>
                    </div>
                    <p className="font-bold text-xs">Treat-seeking behavior detected</p>
                    <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-[75%]" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-8 pb-20">
           <h2 className="text-3xl md:text-5xl font-bold">Ready for a calmer home?</h2>
           <button 
            onClick={() => navigate('/quiz')}
            className="bg-accent-coral text-white px-12 py-5 rounded-full text-xl font-bold shadow-xl hover:scale-105 transition-all flex items-center gap-3 mx-auto"
           >
             Start The Training
             <ArrowRight className="w-6 h-6" />
           </button>
           <p className="text-sm font-bold text-primary-neural uppercase tracking-widest">14-Day Money Back Guarantee</p>
        </div>
      </div>
    </div>
  );
}
