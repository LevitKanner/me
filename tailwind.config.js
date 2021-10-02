module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            "colors": {
                "gold": {
                    "50": "#ffb164",
                    "100": "#f5a75a",
                    "200": "#eb9d50",
                    "300": "#e19346",
                    "400": "#d7893c",
                    "500": "#cd7f32",
                    "600": "#c37528",
                    "700": "#b96b1e",
                    "800": "#af6114",
                    "900": "#a5570a"
                }
            },
            fontFamily: {
                royale: "'Bonheur Royale', cursive",
                lora: "'Lora', serif",
                dancing: "'Dancing Script', cursive"
            }
        },
    },
    variants: {
        extend: {
            height: ['hover', 'focus'],
        },
    },
    plugins: [],
}
