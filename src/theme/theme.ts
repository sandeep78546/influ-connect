import { createTheme } from "@mui/material/styles";

export const brandGradient = "linear-gradient(90deg, #EC4899 0%, #A855F7 100%)";
export const heroBackground =
  "linear-gradient(135deg, #FDF2F8 0%, #F5F3FF 55%, #F5F3FF 100%)";
export const heroDarkBackground =
  "radial-gradient(120% 120% at 15% 10%, #2E1065 0%, #150B33 45%, #0B0718 100%)";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EC4899",
      light: "#F472B6",
      dark: "#DB2777",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#7C3AED",
      light: "#A78BFA",
      dark: "#6D28D9",
      contrastText: "#ffffff",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#1E1B2E",
      secondary: "#6B7280",
    },
  },
  typography: {
    fontFamily: "var(--font-poppins), \"Segoe UI\", Roboto, Arial, sans-serif",
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
    button: { fontWeight: 600, textTransform: "none" },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: 999,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 10,
          paddingBottom: 10,
          boxShadow: "none",
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              backgroundImage: brandGradient,
              "&:hover": {
                backgroundImage: brandGradient,
                filter: "brightness(0.95)",
                boxShadow: "none",
              },
            }),
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
