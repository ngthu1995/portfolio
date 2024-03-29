import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import App from "./App";
import Error from "../src/components/Error";

import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";

import { theme } from "./components/utils/Theme";

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/portfolio"
        component={() => (
          <MuiThemeProvider theme={createMuiTheme(theme)}>
            <App />
          </MuiThemeProvider>
        )}
      />
      <Route exact path="/*" component={() => <Error />} />
    </Switch>
  );
};

export default Routes;
