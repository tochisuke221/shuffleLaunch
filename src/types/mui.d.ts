export { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CommonColors {
    red: string;
    redLight: string;
    redExtraLight: string;
    blue: string;
    blueLight: string;
    blueExtraLight: string;
    blueGreen: string;
    blueGreenLight: string;
    blueGreenExtraLight: string;
    yellow: string;
    yellowLight: string;
    yellowExtraLight: string;
    green: string;
    greenLight: string;
    greenExtraLight: string;
    gray: string;
    grayLight: string;
    grayExtraLight: string;
    grayDark: string;
  }

  interface ZIndex {
    header: number;
  }
}
