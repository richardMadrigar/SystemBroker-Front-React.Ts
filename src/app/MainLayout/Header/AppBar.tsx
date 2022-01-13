import { useContext } from "react";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";

import { LayoutMainProvider } from "../../../context/MainLayoutContext";
// import { toAbsoluteUrl } from "../../../setup/toAbsoluteUrl";
import ImgLogout from "../LogouImg";

export default function AppBarMain() {
  const { open, setOpen } = useContext(LayoutMainProvider);

  const theme = useTheme();
  return (
    <>
      <AppBar sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <CssBaseline />

        <Toolbar sx={{ background: theme.drawer.primary }}>
          <IconButton
            color="inherit"
            onClick={() => setOpen(!open)}
            sx={{ margin: "0 36px 0 -16px" }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            display="flex"
            justifyContent="space-between"
            sx={{ alignItems: "center", width: "100%" }}
          >
            <Box display="flex">
              <Link to="/painel">
                {/* <img
                  src={toAbsoluteUrl("/media/logos/logoImg.png")}
                  alt="logo da empresa "
                  style={{ height: "50px" }}
                /> */}
                LOGO
              </Link>
            </Box>

            <ImgLogout />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
