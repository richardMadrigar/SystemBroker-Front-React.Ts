import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Divider } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";

import { AuthContext } from "../../../context/authContext";
import theme from "../../../stylesTheme/Theme";

const ImgLogout = () => {
  const { userPerfil, setAutorization } = useContext(AuthContext);

  const logout = async () => {
    localStorage.removeItem("token");

    setAutorization(false);
  };

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Sair">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt="Remy Sharp"
            variant="circular"
            sx={{ width: "30px", height: "30px" }}
          />
        </IconButton>
      </Tooltip>

      <Menu
        sx={{ mt: "48px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <div className="px-2">
          <div className="d-flex flex-column p-3">
            <div className="fw-bolder"> {userPerfil?.name} </div>
            <div style={{ color: theme.text.primary }}>{userPerfil?.email}</div>
          </div>

          <Divider className="text-muted" />

          <Link
            to="login"
            className="text-decoration-none d-flex justify-content-center p-1"
          >
            <Button
              onClick={logout}
              sx={{
                width: "100%",
                color: "black",
                transition: ".3s",
                "&:hover": {
                  backgroundColor: theme.backgroundHover.primary,
                  color: "white",
                },
              }}
            >
              Sair
            </Button>
          </Link>
        </div>
      </Menu>
    </Box>
  );
};

export default ImgLogout;
