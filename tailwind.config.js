/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
    content: [
        "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
        "./src/**/*.{js,jsx,ts,tsx}",
        "./pages/**/*.{ts,tsx}",
        "./public/**/*.html",
    ],
    plugins: [
        require("flowbite/plugin")
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'greyish': '#314866',
            'mute-grey': '#293241',
            'basically-white': '#bbf6f8',
            'mute-black': '#212834',
            'white': '#ffffff',
        },
    },
};