import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "hidden",
    overflowY: "hidden",
    textAlign: "center",
    backgroundColor: "#F4F3F0",
    "& .error": {
      textAlign: "left",
    },
    "& form": {
      margin: "0 auto",
      padding: "30px",
      ["@media (min-width:780px)"]: {
        width: 780,
      },
      ["@media (min-width:992px)"]: {
        width: 970,
      },
      ["@media (min-width:1200px)"]: {
        width: 1170,
      },
    },
  },
  container: {
    margin: "0 auto",
    padding: "100px 0",
    ["@media (min-width:780px)"]: {
      width: 780,
    },
    ["@media (min-width:992px)"]: {
      width: 970,
    },
    ["@media (min-width:1200px)"]: {
      width: 1170,
    },
  },
});
