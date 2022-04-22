module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        test: ["'Work Sans'", "serif"],
      },
      colors: {
        'primary': '#A170D9',
        'secondary': '#05CAB6',
        'tertiary': '#0088cc',
        'light': '#e2e8f0',
        'grey': '#64748b',
        'dark': '#334155',
      },
      backgroundImage: {
        'main': "url('background.jpg')",
      }
    },
  },
  plugins: [],
}
