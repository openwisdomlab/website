'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export function GlitchText({
  children,
  className,
  intensity = 'medium',
}: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = React.useState(false);

  React.useEffect(() => {
    const intervalTime = intensity === 'high' ? 2000 : intensity === 'medium' ? 4000 : 6000;
    const glitchDuration = intensity === 'high' ? 300 : intensity === 'medium' ? 200 : 100;

    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), glitchDuration);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [intensity]);

  return (
    <span
      className={cn(
        'relative inline-block',
        isGlitching && 'animate-glitch-text',
        className
      )}
      data-text={typeof children === 'string' ? children : undefined}
    >
      {children}
      {/* Glitch layers */}
      <span
        className={cn(
          'absolute inset-0 opacity-0',
          isGlitching && 'opacity-80 text-neon-pink -translate-x-[2px] translate-y-[1px]'
        )}
        aria-hidden="true"
        style={{ clipPath: 'inset(20% 0 30% 0)' }}
      >
        {children}
      </span>
      <span
        className={cn(
          'absolute inset-0 opacity-0',
          isGlitching && 'opacity-80 text-neon-blue translate-x-[2px] -translate-y-[1px]'
        )}
        aria-hidden="true"
        style={{ clipPath: 'inset(50% 0 10% 0)' }}
      >
        {children}
      </span>
    </span>
  );
}

// Animated Glitch Text with Framer Motion
interface AnimatedGlitchTextProps {
  text: string;
  className?: string;
}

export function AnimatedGlitchText({ text, className }: AnimatedGlitchTextProps) {
  const letters = text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className={cn('inline-flex', className)}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className={letter === ' ' ? 'w-2' : ''}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
}
