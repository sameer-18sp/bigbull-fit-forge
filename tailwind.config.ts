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
				gym: {
					navy: 'hsl(var(--gym-navy))',
					'navy-light': 'hsl(var(--gym-navy-light))',
					orange: 'hsl(var(--gym-orange))',
					'orange-light': 'hsl(var(--gym-orange-light))',
					lime: 'hsl(var(--gym-lime))',
					'lime-light': 'hsl(var(--gym-lime-light))',
					peach: 'hsl(var(--gym-peach))',
					'peach-light': 'hsl(var(--gym-peach-light))',
					gray: 'hsl(var(--gym-gray))',
					'gray-dark': 'hsl(var(--gym-gray-dark))',
					charcoal: 'hsl(var(--gym-charcoal))'
				},
				bull: {
					red: 'hsl(var(--bull-red))',
					gold: 'hsl(var(--bull-gold))',
					gray: 'hsl(var(--bull-gray))',
					silver: 'hsl(var(--bull-silver))',
					dark: 'hsl(var(--bull-dark))'
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
				'gradient-energy': 'var(--gradient-energy)',
				'gradient-growth': 'var(--gradient-growth)',
				'gradient-warmth': 'var(--gradient-warmth)',
				'gradient-balance': 'var(--gradient-balance)',
				'gradient-authority': 'var(--gradient-authority)',
				'gradient-motivation': 'var(--gradient-motivation)',
				'gradient-subtle': 'var(--gradient-subtle)'
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'energy': 'var(--shadow-energy)',
				'growth': 'var(--shadow-growth)',
				'warmth': 'var(--shadow-warmth)',
				'authority': 'var(--shadow-authority)',
				'elevated': 'var(--shadow-elevated)'
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
				'energy-pulse': {
					'0%': {
						transform: 'translateY(-20px) scale(0.95)',
						opacity: '0'
					},
					'60%': {
						transform: 'translateY(5px) scale(1.02)',
						opacity: '0.9'
					},
					'100%': {
						transform: 'translateY(0) scale(1)',
						opacity: '1'
					}
				},
				'motivation-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(var(--gym-orange) / 0.3)'
					},
					'50%': {
						boxShadow: '0 0 40px hsl(var(--gym-orange) / 0.6), 0 0 60px hsl(var(--gym-lime) / 0.4)'
					}
				},
				'growth-wave': {
					'0%': {
						filter: 'brightness(1) saturate(1) hue-rotate(0deg)'
					},
					'100%': {
						filter: 'brightness(1.1) saturate(1.2) hue-rotate(5deg)'
					}
				},
				'balance-float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'energy-shimmer': {
					'0%': {
						transform: 'translateX(-100%) translateY(-100%) rotate(45deg)'
					},
					'100%': {
						transform: 'translateX(100%) translateY(100%) rotate(45deg)'
					}
				},
				'warmth-pulse': {
					'0%, 100%': {
						transform: 'scale(1)',
						opacity: '1'
					},
					'50%': {
						transform: 'scale(1.05)',
						opacity: '0.8'
					}
				},
				'authority-slide': {
					'0%': {
						transform: 'translateX(-30px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'energy-pulse': 'energy-pulse 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'motivation-glow': 'motivation-glow 2s ease-in-out infinite',
				'growth-wave': 'growth-wave 1.5s ease-in-out infinite alternate',
				'balance-float': 'balance-float 3s ease-in-out infinite',
				'energy-shimmer': 'energy-shimmer 1.5s ease-in-out',
				'warmth-pulse': 'warmth-pulse 2s ease-in-out infinite',
				'authority-slide': 'authority-slide 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
