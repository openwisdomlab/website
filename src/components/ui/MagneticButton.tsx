/**
 * MagneticButton - 磁吸效果按钮（使用 framer-motion）
 * 特点：鼠标靠近时有磁吸跟随效果
 */
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';

interface MagneticButtonProps {
	children: React.ReactNode;
	href?: string;
	className?: string;
	strength?: number; // 磁吸强度 (0-1)
	variant?: 'neon' | 'ghost' | 'outline';
	onClick?: () => void;
}

export default function MagneticButton({
	children,
	href,
	className = '',
	strength = 0.3,
	variant = 'neon',
	onClick,
}: MagneticButtonProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [isHovered, setIsHovered] = useState(false);

	// Motion values for magnetic effect
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	// Spring configuration for smooth movement
	const springConfig = { damping: 20, stiffness: 300 };
	const xSpring = useSpring(x, springConfig);
	const ySpring = useSpring(y, springConfig);

	// Handle mouse move
	const handleMouseMove = (e: React.MouseEvent) => {
		if (!ref.current) return;

		const rect = ref.current.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;

		const distanceX = e.clientX - centerX;
		const distanceY = e.clientY - centerY;

		// Apply strength factor
		x.set(distanceX * strength);
		y.set(distanceY * strength);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
		x.set(0);
		y.set(0);
	};

	// Variant styles
	const variantClasses = {
		neon: 'bg-gradient-to-r from-neon-purple to-neon-blue text-white shadow-neon hover:shadow-neon-lg',
		ghost: 'bg-transparent text-white border-2 border-white/20 hover:border-primary-400 hover:bg-white/5',
		outline: 'bg-transparent text-primary-400 border-2 border-primary-400 hover:bg-primary-400 hover:text-white',
	};

	const Tag = href ? 'a' : 'button';

	return (
		<div ref={ref} className="inline-block">
			<motion.div
				style={{
					x: xSpring,
					y: ySpring,
				}}
				onMouseMove={handleMouseMove}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={handleMouseLeave}
			>
				<Tag
					href={href}
					onClick={onClick}
					className={`
						group relative inline-flex items-center justify-center
						px-8 py-4 rounded-lg
						font-bold text-lg
						transition-all duration-300
						overflow-hidden
						${variantClasses[variant]}
						${className}
					`}
				>
					{/* 内容 */}
					<motion.span
						className="relative z-10"
						animate={{
							scale: isHovered ? 1.05 : 1,
						}}
						transition={{ duration: 0.2 }}
					>
						{children}
					</motion.span>

					{/* 悬停时的光晕效果 */}
					<motion.div
						className="absolute inset-0 bg-white/10 rounded-lg"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{
							opacity: isHovered ? [0, 0.5, 0] : 0,
							scale: isHovered ? [0.8, 1.2, 1.4] : 0.8,
						}}
						transition={{
							duration: 1,
							repeat: isHovered ? Infinity : 0,
							ease: 'easeOut',
						}}
					/>

					{/* 粒子效果 */}
					{isHovered && (
						<motion.div
							className="absolute inset-0"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							{[...Array(8)].map((_, i) => (
								<motion.div
									key={i}
									className="absolute w-1 h-1 bg-neon-blue rounded-full"
									initial={{
										x: '50%',
										y: '50%',
										scale: 0,
									}}
									animate={{
										x: `${50 + Math.cos((i * Math.PI * 2) / 8) * 50}%`,
										y: `${50 + Math.sin((i * Math.PI * 2) / 8) * 50}%`,
										scale: [0, 1, 0],
										opacity: [0, 1, 0],
									}}
									transition={{
										duration: 1,
										repeat: Infinity,
										delay: i * 0.1,
										ease: 'easeOut',
									}}
								/>
							))}
						</motion.div>
					)}
				</Tag>
			</motion.div>
		</div>
	);
}
