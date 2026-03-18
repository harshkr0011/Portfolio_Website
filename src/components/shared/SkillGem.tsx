'use client';

import { motion } from 'framer-motion';

export const TARGET_SKILLS = [
  { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Tailwind CSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Express.js', isText: true, shortName: 'Ex' },
  { name: 'GitHub', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'SDA (DSA)', isText: true },
  { name: 'Java', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'SQL', isText: true },
  { name: 'HTML', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'C++', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'C', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'PHP', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'jQuery', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg' },
  { name: 'UI/UX', isText: true },
];

export const SkillGem = ({ name, iconUrl, isText, shortName, delay = 0 }: { name: string, iconUrl?: string, isText?: boolean, shortName?: string, delay?: number }) => {
  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3 + (name.length % 2),
        repeat: Infinity,
        ease: "easeInOut",
        delay: (delay % 3) * 0.5
      }
    }
  };

  return (
    <motion.div 
      className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center group cursor-pointer"
      variants={floatVariants}
      initial="initial"
      animate="animate"
      whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0], zIndex: 10, transition: { duration: 0.3 } }}
    >
      {/* 3D Polyhedron SVG Base */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-2xl opacity-90 group-hover:opacity-100 transition-opacity duration-300">
        <polygon points="30,10 70,10 95,40 75,85 25,85 5,40" fill="#2d3748" />
        <polygon points="30,10 70,10 50,35" fill="#4b5563" />
        <polygon points="30,10 50,35 15,35 5,40" fill="#374151" />
        <polygon points="70,10 95,40 85,35 50,35" fill="#1f2937" />
        <polygon points="15,35 50,35 85,35 90,60 50,75 10,60" fill="#111827" />
        <polygon points="10,60 50,75 25,85" fill="#030712" />
        <polygon points="50,75 75,85 90,60" fill="#0f172a" />
        {/* Adds subtle rim light */}
        <polygon points="30,10 70,10 95,40 75,85 25,85 5,40" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
      </svg>
      
      {/* Inner Icon or Text */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {iconUrl && !isText ? (
          <img src={iconUrl} alt={name} className="w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-lg group-hover:drop-shadow-[0_0_15px_rgba(0,240,255,0.6)] transition-all duration-300" />
        ) : (
          <span className="font-bold text-white text-sm md:text-base tracking-wider drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] text-center px-2 leading-tight">
            {shortName || name}
          </span>
        )}
      </div>

      {/* Tooltip Label (custom CSS-based tooltip) */}
      <div className="absolute -bottom-8 bg-black/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20 shadow-xl border border-white/10">
        {name}
      </div>
    </motion.div>
  );
};
