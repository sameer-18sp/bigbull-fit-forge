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
					crimson: 'hsl(var(--bull-crimson))',
					fire: 'hsl(var(--bull-fire))',
					gold: 'hsl(var(--bull-gold))',
					bronze: 'hsl(var(--bull-bronze))',
					silver: 'hsl(var(--bull-silver))',
					dark: 'hsl(var(--bull-dark))',
					gray: 'hsl(var(--bull-gray))',
					blood: 'hsl(var(--bull-blood))',
					ember: 'hsl(var(--bull-ember))',
					steel: 'hsl(var(--bull-steel))'
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
				'gradient-fire': 'var(--gradient-fire)',
				'gradient-gold': 'var(--gradient-gold)',
				'gradient-bull': 'var(--gradient-bull)',
				'gradient-steel': 'var(--gradient-steel)',
				'gradient-ember': 'var(--gradient-ember)',
				'gradient-subtle': 'var(--gradient-subtle)'
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'power': 'var(--shadow-power)',
				'fire': 'var(--shadow-fire)',
				'gold': 'var(--shadow-gold)',
				'steel': 'var(--shadow-steel)',
				'intense': 'var(--shadow-intense)'
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
				'bull-charge': {
					'0%': {
						transform: 'translateX(-100px) scale(0.8)',
						opacity: '0'
					},
					'60%': {
						transform: 'translateX(20px) scale(1.05)',
						opacity: '0.8'
					},
					'100%': {
						transform: 'translateX(0) scale(1)',
						opacity: '1'
					}
				},
				'power-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(var(--bull-red) / 0.3)'
					},
					'50%': {
						boxShadow: '0 0 40px hsl(var(--bull-red) / 0.6), 0 0 60px hsl(var(--bull-fire) / 0.4)'
					}
				},
				'fire-glow': {
					'0%': {
						filter: 'brightness(1) saturate(1)'
					},
					'100%': {
						filter: 'brightness(1.2) saturate(1.3)'
					}
				},
				'steel-shine': {
					'0%': {
						backgroundPosition: '-200% 0'
					},
					'100%': {
						backgroundPosition: '200% 0'
					}
				},
				'shimmer': {
					'0%': {
						transform: 'translateX(-100%) translateY(-100%) rotate(45deg)'
					},
					'100%': {
						transform: 'translateX(100%) translateY(100%) rotate(45deg)'
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
				'bull-charge': 'bull-charge 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'power-pulse': 'power-pulse 2s ease-in-out infinite',
				'fire-glow': 'fire-glow 1.5s ease-in-out infinite alternate',
				'steel-shine': 'steel-shine 2s linear infinite',
				'shimmer': 'shimmer 1.5s ease-in-out',
				'float': 'float 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
