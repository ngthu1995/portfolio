import React, { useContext } from "react";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Grid,
  DialogActions,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { useStyles } from "./styles";

import { map } from "lodash";
import { PortfolioContext } from "../Portfolio/Context";

const renderURL = ({ anchorText = "", link }, i) => {
  return (
    <a
      target="_blank"
      rel="norefferer noopener"
      href={link}
      key={i}
      style={{ color: "blue !important", textDecoration: "none" }}
    >
      {anchorText}
    </a>
  );
};

const renderText = (section = "", variant = "body2", i, style) => {
  let textLine = section;
  if (typeof section !== "string") {
    textLine = section.map((item, i) => {
      return typeof item === "string"
        ? renderText(item, "subtitle2", i, { display: "inline-block" })
        : renderURL(item, i);
    });
  }
  return (
    <Typography variant={variant} key={i} style={style} component="div">
      {textLine}
    </Typography>
  );
};

const renderImage = (images = []) => {
  return images.map(({ url, title }, i) => (
    <Grid item key={i}>
      <img src={url} alt={title} />
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <DialogTitle id="form-dialog-title">
          <div>{renderText(title, "body1", 0)}</div>
          <div>{renderText(subtitle, "subtitle1", 0)}</div>
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </Button>
        </DialogActions>
      </div>
      <DialogContent>
        {map(description, (section, i) =>
          renderText(section, "subtitle2", i, { padding: 5 })
        )}
        <div style={{ margin: 15, padding: 30 }}> {renderImage(images)} </div>
        {renderText(footer, "caption")}
      </DialogContent>
    </Dialog>
  );
};

export default CardDialog;
