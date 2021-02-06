import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Tabs,
  Tab,
} from "@material-ui/core";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { portfolioList } from "./data";
import CardDialog from "../utils/Dialog";
import { PortfolioContext } from "./Context";
import { theme } from "../utils/Theme";

import { isEmpty } from "lodash";

import { useStyles } from "./styles";

const renderCardList = (data = [], classes, toggleDialog) => {
  return data.map(({ id, title, subtitle, image, details }) => {
    return (
      <Grid item xs={12} sm={6} md={4} lg={4} key={id}>
        <Card className={classes.root}>
          <CardMedia
            component="img"
            alt={title}
            height="140"
            image={image}
            title={title}
            onClick={() => toggleDialog(true, details)}
            style={{ cursor: "pointer" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {subtitle}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  });
};

const Portfolio = () => {
  const classes = useStyles();

  const [eventState, setEventState] = useState({
    isOpen: false,
    portfolioType: "developer",
    portfolio: {},
  });

  const toggleDialog = (isOpen, portfolio) => {
    setEventState({ ...eventState, isOpen, portfolio });
  };

  const handleTabChange = (_e, newValue) => {
    setEventState({ ...eventState, portfolioType: newValue });
  };

  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <PortfolioContext.Provider
        value={{
          portfolio: eventState.portfolio,
          portfolioType: eventState.portfolioType,
          toggleDialog,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Portfolio
        </Typography>
        <Tabs
          value={eventState.portfolioType}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Developer" value="developer" />
          <Tab label="Designer" value="designer" />
        </Tabs>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          spacing={2}
          wrap={"wrap"}
          className={classes.root}
        >
          {renderCardList(
            portfolioList.filter(
              (item) => item.type === eventState.portfolioType
            ),
            classes,
            toggleDialog
          )}
          <CardDialog
            isOpen={eventState.isOpen && !isEmpty(eventState.portfolio)}
            handleClose={() => toggleDialog(false, {})}
          />
        </Grid>
      </PortfolioContext.Provider>
    </MuiThemeProvider>
  );
};

export default Portfolio;
