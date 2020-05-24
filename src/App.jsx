import React from "react";
import "./layout.js";

import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "./components/Header";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { theme } from "./components/ultils/Theme";
import { useStyles } from "./layout";

export const navList = [
  { id: "Portfolio", href: "#portfolio" },
  { id: "About", href: "#about" },
  { id: "Contact", href: "#contact" },
];

const App = () => {
  const classes = useStyles();

  const refs = navList.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});

  const handleClick = (id) =>
    refs[id].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <div className={classes.root}>
        <CssBaseline />
        <Header refs={refs} handleClick={handleClick} />
        <Banner />
        <div className={classes.container} ref={refs["Portfolio"]}>
          <Portfolio />
        </div>
        <div className={classes.container} ref={refs["About"]}>
          <About />
        </div>
        <Contact refs={refs} />
        <Footer />
      </div>
    </MuiThemeProvider>
  );
};

export default App;
