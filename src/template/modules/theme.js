import { createTheme } from "@mui/material/styles";
import { green, grey, red } from "@mui/material/colors";

const rawTheme = createTheme({
  palette: {
    primary: {
      light: "#DDFFE8",
      main: "#011106",
      dark: "#011106",
    },
    secondary: {
      light: "#FFEAC5",
      main: "#FFAF74",
      dark: "#323131",
    },
    warning: {
      main: "#ffda99",
      dark: "#ffb25e",
    },
    error: {
      light: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      light: green[50],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 500, // Roboto Condensed
  },
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: "'Poppins', sans-serif",
  textTransform: "uppercase",
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey["A700"],
    },
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 1,
      fontSize: 60,
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 48,
      letterSpacing: 2,
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 42,
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 36,
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 22,
      fontWeight: rawTheme.typography.fontWeightMedium,
      letterSpacing: 1,
      opacity: 0.85,
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18,
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 18,
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16,
    },
    body2: {
      ...rawTheme.typography.body1,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16,
      color: "#fff",
      opacity: 0.9,
      letterSpacing: "0.02em",
    },
  },
};

export default theme;
