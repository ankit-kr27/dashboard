import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    darkMode: 'class',
    plugins: [
        nextui(
            nextui({
                prefix: 'nextui',
                addCommonColors: false,
                defaultTheme: 'light',
                defaultExtendTheme: 'light',
                layout: {},
                themes: {
                    light: {
                        layout: {},
                        colors: {
                            primary: '#03045e',
                            secondary: '#0077b6',
                        },
                    },
                    dark: {
                        layout: {},
                        colors: {},
                    },
                },
            }),
            function ({ addUtilities }) {
                addUtilities({
                    '.scrollbar-thin': {
                        '&::-webkit-scrollbar': {
                            width: '6px',
                            marginTop: '2px',
                            marginBottom: '2px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: '#d1d5db',
                            borderRadius: '6px',
                        },
                        '&::-webkit-scrollbar-track': {
                            backgroundColor: 'transparent',
                        },
                    },
                });
            }
        ),
    ],
};
