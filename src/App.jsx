import React from "react";
import "./layout.js";

import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "./components/Header";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

import { useStyles } from "./layout";

export const navList = [
  { id: "Contact", href: "#contact" },
  { id: "About", href: "#about" },
  { id: "Portfolio", href: "#portfolio" },
];

const App = () => {
  const classes = useStyles();

  const refs = navList.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});

  console.log("Header -> refs", refs);
  const handleClick = (id) =>
    refs[id].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  return (
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
  );
};

export default App;
