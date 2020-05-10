import { createContext } from "react";

import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const muiBaseTheme = createMuiTheme();

export const theme = {
  overrides: {
    MuiCardMedia: {
      img: {
        height: 260,
        textAlign: "center",
        width: "100%",
        ["@media (min-width:780px)"]: {
          height: 220,
        },
        ["@media (min-width:992px)"]: {
          height: 240,
        },
        ["@media (min-width:1200px)"]: {
          height: 260,
        },
      },
    },
    MuiCard: {
      root: {
        width: 349,
        ["@media (min-width:780px)"]: {
          width: 349,
        },
      },
    },
  },
};

export const ThemeContext = createContext(themes.light);
