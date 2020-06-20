import React, { useContext } from "react";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Grid,
  Typography,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { useStyles } from "./styles";

import { map } from "lodash";
import { PortfolioContext } from "../Portfolio/Context";

const renderText = (section = "", variant = "body1", i) => {
  return (
    <Typography variant={variant} key={i}>
      {section}
    </Typography>
  );
};

const renderImage = (images = []) => {
  return images.map(({ url, title }, i) => (
    <Grid item key={i}>
      <img src={url} alt={title} classes />
    </Grid>
  ));
};

const CardDialog = ({ isOpen, handleClose }) => {
  const { portfolio } = useContext(PortfolioContext);
  const classes = useStyles();
  const {
    title = "",
    subtitle = "",
    description = [],
    footer = "",
    images = [],
  } = portfolio;
  return (
    <Dialog
      open={isOpen}
      maxWidth="lg"
      onClose={handleClose}
      fullScreen={false}
      aria-labelledby="form-dialog-title"
      className={classes.root}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <DialogTitle id="form-dialog-title">
          {renderText(title, "h5")}
          {renderText(subtitle, "subtitle1")}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </Button>
        </DialogActions>
      </div>
      <DialogContent>
        {/* <DialogContentText> */}
        {map(description, (section, i) => renderText(section, "subtitle2", i))}
        {renderImage(images)}
        {renderText(footer, "caption")}
        {/* </DialogContentText> */}
      </DialogContent>
    </Dialog>
  );
};

export default CardDialog;
