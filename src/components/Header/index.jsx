import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Button,
  IconButton,
  Typography,
  Toolbar,
} from "@material-ui/core";
// import { MenuIcon } from "@material-ui/icons";
import { navList } from "../../App";

const Header = ({ classes = {}, refsm, handleClick } = {}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          //   className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          {/* <MenuIcon /> */}
        </IconButton>
        <Typography variant="h6">Thu Nguyen</Typography>
        <Button color="inherit">Login</Button>

        <nav>
          {navList.map(({ id, href }) => {
            console.log("Header -> id", id);
            return (
              <a href={href} key={id} onClick={() => handleClick(id)}>
                {id}
              </a>
            );
          })}
        </nav>
        {/* <nav>
          {navList.map(({ href, title }) => (
            <a href={href} onClick={() => handleClick(title)}>
              {title}
            </a>
          ))}
        </nav> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
