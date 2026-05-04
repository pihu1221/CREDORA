import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { MessageSquare, X, Send, Bot, User, Minus, Maximize2 } from 'lucide-react';
import { askGemini } from '../services/geminiService';
import { useLanguage } from '../contexts/LanguageContext';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export function ChatBot() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Initialize Lab Sequence. Hello! I am Credo, your neural career scout. Ready to map your path?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide initial greeting after 8 seconds if not opened
    const timer = setTimeout(() => {
      setShowGreeting(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen, isMinimized]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Prepare history for API
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }] as [{ text: string }]
      }));

      const response = await askGemini(userMessage, history, language);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Neural synchronization error. Please check your connection." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const CredoMascot = ({ className = "", animated = true, waving = false }: { className?: string; animated?: boolean; waving?: boolean }) => (
    <motion.svg 
      viewBox="0 0 100 110" 
      className={`w-full h-full ${className}`} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      animate={animated ? { 
        y: [0, -6, 0],
      } : {}}
      transition={{ 
        duration: 3, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    >
      <defs>
        <radialGradient id="doraemonBody" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </radialGradient>
        <filter id="glow-red">
          <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Legs/Feet */}
      <motion.g
        animate={animated ? { 
          rotateX: [0, 15, 0],
          y: [0, 1, 0]
        } : {}}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ellipse cx="38" cy="98" rx="10" ry="6" fill="white" stroke="#1D4ED8" strokeWidth="1" />
        <ellipse cx="62" cy="98" rx="10" ry="6" fill="white" stroke="#1D4ED8" strokeWidth="1" />
      </motion.g>

      {/* Left Arm (Relaxed) */}
      <motion.circle 
        cx="20" cy="75" r="7" fill="white" stroke="#1D4ED8" strokeWidth="1.5"
      />
      
      {/* Right Arm (Static) */}
      <motion.g
        style={{ originX: '80px', originY: '75px' }}
      >
        <rect x="78" y="70" width="12" height="6" rx="3" fill="#1D4ED8" transform="rotate(-30 78 70)" />
        <circle cx="85" cy="70" r="8" fill="white" stroke="#1D4ED8" strokeWidth="1.5" />
      </motion.g>

      {/* Body */}
      <circle cx="50" cy="72" r="28" fill="url(#doraemonBody)" stroke="white" strokeWidth="1" />
      <circle cx="50" cy="74" r="22" fill="white" /> {/* Stomach */}
      
      {/* 4D Pocket */}
      <path d="M38 74C38 80.6274 43.3726 86 50 86C56.6274 86 62 80.6274 62 74" stroke="#1D4ED8" strokeWidth="1" strokeLinecap="round" />
      <line x1="38" y1="74" x2="62" y2="74" stroke="#1D4ED8" strokeWidth="1" />

      {/* Collar & Bell */}
      <rect x="25" y="55" width="50" height="4" rx="2" fill="#EF4444" />
      <motion.circle 
        cx="50" cy="62" r="5" fill="#FBBF24" stroke="#854d0e" strokeWidth="0.5"
      />
      <circle cx="50" cy="63" r="1.5" fill="#854d0e" />
      <line x1="50" y1="63" x2="50" y2="67" stroke="#854d0e" strokeWidth="0.5" />

      {/* Head */}
      <circle cx="50" cy="35" r="35" fill="url(#doraemonBody)" stroke="white" strokeWidth="1" />
      <ellipse cx="50" cy="38" rx="28" ry="25" fill="white" /> 

      {/* Face Details */}
      <g>
        {/* Eyes */}
        <circle cx="42" cy="24" r="8" fill="white" stroke="#1D4ED8" strokeWidth="1" />
        <circle cx="58" cy="24" r="8" fill="white" stroke="#1D4ED8" strokeWidth="1" />
        
        {/* Pupils */}
        <motion.circle 
          cx="42" cy="24" r="2.5" fill="black"
          animate={animated ? { scaleY: [1, 0.1, 1] } : {}}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.95, 1] }}
        />
        <motion.circle 
          cx="58" cy="24" r="2.5" fill="black"
          animate={animated ? { scaleY: [1, 0.1, 1] } : {}}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.95, 1] }}
        />
      </g>

      {/* Nose */}
      <circle cx="50" cy="34" r="4" fill="#EF4444" filter="url(#glow-red)" />
      
      {/* Mouth & Whiskers */}
      <path d="M50 38V50" stroke="black" strokeWidth="1" />
      <path d="M35 48C40 52 60 52 65 48" stroke="black" strokeWidth="1" fill="none" />
      
      <g stroke="black" strokeWidth="0.8" opacity="0.6">
        <line x1="25" y1="35" x2="38" y2="38" />
        <line x1="25" y1="42" x2="38" y2="42" />
        <line x1="25" y1="49" x2="38" y2="46" />
        
        <line x1="75" y1="35" x2="62" y2="38" />
        <line x1="75" y1="42" x2="62" y2="42" />
        <line x1="75" y1="49" x2="62" y2="46" />
      </g>
    </motion.svg>
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Greeting Bubble */}
      <AnimatePresence>
        {!isOpen && showGreeting && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: -20, scale: 1 }} // Moved up to avoid hiding Doraemon
            exit={{ opacity: 0, scale: 0.8 }}
            className="mb-40 mr-2 bg-white text-slate-900 px-6 py-3 rounded-2xl shadow-2xl relative border-2 border-blue-600 font-black uppercase tracking-widest text-[11px] z-20"
          >
            Hello! I'm Doraemon.
            {/* Tooltip Arrow */}
            <div className="absolute bottom-[-10px] right-6 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-blue-600" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? '60px' : '500px',
              width: '380px'
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-[#0A0A0A] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col mb-4 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/5 flex items-center justify-between bg-blue-600/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 p-1">
                  <CredoMascot waving={true} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-tighter">Credo Specialist</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Neural Scout Active</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1.5 rounded-lg hover:bg-white/5 text-slate-500 transition-colors"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minus className="w-4 h-4" />}
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-white/5 text-slate-500 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Content */}
            {!isMinimized && (
              <>
                <div 
                  ref={scrollRef}
                  className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-hide"
                >
                  {messages.map((m, i) => (
                    <div 
                      key={i} 
                      className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex gap-3 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center p-0.5 ${m.role === 'user' ? 'bg-slate-800' : 'bg-blue-600/20'}`}>
                          {m.role === 'user' ? <User className="w-4 h-4 text-slate-400" /> : <CredoMascot />}
                        </div>
                        <div className={`p-3 rounded-2xl text-sm ${
                          m.role === 'user' 
                          ? 'bg-blue-600 text-white font-medium shadow-lg shadow-blue-600/10' 
                          : 'bg-white/5 text-slate-300 border border-white/5'
                        }`}>
                          {m.text}
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex gap-3 max-w-[85%]">
                        <div className="w-8 h-8 rounded-lg bg-blue-600/20 p-0.5">
                          <CredoMascot waving={true} />
                        </div>
                        <div className="bg-white/5 p-3 rounded-2xl flex items-center gap-2 border border-white/5">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" />
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4 border-t border-white/5 bg-black/40">
                  <form 
                    onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                    className="relative"
                  >
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask Credo about your tactical DNA..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-all font-medium"
                    />
                    <button 
                      type="submit"
                      disabled={!input.trim() || isLoading}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-50 disabled:grayscale transition-all shadow-lg shadow-blue-600/20"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                  <p className="text-[9px] text-center text-slate-600 mt-2 font-black uppercase tracking-widest">
                    Neural Engine powered by Gemini 3 Flash
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative group">
        {!isOpen && (
          <motion.div 
            initial={{ y: 0 }}
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, -2, 2, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute -top-16 -left-8 w-20 h-20 pointer-events-none z-10"
          >
            <CredoMascot animated={true} waving={showGreeting} />
            <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full scale-50" />
          </motion.div>
        )}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsOpen(!isOpen);
            setShowGreeting(false);
          }}
          className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl transition-all ${
            isOpen 
            ? 'bg-slate-900 border border-white/10 text-white' 
            : 'bg-blue-600 text-white shadow-blue-600/40'
          }`}
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </motion.button>
      </div>
    </div>
  );
}
