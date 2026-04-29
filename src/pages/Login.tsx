import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Brain, 
  ArrowLeft, 
  Mail, 
  Lock, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { PaymentTrustStrip } from '../components/PaymentTrustStrip';

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="bg-bg-soft min-h-screen flex flex-col">
      {/* Header-minimal */}
      <nav className="p-6 max-w-7xl mx-auto w-full flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
          <div className="flex items-center justify-center overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/d/1PUbju6RYTE2CN5m_n55Xc7AKIo0ubcuF" 
              alt="Logo Icon" 
              className="w-10 h-10 object-contain"
              style={{ filter: 'invert(1)' }}
              referrerPolicy="no-referrer"
            />
          </div>
          <img 
            src="https://lh3.googleusercontent.com/d/1vN7uB3yL8M2C4z-yv_Y_Z4jT3o7Q5g1R" 
            alt="The Dog Coach" 
            className="h-6 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        <button onClick={() => navigate('/')} className="text-sm font-bold text-gray-400 hover:text-primary-neural flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
      </nav>

      <div className="flex-1 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white w-full max-w-md p-8 md:p-12 rounded-[40px] shadow-soft border border-gray-100 space-y-8"
        >
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-black italic">Welcome back</h1>
            <p className="text-gray-500 text-sm font-medium">Continue Buddy's transformation plan.</p>
          </div>

          {/* Social Logins */}
          <div className="space-y-3">
             <button className="w-full py-4 border-2 border-gray-100 rounded-2xl flex items-center justify-center gap-3 font-bold text-sm hover:bg-bg-soft transition-all">
                <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" referrerPolicy="no-referrer" />
                Continue with Google
             </button>
             <button className="w-full py-4 bg-text-slate text-white rounded-2xl flex items-center justify-center gap-3 font-bold text-sm hover:opacity-90 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.671-1.48 3.671-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2.044-.146-3.43 1.04-3.43 1.04zM15.144 3.513c.857-1.04 1.441-2.467 1.285-3.896-1.22.052-2.701.815-3.577 1.831-.779.896-1.468 2.364-1.285 3.73 1.35.104 2.73-.624 3.577-1.665z"/></svg>
                Continue with Apple
             </button>
          </div>

          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-gray-100"></div>
            <span className="flex-shrink mx-4 text-xs font-bold text-gray-300 uppercase tracking-widest">or email</span>
            <div className="flex-grow border-t border-gray-100"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Account Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                <input 
                  required
                  type="email" 
                  placeholder="name@email.com"
                  className="w-full bg-bg-soft rounded-2xl py-4 pl-12 pr-4 text-sm font-medium outline-none focus:ring-2 ring-primary-neural/20 transition-all border border-transparent focus:border-primary-neural/30"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Password</label>
                <button type="button" className="text-[10px] font-bold text-primary-neural hover:underline">Forgot?</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                <input 
                  required
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-bg-soft rounded-2xl py-4 pl-12 pr-4 text-sm font-medium outline-none focus:ring-2 ring-primary-neural/20 transition-all border border-transparent focus:border-primary-neural/30"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary-neural text-white py-5 rounded-2xl font-bold text-lg shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  Access Plan
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <div className="text-center pt-4">
             <p className="text-sm text-gray-500 font-medium">
               New here?{' '}
               <button 
                onClick={() => navigate('/quiz')}
                className="text-accent-coral font-bold hover:underline"
               >
                 Start Buddy's quiz
               </button>
             </p>
          </div>

          <div className="flex justify-center items-center gap-2 text-[10px] font-black text-gray-300 uppercase tracking-widest">
             <ShieldCheck className="w-3 h-3 text-secondary-trust" />
             Secure Encrypted Access
          </div>
        </motion.div>
      </div>

      <footer className="p-8 text-center text-gray-400 text-[10px] uppercase tracking-widest font-bold space-y-6">
        <PaymentTrustStrip />
        <p>© 2026 The Dog Coach • Discover Group Sàrl</p>
      </footer>
    </div>
  );
}
