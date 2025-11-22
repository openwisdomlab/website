'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HolographicBorderProps {
	children: React.ReactNode;
	className?: string;
	borderWidth?: number;
	animated?: boolean;
	glowIntensity?: 'low' | 'medium' | 'high';
}

export default function HolographicBorder({
	children,
	className = '',
	borderWidth = 2,
	animated = true,
	glowIntensity = 'medium',
}: HolographicBorderProps) {
	const glowStyles = {
		low: 'blur-sm opacity-30',
		medium: 'blur-md opacity-50',
		high: 'blur-lg opacity-70',
	};

	return (
		<div className={`relative ${className}`}>
			{/* 流光边框背景 */}
			<motion.div
				className={`absolute inset-0 rounded-xl ${glowStyles[glowIntensity]}`}
				style={{
					background: 'conic-gradient(from 0deg, #FF0080, #BF00FF, #00F0FF, #00FF94, #FFE500, #FF0080)',
					padding: borderWidth,
				}}
				animate={
					animated
						? {
								background: [
									'conic-gradient(from 0deg, #FF0080, #BF00FF, #00F0FF, #00FF94, #FFE500, #FF0080)',
									'conic-gradient(from 90deg, #FF0080, #BF00FF, #00F0FF, #00FF94, #FFE500, #FF0080)',
									'conic-gradient(from 180deg, #FF0080, #BF00FF, #00F0FF, #00FF94, #FFE500, #FF0080)',
									'conic-gradient(from 270deg, #FF0080, #BF00FF, #00F0FF, #00FF94, #FFE500, #FF0080)',
									'conic-gradient(from 360deg, #FF0080, #BF00FF, #00F0FF, #00FF94, #FFE500, #FF0080)',
								],
						  }
						: {}
				}
				transition={
					animated
						? {
								duration: 3,
								repeat: Infinity,
								ease: 'linear',
						  }
						: {}
				}
			/>

			{/* 实际边框 */}
			<motion.div
				className="absolute inset-0 rounded-xl"
				style={{
					background: 'conic-gradient(from 0deg, #FF0080, #BF00FF, #00F0FF, #00FF94, #FFE500, #FF0080)',
					padding: borderWidth,
				}}
				animate={
					animated
						? {
								background: [
									'conic-gradient(from 0deg, #FF0080, #BF00FF, #00F0FF, #00FF94, #FFE500, #FF0080)',
									'conic-gradient(from 90deg, #FF0080, #BF00FF, #00F0FF, #00FF94, #FFE500, #FF0080)',
									'conic-gradient(from 180deg, #FF0080, #BF00FF, #00F0FF, #00FF94, #FFE500, #FF0080)',
									'conic-gradient(from 270deg, #FF0080, #BF00FF, #00F0FF, #00FF94, #FFE500, #FF0080)',
									'conic-gradient(from 360deg, #FF0080, #BF00FF, #00F0FF, #00FF94, #FFE500, #FF0080)',
								],
						  }
						: {}
				}
				transition={
					animated
						? {
								duration: 3,
								repeat: Infinity,
								ease: 'linear',
						  }
						: {}
				}
			>
				<div className="w-full h-full bg-cyber-black rounded-xl" />
			</motion.div>

			{/* 内容 */}
			<div className="relative z-10">{children}</div>
		</div>
	);
}
