/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // your paths
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#3B7FBF',
        'primary-blue-hover': '#2B6FA8',
        'success-green': '#10B981',
        'success-green-light': '#D1FAE5',
        'danger-red': '#EF4444',
      },
    },
  },
  plugins: [],
};
