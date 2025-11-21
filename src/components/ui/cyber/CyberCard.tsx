'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface CyberCardProps {
	children: React.ReactNode;
	variant?: 'glass' | 'brutal' | 'holographic' | 'neon' | 'terminal';
	href?: string;
	className?: string;
	tiltEnabled?: boolean;
	glowColor?: string;
	borderGlow?: boolean;
}

export default function CyberCard({
	children,
	variant = 'glass',
	href,
	className = '',
	tiltEnabled = true,
	glowColor = 'neon-purple',
	borderGlow = true,
}: CyberCardProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [isHovered, setIsHovered] = useState(false);

	// 3D 倾斜效果
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
		stiffness: 150,
		damping: 20,
	});
	const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
		stiffness: 150,
		damping: 20,
	});

	// 光照效果位置
	const lightX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), {
		stiffness: 150,
		damping: 20,
	});
	const lightY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), {
		stiffness: 150,
		damping: 20,
	});

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!tiltEnabled || !ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width - 0.5;
		const y = (e.clientY - rect.top) / rect.height - 0.5;
		mouseX.set(x);
		mouseY.set(y);
	};

	const handleMouseLeave = () => {
		mouseX.set(0);
		mouseY.set(0);
		setIsHovered(false);
	};

	// 变体样式
	const variantStyles = {
		glass: `
			bg-white/5 backdrop-blur-xl
			border border-white/10
			hover:border-white/20
			hover:bg-white/10
		`,
		brutal: `
			bg-brutal-yellow text-black
			border-4 border-black
			shadow-brutal hover:shadow-brutal-lg
			hover:translate-x-[-4px] hover:translate-y-[-4px]
		`,
		holographic: `
			bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-tech-500/10
			backdrop-blur-xl
			border border-white/10
			hover:border-primary-500/50
		`,
		neon: `
			bg-cyber-black/80 backdrop-blur-xl
			border-2 border-neon-purple/50
			hover:border-neon-purple
			shadow-neon hover:shadow-neon-lg
		`,
		terminal: `
			bg-black/90 backdrop-blur-xl
			border border-neon-green/30
			font-mono
			shadow-glow-green
		`,
	};

	const baseStyles = `
		relative overflow-hidden
		rounded-xl p-6
		transition-all duration-300
		${variantStyles[variant]}
		${className}
	`;

	const content = (
		<>
			{/* 扫描线效果 */}
			{(variant === 'neon' || variant === 'terminal') && (
				<div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
					<div className="absolute inset-0 bg-scanlines" />
					{isHovered && (
						<motion.div
							className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-neon-green to-transparent"
							initial={{ top: '-10%' }}
							animate={{ top: '110%' }}
							transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
						/>
					)}
				</div>
			)}

			{/* 光照效果 */}
			{tiltEnabled && isHovered && variant !== 'brutal' && (
				<motion.div
					className="absolute inset-0 pointer-events-none"
					style={{
						background: `radial-gradient(circle at ${lightX.get()}% ${lightY.get()}%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
					}}
				/>
			)}

			{/* 边框发光 */}
			{borderGlow && isHovered && variant !== 'brutal' && (
				<div className="absolute inset-0 rounded-xl pointer-events-none">
					<div className={`absolute inset-[-1px] rounded-xl bg-gradient-to-r from-${glowColor} via-neon-blue to-${glowColor} opacity-50 blur-sm`} />
				</div>
			)}

			{/* 噪点纹理 */}
			<div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-noise" />

			{/* 角落装饰 */}
			{variant === 'terminal' && (
				<>
					<div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-neon-green/50" />
					<div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-neon-green/50" />
					<div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-neon-green/50" />
					<div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-neon-green/50" />
				</>
			)}

			{/* 主内容 */}
			<div className="relative z-10">{children}</div>
		</>
	);

	const motionStyle = tiltEnabled
		? {
				rotateX,
				rotateY,
				transformPerspective: 1000,
		  }
		: {};

	const CardWrapper = href ? motion.a : motion.div;
	const extraProps = href ? { href } : {};

	return (
		<CardWrapper
			ref={ref}
			className={baseStyles}
			style={motionStyle}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={handleMouseLeave}
			whileHover={variant === 'brutal' ? {} : { scale: 1.02 }}
			transition={{ duration: 0.2 }}
			{...extraProps}
		>
			{content}
		</CardWrapper>
	);
}
