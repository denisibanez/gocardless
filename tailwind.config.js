/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // Ensure Tailwind doesn't conflict with Quasar
  corePlugins: {
    preflight: false, // Disable Tailwind's preflight to avoid conflicts with Quasar
  },
}
