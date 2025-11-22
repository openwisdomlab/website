'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GridBackgroundProps {
  className?: string;
  variant?: 'default' | 'cyber' | 'dots' | 'lines';
  animated?: boolean;
}

export function GridBackground({
  className,
  variant = 'default',
  animated = true,
}: GridBackgroundProps) {
  const variants = {
    default: 'bg-grid bg-grid',
    cyber: 'bg-grid-cyber bg-grid-cyber',
    dots: 'bg-grid-dots bg-grid-dots',
    lines: 'bg-grid-small bg-grid-small',
  };

  return (
    <div
      className={cn(
        'absolute inset-0 pointer-events-none',
        className
      )}
    >
      {/* Base grid */}
      <div
        className={cn(
          'absolute inset-0 opacity-30 dark:opacity-100',
          variants[variant]
        )}
      />

      {/* Animated gradient overlay */}
      {animated && (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0.5 }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="absolute inset-0 bg-gradient-radial-top from-primary-500/10 via-transparent to-transparent" />
        </motion.div>
      )}

      {/* Corner gradients */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-primary-500/5 via-transparent to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-secondary-500/5 via-transparent to-transparent" />

      {/* Scan line effect (dark mode only) */}
      <div className="hidden dark:block absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent"
          initial={{ top: '-10%' }}
          animate={{ top: '110%' }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.02] dark:opacity-[0.03]" />
    </div>
  );
}

// Animated Grid with perspective
export function PerspectiveGrid({ className }: { className?: string }) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)}>
      <div className="absolute inset-0 perspective-2000">
        <motion.div
          className="absolute inset-0 origin-bottom"
          style={{
            background: `
              linear-gradient(rgba(191, 0, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'rotateX(60deg) scale(2.5)',
            transformOrigin: 'center bottom',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '0px 50px'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </div>
  );
}
