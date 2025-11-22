import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ParallaxSectionProps {
	children: React.ReactNode;
	className?: string;
	speed?: number;
	direction?: 'up' | 'down' | 'left' | 'right';
	scale?: boolean;
	opacity?: boolean;
}

export default function ParallaxSection({
	children,
	className = '',
	speed = 0.5,
	direction = 'up',
	scale = false,
	opacity = false,
}: ParallaxSectionProps) {
	const ref = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	});

	// 平滑的弹簧效果
	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	// 根据方向计算位移
	const getTransform = () => {
		const distance = 100 * speed;
		switch (direction) {
			case 'up':
				return useTransform(smoothProgress, [0, 1], [distance, -distance]);
			case 'down':
				return useTransform(smoothProgress, [0, 1], [-distance, distance]);
			case 'left':
				return useTransform(smoothProgress, [0, 1], [distance, -distance]);
			case 'right':
				return useTransform(smoothProgress, [0, 1], [-distance, distance]);
			default:
				return useTransform(smoothProgress, [0, 1], [distance, -distance]);
		}
	};

	const translateValue = getTransform();
	const scaleValue = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
	const opacityValue = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

	const isHorizontal = direction === 'left' || direction === 'right';

	const style: any = {
		...(isHorizontal ? { x: translateValue } : { y: translateValue }),
		...(scale ? { scale: scaleValue } : {}),
		...(opacity ? { opacity: opacityValue } : {}),
	};

	return (
		<motion.div ref={ref} className={className} style={style}>
			{children}
		</motion.div>
	);
}
