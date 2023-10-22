/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        '390': '390px',
        'max-390': { 'max': '390px' },
        '480': '480px',
        'max-480': { 'max': '480px' },
        '540': '540px',
        'max-540': { 'max': '540px' },
        '600': '600px',
        'max-600': { 'max': '600px' },
        '642': '642px',
        'max-642': { 'max': '642px' },
        '641': '641px',
        'max-641': { 'max': '641px' },
        '900': '900px',
        'max-900': { 'max': '900px' },
        '960': '960px',
        'max-960': { 'max': '960px' },
        '1000': '1000px',
        'max-1000': { 'max': '1000px' },
        '1050': '1050px',
        'max-1050': { 'max': '1050px' },
        '1060': '1060px',
        'max-1060': { 'max': '1060px' },
        '1182': '1182px',
        'max-1182': { 'max': '1182px' },
     },
     backgroundImage: {	
      'banner': "url('https://vayonline.vpbank.com.vn/images/2da606ed6e685c79b1e6eeb81c37048c.png')",
      'moblie-banner': "url('https://vayonline.vpbank.com.vn/images/44477f076ab8de60c5c39e6ba548164b.png')"
    },
    fontFamily: {
      'GilroyMedium': ['GilroyMedium', 'Arial'],
      'GilroyLine': ['GilroyLine', 'Arial'],
      'GilroyLineItalic': ['GilroyLineItalic', 'Arial'],
      'GilroyBold': ['GilroyBold', 'Arial'],
      'question-text': ["Roboto", "Helvetica", "Arial"]
    },
    },
  },
  plugins: [],
}