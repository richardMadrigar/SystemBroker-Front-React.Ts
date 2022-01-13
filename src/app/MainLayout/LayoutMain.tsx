import React, { useContext } from "react";

import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";

import { LayoutMainProvider } from "../../context/MainLayoutContext";
import PrivateRoutes from "../routing/PrivateRoutes";
import DrawerDesktop from "./Drawers/DrawerDesktop";
import DrawerMobile from "./Drawers/DrawerMobile";
import Footer from "./Footer/Footer";
import AppBarMain from "./Header/AppBar";

const Master = () => {
  const { open } = useContext(LayoutMainProvider);

  const theme = useTheme();

  return (
    <>
      <AppBarMain />

      <DrawerMobile />
      <DrawerDesktop />

      <Box
        sx={{
          padding: "25px",
          paddingRight: "25px",
          minHeight: `calc(100vh - 20px)`,
          [theme.breakpoints.down("sm")]: {
            padding: "12px",
          },
          [theme.breakpoints.up("md")]: {
            paddingLeft: open ? "280px" : "120px",
            paddingRight: open ? "" : "60px",
          },
        }}
      >
        <Toolbar />

        <PrivateRoutes />
      </Box>

      <Footer />
    </>
  );
};
export default Master;
