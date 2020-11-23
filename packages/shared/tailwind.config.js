module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          500:'var(--primary-500)',
          700:'var(--primary-700)',
        },
        secondary: {
          500:'var(--secondary-500)',
          700:'var(--secondary-700)',
        },
        accent:'var(--accent)',
        main: 'var(--main)',
        background: 'var(--background)'
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled']
    }
  },
  plugins: []
}
