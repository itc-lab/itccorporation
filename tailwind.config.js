module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        orange: '#F39800',
      },
      fontSize: {
        'logo-pc': '0.65rem',
        'logo-sp': '0.77rem',
      },
    },
  },
  plugins: [require('tailwind-hamburgers')],
};
