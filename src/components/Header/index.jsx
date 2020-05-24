import React from "react";
import { AppBar, Typography, Toolbar, Link } from "@material-ui/core";

import { navList } from "../../App";
import { useStyles } from "./styles";

const Header = ({ handleClick } = {}) => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar} component="nav">
        <Typography
          variant="h6"
          className={classes.toolbarTitle}
          color="inherit"
          align="center"
          noWrap
        >
          Thu Nguyen
        </Typography>

        {navList.map(({ id, href }) => (
          <Link
            href={href}
            key={id}
            onClick={() => handleClick(id)}
            className={classes.toolbarLink}
          >
            {id}
          </Link>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
