import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    backgroundImage: `url(images/header.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "scroll",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    minHeight: "60vh",
  },
});
