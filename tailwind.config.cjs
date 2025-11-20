const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Light Future 设计系统
				// 底色：极致白、银灰、淡蓝灰
				background: {
					DEFAULT: '#f8f9fc', // Off-white with slight cool tone
					light: '#fafbfd',
					white: '#ffffff',
					gray: '#f4f5f7',
				},

				// 表面色：纯白 + 玻璃态
				surface: {
					DEFAULT: '#ffffff',
					glass: 'rgba(255, 255, 255, 0.7)',
					'glass-strong': 'rgba(255, 255, 255, 0.9)',
					border: '#e4e7eb', // zinc-200 equivalent
				},

				// 全息渐变 - Electric Blue
				holographic: {
					blue: '#007AFF',
					purple: '#7C3AED',
					pink: '#EC4899',
					cyan: '#06B6D4',
					silver: '#94A3B8',
				},

				// 主色系 - 优雅的蓝紫渐变
				primary: {
					50: '#f0f4ff',
					100: '#e0e9ff',
					200: '#c7d7fe',
					300: '#a5bbfc',
					400: '#8b9ff8',
					500: '#007AFF', // Electric Blue
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
					500: '#7C3AED',
					600: '#c026d3',
					700: '#a21caf',
					800: '#86198f',
					900: '#701a75',
				},

				// 强调色 - 渐变色系
				accent: {
					50: '#f0fdfa',
					100: '#ccfbf1',
					200: '#99f6e4',
					300: '#5eead4',
					400: '#2dd4bf',
					500: '#06B6D4', // Cyan
					600: '#0891b2',
					700: '#0e7490',
					800: '#155e75',
					900: '#164e63',
				},

				// 文字色 - Deep Slate
				text: {
					primary: '#1e293b', // slate-800
					secondary: '#475569', // slate-600
					tertiary: '#64748b', // slate-500
					disabled: '#94a3b8', // slate-400
				},

				// 保留暗色模式的支持
				dark: {
					bg: '#0f172a',
					surface: '#1e293b',
					border: '#334155',
				},
			},

			fontFamily: {
				sans: ["'InterVariable'", ...defaultTheme.fontFamily.sans],
				display: ["'Syne'", "'Space Grotesk'", "'InterVariable'", ...defaultTheme.fontFamily.sans],
				mono: ["'JetBrains Mono'", ...defaultTheme.fontFamily.mono],
			},

			// 渐变背景
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-radial-top': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
				'gradient-radial-center': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',

				// 全息渐变 - Light Future
				'gradient-holographic': 'linear-gradient(135deg, #007AFF 0%, #7C3AED 50%, #94A3B8 100%)',
				'gradient-holographic-alt': 'linear-gradient(135deg, #EC4899 0%, #06B6D4 100%)',
				'gradient-future': 'linear-gradient(135deg, #007AFF 0%, #7C3AED 100%)',

				// 渐变光晕
				'gradient-light': 'radial-gradient(ellipse at top, rgba(0, 122, 255, 0.1) 0%, transparent 50%)',
				'gradient-light-purple': 'radial-gradient(ellipse at center, rgba(124, 58, 237, 0.1) 0%, transparent 60%)',

				// 玻璃态背景纹理
				'glass-texture': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E\")",

				// 网格背景 - 更细腻
				'grid': "linear-gradient(rgba(0, 122, 255, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 122, 255, 0.06) 1px, transparent 1px)",
				'grid-small': "linear-gradient(rgba(124, 58, 237, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 58, 237, 0.04) 1px, transparent 1px)",

				// 保留暗色模式渐变
				'gradient-dark': 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
			},

			backgroundSize: {
				'grid': '50px 50px',
				'grid-small': '20px 20px',
			},

			// 阴影系统 - Soft Diffusion + Colored Shadows
			boxShadow: {
				// 柔和漫射光阴影 (Light Future 核心)
				'soft': '0 4px 24px -4px rgba(0, 0, 0, 0.08), 0 2px 8px -2px rgba(0, 0, 0, 0.04)',
				'soft-sm': '0 2px 12px -2px rgba(0, 0, 0, 0.06), 0 1px 4px -1px rgba(0, 0, 0, 0.03)',
				'soft-md': '0 8px 32px -8px rgba(0, 0, 0, 0.1), 0 4px 12px -4px rgba(0, 0, 0, 0.05)',
				'soft-lg': '0 12px 48px -12px rgba(0, 0, 0, 0.12), 0 8px 16px -8px rgba(0, 0, 0, 0.06)',
				'soft-xl': '0 20px 64px -16px rgba(0, 0, 0, 0.15), 0 12px 24px -12px rgba(0, 0, 0, 0.08)',

				// 彩色阴影 - 全息效果
				'colored-blue': '0 8px 32px -8px rgba(0, 122, 255, 0.24), 0 4px 12px -4px rgba(0, 122, 255, 0.12)',
				'colored-purple': '0 8px 32px -8px rgba(124, 58, 237, 0.24), 0 4px 12px -4px rgba(124, 58, 237, 0.12)',
				'colored-pink': '0 8px 32px -8px rgba(236, 72, 153, 0.24), 0 4px 12px -4px rgba(236, 72, 153, 0.12)',
				'colored-cyan': '0 8px 32px -8px rgba(6, 182, 212, 0.24), 0 4px 12px -4px rgba(6, 182, 212, 0.12)',

				// 全息混合阴影
				'holographic': '0 8px 32px -8px rgba(0, 122, 255, 0.2), 0 4px 16px -4px rgba(124, 58, 237, 0.15)',
				'holographic-lg': '0 12px 48px -12px rgba(0, 122, 255, 0.25), 0 8px 24px -8px rgba(124, 58, 237, 0.2)',

				// 玻璃态阴影
				'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07), 0 0 1px 0 rgba(0, 0, 0, 0.05)',
				'glass-lg': '0 16px 64px 0 rgba(31, 38, 135, 0.12), 0 0 1px 0 rgba(0, 0, 0, 0.06)',

				// 深度阴影（用于强调）
				'depth': '0 1px 3px rgba(0, 0, 0, 0.05), 0 20px 40px -20px rgba(0, 0, 0, 0.1)',
				'depth-lg': '0 1px 3px rgba(0, 0, 0, 0.05), 0 28px 56px -28px rgba(0, 0, 0, 0.15)',
			},

			// 玻璃态效果
			backdropBlur: {
				xs: '2px',
			},

			// 动画
			animation: {
				// 基础动画
				'fade-in': 'fadeIn 0.6s ease-out',
				'slide-up': 'slideUp 0.5s ease-out',
				'slide-down': 'slideDown 0.5s ease-out',
				'slide-left': 'slideLeft 0.5s ease-out',
				'slide-right': 'slideRight 0.5s ease-out',

				// 故障效果
				'glitch': 'glitch 1s linear infinite',
				'glitch-sm': 'glitch 0.5s linear infinite',
				'glitch-lg': 'glitch 2s linear infinite',

				// 脉冲/呼吸效果
				'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'pulse-neon': 'pulseNeon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',

				// 浮动效果
				'float': 'float 6s ease-in-out infinite',
				'float-slow': 'float 8s ease-in-out infinite',
				'float-fast': 'float 4s ease-in-out infinite',

				// 旋转
				'spin-slow': 'spin 3s linear infinite',
				'spin-slower': 'spin 6s linear infinite',

				// 全息效果
				'holographic': 'holographic 3s ease-in-out infinite',

				// 扫描线
				'scan': 'scan 8s linear infinite',

				// 文字打字机效果
				'type': 'type 3.5s steps(40, end)',

				// 边框动画
				'border-flow': 'borderFlow 3s ease infinite',

				// 缩放脉冲
				'scale-pulse': 'scalePulse 2s ease-in-out infinite',
			},

			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
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
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' },
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
				holographic: {
					'0%, 100%': {
						backgroundPosition: '0% 50%',
					},
					'50%': {
						backgroundPosition: '100% 50%',
					},
				},
				scan: {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100%)' },
				},
				type: {
					'from': { width: '0' },
					'to': { width: '100%' },
				},
				borderFlow: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				scalePulse: {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' },
				},
			},

			// 边框宽度
			borderWidth: {
				'3': '3px',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
	darkMode: 'class',
};
