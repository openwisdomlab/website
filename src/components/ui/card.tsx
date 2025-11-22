'use client';

import * as React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'cyber' | 'brutal' | 'gradient';
  hover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = true, ...props }, ref) => {
    const variants = {
      default:
        'rounded-xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-surface shadow-soft',
      glass: 'glass-panel',
      cyber:
        'rounded-xl bg-cyber-black/80 border border-neon-purple/30 backdrop-blur-sm hover:border-neon-purple/60 hover:shadow-neon transition-all duration-300',
      brutal:
        'rounded-none border-2 border-black bg-white shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm transition-all',
      gradient:
        'rounded-xl bg-gradient-to-br from-primary-500/10 to-secondary-500/10 border border-primary-200/50 dark:border-primary-800/50 backdrop-blur-sm',
    };

    return (
      <div
        ref={ref}
        className={cn(
          variants[variant],
          hover && 'transition-all duration-300 hover:shadow-lg',
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-gray-500 dark:text-gray-400', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

// Animated Card with Framer Motion
interface AnimatedCardProps extends HTMLMotionProps<'div'> {
  variant?: 'default' | 'glass' | 'cyber' | 'brutal' | 'gradient';
}

const AnimatedCard = React.forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variants = {
      default:
        'rounded-xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-surface shadow-soft',
      glass: 'glass-panel',
      cyber:
        'rounded-xl bg-cyber-black/80 border border-neon-purple/30 backdrop-blur-sm',
      brutal: 'rounded-none border-2 border-black bg-white shadow-brutal',
      gradient:
        'rounded-xl bg-gradient-to-br from-primary-500/10 to-secondary-500/10 border border-primary-200/50 dark:border-primary-800/50 backdrop-blur-sm',
    };

    return (
      <motion.div
        ref={ref}
        className={cn(variants[variant], className)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        whileHover={{ scale: 1.02, y: -5 }}
        {...props}
      />
    );
  }
);
AnimatedCard.displayName = 'AnimatedCard';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  AnimatedCard,
};
