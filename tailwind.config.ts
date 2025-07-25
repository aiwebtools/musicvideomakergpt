
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
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
				cyber: ['Orbitron', 'sans-serif'],
				neon: ['Audiowide', 'cursive'],
				futuristic: ['Rajdhani', 'sans-serif'],
			},
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
				// Enhanced cyber theme colors
				'cyber': {
					darker: '#0a0a0f',
					dark: '#0f0f1a',
					primary: '#1a1a2e',
					secondary: '#16213e',
					accent: '#0f3460',
					tertiary: '#533483',
				},
				'neon': {
					blue: '#00d9ff',
					purple: '#a855f7',
					pink: '#f472b6',
					green: '#22d3ee',
					orange: '#fb923c',
					yellow: '#FFFF00',
				},
				'glass': {
					light: 'rgba(255, 255, 255, 0.1)',
					medium: 'rgba(255, 255, 255, 0.15)',
					dark: 'rgba(0, 0, 0, 0.2)',
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
				"fade-in": {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"fade-in-up": {
					"0%": { opacity: "0", transform: "translateY(40px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"scale-in": {
					"0%": { opacity: "0", transform: "scale(0.95)" },
					"100%": { opacity: "1", transform: "scale(1)" },
				},
				"slide-in-right": {
					"0%": { opacity: "0", transform: "translateX(100px)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
				"slide-in-left": {
					"0%": { opacity: "0", transform: "translateX(-100px)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
				"pulse-glow": {
					"0%, 100%": { boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" },
					"50%": { boxShadow: "0 0 40px rgba(168, 85, 247, 0.8)" },
				},
				"float": {
					"0%, 100%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-10px)" },
				},
				"shimmer": {
					"0%": { backgroundPosition: "-200% 0" },
					"100%": { backgroundPosition: "200% 0" },
				},
				"gradient-shift": {
					"0%, 100%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
				},
				'glow': {
					'0%, 100%': { filter: 'brightness(1)' },
					'50%': { filter: 'brightness(1.2)' },
				},
				'pulse-soft': {
					'0%, 100%': { opacity: '.8' },
					'50%': { opacity: '1' },
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
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				"fade-in": "fade-in 0.6s ease-out",
				"fade-in-up": "fade-in-up 0.8s ease-out",
				"scale-in": "scale-in 0.5s ease-out",
				"slide-in-right": "slide-in-right 0.7s ease-out",
				"slide-in-left": "slide-in-left 0.7s ease-out",
				"pulse-glow": "pulse-glow 2s ease-in-out infinite",
				"float": "float 3s ease-in-out infinite",
				"shimmer": "shimmer 2s linear infinite",
				"gradient-shift": "gradient-shift 3s ease infinite",
				"pulse-soft": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
				'glow': 'glow 2s ease-in-out infinite',
				'spin-slow': 'spin-slow 8s linear infinite',
				'neon-flicker': 'neon-flicker 2s infinite',
			},
			backgroundImage: {
				'cyber-grid': "url('/images/cyber-grid.png')",
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
			},
			backgroundSize: {
				'grid': '50px 50px',
			},
			boxShadow: {
				'glow': '0 0 20px rgba(168, 85, 247, 0.3)',
				'glow-lg': '0 0 40px rgba(168, 85, 247, 0.4)',
				'glow-xl': '0 0 60px rgba(168, 85, 247, 0.5)',
				'neon': '0 0 5px currentColor, 0 0 20px currentColor, 0 0 35px currentColor',
				'cyber': '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
			},
			backdropBlur: {
				'xs': '2px',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
