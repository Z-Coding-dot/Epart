/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF6B00',
          gold: '#FFB202',
          ink: '#9A4200',
          dark: '#111827',
          light: '#F3F4F6',
        },
      },
      fontFamily: {
        sans: ['Vazirmatn', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        body: ['clamp(1rem, 0.95rem + 0.25vw, 1.125rem)', { lineHeight: '1.85' }],
        display: ['clamp(2rem, 1.2rem + 3.5vw, 4.25rem)', { lineHeight: '1.25' }],
        title: ['clamp(1.5rem, 1.1rem + 1.6vw, 2.5rem)', { lineHeight: '1.4' }],
      },
      maxWidth: {
        container: '72rem',
      },
      boxShadow: {
        lift: '0 18px 40px -20px rgba(255, 107, 0, 0.45)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #FF6B00 0%, #FFB202 100%)',
      },
      screens: {
        xs: '390px',
      },
    },
  },
  plugins: [],
}
