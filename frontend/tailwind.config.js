/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/**/**/*.{html,ts}",
    "./src/**/**/**/*.{html,ts}",
  ],
  theme: {
    darkMode: 'class',
    extend: {},
    screens: {
      phone:{'max': '560px'},
      tablet:{'min': '1000px'},
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      primary: {"50":"#f0f9ff","100":"#e0f2fe","200":"#bae6fd","300":"#7dd3fc","400":"#38bdf8","500":"#0ea5e9","600":"#0284c7","700":"#0369a1","800":"#075985","900":"#0c4a6e"},
      'blue-light': '#91D7F2',
      'blue-dark': '#0C3C59',
      'light': '#EBF1F2',
      'light-tint1': '#ebf1f180',
      'orange': '#F2594B',
      'yellow-dark': '#F2E4C9',
      'dark': '#121212',
      'gray-light': '#d3dce6',
      'green':'#128c7e',
      'beige':'#fff',
      'beige-light':'#efefefb5'
    },
    fontFamily: {
      'body': [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ],
      'sans': [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ],
      serif: ['Merriweather', 'serif'],
      'dosis':'Dosis',
    }
  },
  plugins: [],
}
