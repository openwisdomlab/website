import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface CyberButtonProps {
	children: React.ReactNode;
	href?: string;
	onClick?: () => void;
	variant?: 'neon' | 'brutal' | 'glitch' | 'holographic' | 'outline';
	size?: 'sm' | 'md' | 'lg' | 'xl';
	className?: string;
	disabled?: boolean;
	magnetic?: boolean;
	glitchOnHover?: boolean;
}

export default function CyberButton({
	children,
	href,
	onClick,
	variant = 'neon',
	size = 'md',
	className = '',
	disabled = false,
	magnetic = true,
	glitchOnHover = true,
}: CyberButtonProps) {
	const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
	const [isHovered, setIsHovered] = useState(false);
	const [isGlitching, setIsGlitching] = useState(false);

	// 磁吸效果
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
	const springX = useSpring(x, springConfig);
	const springY = useSpring(y, springConfig);

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!magnetic || !ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;
		const distanceX = e.clientX - centerX;
		const distanceY = e.clientY - centerY;
		x.set(distanceX * 0.3);
		y.set(distanceY * 0.3);
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
		setIsHovered(false);
	};

	const handleHoverStart = () => {
		setIsHovered(true);
		if (glitchOnHover) {
			setIsGlitching(true);
			setTimeout(() => setIsGlitching(false), 300);
		}
	};

	// 尺寸样式
	const sizeStyles = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-6 py-3 text-base',
		lg: 'px-8 py-4 text-lg',
		xl: 'px-10 py-5 text-xl',
	};

	// 变体样式
	const variantStyles = {
		neon: `
			bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue
			text-white font-bold
			border-2 border-neon-purple
			shadow-neon hover:shadow-neon-lg
			relative overflow-hidden
		`,
		brutal: `
			bg-brutal-yellow text-black font-black
			border-4 border-black
			shadow-brutal hover:shadow-brutal-lg
			hover:translate-x-[-4px] hover:translate-y-[-4px]
			active:translate-x-0 active:translate-y-0 active:shadow-none
		`,
		glitch: `
			bg-cyber-black text-neon-green font-mono font-bold
			border-2 border-neon-green
			shadow-glow-green hover:shadow-glow
			relative overflow-hidden
		`,
		holographic: `
			bg-gradient-to-r from-primary-500 via-secondary-500 to-tech-500
			bg-[length:200%_200%] animate-gradient-shift
			text-white font-bold
			border border-white/20
			shadow-holographic hover:shadow-holographic-lg
			backdrop-blur-sm
		`,
		outline: `
			bg-transparent text-white font-bold
			border-2 border-white/30 hover:border-neon-purple
			hover:text-neon-purple
			hover:shadow-glow
		`,
	};

	const baseStyles = `
		inline-flex items-center justify-center
		font-display uppercase tracking-wider
		transition-all duration-300 ease-out
		cursor-pointer select-none
		disabled:opacity-50 disabled:cursor-not-allowed
		${sizeStyles[size]}
		${variantStyles[variant]}
		${className}
	`;

	const content = (
		<>
			{/* 流光效果 */}
			{(variant === 'neon' || variant === 'glitch') && isHovered && (
				<motion.div
					className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
					initial={{ x: '-100%' }}
					animate={{ x: '100%' }}
					transition={{ duration: 0.6, ease: 'easeInOut' }}
				/>
			)}

			{/* 故障层 */}
			{isGlitching && (
				<>
					<motion.span
						className="absolute inset-0 flex items-center justify-center text-neon-pink"
						style={{ clipPath: 'inset(0 0 50% 0)' }}
						animate={{ x: [0, -3, 3, 0] }}
						transition={{ duration: 0.1 }}
					>
						{children}
					</motion.span>
					<motion.span
						className="absolute inset-0 flex items-center justify-center text-neon-blue"
						style={{ clipPath: 'inset(50% 0 0 0)' }}
						animate={{ x: [0, 3, -3, 0] }}
						transition={{ duration: 0.1 }}
					>
						{children}
					</motion.span>
				</>
			)}

			{/* 主内容 */}
			<span className={`relative z-10 flex items-center gap-2 ${isGlitching ? 'opacity-0' : ''}`}>
				{children}
			</span>

			{/* 边框发光 */}
			{variant === 'neon' && (
				<div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
					<div className="absolute inset-[-2px] bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue rounded-md blur-sm" />
				</div>
			)}
		</>
	);

	const motionProps = {
		ref: ref as any,
		className: baseStyles,
		style: { x: springX, y: springY },
		onMouseMove: handleMouseMove,
		onMouseLeave: handleMouseLeave,
		onHoverStart: handleHoverStart,
		whileTap: variant === 'brutal' ? {} : { scale: 0.95 },
	};

	if (href) {
		return (
			<motion.a href={href} {...motionProps}>
				{content}
			</motion.a>
		);
	}

	return (
		<motion.button onClick={onClick} disabled={disabled} {...motionProps}>
			{content}
		</motion.button>
	);
}
