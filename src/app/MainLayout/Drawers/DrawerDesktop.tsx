import React, { useContext, useState } from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";

import { LayoutMainProvider } from "../../../context/MainLayoutContext";
import { AsideTitle } from "./aside/AsideTitle";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(6)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(6.5)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function DrawerDesktop() {
  const { open, setOpen } = useContext(LayoutMainProvider);

  const [drawer, setDrawer] = useState(false);

  const theme = useTheme();

  const handleClose = () => {
    if (open && drawer) {
      setDrawer(false);
      setOpen(!open);
    }
  };

  const handleOpen = () => {
    if (!open && drawer === false) {
      setDrawer(true);
      setOpen(true);
    }
  };

  return (
    <>
      <Box>
        <CssBaseline />

        <Drawer
          onMouseOver={handleOpen}
          onMouseOut={handleClose}
          variant="permanent"
          open={open}
          sx={{
            "& .MuiPaper-root": {
              background: theme.drawer.primary,
              boxShadow: theme.shadows[10],
              color: "white",
              [theme.breakpoints.down("md")]: {
                display: "none",
              },
            },
          }}
        >
          <DrawerHeader />
          <List>
            <AsideTitle />
          </List>
        </Drawer>
      </Box>
    </>
  );
}

export default DrawerDesktop;
