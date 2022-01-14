/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { TextField } from "@material-ui/core";
import { useField } from "formik";

import { styled } from "@mui/material/styles";

import theme from "../../../../stylesTheme/Theme";

interface IPros {
  label: string;
  name: string;
  autoComplete?: string;
  type?: string;
  value?: string;
  onChange?: any;
  onBlur?: () => void;
}
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: theme.home.backgroundButtonHover.primary, // cor da da label
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.home.backgroundButtonHover.primary, // cor da borda
  },
});

const FieldFormik = ({
  label,
  name,
  autoComplete,
  type,
  onBlur,
  onChange,
  value,
  ...otherProps
}: IPros) => {
  const [field, mata] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    error: false,
    helperText: "",
    label,
    autoComplete,
    type,
    onBlur,
    onChange,
    value,
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }

  return (
    <div className="fv-row">
      <CssTextField {...configTextfield} />
    </div>
  );
};

export default FieldFormik;
