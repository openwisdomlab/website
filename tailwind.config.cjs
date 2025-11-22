const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Neo-Brutalism + Cybernetic Futurism 设计系统
				// 基础暗色
				'cyber-black': '#030303',
				'dark-bg': '#0a0a0a',
				'dark-surface': '#151515',
				'dark-border': '#2a2a2a',

				// ========================================
				// LAB DESIGN SYSTEM - Digital Industrial
				// ========================================
				// Deep obsidian/slate backgrounds (not pitch black)
				lab: {
					// Background tiers
					void: '#0C0C0F',       // Deepest background
					obsidian: '#111116',   // Primary surface
					slate: '#1A1A21',      // Elevated surfaces
					graphite: '#252530',   // Cards/panels
					steel: '#33333F',      // Borders/dividers
					// Text hierarchy
					text: '#E8E8ED',       // Primary text
					muted: '#9191A0',      // Secondary text
					dim: '#5C5C6E',        // Tertiary/disabled
				},
				// Sharp electric accents (use sparingly)
				signal: {
					acid: '#D4FF00',       // Acid Green - primary accent
					electric: '#00D4FF',   // Electric Blue - secondary accent
					orange: '#FF6B00',     // Signal Orange - warnings/CTAs
					ember: '#FF3D00',      // Hot ember - critical
					violet: '#8B5CF6',     // Deep violet - special
				},

				// Light theme semantic colors
				'text-primary': '#1a1a2e',
				'text-secondary': '#6b7280',
				'background': '#ffffff',
				'background-light': '#f9fafb',
				'surface-border': '#e5e7eb',

				// 霓虹色系 - Cybernetic 核心色
				'neon-purple': '#BF00FF',
				'neon-blue': '#00F0FF',
				'neon-green': '#00FF94',
				'neon-pink': '#FF0080',
				'neon-yellow': '#FFE500',
				'acid-green': '#ADFF2F',
				'electric-purple': '#8B5CF6',
				'cyber-cyan': '#00FFFF',

				// 全息渐变
				holographic: {
					blue: '#007AFF',
					purple: '#7C3AED',
					pink: '#EC4899',
					cyan: '#06B6D4',
					silver: '#94A3B8',
				},

				// 主色系 - 蓝紫渐变
				primary: {
					50: '#f0f4ff',
					100: '#e0e9ff',
					200: '#c7d7fe',
					300: '#a5bbfc',
					400: '#818cf8',
					500: '#6366f1',
					600: '#4f46e5',
					700: '#4338ca',
					800: '#3730a3',
					900: '#312e81',
					950: '#1e1b4b',
				},

				// 次要色系 - 紫色
				secondary: {
					50: '#fdf4ff',
					100: '#fae8ff',
					200: '#f5d0fe',
					300: '#f0abfc',
					400: '#e879f9',
					500: '#d946ef',
					600: '#c026d3',
					700: '#a21caf',
					800: '#86198f',
					900: '#701a75',
				},

				// 科技蓝色
				tech: {
					50: '#f0f9ff',
					100: '#e0f2fe',
					200: '#bae6fd',
					300: '#7dd3fc',
					400: '#38bdf8',
					500: '#0ea5e9',
					600: '#0284c7',
					700: '#0369a1',
					800: '#075985',
					900: '#0c4a6e',
				},

				// 强调色
				accent: {
					50: '#f0fdfa',
					100: '#ccfbf1',
					200: '#99f6e4',
					300: '#5eead4',
					400: '#2dd4bf',
					500: '#06B6D4',
					600: '#0891b2',
					700: '#0e7490',
					800: '#155e75',
					900: '#164e63',
				},

				// Neo-Brutalism 色彩
				brutal: {
					yellow: '#FFE500',
					pink: '#FF6B9D',
					blue: '#4ECDC4',
					orange: '#FF6B35',
					lime: '#C7F464',
				},
			},

			fontFamily: {
				// Lab Design System Typography
				// Display: Characterful headings (Clash Display > Unbounded > Syne)
				// Mono: Technical/data labels (JetBrains Mono, Geist Mono)
				sans: ["'InterVariable'", ...defaultTheme.fontFamily.sans],
				display: ["'Clash Display'", "'Unbounded'", "'Syne'", ...defaultTheme.fontFamily.sans],
				mono: ["'JetBrains Mono'", "'Geist Mono'", ...defaultTheme.fontFamily.mono],
				// Lab-specific utility fonts
				lab: ["'Clash Display'", "'Unbounded'", ...defaultTheme.fontFamily.sans],
				data: ["'JetBrains Mono'", "'Geist Mono'", ...defaultTheme.fontFamily.mono],
			},

			fontSize: {
				'10xl': ['10rem', { lineHeight: '1' }],
				'11xl': ['12rem', { lineHeight: '1' }],
				'12xl': ['14rem', { lineHeight: '1' }],
			},

			// 渐变背景
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-radial-top': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
				'gradient-radial-center': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',

				// 赛博朋克渐变
				'gradient-cyber': 'linear-gradient(135deg, #BF00FF 0%, #00F0FF 100%)',
				'gradient-neon': 'linear-gradient(135deg, #FF0080 0%, #BF00FF 50%, #00F0FF 100%)',
				'gradient-neon-green': 'linear-gradient(135deg, #00FF94 0%, #00F0FF 100%)',
				'gradient-acid': 'linear-gradient(135deg, #ADFF2F 0%, #00FF94 50%, #00F0FF 100%)',

				// 全息渐变
				'gradient-holographic': 'linear-gradient(135deg, #007AFF 0%, #7C3AED 50%, #94A3B8 100%)',
				'gradient-holographic-alt': 'linear-gradient(135deg, #EC4899 0%, #06B6D4 100%)',
				'gradient-future': 'linear-gradient(135deg, #007AFF 0%, #7C3AED 100%)',

				// Neo-Brutalism 渐变
				'gradient-brutal': 'linear-gradient(135deg, #FFE500 0%, #FF6B9D 50%, #4ECDC4 100%)',

				// 流光边框
				'gradient-border': 'conic-gradient(from 0deg, #FF0080, #BF00FF, #00F0FF, #00FF94, #FFE500, #FF0080)',
				'gradient-border-slow': 'conic-gradient(from var(--angle, 0deg), #FF0080, #BF00FF, #00F0FF, #00FF94, #FFE500, #FF0080)',

				// 网格背景
				'grid': "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
				'grid-small': "linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
				'grid-cyber': "linear-gradient(rgba(191, 0, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)",
				'grid-dots': "radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",

				// 噪点纹理
				'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E\")",
				'noise-light': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03' /%3E%3C/svg%3E\")",

				// 扫描线
				'scanlines': "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.1) 2px, rgba(0, 0, 0, 0.1) 4px)",

				// ========================================
				// LAB DESIGN SYSTEM - Backgrounds
				// ========================================
				// Fine technical grid
				'lab-grid': "linear-gradient(rgba(212, 255, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 255, 0, 0.03) 1px, transparent 1px)",
				'lab-grid-fine': "linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
				// Film grain effect (subtle)
				'lab-grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.04'/%3E%3C/svg%3E\")",
				// Mesh gradient for movement
				'lab-mesh': "radial-gradient(at 40% 20%, rgba(212, 255, 0, 0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(0, 212, 255, 0.06) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(139, 92, 246, 0.05) 0px, transparent 50%)",
				// Technical crosshair pattern
				'lab-crosshair': "linear-gradient(rgba(212, 255, 0, 0.1) 1px, transparent 1px) 50% 50% / 40px 40px, linear-gradient(90deg, rgba(212, 255, 0, 0.1) 1px, transparent 1px) 50% 50% / 40px 40px",
			},

			backgroundSize: {
				'grid': '50px 50px',
				'grid-small': '20px 20px',
				'grid-cyber': '100px 100px',
				'grid-dots': '20px 20px',
				'300%': '300%',
				// Lab grid sizes
				'lab-grid': '60px 60px',
				'lab-grid-fine': '20px 20px',
			},

			// 阴影系统
			boxShadow: {
				// Light theme shadows
				'soft': '0 4px 24px -4px rgba(0, 0, 0, 0.1), 0 2px 8px -2px rgba(0, 0, 0, 0.08)',

				// 霓虹发光阴影
				'neon': '0 0 10px rgba(191, 0, 255, 0.5), 0 0 20px rgba(191, 0, 255, 0.3), 0 0 30px rgba(191, 0, 255, 0.1)',
				'neon-lg': '0 0 20px rgba(191, 0, 255, 0.6), 0 0 40px rgba(191, 0, 255, 0.4), 0 0 60px rgba(191, 0, 255, 0.2)',
				'neon-xl': '0 0 30px rgba(191, 0, 255, 0.7), 0 0 60px rgba(191, 0, 255, 0.5), 0 0 90px rgba(191, 0, 255, 0.3)',
				'glow': '0 0 10px rgba(99, 102, 241, 0.5), 0 0 20px rgba(99, 102, 241, 0.3)',
				'glow-lg': '0 0 20px rgba(99, 102, 241, 0.6), 0 0 40px rgba(99, 102, 241, 0.4)',
				'glow-cyan': '0 0 10px rgba(0, 240, 255, 0.5), 0 0 20px rgba(0, 240, 255, 0.3)',
				'glow-green': '0 0 10px rgba(0, 255, 148, 0.5), 0 0 20px rgba(0, 255, 148, 0.3)',
				'glow-pink': '0 0 10px rgba(255, 0, 128, 0.5), 0 0 20px rgba(255, 0, 128, 0.3)',
				'glow-yellow': '0 0 10px rgba(255, 229, 0, 0.5), 0 0 20px rgba(255, 229, 0, 0.3)',

				// 全息混合阴影
				'holographic': '0 8px 32px -8px rgba(0, 122, 255, 0.2), 0 4px 16px -4px rgba(124, 58, 237, 0.15)',
				'holographic-lg': '0 12px 48px -12px rgba(0, 122, 255, 0.25), 0 8px 24px -8px rgba(124, 58, 237, 0.2)',

				// 玻璃态阴影
				'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07), 0 0 1px 0 rgba(0, 0, 0, 0.05)',
				'glass-lg': '0 16px 64px 0 rgba(31, 38, 135, 0.12), 0 0 1px 0 rgba(0, 0, 0, 0.06)',

				// Neo-Brutalism 阴影
				'brutal': '4px 4px 0px 0px rgba(0, 0, 0, 1)',
				'brutal-sm': '2px 2px 0px 0px rgba(0, 0, 0, 1)',
				'brutal-lg': '8px 8px 0px 0px rgba(0, 0, 0, 1)',
				'brutal-xl': '12px 12px 0px 0px rgba(0, 0, 0, 1)',
				'brutal-neon': '4px 4px 0px 0px rgba(191, 0, 255, 1)',
				'brutal-cyan': '4px 4px 0px 0px rgba(0, 240, 255, 1)',
				'brutal-pink': '4px 4px 0px 0px rgba(255, 0, 128, 1)',
				'brutal-green': '4px 4px 0px 0px rgba(0, 255, 148, 1)',
				'brutal-yellow': '4px 4px 0px 0px rgba(255, 229, 0, 1)',

				// 深度阴影
				'depth': '0 1px 3px rgba(0, 0, 0, 0.05), 0 20px 40px -20px rgba(0, 0, 0, 0.1)',
				'depth-lg': '0 1px 3px rgba(0, 0, 0, 0.05), 0 28px 56px -28px rgba(0, 0, 0, 0.15)',

				// ========================================
				// LAB DESIGN SYSTEM - Shadows
				// ========================================
				// Industrial glass effect (thick, not iOS blur)
				'lab-glass': '0 4px 30px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
				'lab-glass-lg': '0 8px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
				// Accent glow shadows
				'lab-acid': '0 0 20px rgba(212, 255, 0, 0.3), 0 0 40px rgba(212, 255, 0, 0.1)',
				'lab-electric': '0 0 20px rgba(0, 212, 255, 0.3), 0 0 40px rgba(0, 212, 255, 0.1)',
				'lab-orange': '0 0 20px rgba(255, 107, 0, 0.3), 0 0 40px rgba(255, 107, 0, 0.1)',
				// Inset technical shadows
				'lab-inset': 'inset 0 2px 10px rgba(0, 0, 0, 0.4), inset 0 -1px 0 rgba(255, 255, 255, 0.05)',
			},

			// 动画
			animation: {
				// 基础动画
				'fade-in': 'fadeIn 0.6s ease-out',
				'fade-in-up': 'fadeInUp 0.6s ease-out',
				'fade-in-down': 'fadeInDown 0.6s ease-out',
				'slide-up': 'slideUp 0.5s ease-out',
				'slide-down': 'slideDown 0.5s ease-out',
				'slide-left': 'slideLeft 0.5s ease-out',
				'slide-right': 'slideRight 0.5s ease-out',

				// 故障效果
				'glitch': 'glitch 1s linear infinite',
				'glitch-sm': 'glitch 0.5s linear infinite',
				'glitch-lg': 'glitch 2s linear infinite',
				'glitch-skew': 'glitchSkew 1s infinite linear alternate-reverse',
				'glitch-text': 'glitchText 3s infinite',

				// 脉冲/呼吸效果
				'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'pulse-neon': 'pulseNeon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',

				// 浮动效果
				'float': 'float 6s ease-in-out infinite',
				'float-slow': 'float 8s ease-in-out infinite',
				'float-fast': 'float 4s ease-in-out infinite',
				'float-random': 'floatRandom 10s ease-in-out infinite',

				// 旋转
				'spin-slow': 'spin 3s linear infinite',
				'spin-slower': 'spin 6s linear infinite',
				'spin-reverse': 'spinReverse 4s linear infinite',

				// 全息效果
				'holographic': 'holographic 3s ease-in-out infinite',
				'holographic-fast': 'holographic 1.5s ease-in-out infinite',

				// 扫描线
				'scan': 'scan 8s linear infinite',
				'scan-fast': 'scan 4s linear infinite',
				'scan-vertical': 'scanVertical 6s linear infinite',

				// 文字打字机效果
				'type': 'type 3.5s steps(40, end)',
				'blink': 'blink 1s step-end infinite',

				// 边框动画
				'border-flow': 'borderFlow 3s ease infinite',
				'border-spin': 'borderSpin 3s linear infinite',
				'gradient-shift': 'gradientShift 3s ease infinite',

				// 缩放脉冲
				'scale-pulse': 'scalePulse 2s ease-in-out infinite',
				'bounce-in': 'bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',

				// Neo-Brutalism 特效
				'shake': 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',
				'wiggle': 'wiggle 1s ease-in-out infinite',
				'tilt': 'tilt 10s infinite linear',

				// RGB 分离
				'rgb-split': 'rgbSplit 0.3s ease',

				// 磁吸效果
				'magnetic': 'magnetic 0.3s ease-out',

				// ========================================
				// LAB DESIGN SYSTEM - Animations
				// ========================================
				// Mesh drift (subtle background movement)
				'lab-mesh-drift': 'labMeshDrift 20s ease-in-out infinite',
				// Data stream effect
				'lab-data-stream': 'labDataStream 2s linear infinite',
				// Technical scan line
				'lab-scan': 'labScan 8s linear infinite',
				// Entry animations (staggered)
				'lab-enter': 'labEnter 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'lab-enter-delay-1': 'labEnter 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards',
				'lab-enter-delay-2': 'labEnter 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
				'lab-enter-delay-3': 'labEnter 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards',
				// Subtle pulse for status indicators
				'lab-pulse': 'labPulse 3s ease-in-out infinite',
			},

			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeInDown: {
					'0%': { opacity: '0', transform: 'translateY(-30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				slideDown: {
					'0%': { opacity: '0', transform: 'translateY(-30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				slideLeft: {
					'0%': { opacity: '0', transform: 'translateX(30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				slideRight: {
					'0%': { opacity: '0', transform: 'translateX(-30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				glitch: {
					'0%, 100%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-3px, 3px)' },
					'40%': { transform: 'translate(-3px, -3px)' },
					'60%': { transform: 'translate(3px, 3px)' },
					'80%': { transform: 'translate(3px, -3px)' },
				},
				glitchSkew: {
					'0%': { transform: 'skew(0deg)' },
					'20%': { transform: 'skew(-2deg)' },
					'40%': { transform: 'skew(2deg)' },
					'60%': { transform: 'skew(-1deg)' },
					'80%': { transform: 'skew(1deg)' },
					'100%': { transform: 'skew(0deg)' },
				},
				glitchText: {
					'0%, 100%': { textShadow: '-2px 0 #FF0080, 2px 0 #00F0FF' },
					'25%': { textShadow: '2px 0 #FF0080, -2px 0 #00F0FF' },
					'50%': { textShadow: '-2px 0 #00F0FF, 2px 0 #FF0080' },
					'75%': { textShadow: '2px 0 #00F0FF, -2px 0 #FF0080' },
				},
				pulseGlow: {
					'0%, 100%': {
						opacity: '1',
						boxShadow: '0 0 5px rgba(99, 102, 241, 0.5), 0 0 20px rgba(99, 102, 241, 0.3)',
					},
					'50%': {
						opacity: '.8',
						boxShadow: '0 0 10px rgba(99, 102, 241, 0.7), 0 0 30px rgba(99, 102, 241, 0.4), 0 0 50px rgba(99, 102, 241, 0.2)',
					},
				},
				pulseNeon: {
					'0%, 100%': {
						opacity: '1',
						boxShadow: '0 0 5px rgba(191, 0, 255, 0.5), 0 0 20px rgba(191, 0, 255, 0.3)',
					},
					'50%': {
						opacity: '.8',
						boxShadow: '0 0 10px rgba(191, 0, 255, 0.7), 0 0 30px rgba(191, 0, 255, 0.4), 0 0 50px rgba(191, 0, 255, 0.2)',
					},
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				floatRandom: {
					'0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
					'25%': { transform: 'translate(10px, -15px) rotate(2deg)' },
					'50%': { transform: 'translate(-5px, -25px) rotate(-1deg)' },
					'75%': { transform: 'translate(-15px, -10px) rotate(1deg)' },
				},
				spinReverse: {
					'0%': { transform: 'rotate(360deg)' },
					'100%': { transform: 'rotate(0deg)' },
				},
				holographic: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				scan: {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100%)' },
				},
				scanVertical: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' },
				},
				type: {
					'from': { width: '0' },
					'to': { width: '100%' },
				},
				blink: {
					'50%': { opacity: '0' },
				},
				borderFlow: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				borderSpin: {
					'0%': { '--angle': '0deg' },
					'100%': { '--angle': '360deg' },
				},
				gradientShift: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				scalePulse: {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' },
				},
				bounceIn: {
					'0%': { transform: 'scale(0.3)', opacity: '0' },
					'50%': { transform: 'scale(1.05)' },
					'70%': { transform: 'scale(0.9)' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
				shake: {
					'10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
					'20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
					'30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
					'40%, 60%': { transform: 'translate3d(4px, 0, 0)' },
				},
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
				},
				tilt: {
					'0%, 50%, 100%': { transform: 'rotate(0deg)' },
					'25%': { transform: 'rotate(1deg)' },
					'75%': { transform: 'rotate(-1deg)' },
				},
				rgbSplit: {
					'0%, 100%': { textShadow: 'none' },
					'50%': { textShadow: '-3px 0 #FF0080, 3px 0 #00F0FF' },
				},
				magnetic: {
					'0%': { transform: 'translate(var(--x, 0), var(--y, 0))' },
					'100%': { transform: 'translate(0, 0)' },
				},

				// ========================================
				// LAB DESIGN SYSTEM - Keyframes
				// ========================================
				labMeshDrift: {
					'0%, 100%': { backgroundPosition: '0% 0%' },
					'25%': { backgroundPosition: '100% 50%' },
					'50%': { backgroundPosition: '50% 100%' },
					'75%': { backgroundPosition: '0% 50%' },
				},
				labDataStream: {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { transform: 'translateY(100%)', opacity: '0' },
				},
				labScan: {
					'0%': { transform: 'translateY(-100%)', opacity: '0.5' },
					'100%': { transform: 'translateY(100vh)', opacity: '0' },
				},
				labEnter: {
					'0%': { opacity: '0', transform: 'translateY(30px) scale(0.98)' },
					'100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
				},
				labPulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.6' },
				},
			},

			// 边框宽度
			borderWidth: {
				'3': '3px',
			},

			// 模糊
			blur: {
				'4xl': '72px',
				'5xl': '96px',
			},

			// 间距
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
			},

			// 变换
			transitionTimingFunction: {
				'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'bounce-out': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
			},

			// Z-index
			zIndex: {
				'60': '60',
				'70': '70',
				'80': '80',
				'90': '90',
				'100': '100',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
	darkMode: 'class',
};
