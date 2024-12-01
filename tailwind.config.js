/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,tsx,mdx}'],
  darkMode: 'selector', // or 'media' or 'selector'
  theme: {
    borderWidth: {
      1: '1px',
      2: '2px'
    },
    extend: {
      keyframes: {
        show: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        skeleton: {
          '0%': { backgroundColor: '#f0f0f0' },
          '50%': { backgroundColor: '#e0e0e0' },
          '100%': { backgroundColor: '#f0f0f0' }
        },
        /* Modal */
        fade100_in: {
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          },
          '0%': {
            transform: 'translateY(100px)',
            opacity: 0
          }
        }
      },

      animation: {
        showPage: 'show 1s linear',
        fade100: 'fade100_in 0.4s linear',
        skeleton: 'skeleton 2s infinite'
      },
      fontSize: {
        h1: [
          '44px',
          {
            fontWeight: '500',

            lineHeight: '44px',
            letterSpacing: '0px'
          }
        ],
        h2: [
          '36px',
          {
            fontWeight: '500',
            lineHeight: '44px'
          }
        ],
        h3: [
          '28px',
          {
            fontWeight: '500',
            lineHeight: '34px'
          }
        ],
        h4: [
          '24px',
          {
            fontWeight: '500',
            lineHeight: '30px'
          }
        ],
        h5: [
          '20px',
          {
            fontWeight: '500',
            lineHeight: '26px'
          }
        ],
        l1: [
          '20px',
          {
            fontWeight: '600',
            lineHeight: '26px'
          }
        ],
        l2: [
          '20px',
          {
            fontWeight: '400',
            lineHeight: '26px'
          }
        ],
        m1: [
          '18px',
          {
            fontWeight: '600',
            lineHeight: '26px'
          }
        ],
        m2: [
          '18px',
          {
            fontWeight: '400',
            lineHeight: '26px'
          }
        ],
        n1: [
          '16px',
          {
            fontWeight: '600',
            lineHeight: '24px'
          }
        ],
        n2: [
          '16px',
          {
            fontWeight: '400',
            lineHeight: '24px'
          }
        ],
        s1: [
          '14px',
          {
            fontWeight: '600',
            lineHeight: '20px'
          }
        ],
        s2: [
          '14px',
          {
            fontWeight: '400',
            lineHeight: '20px'
          }
        ],
        xsm: [
          '13px',
          {
            fontWeight: '400',
            lineHeight: 'auto'
          }
        ],
        xs1: [
          '12px',
          {
            fontWeight: '600',
            lineHeight: '18px'
          }
        ],
        xs2: [
          '12px',
          {
            fontWeight: '400',
            lineHeight: '18px'
          }
        ]
      },
      fontFamily: {},

      backgroundImage: {},
      borderWidth: {
        default: '1px solid'
      },
      screens: {
        tablet: { min: '1px', max: '1280.9px' },
        desktop: { min: '1281px' }
      },
      colors: {
        n10: '#F8F8F8',
        n20: '#EAEAEA',
        n30: '#DFDEDE',
        n40: '#C8C8C8',
        n50: '#AAAAAA',
        n60: '#848484',
        n70: '#666666',
        n80: '#3D3D3D',
        n90: '#212121',
        black: '#000000',

        p50: '#FFFCF8',
        p100: '#FFF3DD',
        p200: '#FFDC99',
        p300: '#FFCB66',
        p400: '#FFBA33',
        p500: '#FFA800',
        p600: '#CC8700',
        p700: '#996500',
        p800: '#664300',
        p900: '#332200',

        tp50: '#FFF1F1',
        tp100: '#FFD3D3',
        tp200: '#FFDC99',
        tp300: '#FFCB66',
        tp400: '#FFBA33',
        tp500: '#FFA800',
        tp600: '#CC8700',
        tp700: '#996500',
        tp800: '#664300',
        tp900: '#332200',

        s50: '#F6F9FF',
        s100: '#edf2ff',
        s200: '#EAEAEA',
        s300: '#c6d6ff',
        s400: '#487aff',
        s500: '#416ee6',
        s600: '#3a62cc',
        s700: '#365cbf',
        s800: '#2b4999',
        s900: '#203773',
        sDarker: '#192b59',

        error: '#ff3257',
        gray: '#FAFAFC',
        'm-gray': '#F9F9F9',
        'd-black': '#101010',
        white: '#FFFFFF',
        orange: '#FFA800'
      }
    }
  },
  plugins: []
}
