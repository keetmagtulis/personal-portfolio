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

  theme: {
    extend: {
      scrollbar: {
        DEFAULT: {
          width: '10px',
          track: '#f1f1f1',
          thumb: '#888',
          thumbHover: '#555',
        },
      },
    },
  },

  plugins: [ 
    function({ addUtilities, theme }) {
      const scrollbars = theme('scrollbar');
      const scrollbarUtilities = Object.keys(scrollbars).map(key => {
        const { width, track, thumb, thumbHover } = scrollbars[key];
        return {
          [`.scrollbar-${key}`]: {
            '&::-webkit-scrollbar': {
              width: width,
            },
            '&::-webkit-scrollbar-track': {
              background: track,
            },
            '&::-webkit-scrollbar-thumb': {
              background: thumb,
              borderRadius: '8px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: thumbHover,
            },
          },
        };
      });
      addUtilities(scrollbarUtilities, ['responsive']);
    },
  ],
}

