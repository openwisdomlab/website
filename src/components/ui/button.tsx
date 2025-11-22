'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-primary-600 text-white shadow-lg hover:bg-primary-700 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]',
        destructive:
          'bg-red-500 text-white shadow-lg hover:bg-red-600 hover:shadow-xl',
        outline:
          'border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-surface hover:bg-gray-50 dark:hover:bg-dark-surface/80 hover:shadow-soft',
        secondary:
          'bg-secondary-100 text-secondary-900 hover:bg-secondary-200 dark:bg-secondary-900/20 dark:text-secondary-100',
        ghost:
          'hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white',
        link: 'text-primary-600 underline-offset-4 hover:underline',
        gradient:
          'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg hover:from-primary-600 hover:to-secondary-600 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]',
        neon: 'bg-transparent border-2 border-neon-purple text-neon-purple hover:bg-neon-purple/10 hover:shadow-neon transition-shadow',
        cyber:
          'bg-cyber-black border border-neon-blue text-neon-blue hover:bg-neon-blue/10 hover:shadow-glow-cyan relative overflow-hidden',
        brutal:
          'bg-brutal-yellow text-black border-2 border-black shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-12 rounded-lg px-8 text-base',
        xl: 'h-14 rounded-xl px-10 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  magnetic?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, magnetic = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    const combinedClassName = cn(buttonVariants({ variant, size, className }));

    if (magnetic) {
      return (
        <MagneticButton className={combinedClassName} ref={ref}>
          {children}
        </MagneticButton>
      );
    }

    return (
      <Comp className={combinedClassName} ref={ref} {...props}>
        {children}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

// Magnetic Button with Framer Motion
interface MagneticButtonProps {
  children?: React.ReactNode;
  className?: string;
}

const MagneticButton = React.forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ children, className }, ref) => {
    const [position, setPosition] = React.useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
      const { currentTarget, clientX, clientY } = e;
      const { left, top, width, height } = currentTarget.getBoundingClientRect();
      const x = (clientX - left - width / 2) * 0.15;
      const y = (clientY - top - height / 2) * 0.15;
      setPosition({ x, y });
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    return (
      <motion.button
        ref={ref}
        className={className}
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        animate={position}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      >
        {children}
      </motion.button>
    );
  }
);
MagneticButton.displayName = 'MagneticButton';

export { Button, buttonVariants, MagneticButton };
