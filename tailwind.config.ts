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
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				bull: {
					red: 'hsl(var(--bull-red))',
					gold: 'hsl(var(--bull-gold))',
					dark: 'hsl(var(--bull-dark))',
					gray: 'hsl(var(--bull-gray))',
					bronze: 'hsl(var(--bull-bronze))'
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
				}
			},
			fontFamily: {
				'orbitron': ['Orbitron', 'monospace'],
				'rajdhani': ['Rajdhani', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-power': 'var(--gradient-power)',
				'gradient-subtle': 'var(--gradient-subtle)',
				'gradient-premium': 'var(--gradient-premium)',
				'gradient-bull': 'var(--gradient-bull)',
				'gradient-steel': 'var(--gradient-steel)'
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'power': 'var(--shadow-power)',
				'steel': 'var(--shadow-steel)',
				'premium': 'var(--shadow-premium)'
			},
			transitionTimingFunction: {
				'power': 'var(--transition-power)',
				'smooth': 'var(--transition-smooth)',
				'bounce': 'var(--transition-bounce)',
				'elastic': 'var(--transition-elastic)'
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
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(var(--primary) / 0.3)'
					},
					'50%': {
						boxShadow: '0 0 40px hsl(var(--primary) / 0.6)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'shimmer': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'bull-power': {
					'0%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
					'25%': { transform: 'scale(1.05) rotate(1deg)', opacity: '0.9' },
					'50%': { transform: 'scale(1.1) rotate(0deg)', opacity: '0.8' },
					'75%': { transform: 'scale(1.05) rotate(-1deg)', opacity: '0.9' },
					'100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' }
				},
				'text-reveal': {
					'0%': { transform: 'translateY(100px) rotateX(-90deg)', opacity: '0' },
					'100%': { transform: 'translateY(0) rotateX(0deg)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'shimmer': 'shimmer 2s ease-in-out infinite',
				'bull-power': 'bull-power 3s ease-in-out infinite',
				'text-reveal': 'text-reveal 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
