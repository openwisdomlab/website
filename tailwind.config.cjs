const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// 未来主义科技馆配色方案
				primary: {
					50: '#E6F7FF',
					100: '#BAE7FF',
					200: '#91D5FF',
					300: '#69C0FF',
					400: '#40A9FF',
					500: '#1890FF',  // 科技蓝
					600: '#096DD9',
					700: '#0050B3',
					800: '#003A8C',
					900: '#002766',
					950: '#001529',  // 深空蓝
				},
				secondary: {
					50: '#FFF0F6',
					100: '#FFD6E7',
					200: '#FFADD2',
					300: '#FF85C0',
					400: '#F759AB',
					500: '#EB2F96',  // 霓虹粉
					600: '#C41D7F',
					700: '#9E1068',
					800: '#780650',
					900: '#520339',
				},
				// 科技青（强调色）
				tech: {
					50: '#E6FFFB',
					100: '#B5F5EC',
					200: '#87E8DE',
					300: '#5CDBD3',
					400: '#36CFC9',
					500: '#13C2C2',  // 电光青
					600: '#08979C',
					700: '#006D75',
					800: '#00474F',
					900: '#002329',
				},
				// 渐变色
				neon: {
					blue: '#00F0FF',    // 电光蓝
					purple: '#B836FF',  // 霓虹紫
					pink: '#FF006E',    // 霓虹粉
					green: '#00FF94',   // 荧光绿
				},
			},
			fontFamily: {
				sans: ["'InterVariable'", ...defaultTheme.fontFamily.sans],
				display: ["'Space Grotesk'", "'InterVariable'", ...defaultTheme.fontFamily.sans],
			},
			// 背景渐变
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-tech': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
				'gradient-cyber': 'linear-gradient(135deg, #00F0FF 0%, #B836FF 50%, #FF006E 100%)',
				'gradient-dark': 'linear-gradient(180deg, #0A1628 0%, #1a2332 100%)',
			},
			// 动画
			animation: {
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'slide-up': 'slideUp 0.5s ease-out',
				'fade-in': 'fadeIn 0.6s ease-out',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				glow: {
					'from': { boxShadow: '0 0 20px rgba(0, 240, 255, 0.5)' },
					'to': { boxShadow: '0 0 30px rgba(0, 240, 255, 0.8), 0 0 40px rgba(184, 54, 255, 0.6)' },
				},
				slideUp: {
					'from': { opacity: '0', transform: 'translateY(30px)' },
					'to': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeIn: {
					'from': { opacity: '0' },
					'to': { opacity: '1' },
				},
			},
			// 玻璃态效果
			backdropBlur: {
				xs: '2px',
			},
			// 阴影
			boxShadow: {
				'glow': '0 0 20px rgba(0, 240, 255, 0.5)',
				'glow-lg': '0 0 30px rgba(0, 240, 255, 0.7), 0 0 60px rgba(184, 54, 255, 0.4)',
				'neon': '0 0 10px rgba(255, 0, 110, 0.7), 0 0 20px rgba(255, 0, 110, 0.5)',
				'tech': '0 4px 30px rgba(24, 144, 255, 0.2)',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
	darkMode: 'class',
};

/* 

  Alternative tailwind.config.js
  
  NOTE: Add this fonts to <head>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;700&display=swap" rel="stylesheet" />
*/

// module.exports = {
//   content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
//   theme: {
//     extend: {
//       colors: {
//         primary: colors.cyan,
//         secondary: colors.lime,
//       },
//       fontFamily: {
//         sans: ["'Nunito'", ...defaultTheme.fontFamily.sans],
//       },
//     },
//   },
//   plugins: [require("@tailwindcss/typography")],
//   darkMode: "class",
// };
