/**
 * TerminalText - 终端打字机效果文本组件
 * 特点：字符逐个显示，带闪烁光标
 */
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TerminalTextProps {
	text: string;
	delay?: number; // 开始前延迟（秒）
	speed?: number; // 打字速度（每个字符的延迟，毫秒）
	className?: string;
	onComplete?: () => void;
	showCursor?: boolean;
	prefix?: string; // 前缀（如 "$ " 或 "> "）
}

export default function TerminalText({
	text,
	delay = 0,
	speed = 50,
	className = '',
	onComplete,
	showCursor = true,
	prefix = '> ',
}: TerminalTextProps) {
	const [displayedText, setDisplayedText] = useState('');
	const [isComplete, setIsComplete] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		// 延迟后开始打字
		if (delay > 0 && currentIndex === 0 && displayedText === '') {
			const startTimeout = setTimeout(() => {
				setCurrentIndex(0);
			}, delay * 1000);
			return () => clearTimeout(startTimeout);
		}

		if (currentIndex < text.length) {
			const timeout = setTimeout(() => {
				setDisplayedText((prev) => prev + text[currentIndex]);
				setCurrentIndex((prev) => prev + 1);
			}, speed);

			return () => clearTimeout(timeout);
		} else if (currentIndex === text.length && !isComplete) {
			setIsComplete(true);
			onComplete?.();
		}

		return undefined;
	}, [currentIndex, text, speed, delay, isComplete, onComplete, displayedText]);

	return (
		<div className={`font-mono text-neon-green ${className}`}>
			<motion.span
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.3 }}
			>
				<span className="text-neon-blue">{prefix}</span>
				{displayedText}
				{showCursor && !isComplete && (
					<motion.span
						className="inline-block w-2 h-5 ml-1 bg-neon-green"
						animate={{ opacity: [1, 0] }}
						transition={{
							duration: 0.5,
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					/>
				)}
			</motion.span>
		</div>
	);
}
