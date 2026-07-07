export default {
  plugins: {
    "@tailwindcss/postcss": {
      content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
      ],
    },
  },
}
