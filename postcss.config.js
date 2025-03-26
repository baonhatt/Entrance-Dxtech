export default {
  plugins: {
    tailwindcss: {
      config: {
        theme: {
          extend: {
            colors: {
              banana: {
                300: '#B9FF66',
              },
            },
          },
        },
      },
    },
    autoprefixer: {},
  },
};