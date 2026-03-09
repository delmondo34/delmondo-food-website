/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',        // was #112a7a - now slate-900 (ink)
        'primary-dark': '#020617', // was #0d225f - now slate-950
        accent: '#0f172a',         // was #2a4cb5 - now slate-900 (ink)
        ink: '#0f172a',            // slate-900 — deep corporate text
        surface: '#f8fafc',        // slate-50 — light background
        mist: '#f1f5f9',           // slate-100 — section bg
        navy: '#0f172a',           // dark navy for header/footer
        'navy-light': '#1e293b',   // slate-800
        steel: '#64748b',          // steel gray muted text
      },
      boxShadow: {
        soft: '0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.08)',
        card: '0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -2px rgba(0,0,0,0.07)',
        elevated: '0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -4px rgba(0,0,0,0.08)',
        glass: '0 8px 32px rgba(0,0,0,0.06)',
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Open Sans', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateX(-12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
        'slide-in': 'slide-in 0.4s ease-out both',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
