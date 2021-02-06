import { makeStyles } from "@material-ui/core/styles";

import {
  primaryColor,
  secondaryColor,
  red,
  blue,
  yellow,
} from "../utils/Theme";

export const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    textAlign: "center",
    padding: "20px 0",
    backgroundColor: primaryColor,
  },
  icon: {
    display: "block",
    height: 40,
    width: 40,
    padding: 10,
    margin: 10,
    borderRadius: "100%",
    backgroundColor: secondaryColor,
    textAlign: "center",
    "&:hover": {
      backgroundColor: red,
    },
  },
});
