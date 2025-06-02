
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Divine theme colors
				neon: {
					pink: '#ff6b9d',
					blue: '#12c2e9',
					purple: '#c471ed',
					cyan: '#64ffda',
					yellow: '#ffd700',
					orange: '#ff9500',
				},
				cyber: {
					dark: '#0a0a15',
					darker: '#050510',
					primary: '#c471ed',
					accent: '#ff6b9d',
					secondary: '#12c2e9',
					tertiary: '#9333ea',
				},
				divine: {
					dark: '#0a0a15',
					purple: '#9333ea',
					blue: '#3b82f6',
					pink: '#ec4899',
					cyan: '#06b6d4',
					gold: '#ffd700',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'glow': {
					'0%, 100%': { filter: 'brightness(1)' },
					'50%': { filter: 'brightness(1.5)' },
				},
				'pulse-soft': {
					'0%, 100%': { opacity: '.8' },
					'50%': { opacity: '1' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-15px)' },
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'neon-flicker': {
					'0%, 100%': { opacity: '1' },
					'33%': { opacity: '0.8' },
					'66%': { opacity: '0.9' },
				},
				'shimmer': {
					'0%': { backgroundPosition: '200% 0' },
					'100%': { backgroundPosition: '-200% 0' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				// Divine animations
				'divine-glow': {
					'0%, 100%': { 
						filter: 'brightness(1) saturate(1)',
						boxShadow: '0 0 50px rgba(147, 51, 234, 0.3)'
					},
					'50%': { 
						filter: 'brightness(1.8) saturate(1.5)',
						boxShadow: '0 0 100px rgba(147, 51, 234, 0.6)'
					},
				},
				'divine-pulse': {
					'0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.1)' },
				},
				'divine-float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-30px) rotate(180deg)' },
				},
				'divine-shimmer': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				'text-shimmer': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				'glow-intense': {
					'0%, 100%': { filter: 'brightness(1)', transform: 'scale(1)' },
					'50%': { filter: 'brightness(2)', transform: 'scale(1.1)' },
				},
				'pulse-divine': {
					'0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.2)' },
				},
				'float-slow': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-25px) rotate(180deg)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow': 'glow 2s ease-in-out infinite',
				'pulse-soft': 'pulse-soft 3s infinite',
				'float': 'float 6s ease-in-out infinite',
				'spin-slow': 'spin-slow 8s linear infinite',
				'neon-flicker': 'neon-flicker 2s infinite',
				'shimmer': 'shimmer 3s linear infinite',
				'fade-in': 'fade-in 0.3s ease-out',
				// Divine animations
				'divine-glow': 'divine-glow 4s ease-in-out infinite',
				'divine-pulse': 'divine-pulse 3s ease-in-out infinite',
				'divine-float': 'divine-float 8s ease-in-out infinite',
				'divine-shimmer': 'divine-shimmer 4s ease infinite',
				'text-shimmer': 'text-shimmer 3s ease infinite',
				'gradient-shift': 'gradient-shift 15s ease infinite',
				'glow-intense': 'glow-intense 2s ease-in-out infinite',
				'pulse-divine': 'pulse-divine 4s ease-in-out infinite',
				'float-slow': 'float-slow 10s ease-in-out infinite',
			},
			backgroundImage: {
				'cyber-grid': "url('/images/cyber-grid.png')",
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'divine-gradient': 'linear-gradient(135deg, #9333ea, #3b82f6, #ec4899, #06b6d4)',
			},
			fontFamily: {
				cyber: ['Orbitron', 'sans-serif'],
				neon: ['Audiowide', 'cursive'],
				futuristic: ['Rajdhani', 'sans-serif'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
