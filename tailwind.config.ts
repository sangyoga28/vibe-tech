import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#050507",
                foreground: "#ffffff",
                accent: {
                    DEFAULT: "#2997ff",
                    glow: "rgba(41, 151, 255, 0.5)",
                },
                brand: {
                    dark: "#050507",
                    purple: "#b666ff",
                    accent: "#2997ff",
                    "accent-glow": "rgba(41, 151, 255, 0.5)",
                    glass: "rgba(25, 25, 35, 0.4)",
                    border: "rgba(255, 255, 255, 0.1)",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "radial-vignette": "radial-gradient(circle at center, transparent 0%, #050507 100%)",
            },
            animation: {
                fadeUp: "fadeUp 0.5s ease-out forwards",
            },
            keyframes: {
                fadeUp: {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
