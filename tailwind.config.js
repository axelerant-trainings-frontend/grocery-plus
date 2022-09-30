/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '375px',
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
      },
      margin: {
        primary: '16px',
      },
      width: {
        xxs: '35px',
        xs: '54px',
        sm: '115px',
        lg: '164px',
        xl: '165px',
        '2xl': '294px',
        '3xl': '312px',
        '4xl': '343px',
        '5xl': '375px',
      },
      height: {
        xxs: '35px',
        xs: '48px',
        sm: '54px',
        lg: '116px',
        xl: '120px',
        '2xl': '1214px',
        '3xl': '135px',
        '4xl': '160px',
        '5xl': '282px',
        '6xl': '308px',
      },
      fontSize: {
        sm: '11px',
        md: '12px',
        lg: '13px',
        xl: '14px',
        '2xl': '15px',
        '3xl': '16px',
        '4xl': '20px',
        '5xl': '30px',
      },
      lineHeight: {
        xxs: '16.5px',
        xs: '18px',
        sm: '19.5px',
        lg: '21px',
        xl: '22.5px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '44px',
      },
      borderRadius: {
        xxs: '7px',
        xs: '8px',
        sm: '9px',
        lg: '12px',
        xl: '20px',
      },
      colors: {
        green: {
          primary: 'rgba(135, 221, 57, 1)',
          secondary: 'rgba(94, 196, 1, 1)',
        },
        red: {
          primary: 'rgba(255, 85, 82, 1)',
          secondary: 'rgba(255, 85, 82, 0.72)',
        },
        orange: {
          light: 'rgba(243, 122, 32, 1)',
        },
        gray: {
          light: 'rgba(240, 241, 242, 1)',
          darkish: 'rgba(55, 71, 79, 0.72)',
        },
        light: {
          regular: 'rgba(252, 252, 252, 0.6)',
          off: 'rgba(54, 179, 126, 0.14)',
        },
        silver: { light: 'rgba(196, 196, 196, 1)' },
        flashWhite: 'rgba(243, 244, 244, 1)',
        charcoal: 'rgba(55, 71, 79, 1)',
        blackOlive: 'rgba(62, 62, 62, 1)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
