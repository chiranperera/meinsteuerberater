import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        // MeinSteuerberater Brand Colors
        "brand-blue": {
          DEFAULT: "#1B5E9B",
          50: "#F0F7FF",
          100: "#E0EFFE",
          200: "#BAD8FD",
          300: "#7BB8FC",
          400: "#3494F8",
          500: "#1B5E9B",
          600: "#164F83",
          700: "#12416B",
          800: "#0F3456",
          900: "#0C2A47",
        },
        "brand-green": {
          DEFAULT: "#5DB745",
          50: "#F4F9F1",
          100: "#E8F3E3",
          200: "#CCE6C2",
          300: "#A8D394",
          400: "#7BC05F",
          500: "#5DB745",
          600: "#4A9837",
          700: "#3B7A2D",
          800: "#2D5C22",
          900: "#234A1C",
        },
        "brand-teal": {
          DEFAULT: "#00A4B8",
          50: "#F0FCFE",
          100: "#E0F9FC",
          200: "#BDF0F7",
          300: "#7EE3F0",
          400: "#36D0E4",
          500: "#00A4B8",
          600: "#008B9E",
          700: "#007280",
          800: "#005A66",
          900: "#004A54",
        },
        "brand-orange": {
          DEFAULT: "#FF6B35",
          50: "#FFF4F0",
          100: "#FFE8E0",
          200: "#FFD0BF",
          300: "#FFB094",
          400: "#FF8A5D",
          500: "#FF6B35",
          600: "#E54D1A",
          700: "#CC3A0A",
          800: "#A62D08",
          900: "#8A2507",
        },
        "brand-yellow": {
          DEFAULT: "#FFB700",
          50: "#FFFCF0",
          100: "#FFF8E0",
          200: "#FFEDC2",
          300: "#FFDD7D",
          400: "#FFC940",
          500: "#FFB700",
          600: "#E5A300",
          700: "#CC9100",
          800: "#A67500",
          900: "#8A6100",
        },
        // Semantic Colors
        success: {
          DEFAULT: "#28A745",
          light: "#D4EDDA",
        },
        warning: {
          DEFAULT: "#FFC107",
          light: "#FFF3CD",
        },
        error: {
          DEFAULT: "#DC3545",
          light: "#F8D7DA",
        },
        info: {
          DEFAULT: "#17A2B8",
          light: "#D1ECF1",
        },
        // Neutral Scale
        neutral: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E6E6E6",
          300: "#D9D9D9",
          400: "#A6A6A6",
          500: "#737373",
          600: "#595959",
          700: "#404040",
          800: "#2D2D2D",
          900: "#1A1A1A",
        },
        // Legacy support
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1B5E9B",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F5F5F5",
          foreground: "#1A1A1A",
        },
        destructive: {
          DEFAULT: "#DC3545",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F5F5F5",
          foreground: "#737373",
        },
        accent: {
          DEFAULT: "#5DB745",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#1A1A1A",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1A1A1A",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.25rem",
        sm: "0.125rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      fontFamily: {
        sans: ["Inter", "Plus Jakarta Sans", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["Roboto Mono", "Courier New", "monospace"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.25" }],
        sm: ["0.875rem", { lineHeight: "1.375" }],
        base: ["1rem", { lineHeight: "1.5" }],
        lg: ["1.125rem", { lineHeight: "1.5" }],
        xl: ["1.25rem", { lineHeight: "1.5" }],
        "2xl": ["1.5rem", { lineHeight: "1.25" }],
        "3xl": ["1.875rem", { lineHeight: "1.25" }],
        "4xl": ["2.25rem", { lineHeight: "1.25" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      boxShadow: {
        'focus': '0 0 0 3px rgba(91, 183, 69, 0.3)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1B5E9B 0%, #00A4B8 100%)',
        'gradient-cta': 'linear-gradient(135deg, #5DB745 0%, #4A9837 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(27,94,155,0.05) 0%, rgba(255,255,255,0) 100%)',
        'gradient-overlay': 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 100%)',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-in-out",
        "slide-up": "slide-up 0.3s ease-out",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "slide-up": {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
