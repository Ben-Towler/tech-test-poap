import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'white': "#FFFFFF",
      'primary': {
        light: "#B5AEFF",
        DEFAULT: "#5E58A5",
        dark: "#473E6B"
      },
      'error': {
        light: "#FFD8D8",
        DEFAULT: "#ff3333"
      }
    },
    fontFamily: {
      "heading": ["var(--font-rubik)", 'sans-serif'],
      "body": ["var(--font-comfortaa)", 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero': "url('/header-bg.webp')",
        'card': "url('/card-bg.svg')",
        'grad': "radial-gradient(rgba(255,255,255,0.7) 15%, rgba(255,255,255,0) 50%)",
      },
    },
  },
  plugins: [],
};

export default config
