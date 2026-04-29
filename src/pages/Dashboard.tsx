import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Brain, 
  MessageCircle, 
  CheckCircle2, 
  Settings, 
  Bell, 
  Calendar, 
  TrendingUp,
  Send,
  User,
  ArrowRight,
  Zap
} from 'lucide-react';
import { chatWithAI } from '../services/geminiService';
import { getDogImage } from '../lib/dogImages';

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'plan' | 'chat' | 'stats'>('plan');
  const [data, setData] = useState<any>(null);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('thedogcoach_quiz');
    if (saved) {
      const parsedData = JSON.parse(saved);
      setData(parsedData);
      setMessages([
        { role: 'ai', text: `Welcome back! I'm ready to continue our training session. How was ${parsedData.name || 'Buddy'}'s walk this morning?` }
      ]);
    }
  }, []);

  const handleSend = async () => {
    if (!chatInput.trim() || isTyping) return;
    
    const userMessage = chatInput;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setChatInput("");
    setIsTyping(true);
    
    try {
      const history = messages.map(m => ({
        role: m.role === 'user' ? 'user' as const : 'model' as const,
        parts: [{ text: m.text }]
      }));

      const systemInstruction = `
        You are The Dog Coach, an expert AI dog behaviorist.
        The user's dog is named ${data?.name || 'the dog'}.
        Breed: ${data?.breed || 'Unknown'}.
        Age: ${data?.age || 'Unknown'}.
        Primary Problem: ${data?.issue || 'Unspecified behavioral issue'}.
        
        Your goal is to provide scientific, positive-reinforcement based advice.
        Be encouraging, tactical, and clear.
        Keep responses concise (under 100 words ideally) but impactful.
        Always refer to the dog by name: ${data?.name || 'Buddy'}.
      `;

      const aiResponse = await chatWithAI(userMessage, history, systemInstruction);
      
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: aiResponse || "I'm sorry, I couldn't process that. Can you try rephrasing?" 
      }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: "I'm having a little trouble connecting to my digital brain. Please try again in a moment!" 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  if (!data) return null;

  return (
    <div className="flex-1 bg-bg-soft flex flex-col md:flex-row h-screen">
      {/* Sidebar / Bottom Nav for Mobile */}
      <div className="w-full md:w-20 lg:w-64 bg-white border-r border-t md:border-t-0 border-gray-100 flex md:flex-col items-center py-4 md:py-6 px-4 gap-8 order-2 md:order-1">
        <div className="hidden md:flex bg-primary-neural p-2 rounded-xl" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
           <Brain className="w-8 h-8 text-white" />
        </div>
        <nav className="flex-1 flex justify-around md:flex-col gap-6 md:gap-8 items-center text-gray-400 w-full">
           <button 
            onClick={() => setActiveTab('plan')}
            className={`p-2 rounded-xl transition-all ${activeTab === 'plan' ? 'text-primary-neural bg-primary-neural/10' : 'hover:bg-gray-100'}`}
           >
              <Calendar className="w-6 h-6" />
           </button>
           <button 
            onClick={() => setActiveTab('chat')}
            className={`p-2 rounded-xl transition-all ${activeTab === 'chat' ? 'text-primary-neural bg-primary-neural/10' : 'hover:bg-gray-100'}`}
           >
              <MessageCircle className="w-6 h-6" />
           </button>
           <button 
            onClick={() => setActiveTab('stats')}
            className={`p-2 rounded-xl transition-all ${activeTab === 'stats' ? 'text-primary-neural bg-primary-neural/10' : 'hover:bg-gray-100'}`}
           >
              <TrendingUp className="w-6 h-6" />
           </button>
        </nav>
        <button className="p-2 text-gray-400 hover:text-primary-neural hidden md:block">
           <Settings className="w-6 h-6" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Nav */}
        <header className="h-16 md:h-20 bg-white border-b border-gray-100 px-4 md:px-6 flex items-center justify-between">
           <div className="flex items-center gap-4">
              <h1 className="font-display font-extrabold text-lg md:text-xl truncate max-w-[200px] md:max-w-none">
                {activeTab === 'plan' && `Morning, ${data.name}!`}
                {activeTab === 'chat' && `Coach`}
                {activeTab === 'stats' && `${data.name}'s Stats`}
              </h1>
              <div className="hidden lg:flex items-center gap-2 bg-secondary-trust/10 text-secondary-trust px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                 <Zap className="w-3 h-3" />
                 Day 3 of 14
              </div>
           </div>
           <div className="flex items-center gap-4">
              <button className="p-2 text-gray-400 hover:text-primary-neural relative">
                 <Bell className="w-5 h-5 md:w-6 md:h-6" />
                 <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent-coral rounded-full"></span>
              </button>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary-neural/10 overflow-hidden border-2 border-white shadow-sm">
                 <img src={getDogImage(data.breed)} alt={data.name} className="w-full h-full object-cover" />
              </div>
           </div>
        </header>

        <main className="flex-1 flex flex-col lg:flex-row gap-6 p-4 md:p-6 overflow-hidden">
           {/* Dynamic Content Based on activeTab */}
           <div className="flex-1 flex flex-col gap-6 overflow-y-auto pr-2">
              
              {activeTab === 'plan' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {/* Daily Checklist */}
                  <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-bold text-lg">Today's Missions</h2>
                        <span className="text-sm font-bold text-primary-neural">60% Complete</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        { label: "5-min Sensory Enrichment", done: true },
                        { label: "Pattern Interruption training", done: true },
                        { label: "10-min Recall Session", done: false },
                        { label: "Nightly Mood Log", done: false },
                      ].map((item, i) => (
                        <div key={i} className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${item.done ? 'bg-bg-soft border-gray-100 opacity-60' : 'bg-white border-gray-100 shadow-sm'}`}>
                            <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${item.done ? 'bg-secondary-trust text-white' : 'border-2 border-gray-200'}`}>
                              {item.done && <CheckCircle2 className="w-4 h-4" />}
                            </div>
                            <span className={`text-sm font-medium ${item.done ? 'line-through' : ''}`}>{item.label}</span>
                            {!item.done && <ArrowRight className="w-4 h-4 ml-auto text-primary-neural" />}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Miniature Chat Preview */}
                  <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm flex items-center justify-between group cursor-pointer" onClick={() => setActiveTab('chat')}>
                     <div className="flex items-center gap-4">
                        <div className="bg-primary-neural p-3 rounded-2xl text-white">
                           <MessageCircle className="w-6 h-6" />
                        </div>
                        <div>
                           <p className="font-bold">Chat with Coach</p>
                           <p className="text-xs text-gray-400 font-medium">Last active: 2 mins ago</p>
                        </div>
                     </div>
                     <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-primary-neural transition-colors" />
                  </div>
                </motion.div>
              )}

              {activeTab === 'chat' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }} 
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex-1 bg-white rounded-[24px] border border-gray-100 shadow-sm flex flex-col overflow-hidden"
                >
                  <div className="p-4 border-b border-gray-100 bg-primary-neural text-white flex items-center justify-between font-display">
                      <div className="flex items-center gap-3">
                        <div className="bg-white/20 p-2 rounded-lg">
                            <Brain className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm font-bold">The AI Coach</p>
                            <p className="text-[10px] opacity-70 uppercase tracking-widest font-bold">Online & Analyzing</p>
                        </div>
                      </div>
                      <button onClick={() => setActiveTab('plan')} className="text-xs font-bold bg-white/20 px-3 py-1.5 rounded-full hover:bg-white/30 transition-all">Back to Plan</button>
                  </div>
                  
                  <div className="flex-1 p-4 overflow-y-auto space-y-4">
                      {messages.map((m, i) => (
                        <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] p-4 rounded-[20px] text-sm ${
                              m.role === 'user' 
                              ? 'bg-primary-neural text-white rounded-br-none shadow-md' 
                              : 'bg-bg-soft text-text-slate rounded-bl-none border border-gray-100'
                            }`}>
                              {m.text}
                            </div>
                        </div>
                      ))}
                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="bg-bg-soft text-text-slate p-4 rounded-[20px] rounded-bl-none text-sm flex gap-1 border border-gray-100">
                            <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1 }}>•</motion.span>
                            <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}>•</motion.span>
                            <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}>•</motion.span>
                          </div>
                        </div>
                      )}
                  </div>

                  <div className="p-4 border-t border-gray-100 flex gap-2 bg-white">
                      <input 
                        type="text" 
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask your AI coach anything..."
                        className="flex-1 bg-bg-soft rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 ring-primary-neural/20 transition-all"
                      />
                      <button 
                        onClick={handleSend}
                        disabled={isTyping}
                        className="bg-primary-neural text-white p-3 rounded-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 shadow-md"
                      >
                        <Send className="w-5 h-5" />
                      </button>
                  </div>
                </motion.div>
              )}

              {activeTab === 'stats' && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm text-center">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Total Commands</p>
                        <p className="text-5xl font-black text-primary-neural">128</p>
                     </div>
                     <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm text-center">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Success Rate</p>
                        <p className="text-5xl font-black text-secondary-trust">92%</p>
                     </div>
                  </div>
                  
                  <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                     <h3 className="font-bold mb-6">Learning Curve</h3>
                     <div className="space-y-6">
                        {[
                          { label: "Recall", val: 80, color: "bg-primary-neural" },
                          { label: "Focus", val: 65, color: "bg-secondary-trust" },
                          { label: "Impulse Control", val: 40, color: "bg-accent-coral" },
                        ].map((s, i) => (
                          <div key={i} className="space-y-2">
                             <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                                <span>{s.label}</span>
                                <span>{s.val}%</span>
                             </div>
                             <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }} 
                                  animate={{ width: `${s.val}%` }} 
                                  className={`h-full ${s.color}`} 
                                />
                             </div>
                          </div>
                        ))}
                     </div>
                  </div>
                </motion.div>
              )}
           </div>

           {/* Stats Column (Only visible in Plan view for Desktop) */}
           {activeTab === 'plan' && (
             <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full lg:w-80 space-y-6 hidden lg:block"
             >
                <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm space-y-4">
                  <h2 className="font-bold text-lg">Weekly Progress</h2>
                  <div className="flex items-center gap-4 pt-4">
                      <div className="bg-primary-neural/5 p-4 rounded-2xl">
                        <TrendingUp className="w-8 h-8 text-primary-neural" />
                      </div>
                      <div>
                        <p className="text-2xl font-black text-text-slate">+42%</p>
                        <p className="text-xs font-bold text-gray-400">Behavioral Stability</p>
                      </div>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-primary-neural w-[42%]"></div>
                  </div>
                  <button onClick={() => setActiveTab('stats')} className="text-xs font-bold text-primary-neural hover:underline pt-2">Detailed Statistics →</button>
                </div>

                <div className="bg-secondary-trust p-6 rounded-[24px] text-white space-y-4 shadow-lg shadow-secondary-trust/20">
                  <h3 className="font-bold">Next Milestone</h3>
                  <p className="text-sm opacity-90 leading-relaxed">
                    Complete today's Recall session to unlock the "Crowded Park" challenge.
                  </p>
                  <button className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-xl text-sm font-bold transition-all">
                      View Challenges
                  </button>
                </div>
             </motion.div>
           )}
        </main>
      </div>
    </div>
  );
}
