import React from "react";
import { Container } from "@material-ui/core";
import { Grid, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBehance,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import { useStyles } from "./styles";

const links = [
  {
    icon: faGithub,
    url: "https://github.com/ngthu1995",
  },
  {
    icon: faLinkedinIn,
    url: "https://www.linkedin.com/in/thu-nguyen-09221995/",
  },
  {
    icon: faBehance,
    url: "https://www.behance.net/ngthu1995",
  },
];

const Footer = ({ refsm, handleClick } = {}) => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Container maxWidth="lg">
        <Grid container direction="row" justify="center" alignItems="center">
          {links.map(({ icon, url }, index) => (
            <Grid item key={index} className={classes.icon}>
              <a href={url} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={icon} size="lg" color="white" />
              </a>
            </Grid>
          ))}
        </Grid>
        <Typography variant="caption" align="center" gutterBottom>
          Copyright © thunguyen.space 2020
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
