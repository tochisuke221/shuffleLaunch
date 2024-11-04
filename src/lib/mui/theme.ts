import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  zIndex: {
    header: 100,
  },
  palette: {
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    common: {
      // NOTE: Color Scale
      // https://hihayk.github.io/scale/#0/11/100/100/0/0/100/0/0085E8/0/133/232/white
      black: "#000000",
      white: "#FFFFFF",
      blue: "#3a78a7",
      blueLight: "#74C1FF",
      blueExtraLight: "#E8F5FF",
      red: "#F83F55",
      redLight: "#FF7F91",
      redExtraLight: "#FFE8EA",
      blueGreen: "#3EADC6",
      blueGreenLight: "#85DDF1",
      blueGreenExtraLight: "#E8FBFF",
      yellow: "#FFA910",
      yellowLight: "#FFD874",
      yellowExtraLight: "#FFFAE8",
      green: "#5DBD72",
      greenLight: "#9BE7AB",
      greenExtraLight: "#ECFDF0",
      // NOTE: Grayはカラースケールが違う
      gray: "#BBBBBB",
      grayLight: "#F4F4F4",
      grayExtraLight: "#F8F8F8",
      grayDark: "#616161",
    },
  },
  typography: {
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
    htmlFontSize: 16,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontSize: "1.85rem",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontSize: "1.7rem",
      fontWeight: 700,
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h4: {
      fontSize: "1.55rem",
      fontWeight: 700,
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontSize: "1.4rem",
      fontWeight: 700,
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 700,
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.57,
      letterSpacing: "0.00714em",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.43,
      letterSpacing: "0.01071em",
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 2.66,
      letterSpacing: "0.08333em",
      textTransform: "uppercase",
    },
  },
});
