import React from "react";

import { Typography, Grid, Avatar } from "@material-ui/core";

import { useStyles } from "./styles";

const About = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Grid
        container
        spacing={2}
        justify="center"
        direction="column"
        alignItems="center"
      >
        <Grid item>
          <Avatar
            alt="profile picture"
            src="images/avatar.jpg"
            className={classes.image}
          />
        </Grid>
        <Grid item className={classes.text}>
          <Typography variant="body1">
            Hi, I am Tina, a web developer with background of 5 years experience
            in design interested in web development. I have some experience
            building graphic intensive web applications using ReactJS and
            NodeJS. I have passion with Javascript, CSS, HTML, while knowing
            UI/UX and being familiar with MongoDB. I enjoy solving problems,
            finding solution for better improvement, offering critical thinking
            and passion with high work ethics.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
