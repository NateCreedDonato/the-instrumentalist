import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        inter: ['Inter var', 'sans-serif'],
      },
      colors: {
        "primary-grey": "#212529",
        "secondary-grey": "#343A40",
        "third-grey":"#475569",
      },
    },
  },
  plugins: [],
}
export default config
