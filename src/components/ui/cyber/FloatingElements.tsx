'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementsProps {
	count?: number;
	className?: string;
}

export default function FloatingElements({ count = 20, className = '' }: FloatingElementsProps) {
	const elements = Array.from({ length: count }, (_, i) => ({
		id: i,
		size: Math.random() * 40 + 10,
		x: Math.random() * 100,
		y: Math.random() * 100,
		duration: Math.random() * 10 + 10,
		delay: Math.random() * 5,
		type: ['circle', 'square', 'triangle', 'cross'][Math.floor(Math.random() * 4)],
		color: ['neon-purple', 'neon-blue', 'neon-green', 'neon-pink'][Math.floor(Math.random() * 4)],
	}));

	const renderShape = (type: string, color: string, size: number) => {
		const colorClass = `text-${color}`;
		switch (type) {
			case 'circle':
				return (
					<div
						className={`rounded-full border-2 border-current ${colorClass} opacity-20`}
						style={{ width: size, height: size }}
					/>
				);
			case 'square':
				return (
					<div
						className={`border-2 border-current ${colorClass} opacity-20`}
						style={{ width: size, height: size, transform: 'rotate(45deg)' }}
					/>
				);
			case 'triangle':
				return (
					<div
						className={`${colorClass} opacity-20`}
						style={{
							width: 0,
							height: 0,
							borderLeft: `${size / 2}px solid transparent`,
							borderRight: `${size / 2}px solid transparent`,
							borderBottom: `${size}px solid currentColor`,
						}}
					/>
				);
			case 'cross':
				return (
					<div className={`relative ${colorClass} opacity-20`} style={{ width: size, height: size }}>
						<div
							className="absolute bg-current"
							style={{
								width: '100%',
								height: '2px',
								top: '50%',
								transform: 'translateY(-50%)',
							}}
						/>
						<div
							className="absolute bg-current"
							style={{
								width: '2px',
								height: '100%',
								left: '50%',
								transform: 'translateX(-50%)',
							}}
						/>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
			{elements.map((el) => (
				<motion.div
					key={el.id}
					className="absolute"
					style={{
						left: `${el.x}%`,
						top: `${el.y}%`,
					}}
					animate={{
						y: [0, -30, 0],
						x: [0, Math.random() * 20 - 10, 0],
						rotate: [0, 360],
						opacity: [0.1, 0.3, 0.1],
					}}
					transition={{
						duration: el.duration,
						delay: el.delay,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				>
					{renderShape(el.type || 'circle', el.color || 'neon-purple', el.size)}
				</motion.div>
			))}
		</div>
	);
}
