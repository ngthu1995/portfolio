import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  toolbarTitle: {
    flex: 2,
    textAlign: "left",
    color: "white",
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    flex: 0,
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));
