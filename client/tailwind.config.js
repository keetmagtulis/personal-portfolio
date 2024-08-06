/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this to match your file locations
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-image': "url('/public/images/Homepage background.jpg')", // Define your custom background class
      },
    },
  },
  plugins: [],
}

