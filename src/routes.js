import React from "react";
import { Route } from "react-router-dom";

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
      <Route
        exact
        path="/"
        component={() => (
          <MuiThemeProvider theme={createMuiTheme(theme)}>
            <App />
          </MuiThemeProvider>
        )}
      />

      <Route path="/*" component={() => 404} />
    </div>
  );
};

export default Routes;
