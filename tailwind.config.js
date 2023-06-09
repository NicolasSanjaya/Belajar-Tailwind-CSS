/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
        theme: {
          extend: {
            spacing: {
              13: "3.25rem",
            },
            fontFamily: {
              inter: ["Inter"],
            },
            colors: {
              wpu: "#bada55",
              kopi: "#c0ffee",
            },
            animation: {
              "bounce-slow": "bounce 3s ease-in-out infinite",
              goyang: "goyang 1s ease-in-out infinite",
            },
            keyframes: {
              goyang: {
                "0%, 100%": {
                  transform: "rotate(-30deg)",
                },
                "50%": {
                  transform: "rotate(30deg)",
                },
              },
            },
          },
        },
  plugins: [],
}

