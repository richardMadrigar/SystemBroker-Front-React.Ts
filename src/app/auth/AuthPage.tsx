import React from "react";

import { Grid } from "@mui/material";

import PublicRoutes from "../routing/PublicRoutes";
import Image from "./telasAuth/media/imageHome.svg";

const AuthPage = () => {
  return (
    <>
      <Grid
        container
        sx={{
          width: "100vw",
          height: "auto",
          minHeight: "100vh",
          background: "white",
        }}
      >
        <Grid
          item
          sm={6}
          sx={{
            display: { xs: "none", sm: "block" },
            width: "100vw",
            height: "auto",
            background: `url(${Image})  no-repeat`,
            backgroundSize: "cover",
          }}
        />

        <Grid
          item
          xs={12}
          sm={6}
          display="flex"
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <PublicRoutes />
        </Grid>
      </Grid>
    </>
  );
};

export default AuthPage;
