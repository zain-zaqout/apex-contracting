module.exports = {
  content: ["./app/**/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef2f7",
          100: "#d6deea",
          200: "#aebfd6",
          300: "#7e95ba",
          400: "#526d96",
          500: "#344d77",
          600: "#243a60",
          700: "#1a2c4d",
          800: "#142340",
          900: "#0f1b33",
          950: "#0a1426",
        },
        gold: {
          50: "#fbf7ed",
          100: "#f5ebd0",
          200: "#ead49c",
          300: "#ddbb63",
          400: "#d4a73e",
          500: "#c8962f",
          600: "#ab7926",
          700: "#865a21",
          800: "#6e4720",
          900: "#5d3c1f",
        },
        cream: {
          50: "#ffffff",
          100: "#fcfbf7",
          200: "#f6f4ec",
          300: "#ede9dd",
        },
      },
      fontFamily: {
        sans: ["Inter", "Montserrat", "system-ui", "sans-serif"],
        display: ["Montserrat", "Inter", "system-ui", "sans-serif"],
        arabic: ["Cairo", "Tajawal", "system-ui", "sans-serif"],
      },
      letterSpacing: { tightest: "-0.04em" },
      maxWidth: { container: "1280px" },
      boxShadow: {
        soft: "0 2px 8px -2px rgba(15, 27, 51, 0.08), 0 4px 16px -4px rgba(15, 27, 51, 0.06)",
        card: "0 4px 24px -6px rgba(15, 27, 51, 0.10), 0 10px 40px -12px rgba(15, 27, 51, 0.08)",
        elevated:
          "0 12px 48px -8px rgba(15, 27, 51, 0.18), 0 24px 80px -16px rgba(15, 27, 51, 0.14)",
        gold: "0 8px 32px -8px rgba(200, 150, 47, 0.45)",
      },
      borderRadius: { "2xl": "1rem", "3xl": "1.5rem", "4xl": "2rem" },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
        elegant: "cubic-bezier(0.65, 0, 0.35, 1)",
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: { 450: "450ms", 600: "600ms", 700: "700ms" },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-down": {
          "0%": { opacity: "0", transform: "translateY(-12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        "scale-in": "scale-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "slide-down": "slide-down 0.4s cubic-bezier(0.16, 1, 0.3, 1) both",
        "float-slow": "float-slow 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};
