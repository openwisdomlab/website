import React, { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

interface ScrollRevealProps {
	children: React.ReactNode;
	className?: string;
	variant?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale' | 'glitch' | 'brutal';
	delay?: number;
	duration?: number;
	once?: boolean;
	threshold?: number;
}

export default function ScrollReveal({
	children,
	className = '',
	variant = 'fade',
	delay = 0,
	duration = 0.6,
	once = true,
	threshold = 0.2,
}: ScrollRevealProps) {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once, amount: threshold });

	const variants: Record<string, Variants> = {
		fade: {
			hidden: { opacity: 0 },
			visible: { opacity: 1 },
		},
		'slide-up': {
			hidden: { opacity: 0, y: 60 },
			visible: { opacity: 1, y: 0 },
		},
		'slide-down': {
			hidden: { opacity: 0, y: -60 },
			visible: { opacity: 1, y: 0 },
		},
		'slide-left': {
			hidden: { opacity: 0, x: 60 },
			visible: { opacity: 1, x: 0 },
		},
		'slide-right': {
			hidden: { opacity: 0, x: -60 },
			visible: { opacity: 1, x: 0 },
		},
		scale: {
			hidden: { opacity: 0, scale: 0.8 },
			visible: { opacity: 1, scale: 1 },
		},
		glitch: {
			hidden: {
				opacity: 0,
				x: -10,
				filter: 'blur(10px)',
			},
			visible: {
				opacity: 1,
				x: 0,
				filter: 'blur(0px)',
				transition: {
					duration,
					delay,
					ease: [0.25, 0.1, 0.25, 1],
				},
			},
		},
		brutal: {
			hidden: {
				opacity: 0,
				y: 100,
				rotate: -5,
			},
			visible: {
				opacity: 1,
				y: 0,
				rotate: 0,
				transition: {
					type: 'spring',
					stiffness: 100,
					damping: 15,
					delay,
				},
			},
		},
	};

	return (
		<motion.div
			ref={ref}
			className={className}
			variants={variants[variant]}
			initial="hidden"
			animate={isInView ? 'visible' : 'hidden'}
			transition={{
				duration,
				delay,
				ease: [0.25, 0.1, 0.25, 1],
			}}
		>
			{children}
		</motion.div>
	);
}
