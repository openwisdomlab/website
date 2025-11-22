import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Neo-Brutalism + Cybernetic Futurism Design System
        // Dark base colors
        'cyber-black': '#030303',
        'dark-bg': '#0a0a0a',
        'dark-surface': '#151515',
        'dark-border': '#2a2a2a',

        // Light theme semantic colors
        'text-primary': '#1a1a2e',
        'text-secondary': '#6b7280',
        background: '#ffffff',
        'background-light': '#f9fafb',
        'surface-border': '#e5e7eb',

        // Neon colors - Cybernetic core
        'neon-purple': '#BF00FF',
        'neon-blue': '#00F0FF',
        'neon-green': '#00FF94',
        'neon-pink': '#FF0080',
        'neon-yellow': '#FFE500',
        'acid-green': '#ADFF2F',
        'electric-purple': '#8B5CF6',
        'cyber-cyan': '#00FFFF',

        // Holographic gradients
        holographic: {
          blue: '#007AFF',
          purple: '#7C3AED',
          pink: '#EC4899',
          cyan: '#06B6D4',
          silver: '#94A3B8',
        },

        // Primary colors - Blue-Purple gradient
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

        // Secondary colors - Purple
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

        // Tech blue
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

        // Accent colors
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

        // Neo-Brutalism colors
        brutal: {
          yellow: '#FFE500',
          pink: '#FF6B9D',
          blue: '#4ECDC4',
          orange: '#FF6B35',
          lime: '#C7F464',
        },
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', ...defaultTheme.fontFamily.sans],
        display: ['Syne', 'Inter', 'system-ui', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', ...defaultTheme.fontFamily.mono],
      },

      fontSize: {
        '10xl': ['10rem', { lineHeight: '1' }],
        '11xl': ['12rem', { lineHeight: '1' }],
        '12xl': ['14rem', { lineHeight: '1' }],
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-radial-top': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
        'gradient-radial-center': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',

        // Cyberpunk gradients
        'gradient-cyber': 'linear-gradient(135deg, #BF00FF 0%, #00F0FF 100%)',
        'gradient-neon': 'linear-gradient(135deg, #FF0080 0%, #BF00FF 50%, #00F0FF 100%)',
        'gradient-neon-green': 'linear-gradient(135deg, #00FF94 0%, #00F0FF 100%)',
        'gradient-acid': 'linear-gradient(135deg, #ADFF2F 0%, #00FF94 50%, #00F0FF 100%)',

        // Holographic gradients
        'gradient-holographic':
          'linear-gradient(135deg, #007AFF 0%, #7C3AED 50%, #94A3B8 100%)',
        'gradient-holographic-alt': 'linear-gradient(135deg, #EC4899 0%, #06B6D4 100%)',
        'gradient-future': 'linear-gradient(135deg, #007AFF 0%, #7C3AED 100%)',

        // Neo-Brutalism gradient
        'gradient-brutal':
          'linear-gradient(135deg, #FFE500 0%, #FF6B9D 50%, #4ECDC4 100%)',

        // Animated border gradient
        'gradient-border':
          'conic-gradient(from 0deg, #FF0080, #BF00FF, #00F0FF, #00FF94, #FFE500, #FF0080)',

        // Grid backgrounds
        grid: "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        'grid-small':
          "linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
        'grid-cyber':
          "linear-gradient(rgba(191, 0, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)",
        'grid-dots': 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
      },

      backgroundSize: {
        grid: '50px 50px',
        'grid-small': '20px 20px',
        'grid-cyber': '100px 100px',
        'grid-dots': '20px 20px',
        '300%': '300%',
      },

      boxShadow: {
        // Light theme shadows
        soft: '0 4px 24px -4px rgba(0, 0, 0, 0.1), 0 2px 8px -2px rgba(0, 0, 0, 0.08)',

        // Neon glow shadows
        neon: '0 0 10px rgba(191, 0, 255, 0.5), 0 0 20px rgba(191, 0, 255, 0.3), 0 0 30px rgba(191, 0, 255, 0.1)',
        'neon-lg':
          '0 0 20px rgba(191, 0, 255, 0.6), 0 0 40px rgba(191, 0, 255, 0.4), 0 0 60px rgba(191, 0, 255, 0.2)',
        'neon-xl':
          '0 0 30px rgba(191, 0, 255, 0.7), 0 0 60px rgba(191, 0, 255, 0.5), 0 0 90px rgba(191, 0, 255, 0.3)',
        glow: '0 0 10px rgba(99, 102, 241, 0.5), 0 0 20px rgba(99, 102, 241, 0.3)',
        'glow-lg':
          '0 0 20px rgba(99, 102, 241, 0.6), 0 0 40px rgba(99, 102, 241, 0.4)',
        'glow-cyan': '0 0 10px rgba(0, 240, 255, 0.5), 0 0 20px rgba(0, 240, 255, 0.3)',
        'glow-green': '0 0 10px rgba(0, 255, 148, 0.5), 0 0 20px rgba(0, 255, 148, 0.3)',
        'glow-pink': '0 0 10px rgba(255, 0, 128, 0.5), 0 0 20px rgba(255, 0, 128, 0.3)',

        // Glass shadows
        glass:
          '0 8px 32px 0 rgba(31, 38, 135, 0.07), 0 0 1px 0 rgba(0, 0, 0, 0.05)',
        'glass-lg':
          '0 16px 64px 0 rgba(31, 38, 135, 0.12), 0 0 1px 0 rgba(0, 0, 0, 0.06)',

        // Neo-Brutalism shadows
        brutal: '4px 4px 0px 0px rgba(0, 0, 0, 1)',
        'brutal-sm': '2px 2px 0px 0px rgba(0, 0, 0, 1)',
        'brutal-lg': '8px 8px 0px 0px rgba(0, 0, 0, 1)',
        'brutal-neon': '4px 4px 0px 0px rgba(191, 0, 255, 1)',
        'brutal-cyan': '4px 4px 0px 0px rgba(0, 240, 255, 1)',
      },

      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        glitch: 'glitch 1s linear infinite',
        'glitch-text': 'glitchText 3s infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-neon': 'pulseNeon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'spin-slower': 'spin 6s linear infinite',
        holographic: 'holographic 3s ease-in-out infinite',
        scan: 'scan 8s linear infinite',
        type: 'type 3.5s steps(40, end)',
        blink: 'blink 1s step-end infinite',
        'border-flow': 'borderFlow 3s ease infinite',
        'scale-pulse': 'scalePulse 2s ease-in-out infinite',
        'bounce-in': 'bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        shake: 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',
        wiggle: 'wiggle 1s ease-in-out infinite',
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
        glitchText: {
          '0%, 100%': { textShadow: '-2px 0 #FF0080, 2px 0 #00F0FF' },
          '25%': { textShadow: '2px 0 #FF0080, -2px 0 #00F0FF' },
          '50%': { textShadow: '-2px 0 #00F0FF, 2px 0 #FF0080' },
          '75%': { textShadow: '2px 0 #00F0FF, -2px 0 #FF0080' },
        },
        pulseGlow: {
          '0%, 100%': {
            opacity: '1',
            boxShadow:
              '0 0 5px rgba(99, 102, 241, 0.5), 0 0 20px rgba(99, 102, 241, 0.3)',
          },
          '50%': {
            opacity: '.8',
            boxShadow:
              '0 0 10px rgba(99, 102, 241, 0.7), 0 0 30px rgba(99, 102, 241, 0.4), 0 0 50px rgba(99, 102, 241, 0.2)',
          },
        },
        pulseNeon: {
          '0%, 100%': {
            opacity: '1',
            boxShadow:
              '0 0 5px rgba(191, 0, 255, 0.5), 0 0 20px rgba(191, 0, 255, 0.3)',
          },
          '50%': {
            opacity: '.8',
            boxShadow:
              '0 0 10px rgba(191, 0, 255, 0.7), 0 0 30px rgba(191, 0, 255, 0.4), 0 0 50px rgba(191, 0, 255, 0.2)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        holographic: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        type: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
        borderFlow: {
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
      },

      borderWidth: {
        '3': '3px',
      },

      blur: {
        '4xl': '72px',
        '5xl': '96px',
      },

      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },

      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'bounce-out': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

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
};

export default config;
