import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        neutral: "var(--neutral-background)",
        filter: "var(--filter-tablets)",
        dark: "var(--dark-grayish-cyan)",
      },
      fontFamily: {
        spartan: ['Spartan', 'sans-serif'],
      },
      fontSize: {
        base: '15px',  // Body text size
      },
      screens: {
        // Custom breakpoints
        mobile: '0px',    // Mobile (everything below tablet)
        tablet: '768px',   // Tablet and above (768px and above)
        desktop: '1440px', // Desktop and above (1440px and above)
      },
    },
  },
  plugins: [],
} satisfies Config;
