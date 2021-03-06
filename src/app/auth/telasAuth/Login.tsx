/* eslint-disable no-alert */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Form, Formik } from "formik";

import { Box, Button } from "@mui/material";

import { AuthContext } from "../../../context/authContext";
import api from "../../../setup/api/api";
import { SchemaLoginHome } from "../../../setup/schemaYUP/schemasProject";
import { styleDefaultComp } from "../../../stylesTheme/StylesDefault";
import theme from "../../../stylesTheme/Theme";
import ControllableStates from "./components/InputSelect";
import StepperBorder from "./components/StepperBorder";
import { FieldFormik, FieldFormikk } from "./components/TextFieldFormikPerson";

const Login = () => {
  const { handleLogin } = useContext(AuthContext);

  const [valueEmail, setValueEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [valuesAutoComplete, setValuesAutoComplete] = useState<string[]>([]);

  const [changePassword] = useState("password");
  const [loading, setLoading] = useState(false);

  const handleSearchEmpresa = async (valueEmail: string) => {
    console.log(valueEmail);

    await api.post("/selectEmpresas").then((response) => {
      console.log(response.data);
      setIsDisabled(false);
      setValuesAutoComplete(response.data);
    });
  };

  // const handlePassword = () => {
  //   return changePassword === "password"
  //     ? setChangePassword("text")
  //     : setChangePassword("password");
  // };

  return (
    <Formik
      initialValues={{ senha: "" }}
      validationSchema={SchemaLoginHome}
      onSubmit={async (values) => {
        console.log(valueEmail);

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
              Fa??a seu login ??????
            </Box>

            <StepperBorder />

            <Box>
              <Box mb="2rem">
                <FieldFormik
                  name="email"
                  label="Email"
                  onBlur={() => handleSearchEmpresa(valueEmail)}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setValueEmail(e.target.value)
                  }
                  value={valueEmail}
                />
              </Box>
              <Box mb="2rem">
                <FieldFormikk
                  name="senha"
                  label="Senha"
                  type={changePassword}
                />
              </Box>
              <Box mb="2rem">
                <ControllableStates
                  disabled={isDisabled}
                  title="Escolha uma empresa"
                  values={valuesAutoComplete}
                />
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
