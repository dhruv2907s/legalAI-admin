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
				/* LegalAI Theme Colors - Purple & Teal */
				'deep-purple': 'hsl(285 45% 6%)',
				'bright-teal': 'hsl(180 85% 65%)',
				'glass-bg': 'hsl(var(--glass-bg))',
				'glass-border': 'hsl(var(--glass-border))'
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-teal': 'var(--gradient-teal)',
				'gradient-purple': 'var(--gradient-purple)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-text': 'var(--gradient-text)',
				'gradient-border': 'var(--gradient-border)'
			},
			boxShadow: {
				'glass': 'var(--shadow-glass)',
				'soft': 'var(--shadow-soft)',
				'depth': 'var(--shadow-depth)'
			},
			backdropBlur: {
				'glass': '24px'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'breathe': {
					'0%, 100%': { 
						transform: 'scale(1)',
						filter: 'brightness(1)'
					},
					'50%': { 
						transform: 'scale(1.02)',
						filter: 'brightness(1.1)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'33%': { transform: 'translateY(-20px) rotate(120deg)' },
					'66%': { transform: 'translateY(10px) rotate(240deg)' }
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'breathe': 'breathe 4s ease-in-out infinite',
				'float': 'float 8s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 4s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
