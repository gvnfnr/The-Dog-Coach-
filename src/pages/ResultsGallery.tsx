import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { 
  Star, 
  Brain, 
  Quote, 
  ArrowRight,
  TrendingUp,
  Heart,
  ShieldCheck
} from 'lucide-react';

export default function ResultsGallery() {
  const navigate = useNavigate();

  const stories = [
    {
      name: "Bella",
      breed: "Golden Retriever",
      problem: "Severe Leash Pulling",
      time: "9 days",
      quote: "Before The Dog Coach, every walk was a battle. After 9 days of AI-suggested sensory work, she walks perfectly by my side.",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Max",
      breed: "French Bulldog",
      problem: "Separation Anxiety",
      time: "14 days",
      quote: "No more howling! The AI plan helped us build a routine that actually worked. I can finally leave the house without guilt.",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Cooper",
      breed: "Mixed Breed",
      problem: "Aggressive Barking",
      time: "6 days",
      quote: "The 'Quiet Command' logic from the AI coach is genius. The neighbors have actually commented on how calm he is now.",
      image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div className="bg-bg-soft min-h-screen">
      {/* Simple Nav */}
      <nav className="p-6 max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <Brain className="w-6 h-6 text-primary-neural" />
          <span className="font-display font-bold text-xl text-primary-neural">The Dog Coach</span>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        {/* Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight underline decoration-accent-coral decoration-4">
            12,000+ Happy Ends
          </h1>
          <p className="text-xl text-gray-500">
            Real owners, real dogs, and scientifically proven results powered by adaptive AI logic.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[32px] overflow-hidden shadow-soft border border-gray-100 flex flex-col"
            >
              <div className="h-64 relative overflow-hidden">
                <img src={story.image} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" alt={story.name} />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-primary-neural uppercase tracking-widest shadow-lg">
                  Solved in {story.time}
                </div>
              </div>
              <div className="p-8 space-y-6 flex-1 flex flex-col">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-black">{story.name}</h3>
                    <div className="flex text-yellow-500">
                      {[1,2,3,4,5].map(j => <Star key={j} className="w-3 h-3 fill-current" />)}
                    </div>
                  </div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{story.breed} • {story.problem}</p>
                </div>
                
                <div className="bg-bg-soft p-4 rounded-2xl relative italic text-gray-600 text-sm leading-relaxed">
                  <Quote className="w-8 h-8 text-primary-neural/10 absolute -top-2 -left-2 rotate-180" />
                  "{story.quote}"
                </div>

                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center gap-3">
                  <div className="p-2 bg-secondary-trust/10 rounded-lg text-secondary-trust">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-bold text-secondary-trust uppercase tracking-widest">Behavior Stabilized</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-16 border-y border-gray-200">
           {[
             { label: "Active Users", value: "12,482", icon: <Heart /> },
             { label: "Success Rate", value: "94.2%", icon: <TrendingUp /> },
             { label: "AI Decision/Sec", value: "24.8k", icon: <Brain /> },
             { label: "Global Rating", value: "4.9/5", icon: <Star /> },
           ].map((stat, i) => (
             <div key={i} className="text-center space-y-2">
                <div className="flex items-center justify-center text-primary-neural opacity-50 mb-2">
                   {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-black text-primary-neural">{stat.value}</div>
                <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
             </div>
           ))}
        </div>

        {/* Final CTA */}
        <div className="bg-text-slate text-white rounded-[40px] p-8 md:p-20 text-center space-y-8 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-neural/20 to-transparent"></div>
           <h2 className="text-3xl md:text-5xl font-bold relative z-10 italic">Be our next success story.</h2>
           <p className="text-white/60 max-w-xl mx-auto relative z-10">
             Your dog isn't "bad." They just need the right communication. The AI Coach finds exactly what speaks to {stories[0].name.toLowerCase()}, {stories[1].name.toLowerCase()}, and yours.
           </p>
           <button 
            onClick={() => navigate('/quiz')}
            className="bg-accent-coral text-white px-12 py-5 rounded-full text-xl font-bold shadow-xl hover:bg-opacity-90 transition-all scale-110 active:scale-100 relative z-10"
           >
             Get Started Now
           </button>
           <div className="flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-widest white/40 relative z-10">
              <ShieldCheck className="w-5 h-5 text-secondary-trust" />
              100% Risk Free • 14 Day Guarantee
           </div>
        </div>
      </div>
    </div>
  );
}
