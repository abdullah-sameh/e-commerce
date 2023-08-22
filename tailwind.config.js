/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import themes from 'daisyui/src/theming/themes'

const globalStyles = {
  warning: '#e66730',
}

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        lemonade: { ...themes['[data-theme=lemonade]'], ...globalStyles },
        business: { ...themes['[data-theme=business]'], ...globalStyles },
      },
    ],
  },
}
