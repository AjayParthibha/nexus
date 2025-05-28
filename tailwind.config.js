/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c7ff',
          300: '#66abff',
          400: '#338fff',
          500: '#0A84FF', // Primary blue
          600: '#0060cc',
          700: '#004799',
          800: '#002f66',
          900: '#001733',
        },
        secondary: {
          50: '#f0f0fc',
          100: '#e0e0f9',
          200: '#c2c1f3',
          300: '#a3a2ed',
          400: '#8583e7',
          500: '#5E5CE6', // Secondary purple
          600: '#4b4ab8',
          700: '#38388a',
          800: '#25255c',
          900: '#13132e',
        },
        accent: {
          50: '#e9f7fa',
          100: '#d3eff5',
          200: '#a7dfeb',
          300: '#7bcfe1',
          400: '#4fbfd7',
          500: '#30B0C7', // Accent teal
          600: '#268d9f',
          700: '#1d6a77',
          800: '#134650',
          900: '#0a2328',
        },
        success: {
          500: '#34c759',
        },
        warning: {
          500: '#ff9500',
        },
        error: {
          500: '#ff3b30',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'San Francisco',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.5s ease-in-out forwards',
        'slide-down': 'slideDown 0.5s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};