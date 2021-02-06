import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    paddingRight: 15,
    paddingLeft: 15,
    // margin: "20 auto !important",
    "& img": {
      maxWidth: "100%",
      display: "block",
      margin: "auto",
    },
  },
  // ".container": {
  //   paddingRight: 15,
  //   paddingLeft: 15,
  //   marginRight: "auto",
  //   marginLeft: "auto",
  // },
});
