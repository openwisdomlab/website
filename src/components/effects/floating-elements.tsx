'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FloatingElementsProps {
  className?: string;
  count?: number;
  variant?: 'circles' | 'squares' | 'mixed' | 'code';
}

export function FloatingElements({
  className,
  count = 6,
  variant = 'mixed',
}: FloatingElementsProps) {
  const elements = React.useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      type: variant === 'mixed'
        ? ['circle', 'square', 'triangle'][i % 3]
        : variant === 'code'
        ? 'code'
        : variant === 'circles'
        ? 'circle'
        : 'square',
      size: Math.random() * 40 + 20,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
    }));
  }, [count, variant]);

  const codeSnippets = [
    '{ }',
    '< />',
    '( )',
    '[ ]',
    '=> ',
    '...',
    '/**/',
    '///',
  ];

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: element.delay,
          }}
        >
          {element.type === 'circle' && (
            <div
              className="rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 backdrop-blur-sm"
              style={{
                width: element.size,
                height: element.size,
              }}
            />
          )}
          {element.type === 'square' && (
            <div
              className="bg-gradient-to-br from-accent-500/20 to-primary-500/20 backdrop-blur-sm rotate-45"
              style={{
                width: element.size,
                height: element.size,
              }}
            />
          )}
          {element.type === 'triangle' && (
            <div
              className="border-l-transparent border-r-transparent"
              style={{
                width: 0,
                height: 0,
                borderLeft: `${element.size / 2}px solid transparent`,
                borderRight: `${element.size / 2}px solid transparent`,
                borderBottom: `${element.size}px solid rgba(191, 0, 255, 0.2)`,
              }}
            />
          )}
          {element.type === 'code' && (
            <span
              className="font-mono text-primary-500/30 dark:text-neon-purple/30"
              style={{ fontSize: element.size / 2 }}
            >
              {codeSnippets[element.id % codeSnippets.length]}
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}

// Floating Orbs with glow effect
export function FloatingOrbs({ className }: { className?: string }) {
  const orbs = [
    { color: 'from-primary-500/30 to-secondary-500/30', size: 300, x: '10%', y: '20%', duration: 20 },
    { color: 'from-secondary-500/20 to-accent-500/20', size: 250, x: '80%', y: '30%', duration: 25 },
    { color: 'from-accent-500/25 to-primary-500/25', size: 200, x: '50%', y: '70%', duration: 18 },
    { color: 'from-neon-purple/20 to-neon-blue/20', size: 180, x: '20%', y: '80%', duration: 22 },
    { color: 'from-neon-blue/15 to-neon-green/15', size: 150, x: '70%', y: '60%', duration: 30 },
  ];

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={cn(
            'absolute rounded-full bg-gradient-radial blur-3xl',
            orb.color
          )}
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
