import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Dog, 
  Menu, 
  X, 
  Star, 
  Volume2, 
  Magnet, 
  Clock, 
  ShieldAlert, 
  MessageCircle, 
  Droplets,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Brain,
  Zap,
  Lock,
  ArrowLeft,
  ChevronDown
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utils ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Context ---
interface AppState {
  quizData: Record<string, any>;
  setQuizData: (data: Record<string, any>) => void;
}
const AppContext = createContext<AppState | undefined>(undefined);

function useAppState() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppState must be used within AppProvider");
  return context;
}

// --- Components ---

const Button = ({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md',
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'ghost' | 'accent', size?: 'sm' | 'md' | 'lg' | 'xl' }) => {
  const variants = {
    primary: 'bg-primary-neural text-white hover:bg-opacity-90 shadow-soft',
    secondary: 'bg-secondary-trust text-white hover:bg-opacity-90',
    ghost: 'bg-transparent border-2 border-primary-neural text-primary-neural hover:bg-primary-neural/5',
    accent: 'bg-accent-coral text-white hover:bg-opacity-90 shadow-soft font-bold'
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  return (
    <button 
      className={cn(
        "rounded-full transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// --- Pages ---

import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Dashboard from './pages/Dashboard';
import HowItWorks from './pages/HowItWorks';
import ResultsGallery from './pages/ResultsGallery';
import PricingPage from './pages/PricingPage';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Refund from './pages/Refund';
import Support from './pages/Support';
import Login from './pages/Login';
import CookieBanner from './components/CookieBanner';

export default function App() {
  const [quizData, setQuizData] = useState<Record<string, any>>({});

  return (
    <AppContext.Provider value={{ quizData, setQuizData }}>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/results" element={<ResultsGallery />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/support" element={<Support />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <CookieBanner />
        </div>
      </Router>
    </AppContext.Provider>
  );
}
