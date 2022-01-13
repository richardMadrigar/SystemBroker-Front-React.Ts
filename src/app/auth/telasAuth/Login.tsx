/* eslint-disable no-alert */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Form, Formik } from "formik";

import { Box, Button } from "@mui/material";

import { AuthContext } from "../../../context/authContext";
import { loginSchemaHome } from "../../../setup/schemaYUP/schemasProject";
import { styleDefaultComp } from "../../../stylesTheme/StylesDefault";
import theme from "../../../stylesTheme/Theme";
import StepperBorder from "./components/StepperBorder";
import FieldFormik from "./components/TextFieldFormikPerson";

const Login = () => {
  const { handleLogin } = useContext(AuthContext);

  const [changePassword] = useState("password");
  const [loading, setLoading] = useState(false);

  // const handlePassword = () => {
  //   return changePassword === "password"
  //     ? setChangePassword("text")
  //     : setChangePassword("password");
  // };

  return (
    <Formik
      initialValues={{ cpf: "", senha: "" }}
      validationSchema={loginSchemaHome}
      onSubmit={async (values) => {
        setLoading(true);
        try {
          await handleLogin(values);
          setLoading(false);
        } catch (error) {
          alert(`ocorreu um erro no seu login: ${error}`);
        }
      }}
    >
      {({ isValid }) => (
        <Form>
          <Box sx={{ width: { xs: "240px", sm: "260px", md: "420px" } }}>
            <Box display="flex" sx={{ margin: "0 0 1rem" }}>
              <Box
                fontWeight="600"
                sx={{ fontSize: { sx: ".8rem", md: "1.4rem" } }}
              >
                Bem-vindo
              </Box>

              <Box
                color={theme.home.color}
                ml=".5rem"
                fontWeight="700"
                sx={{ fontSize: { sx: ".8rem", md: "1.4rem" } }}
              >
                SystemBroker
              </Box>
            </Box>
            <Box
              fontWeight="600"
              margin="0 0 2rem"
              sx={{ fontSize: { sx: ".8rem", md: "1.4rem" } }}
            >
              Faça seu login ✔️
            </Box>

            <StepperBorder />

            <Box>
              <Box mb="2rem">
                <FieldFormik name="cpf" label="Email" />
              </Box>
              <Box mb="3rem">
                <FieldFormik name="senha" label="Senha" type={changePassword} />
              </Box>
            </Box>

            <Box
              display="flex"
              sx={{
                alignItems: "center",
                justifyContent: { xs: "center", sm: "space-between" },
                padding: { xs: "0", sm: "1rem" },
              }}
            >
              <Button
                type="submit"
                disabled={!isValid || loading}
                sx={styleDefaultComp.buttonDefaultHome}
              >
                Login
                {loading && (
                  <div className="spinner-border spinner-border-sm  ms-2" />
                )}
              </Button>

              <Link to="/register" style={{ textDecoration: "none" }}>
                <Box sx={styleDefaultComp.buttonHomePassword}>
                  Esqueceu a senha ?
                </Box>
              </Link>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
