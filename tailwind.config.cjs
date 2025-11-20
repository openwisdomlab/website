const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// 现代极简配色方案 - 未来主义设计
				primary: {
					50: '#F0F4FF',
					100: '#E0E9FF',
					200: '#C7D7FE',
					300: '#A5BBFC',
					400: '#8B9FF8',
					500: '#6366F1',  // 现代蓝紫
					600: '#4F46E5',
					700: '#4338CA',
					800: '#3730A3',
					900: '#312E81',
					950: '#1E1B4B',
				},
				secondary: {
					50: '#FDF4FF',
					100: '#FAE8FF',
					200: '#F5D0FE',
					300: '#F0ABFC',
					400: '#E879F9',
					500: '#D946EF',  // 优雅紫
					600: '#C026D3',
					700: '#A21CAF',
					800: '#86198F',
					900: '#701A75',
				},
				// 强调色 - 科技感
				accent: {
					50: '#ECFDF5',
					100: '#D1FAE5',
					200: '#A7F3D0',
					300: '#6EE7B7',
					400: '#34D399',
					500: '#10B981',  // 清新绿
					600: '#059669',
					700: '#047857',
					800: '#065F46',
					900: '#064E3B',
				},
			},
			fontFamily: {
				sans: ["'InterVariable'", ...defaultTheme.fontFamily.sans],
				display: ["'Space Grotesk'", "'InterVariable'", ...defaultTheme.fontFamily.sans],
			},
			// 简洁的背景渐变
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-subtle': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
				'gradient-modern': 'linear-gradient(135deg, #6366F1 0%, #D946EF 100%)',
				'gradient-dark': 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)',
			},
			// 精简的动画
			animation: {
				'slide-up': 'slideUp 0.5s ease-out',
				'fade-in': 'fadeIn 0.6s ease-out',
			},
			keyframes: {
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
			// 现代阴影
			boxShadow: {
				'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
				'soft-lg': '0 10px 40px -10px rgba(99, 102, 241, 0.15)',
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
