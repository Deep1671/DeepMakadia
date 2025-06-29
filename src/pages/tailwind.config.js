// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradientX 8s ease infinite',
      },
      keyframes: {
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
