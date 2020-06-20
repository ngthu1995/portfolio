import React from "react";

import { useStyles } from "./styles";

import Header from "../Header";

const Banner = ({ handleClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header handleClick={handleClick} />
    </div>
  );
};

export default Banner;
