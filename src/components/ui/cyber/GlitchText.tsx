'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
	children: string;
	className?: string;
	variant?: 'default' | 'intense' | 'subtle' | 'rgb';
	triggerOnHover?: boolean;
	continuous?: boolean;
	speed?: number;
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

export default function GlitchText({
	children,
	className = '',
	variant = 'default',
	triggerOnHover = true,
	continuous = false,
	speed = 100,
	as: Component = 'span',
}: GlitchTextProps) {
	const [isGlitching, setIsGlitching] = useState(continuous);
	const [displayText, setDisplayText] = useState(children);

	// 故障字符集
	const glitchChars = '!<>-_\\/[]{}—=+*^?#_@$%&';

	useEffect(() => {
		if (!isGlitching) {
			setDisplayText(children);
			return;
		}

		let iteration = 0;
		const interval = setInterval(() => {
			setDisplayText(
				children
					.split('')
					.map((char, index) => {
						if (index < iteration) {
							return children[index];
						}
						if (char === ' ') return ' ';
						return glitchChars[Math.floor(Math.random() * glitchChars.length)];
					})
					.join('')
			);

			iteration += 1 / 3;

			if (iteration >= children.length) {
				setDisplayText(children);
				if (!continuous) {
					clearInterval(interval);
					setIsGlitching(false);
				} else {
					iteration = 0;
				}
			}
		}, speed);

		return () => clearInterval(interval);
	}, [isGlitching, children, continuous, speed]);

	const variantStyles = {
		default: 'relative',
		intense: 'animate-glitch-text',
		subtle: '',
		rgb: '',
	};

	const handleMouseEnter = () => {
		if (triggerOnHover) {
			setIsGlitching(true);
		}
	};

	const MotionComponent = motion[Component] as any;

	return (
		<MotionComponent
			className={`${variantStyles[variant]} ${className} inline-block`}
			onMouseEnter={handleMouseEnter}
			data-text={children}
		>
			{/* RGB 分离层 - 仅在 rgb 变体 */}
			{variant === 'rgb' && isGlitching && (
				<>
					<motion.span
						className="absolute inset-0 text-neon-pink opacity-70"
						style={{ left: '-2px', clipPath: 'inset(0 0 50% 0)' }}
						animate={{ x: [-2, 2, -2] }}
						transition={{ duration: 0.2, repeat: Infinity }}
					>
						{displayText}
					</motion.span>
					<motion.span
						className="absolute inset-0 text-neon-blue opacity-70"
						style={{ left: '2px', clipPath: 'inset(50% 0 0 0)' }}
						animate={{ x: [2, -2, 2] }}
						transition={{ duration: 0.2, repeat: Infinity }}
					>
						{displayText}
					</motion.span>
				</>
			)}

			{/* Intense 故障层 */}
			{variant === 'intense' && isGlitching && (
				<>
					<span
						className="absolute inset-0 text-neon-pink mix-blend-multiply"
						style={{
							clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
							transform: 'translate(-3px, 0)',
						}}
						aria-hidden="true"
					>
						{displayText}
					</span>
					<span
						className="absolute inset-0 text-neon-blue mix-blend-multiply"
						style={{
							clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
							transform: 'translate(3px, 0)',
						}}
						aria-hidden="true"
					>
						{displayText}
					</span>
				</>
			)}

			{/* 主文本 */}
			<span className="relative z-10">{displayText}</span>
		</MotionComponent>
	);
}
