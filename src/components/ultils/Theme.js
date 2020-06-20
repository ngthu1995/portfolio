import { createContext } from "react";

export const primaryColor = "#091927";
export const secondaryColor = "#0ebbc0";
export const yellow = "#FFD400";
export const red = "#F05358";
export const blue = "#62CDF6";

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
    MuiToolbar: {
      root: { backgroundColor: "#333" },
    },
    MuiLink: {
      root: {
        color: "white",
        "&:hover": {
          color: secondaryColor,
          textDecoration: "none !important",
        },
      },
    },
    MuiToolbar: {
      root: {
        backgroundColor: "#091927",
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#091927",
      },
    },
    MuiTab: {
      root: {
        "&:hover": {
          color: secondaryColor,
        },
      },
      textColorPrimary: {
        color: primaryColor,
        "&$selected": {
          color: primaryColor,
        },
      },
    },
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: secondaryColor,
        },
      },
    },
    MuiTypography: {
      root: {
        color: primaryColor,
      },
    },
    MuiButton: {
      textPrimary: {
        color: primaryColor,
        "& :hover": {
          color: secondaryColor,
        },
      },
    },
    MuiInput: {
      underline: {
        // color: primaryColor,
        "&:after": {
          borderBottom: `2px solid ${secondaryColor}`,
        },
      },
    },
    PrivateTabIndicator: {
      colorPrimary: {
        backgroundColor: primaryColor,
      },
    },
  },
};

export const ThemeContext = createContext(themes.light);
