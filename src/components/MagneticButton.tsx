import { useRef, useState } from 'react';
import type { ButtonHTMLAttributes, ReactNode, MouseEvent } from 'react';
import { motion } from 'motion/react';

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  onClick?: (e?: any) => void;
}

export default function MagneticButton({ children, className = '', ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`group relative inline-flex items-center gap-4 py-4 px-8 bg-charcoal text-white overflow-hidden transition-all duration-500 hover:pr-12 ${className}`}
      {...props}
    >
      <span className="relative z-10 text-[11px] uppercase tracking-widest">{children}</span>
      <span className="absolute right-4 translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all z-10">→</span>
      <div className="absolute bottom-0 left-0 h-[2px] bg-gold w-0 group-hover:w-full transition-all duration-500" />
    </motion.button>
  );
}
