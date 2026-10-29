/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#090a0f',
          900: '#0e111a',
          850: '#131826',
          800: '#181f30',
        },
        violet: {
          glow: '#8b5cf6',
          accent: '#a78bfa',
          dark: '#5b21b6',
        },
      },
      backgroundImage: {
        'violet-gradient': 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
        'subtle-glow': 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.15) 0%, rgba(9, 10, 15, 0) 70%)',
        'card-gradient': 'linear-gradient(180deg, rgba(24, 31, 48, 0.6) 0%, rgba(14, 17, 26, 0.8) 100%)',
      },
      boxShadow: {
        'violet-glow': '0 0 35px -5px rgba(139, 92, 246, 0.35)',
        'violet-subtle': '0 0 20px -2px rgba(139, 92, 246, 0.2)',
        'card': '0 8px 30px rgba(0, 0, 0, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
