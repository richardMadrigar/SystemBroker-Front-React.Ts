import React, { useContext } from "react";

import { Player } from "@lottiefiles/react-lottie-player";

import Box from "@mui/material/Box";

import { AuthContext } from "../../context/authContext";
import AuthPage from "../auth/AuthPage";
import Master from "../MainLayout/LayoutMain";

function RoutesMain() {
  const { autorization, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Player
          autoplay
          loop
          src="https://assets7.lottiefiles.com/packages/lf20_hslwihoj.json"
          style={{ height: "150px", width: "150px" }}
        />
      </Box>
    );
  }

  return <>{autorization ? <Master /> : <AuthPage />}</>;
}

export default RoutesMain;
