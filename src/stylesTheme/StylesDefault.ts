import theme from "./Theme";

export const styleDefaultComp = {
  ButtonDefaultApp: {
    background: theme.background.primary,
    color: "black",

    margin: "8px 0",

    transition: ".4s",

    [theme.breakpoints.down("md")]: {
      fontSize: ".8rem",
    },

    "&:hover": {
      backgroundColor: theme.backgroundHover.primary,
      color: "white",
    },
  },

  buttonDefaultHome: {
    backgroundColor: theme.home.backgroundButton.primary,
    color: theme.home.color,

    maxWidth: "10rem",
    minWidth: "7rem",

    margin: "8px 0",

    transition: ".6s",
    borderRadius: ".4rem",

    // marginBottom: { xs: "3rem", sm: "0" },

    [theme.breakpoints.down("md")]: {
      fontSize: ".7rem",
      padding: "5px",
      minWidth: "6rem",
      margin: "5px",
    },

    "&:hover": {
      backgroundColor: theme.home.backgroundButtonHover.primary,
      color: "white",
    },
  },

  buttonHomePassword: {
    color: theme.home.color,

    maxWidth: "10rem",
    minWidth: "7rem",

    maxHeight: "2.3rem",

    margin: "8px 0",

    transition: ".6s",
    borderRadius: ".6rem",
    textDecoration: "none",

    [theme.breakpoints.down("md")]: {
      fontSize: ".7rem",
      padding: "5px",
      minWidth: "6rem",
      margin: "5px",
    },

    "&:hover": {
      color: "blue",
      backgroundColor: "white",
      textDecoration: "underline",
    },
  },
};
