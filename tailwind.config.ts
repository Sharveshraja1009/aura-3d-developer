
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
				neon: {
					cyan: '#00FFFF',
					purple: '#B026FF',
					pink: '#FF1493',
					blue: '#0080FF',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 20px #00FFFF' },
					'50%': { boxShadow: '0 0 30px #B026FF, 0 0 40px #B026FF' }
				},
				'fadeInUp': {
					'0%': { opacity: '0', transform: 'translateY(60px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fadeInLeft': {
					'0%': { opacity: '0', transform: 'translateX(-60px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fadeInRight': {
					'0%': { opacity: '0', transform: 'translateX(60px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'scaleIn': {
					'0%': { opacity: '0', transform: 'scale(0.8)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				}
			},
			animation: {
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'fadeInUp': 'fadeInUp 0.8s ease-out',
				'fadeInLeft': 'fadeInLeft 0.8s ease-out',
				'fadeInRight': 'fadeInRight 0.8s ease-out',
				'scaleIn': 'scaleIn 0.6s ease-out'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'neon-gradient': 'linear-gradient(45deg, #00FFFF, #B026FF, #FF1493)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
