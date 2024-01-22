/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'sstop': 'sstop 1s linear infinite',
        'nvspin': 'nvspin 5s linear infinite 200ms',
        'progressbar': 'progressbar 1s linear', // Fix typo in animation name
        'aopacity': 'aopacity 1s linear',
        'ncroll': 'ncroll 2s linear',
        'ncroll-90': 'ncroll-90 2s linear',
        'ncroll-80': 'ncroll-80 2s linear',
        'ncroll-45': 'ncroll-45 2s linear',
        'ncroll-70': 'ncroll-70 2s linear',
      },
      keyframes: {
        sstop: {
          '0%': { transform: 'rotate(-0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        nvspin: {
          '0%': {
            'box-shadow': '0px 0px 10px 10px rgba(0, 0, 0, 0.5)',
            'background-image': 'url("img/logo.png")',
            'background-color': 'rgba(0, 0, 0, 0.5)',
          },
          '20%': {
            'box-shadow': '0px 0px 10px 10px rgba(0, 0, 0, 0.5)',
            'background-image': 'url("img/logo2.png")',
            'background-color': 'rgba(0, 0, 0, 0.5)',
          },
          '40%': {
            'box-shadow': '0px 0px 10px 10px rgba(0, 0, 0, 0.5)',
            'background-image': 'url("img/logo3.png")',
            'background-color': 'rgba(0, 0, 0, 0.5)',
          },
          '60%': {
            'box-shadow': '0px 0px 10px 10px rgba(0, 0, 0, 0.5)',
            'background-image': 'url("img/logo4.png")',
            'background-color': 'rgba(0, 0, 0, 0.5)',
          },
          '80%': {
            'box-shadow': '0px 0px 10px 10px rgba(0, 0, 0, 0.5)',
            'background-image': 'url("img/logo5.png")',
            'background-color': 'rgba(0, 0, 0, 0.5)',
          },
          '100%': {
            'box-shadow': '0px 0px 10px 10px rgba(0, 0, 0, 0.5)',
            'background-image': 'url("img/logo.png")',
            'background-color': 'rgba(0, 0, 0, 0.5)',
          },
        },
        progressbar: {
          '0%': {
            'width': '0%',
          },
          '100%': {
            'width': '100%',
          },
        },
        aopacity: { // Corrected animation name
          '0%': {
            'opacity': '0', // Corrected property name
          },
          '99%': {
            'opacity': '0', // Corrected property name
          },
          '100%': {
            'opacity': '1', // Corrected property name
          },
        },
        'ncroll-90': (function () {
          const keyframes = {};
          for (let i = 0; i <= 90; i++) {
            const angle = 360 - i * 3.6;
            keyframes[`${i}%`] = {
              'background-image': `conic-gradient(from 360deg at 50% 50%, black ${angle}deg, rgb(239,68,68) ${angle}deg)`,
            };
          }
          return keyframes;
        })(),
        'ncroll-80': (function () {
          const keyframes = {};
          for (let i = 0; i <= 80; i++) {
            const angle = 360 - i * 3.6;
            keyframes[`${i}%`] = {
              'background-image': `conic-gradient(from 360deg at 50% 50%, black ${angle}deg, rgb(59,130,246) ${angle}deg)`,
            };
          }
          return keyframes;
        })(),
        'ncroll-45': (function () {
          const keyframes = {};
          for (let i = 0; i <= 45; i++) {
            const angle = 360 - i * 3.6;
            keyframes[`${i}%`] = {
              'background-image': `conic-gradient(from 360deg at 50% 50%, black ${angle}deg, rgb(147,51,234) ${angle}deg)`,
            };
          }
          return keyframes;
        })(),
        'ncroll-70': (function () {
          const keyframes = {};
          for (let i = 0; i <= 70; i++) {
            const angle = 360 - i * 3.6;
            keyframes[`${i}%`] = {
              'background-image': `conic-gradient(from 360deg at 50% 50%, black ${angle}deg, rgb(61,190,190) ${angle}deg)`,
            };
          }
          return keyframes;
        })(),
      },
      boxShadow: {
        'glow': '0 0 11.25px 11.25px rgba(100, 43, 255, 0.5),0 0 22.5px 22.5px rgba(255, 34, 230, 0.4),0 0 33.75px 33.75px rgba(255, 165, 0, 0.3),0 0 45.25px 45.25px rgba(0, 255, 255, 0.2)',

        'nvglow': '0px 0px 20px 10px rgba(185,28,28, 0.8), 0px 0px 20px 10px rgba(185,28,28, 0.3), 0px 0 20px 10px rgba(185,28,28, 0.2)',

        'sshadow': '0px 0px 300px 10px rgba(0,255,255,0.2)',
      },
      screens: {
        'mobile': '0px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const scrollbarStyles = {
        '.scrollbar': {
          'scrollbar-width': '10px',
          'scrollbar-color': '#642bff #d1e5ff',
          '&::-webkit-scrollbar': {
            width: '10px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'rgb(31, 41, 55)',
            'margin-top': '0px',
            'border-radius': '10px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'linear-gradient(#642bff, #ff22e6)',
            'border-radius': '10px',
          },
        },
      };

      addUtilities(scrollbarStyles, ['responsive', 'hover']);
    },
  ],
};
