import React from "react";
import { Route, Link } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import App from "./App";

import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";

import { theme } from "./components/ultils/Theme";

const Routes = () => {
  return (
    <div className="App">
      {/* <Route exact path="/" component={Contact} /> */}
      <Route
        path="/"
        component={() => (
          <MuiThemeProvider theme={createMuiTheme(theme)}>
            <App />
          </MuiThemeProvider>
        )}
      />
      <Route path="/about" component={About} />
      {/* <Route path="*" component={Portfolio} /> */}
    </div>
  );
};

export default Routes;
