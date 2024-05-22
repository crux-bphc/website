/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      "mono": ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco",
      "Consolas", "Liberation Mono", "Courier New", "monospace"],
      "sans": ["Roboto Flex", "ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100vw', // add required value here
          }
        }
      },
      screens: {
        'landscape': {
          'raw': '(orientation: landscape)',
        },
        'thin': {
           'raw': '(max-height: 720px)'
        },
      },
      colors: {
        // Background of pages
        background: "#071731",

        // Color for any text
        foreground: "#E4EDFB",
        "foreground-muted": "#CACACE",
        "foreground-bright": "#FFFFFF",

        // Background color for navbar
        navbar: "#092043",

        // Primary color, used on main page
        primary: "#98BAF1",
        "primary-foreground": "#081B3A",

        // Purple accent color and text for achievements page
        purple: "#D2B1EC",
        "purple-foreground": "#081B3A",

        // Light blue accent color for projects page
        "light-blue": "#76C9E1",
        "light-blue-foreground": "#081B3A",

        // Orange accent color for members page
        orange: "#EBCB8B",
        "orange-foreground": "#081B3A",

        // Tab inactive color for members page
        "tab-inactive": "#092043",

        // Badge background color for members page
        badge: "#081B3A",

        // Glass gradient colors for glassy gradient cards, like the ones on main page, achievements page and members page
        "glass-gradient-1": "#21293B",
        "glass-gradient-2": "#293349",
        "glass-gradient-3": "#21293B",

        // Glass gradient colors for borders of glassy gradient cards, like the ones on main page, achievements page and members page
        "border-gradient-1": "#FFFFFF",
        "border-gradient-2": "#000000",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
