/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            h2: {
              fontSize: "1.4em",
              color: theme("colors.gray.500")
            },            
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
