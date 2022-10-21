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
      spacing: {
        7: '7px',
        8: '8px',
        9: '9px',
        10: '10px',
        11: '11px',
        12: '12px',
        15: '15px',
        16: '16px',
        18: '18px',
        19: '19px',
        20: '20px',
        21: '21px',
        22: '22px',
        23: '23px',
        24: '24px',
        25: '25px',
        35: '35px',
        47: '47px',
        48: '48px',
        52: '52px',
        54: '54px',
        56: '56px',
        60: '60px',
        103: '103px',
        115: '115px',
        116: '116px',
        120: '120px',
        121: '121px',
        135: '135px',
        138: '138px',
        160: '160px',
        164: '164px',
        165: '165px',
        220: '220px',
        224: '224px',
        282: '282px',
        294: '294px',
        306: '306px',
        308: '308px',
        312: '312px',
        343: '343px',
        375: '375px',
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
      boxShadow: {
        primary: '0px 2px 7px rgba(0, 0, 0, 0.24);',
      },
      colors: {
        blue: {
          primary: 'rgba(35, 108, 217, 1)',
        },
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
