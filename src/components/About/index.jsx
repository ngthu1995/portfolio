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
            Hi, I am Tina, a 2-year-developer with background of 6 years
            experience in design. I write data migration, build reusable code
            and libraries, graphic intensive web applications, develop new
            user-facing features and functionalities with user experience in
            mind. ReactJS, NodeJS, Javascript and GraphQL are my best friends,
            Google is my best teacher. I enjoy solving problems, finding
            solution for better improvement, offering critical thinking and
            passion with high work ethics.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
