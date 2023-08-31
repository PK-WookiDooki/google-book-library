/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        fontFamily: {
            sans: ["Montserrat", "sans-serif"],
            cursive: ["Pacifico", "cursive"],
        },
    },
    plugins: [],
    darkMode: "class",
};
