'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GridBackgroundProps {
	variant?: 'default' | 'cyber' | 'dots' | 'blueprint';
	animated?: boolean;
	color?: string;
	className?: string;
}

export default function GridBackground({
	variant = 'default',
	animated = false,
	className = '',
}: GridBackgroundProps) {
	const gridStyles = {
		default: {
			backgroundImage: `
				linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
				linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
			`,
			backgroundSize: '50px 50px',
		},
		cyber: {
			backgroundImage: `
				linear-gradient(rgba(191, 0, 255, 0.1) 1px, transparent 1px),
				linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
			`,
			backgroundSize: '100px 100px',
		},
		dots: {
			backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
			backgroundSize: '30px 30px',
		},
		blueprint: {
			backgroundImage: `
				linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
				linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
				linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px),
				linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px)
			`,
			backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
		},
	};

	return (
		<div className={`absolute inset-0 overflow-hidden ${className}`}>
			{/* 主网格 */}
			<motion.div
				className="absolute inset-0"
				style={gridStyles[variant]}
				animate={
					animated
						? {
								backgroundPosition: ['0px 0px', '50px 50px'],
						  }
						: {}
				}
				transition={
					animated
						? {
								duration: 20,
								repeat: Infinity,
								ease: 'linear',
						  }
						: {}
				}
			/>

			{/* 渐变遮罩 */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cyber-black" />
			<div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-cyber-black opacity-50" />

			{/* 径向渐变 */}
			<div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-cyber-black opacity-70" />
		</div>
	);
}
