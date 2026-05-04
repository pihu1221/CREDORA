import React from 'react';
import { motion } from 'motion/react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Logo({ className = "", showText = true, size = 'md' }: LogoProps) {
  const sizes = {
    sm: { icon: 'w-6 h-6', text: 'text-lg', gap: 'gap-2' },
    md: { icon: 'w-8 h-8', text: 'text-xl', gap: 'gap-3' },
    lg: { icon: 'w-10 h-10', text: 'text-2xl', gap: 'gap-3' },
    xl: { icon: 'w-12 h-12', text: 'text-3xl', gap: 'gap-4' },
  };

  const currentSize = sizes[size];

  return (
    <div className={`flex items-center ${currentSize.gap} ${className}`}>
      <div className={`relative ${currentSize.icon}`}>
        {/* The 'C' Shape */}
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full text-slate-900 dark:text-white transition-colors duration-300"
          fill="currentColor"
        >
          <path d="M75 15C68 10 59 8 50 8C27 8 8 27 8 50C8 73 27 92 50 92C65 92 78 84 85 72L65 65C62 70 56 74 50 74C37 74 26 63 26 50C26 37 37 26 50 26C56 26 62 30 65 35L85 28C82 22 79 18 75 15Z" />
        </svg>
        
        {/* The 'i' Dot */}
        <motion.div 
          className="absolute top-[25%] right-[15%] w-[20%] h-[20%] bg-blue-500 rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* The 'i' Stem (Slanted) */}
        <div 
          className="absolute bottom-[25%] right-[20%] w-[12%] h-[35%] bg-blue-500 rounded-full transform rotate-[20deg]"
        />
      </div>

      {showText && (
        <span className={`${currentSize.text} font-display font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-300`}>
          CREDORA
        </span>
      )}
    </div>
  );
}
