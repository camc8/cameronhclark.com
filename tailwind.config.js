/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      'sans': ['"Poppins"', 'Arial', 'Helvetica', 'sans-serif'],
      'mono': ['"UbuntuMono"', 'Arial', 'Helvetica', 'sans-serif'],
    },
    extend: {
      animation: {
        "my-name": 'my-name 7s ease infinite alternate',
        skills: 'skills 7s ease infinite alternate',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        "my-name": {
          '0%': {
            'background-position': '0% 50%',
            'background-size': '200% 200%',
            'background-image': 'linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5,#23d5ab)',
          },
          '50%': {
            'background-position': '100% 50%',
            'background-size': '200% 200%',
            'background-image': 'linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5,#23d5ab)',
          },
          '100%': {
            'background-position': '0% 50%',
            'background-size': '200% 200%',
            'background-image': 'linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5,#23d5ab)',
          },
        },
        skills: {
          '0%': {
            'background-position': '0% 50%',
            'background-size': '200% 200%',
            'background-image': 'linear-gradient(135deg,#ccfbf1,#ede9fe,#ccfbf1)',
          },
          '50%': {
            'background-position': '100% 50%',
            'background-size': '200% 200%',
            'background-image': 'linear-gradient(135deg,#ccfbf1,#ede9fe,#ccfbf1)',
          },
          '100%': {
            'background-position': '0% 50%',
            'background-size': '200% 200%',
            'background-image': 'linear-gradient(135deg,#ccfbf1,#ede9fe,#ccfbf1)',
          },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
