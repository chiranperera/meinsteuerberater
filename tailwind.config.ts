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
        // MeinSteuerberater Brand Colors - Modern & Prestigious
        "brand-blue": {
          DEFAULT: "#001af8", // Modern prestigious blue
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#001af8",
          600: "#0014d1",
          700: "#0010aa",
          800: "#000d83",
          900: "#000a5c",
        },
        "brand-cyan": {
          DEFAULT: "#10f0e3", // Modern cyan for gradient
          50: "#F0FDFA",
          100: "#CCFBF1",
          200: "#99F6E4",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#10f0e3",
          600: "#0D9488",
          700: "#0F766E",
          800: "#115E59",
          900: "#134E4A",
        },
        "brand-gradient": {
          DEFAULT: "linear-gradient(135deg, #10f0e3 0%, #001af8 100%)",
        },
        "brand-orange": {
          DEFAULT: "#EA580C", // More muted orange
          50: "#FFF7ED",
          100: "#FFEDD5",
          200: "#FED7AA",
          300: "#FDBA74",
          400: "#FB923C",
          500: "#EA580C",
          600: "#DC2626",
          700: "#C2410C",
          800: "#9A3412",
          900: "#7C2D12",
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
          DEFAULT: "#001af8", // Updated to match new brand blue
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F8FAFC", // Lighter, cleaner secondary
          foreground: "#1E293B",
        },
        destructive: {
          DEFAULT: "#DC2626", // More muted red
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F1F5F9", // Cleaner muted background
          foreground: "#64748B",
        },
        accent: {
          DEFAULT: "#10f0e3", // Updated to match new brand cyan
          foreground: "#001af8",
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
        sans: [
          "DM Sans",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
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
        "18": "4.5rem",
        "88": "22rem",
      },
      boxShadow: {
        focus: "0 0 0 3px rgba(91, 183, 69, 0.3)",
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "card-hover":
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #10f0e3 0%, #001af8 100%)",
        "gradient-cta": "linear-gradient(135deg, #10f0e3 0%, #001af8 100%)",
        "gradient-hero":
          "linear-gradient(180deg, rgba(16,240,227,0.03) 0%, rgba(255,255,255,0) 100%)",
        "gradient-overlay":
          "linear-gradient(180deg, rgba(0,26,248,0.8) 0%, rgba(16,240,227,0.4) 100%)",
        "gradient-prestige":
          "linear-gradient(135deg, #001af8 0%, #10f0e3 50%, #001af8 100%)",
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
        bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
