/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  theme: {
    extend: {
      boxShadow: {
        custom:
          "0 8px 1px rgba(255, 255, 255, 0.1), 0 16px 1px rgba(255, 255, 255, 0.05)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // ...
    require("tailwind-scrollbar-hide"),
  ],
};
