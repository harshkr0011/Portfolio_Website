import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const COLORS = [
  '#60a5fa', // blue
  '#a78bfa', // purple
  '#f472b6', // pink
  '#facc15', // yellow
  '#34d399', // green
  '#60a5fa', // blue (loop)
];

function lerpColor(a: string, b: string, t: number) {
  // Simple linear interpolation between two hex colors
  const ah = a.replace('#', '');
  const bh = b.replace('#', '');
  const ar = parseInt(ah.substring(0, 2), 16);
  const ag = parseInt(ah.substring(2, 4), 16);
  const ab = parseInt(ah.substring(4, 6), 16);
  const br = parseInt(bh.substring(0, 2), 16);
  const bg = parseInt(bh.substring(2, 4), 16);
  const bb = parseInt(bh.substring(4, 6), 16);
  const rr = Math.round(ar + (br - ar) * t);
  const rg = Math.round(ag + (bg - ag) * t);
  const rb = Math.round(ab + (bb - ab) * t);
  return `rgb(${rr},${rg},${rb})`;
}

export default function AnimatedCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState(COLORS[0]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setPos({ x: e.clientX, y: e.clientY });
      // Color based on horizontal position
      const w = window.innerWidth;
      const t = e.clientX / w;
      const idx = Math.floor(t * (COLORS.length - 1));
      const nextIdx = Math.min(idx + 1, COLORS.length - 1);
      const localT = (t * (COLORS.length - 1)) % 1;
      setColor(lerpColor(COLORS[idx], COLORS[nextIdx], localT));
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [mouseX, mouseY]);

  // Hide cursor on touch devices
  useEffect(() => {
    const handleTouch = () => {
      setPos({ x: -100, y: -100 });
    };
    window.addEventListener('touchstart', handleTouch);
    return () => window.removeEventListener('touchstart', handleTouch);
  }, []);

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        x: springX,
        y: springY,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          background: color,
          boxShadow: `0 0 24px 4px ${color}`,
          opacity: 0.7,
          mixBlendMode: 'difference',
        }}
      />
    </motion.div>
  );
} 