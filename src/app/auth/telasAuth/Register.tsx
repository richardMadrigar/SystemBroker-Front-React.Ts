/* eslint-disable no-alert */
import React, { useContext, useState } from "react";

import { Form, Formik } from "formik";

import { Box, Button, Typography } from "@mui/material";

import { AuthContext } from "../../../context/authContext";
import api from "../../../setup/api/api";
import { styleDefaultComp } from "../../../stylesTheme/StylesDefault";
import { IEmpresasLogin } from "../../../types/TypeModels";
import StepperBorder from "./components/StepperBorder";

const Register = () => {
  const { setAutorization, setUserPerfil } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (data: IEmpresasLogin) => {
    await api
      .post("/users", data)
      .then((response) => {
        setUserPerfil(response.data);
        setAutorization(true);
      })
      .catch((error) => {
        const { data } = error.response;
        alert(data);
      });
  };

  return (
    <>
      <Formik
        initialValues={{ empresa: "", usuario: "" }}
        onSubmit={(values) => {
          setLoading(true);
          try {
            handleRegister(values);
          } catch (error) {
            alert(`erro ao fazer login ${error}`);
          }
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }}
      >
        {({ isValid }) => (
          <Form autoComplete="false">
            <Box sx={{ width: { xs: "240px", sm: "260px", md: "420px" } }}>
              <Typography
                variant="h1"
                fontSize="1.5rem"
                sx={{ fontWeight: "600", marginBottom: "1.5rem" }}
              >
                Escolha uma empresa
              </Typography>
              <StepperBorder isBorder />

              <div className="text-center m-3">
                <Button
                  style={{ margin: "14px 0", width: "100%" }}
                  type="submit"
                  disabled={!isValid || loading}
                  sx={styleDefaultComp.buttonDefaultHome}
                >
                  Prosseguir
                  {loading && (
                    <div className="spinner-border spinner-border-sm  ms-2" />
                  )}
                </Button>
              </div>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Register;
