import React, { useContext } from "react";

import { Toolbar } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { useTheme } from "@mui/material/styles";

import { LayoutMainProvider } from "../../../context/MainLayoutContext";
import { AsideTitle } from "./aside/AsideTitle";

const DrawerMobile = () => {
  const { open, setOpen } = useContext(LayoutMainProvider);

  const theme = useTheme();

  return (
    <div>
      <Drawer
        sx={{
          [theme.breakpoints.up("md")]: {
            display: "none",
          },
        }}
        open={open}
        onClick={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
      >
        <Toolbar />
        <List
          sx={{
            background: theme.drawer.primary,
            height: "100%",
          }}
        >
          <AsideTitle />
        </List>
      </Drawer>
    </div>
  );
};

export default DrawerMobile;
