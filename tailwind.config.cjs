const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Neo-Brutalism + Cyberpunk 配色
				// 深邃背景色
				'cyber-black': '#030303',
				'cyber-dark': '#0a0a0a',

				// 霓虹色系 - 电光紫
				neon: {
					purple: '#BF00FF',
					pink: '#FF10F0',
					blue: '#00F0FF',
					green: '#39FF14',
					yellow: '#FFFF00',
					orange: '#FF6600',
				},

				// 主色系 - 赛博蓝紫
				primary: {
					50: '#F0F4FF',
					100: '#E0E9FF',
					200: '#C7D7FE',
					300: '#A5BBFC',
					400: '#8B9FF8',
					500: '#6366F1',
					600: '#4F46E5',
					700: '#4338CA',
					800: '#3730A3',
					900: '#312E81',
					950: '#1E1B4B',
				},

				// 次要色系 - 电光紫
				secondary: {
					50: '#FDF4FF',
					100: '#FAE8FF',
					200: '#F5D0FE',
					300: '#F0ABFC',
					400: '#E879F9',
					500: '#D946EF',
					600: '#C026D3',
					700: '#A21CAF',
					800: '#86198F',
					900: '#701A75',
				},

				// 强调色 - 酸性绿
				accent: {
					50: '#F0FFF4',
					100: '#C6F6D5',
					200: '#9AE6B4',
					300: '#68D391',
					400: '#48BB78',
					500: '#39FF14',  // 酸性绿
					600: '#2F855A',
					700: '#276749',
					800: '#22543D',
					900: '#1C4532',
				},

				// Tech/赛博色
				tech: {
					50: '#E6F7FF',
					100: '#BAE7FF',
					200: '#91D5FF',
					300: '#69C0FF',
					400: '#40A9FF',
					500: '#1890FF',  // 赛博蓝
					600: '#096DD9',
					700: '#0050B3',
					800: '#003A8C',
					900: '#002766',
					950: '#001529',
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

				// 霓虹渐变
				'gradient-neon': 'linear-gradient(135deg, #BF00FF 0%, #00F0FF 100%)',
				'gradient-neon-alt': 'linear-gradient(135deg, #FF10F0 0%, #39FF14 100%)',
				'gradient-cyber': 'linear-gradient(135deg, #6366F1 0%, #D946EF 50%, #00F0FF 100%)',

				// 全息渐变
				'gradient-holographic': 'linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff)',

				// 深色背景
				'gradient-dark': 'linear-gradient(180deg, #030303 0%, #0a0a0a 100%)',
				'gradient-dark-radial': 'radial-gradient(ellipse at top, #1a1a2e 0%, #030303 100%)',

				// 噪点纹理（通过 SVG 实现）
				'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")",

				// 网格背景
				'grid': "linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)",
				'grid-small': "linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px)",
			},

			backgroundSize: {
				'grid': '50px 50px',
				'grid-small': '20px 20px',
			},

			// 发光阴影
			boxShadow: {
				// 霓虹发光
				'neon': '0 0 5px rgba(191, 0, 255, 0.5), 0 0 20px rgba(191, 0, 255, 0.3)',
				'neon-sm': '0 0 3px rgba(191, 0, 255, 0.5), 0 0 10px rgba(191, 0, 255, 0.2)',
				'neon-lg': '0 0 10px rgba(191, 0, 255, 0.7), 0 0 30px rgba(191, 0, 255, 0.4), 0 0 50px rgba(191, 0, 255, 0.2)',

				// 蓝色发光
				'glow': '0 0 5px rgba(99, 102, 241, 0.5), 0 0 20px rgba(99, 102, 241, 0.3)',
				'glow-sm': '0 0 3px rgba(99, 102, 241, 0.5), 0 0 10px rgba(99, 102, 241, 0.2)',
				'glow-lg': '0 0 10px rgba(99, 102, 241, 0.7), 0 0 30px rgba(99, 102, 241, 0.4), 0 0 50px rgba(99, 102, 241, 0.2)',

				// 青色发光
				'glow-cyan': '0 0 5px rgba(0, 240, 255, 0.5), 0 0 20px rgba(0, 240, 255, 0.3)',
				'glow-cyan-lg': '0 0 10px rgba(0, 240, 255, 0.7), 0 0 30px rgba(0, 240, 255, 0.4), 0 0 50px rgba(0, 240, 255, 0.2)',

				// 绿色发光
				'glow-green': '0 0 5px rgba(57, 255, 20, 0.5), 0 0 20px rgba(57, 255, 20, 0.3)',
				'glow-green-lg': '0 0 10px rgba(57, 255, 20, 0.7), 0 0 30px rgba(57, 255, 20, 0.4), 0 0 50px rgba(57, 255, 20, 0.2)',

				// 全息效果
				'holographic': '0 0 15px rgba(191, 0, 255, 0.3), 0 0 30px rgba(0, 240, 255, 0.2)',

				// 柔和科技感阴影
				'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
				'soft-lg': '0 10px 40px -10px rgba(99, 102, 241, 0.15)',

				// 深度阴影
				'brutal': '8px 8px 0px rgba(0, 0, 0, 0.8)',
				'brutal-sm': '4px 4px 0px rgba(0, 0, 0, 0.8)',
				'brutal-lg': '12px 12px 0px rgba(0, 0, 0, 0.8)',
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
