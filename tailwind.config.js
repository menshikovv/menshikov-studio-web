/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        // Brand colors
        void: '#0a0a0a',
        electric: '#111111',
        cobalt: '#111111',
        'slate-surface': '#F7F7F7',
        'card-surface': '#F2F2F2',
        'muted-brand': '#666666',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        card: '32px',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      fontSize: {
        'hero': ['5.5rem', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        'hero-md': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'hero-sm': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.03em' }],
        'section': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'section-md': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'section-sm': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'slide-down': {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'slide-down': 'slide-down 0.3s ease-out',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0, 98, 255, 0.15) 0%, transparent 70%)',
        'hero-radial-2': 'radial-gradient(ellipse 50% 40% at 80% 80%, rgba(0, 212, 255, 0.08) 0%, transparent 60%)',
        'electric-gradient': 'linear-gradient(135deg, #0062FF 0%, #0098FF 100%)',
        'cta-gradient': 'linear-gradient(135deg, #020617 0%, #0A1628 50%, #020617 100%)',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
}
