import React from "react";

import { Paper } from "@material-ui/core";

import { useStyles } from "./styles";

const Banner = () => {
  const classes = useStyles();
  //   return <Paper className={classes.background}></Paper>;
  return <div className={classes.root}></div>;
};

export default Banner;
