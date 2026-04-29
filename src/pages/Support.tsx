import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Brain, 
  Mail, 
  MessageSquare, 
  HelpCircle, 
  ArrowLeft,
  Send,
  CheckCircle2
} from 'lucide-react';
import { PaymentTrustStrip } from '../components/PaymentTrustStrip';

export default function Support() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-bg-soft min-h-screen pb-20">
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="flex items-center justify-center overflow-hidden">
              <img 
                src="https://raw.githubusercontent.com/gvnfnr/The-Dog-Coach-/main/src/DogCoachingwhite500px.png" 
                alt="Logo Icon" 
                className="w-10 h-10 object-contain"
                style={{ filter: 'invert(1)' }}
                referrerPolicy="no-referrer"
              />
            </div>
            <img 
              src="https://raw.githubusercontent.com/gvnfnr/The-Dog-Coach-/main/src/dogcoachtext.png" 
              alt="The Dog Coach" 
              className="h-8 md:h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
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

      <div className="max-w-7xl mx-auto px-4 pt-32 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Info Column */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              We're here to <br /> help you & Buddy
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
              Have questions about your plan? Need help with your subscription? Or just want to share a success story? Our team is standing by.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white p-6 rounded-[32px] shadow-soft border border-gray-100 flex items-center gap-4">
              <div className="bg-primary-neural/10 p-3 rounded-2xl text-primary-neural">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email us</p>
                <p className="font-bold text-lg select-all">contact@thedogcoach.co</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-[32px] shadow-soft border border-gray-100 flex items-center gap-4">
              <div className="bg-secondary-trust/10 p-3 rounded-2xl text-secondary-trust">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">AI Assistance</p>
                <p className="font-bold text-lg">24/7 in-app support</p>
              </div>
            </div>
          </div>

          <div className="pt-8 space-y-4">
            <h3 className="font-bold text-gray-400 uppercase tracking-widest text-xs">Our Office</h3>
            <p className="text-gray-500 font-medium">
              Discover Group Sàrl
            </p>
          </div>
        </div>

        {/* Form Column */}
        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-soft border border-gray-100 relative overflow-hidden">
           <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Your Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Jane Doe"
                      className="w-full bg-bg-soft rounded-2xl p-4 text-sm font-medium outline-none focus:ring-2 ring-primary-neural/20 transition-all border border-transparent focus:border-primary-neural/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="jane@example.com"
                      className="w-full bg-bg-soft rounded-2xl p-4 text-sm font-medium outline-none focus:ring-2 ring-primary-neural/20 transition-all border border-transparent focus:border-primary-neural/30"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Subject</label>
                  <select className="w-full bg-bg-soft rounded-2xl p-4 text-sm font-medium outline-none focus:ring-2 ring-primary-neural/20 transition-all border border-transparent focus:border-primary-neural/30 appearance-none cursor-pointer">
                    <option>Question about my plan</option>
                    <option>Subscription & Billing</option>
                    <option>Technical Issue</option>
                    <option>General Feedback</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Message</label>
                  <textarea 
                    required
                    rows={6}
                    placeholder="How can we help you?"
                    className="w-full bg-bg-soft rounded-2xl p-4 text-sm font-medium outline-none focus:ring-2 ring-primary-neural/20 transition-all border border-transparent focus:border-primary-neural/30 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-accent-coral text-white py-5 rounded-2xl font-bold text-lg shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
                <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  Typical response time: <span className="text-secondary-trust underline decoration-secondary-trust/30 underline-offset-2">under 4 hours</span>
                </p>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6 pt-12 pb-12"
              >
                <div className="bg-secondary-trust/10 p-8 rounded-full text-secondary-trust mb-4">
                  <CheckCircle2 className="w-16 h-16" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-black italic">Message Barked!</h2>
                  <p className="text-gray-500 max-w-xs mx-auto font-medium">
                    Our team received your message. We'll get back to you faster than Buddy finds a hidden treat.
                  </p>
                </div>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-primary-neural font-bold underline decoration-primary-neural/30 underline-offset-4 hover:decoration-primary-neural"
                >
                  Send another message
                </button>
              </motion.div>
            )}
           </AnimatePresence>

           <div className="absolute -bottom-12 -right-12 opacity-5 pointer-events-none">
              <HelpCircle className="w-64 h-64 text-text-slate" />
           </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 pt-20 border-t border-gray-100 flex flex-col items-center gap-8">
         <PaymentTrustStrip />
         <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">© 2026 THE DOG COACH CO.</p>
      </div>
    </div>
  );
}
