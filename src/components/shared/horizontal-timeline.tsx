'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, Settings, Briefcase, Code, GraduationCap, Smartphone, Flag } from 'lucide-react';
import { experience } from '@/data';

const getIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes('web')) return Code;
  if (t.includes('partner')) return GraduationCap;
  if (t.includes('ai+')) return Smartphone;
  if (t.includes('president')) return Flag;
  return Briefcase;
};

export default function HorizontalTimeline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev < experience.length - 1 ? prev + 1 : 0));
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const prevSlide = () => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  const nextSlide = () => setCurrentIndex((prev) => (prev < experience.length - 1 ? prev + 1 : prev));

  if (!experience || experience.length === 0) return null;

  const activeItem = experience[currentIndex];

  return (
    <div className="w-full relative py-10 px-4 bg-gradient-to-b from-[#0b1722]/40 to-[#0d222e]/30 backdrop-blur-md text-slate-300 font-sans overflow-hidden rounded-2xl my-4 border border-white/5 shadow-xl">
      {/* Top Controls: Pagination Dots, < | Play | >, Counter */}
      <div className="flex flex-col items-center gap-4 mb-12 relative z-20">
        
        {/* Pagination Dots above buttons */}
        <div className="flex gap-3 mb-2">
          {experience.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 shadow-sm ${
                i === currentIndex ? 'bg-[#00f0ff] scale-125 shadow-[0_0_8px_rgba(0,240,255,0.6)]' : 'bg-slate-600 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Buttons and Counter */}
        <div className="flex items-center gap-4">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="w-8 h-8 rounded-full bg-[#1a2b3c]/50 backdrop-blur-sm flex items-center justify-center hover:bg-[#20364a]/80 disabled:opacity-30 transition-all border border-slate-700/50 shadow-sm text-slate-300"
          >
            <ChevronLeft size={16} />
          </button>
          
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-8 h-8 rounded-full bg-[#1a2b3c]/50 backdrop-blur-sm flex items-center justify-center hover:bg-[#20364a]/80 transition-all border border-slate-700/50 shadow-sm text-slate-300"
          >
            {isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" className="ml-0.5" />}
          </button>
          
          <button
            onClick={nextSlide}
            disabled={currentIndex === experience.length - 1}
            className="w-8 h-8 rounded-full bg-[#1a2b3c]/50 backdrop-blur-sm flex items-center justify-center hover:bg-[#20364a]/80 disabled:opacity-30 transition-all border border-slate-700/50 shadow-sm text-slate-300"
          >
            <ChevronRight size={16} />
          </button>

          <span className="ml-2 font-mono text-xs tracking-widest text-slate-400 font-medium">
            {currentIndex + 1} / {experience.length}
          </span>
        </div>
      </div>

      {/* Timeline Visuals */}
      <div className="relative w-full max-w-5xl mx-auto h-[80px] overflow-hidden mb-8">
        
        {/* Background Tick Marks Line */}
        {/* Adds minor ticks across the entire width */}
        <div 
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[6px] opacity-10"
          style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 19px, #fff 19px, #fff 20px)' }}
        />
        
        {/* Continuous Solid Axis Line */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-slate-500/30" />

        {/* Center active highlighted area (optional focus indicator) */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[200px] pointer-events-none z-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />

        {/* Moving Items Container */}
        <motion.div 
          className="absolute inset-y-0 left-1/2 flex items-center z-10"
          animate={{ x: `calc(-${currentIndex * 200}px - 100px)` }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        >
          {experience.map((item, i) => {
            const isActive = i === currentIndex;
            const shortYear = item.year.match(/\d{4}/)?.[0] || item.year.split(' ')[0];
            const Icon = getIcon(item.title);
            
            return (
              <div 
                key={i} 
                className="flex flex-col items-center justify-center relative cursor-pointer group w-[200px] shrink-0 h-full"
                onClick={() => setCurrentIndex(i)}
              >
                {/* Year Label (Above the axis) */}
                <span className={`absolute bottom-6 font-mono text-xs md:text-sm font-semibold tracking-wider transition-colors duration-300 ${isActive ? 'text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]' : 'text-slate-500 group-hover:text-slate-300'}`}>
                  {shortYear}
                </span>

                {/* Major Tick Mark on the Axis */}
                <div className={`w-[1px] h-3 transition-colors duration-300 absolute top-1/2 -translate-y-1/2 ${isActive ? 'bg-[#00f0ff]' : 'bg-slate-500'}`} />

                {/* Icon (Below the axis) */}
                <div className={`absolute top-6 transition-colors duration-300 ${isActive ? 'text-[#00f0ff]' : 'text-slate-500 group-hover:text-slate-300'}`}>
                  <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                </div>

                {/* Active Indicator Line and Large Gear */}
                {isActive && (
                  <motion.div 
                    layoutId="activeTimelineConnector"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[2px] h-12 bg-gradient-to-b from-[#00f0ff] to-transparent z-10"
                  />
                )}
                {isActive && (
                  <motion.div 
                    layoutId="activeGearIcon"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="absolute top-[calc(50%+40px)] text-[#00f0ff] z-20"
                  >
                    <Settings 
                      size={28} 
                      strokeWidth={2.5} 
                      className="drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]" 
                      style={{ animation: isPlaying ? 'spin 4s linear infinite' : 'none' }}
                    />
                  </motion.div>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Info Card containing details of the active item */}
      <div className="w-full max-w-2xl mx-auto mt-16 mb-2 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0b1115]/50 backdrop-blur-lg border border-white/10 rounded-xl p-6 md:p-8 text-center shadow-[0_15px_30px_-15px_rgba(0,0,0,0.5)]"
          >
            <h3 className="text-lg md:text-xl font-bold text-[#00f0ff] mb-2 drop-shadow-sm">{activeItem.title}</h3>
            <div className="text-xs font-semibold text-slate-400 mb-4 uppercase tracking-wide">
              {activeItem.company} &bull; {activeItem.year}
            </div>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              {activeItem.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
