/* eslint-disable react/require-default-props */
import clsx from "clsx";
import { ErrorMessage, Field } from "formik";

import { Box } from "@mui/material";

interface IPropsLabel {
  title?: string;
  placeholder?: string;
  TextErrorsName: string;
  name: string;
  autoComplete?: string;
  type?: string;
  touchedName?: boolean | undefined;
  errorsName?: string | undefined;
}

const InputComp = ({
  title,
  placeholder,
  touchedName,
  errorsName,
  TextErrorsName,
  name,
  autoComplete,
  type,
}: IPropsLabel) => {
  return (
    <div className="fv-row ">
      <Box
        component="label"
        className="form-label fw-bolder text-dark"
        sx={{ fontSize: "1rem" }}
      >
        {title}
      </Box>

      <Field
        type={type}
        placeholder={placeholder}
        name={name}
        autoComplete={autoComplete}
        className={clsx(
          "form-control form-control-lg form-control-solid mb-1 mb-2",
          { "is-invalid": touchedName && errorsName },
          { "is-valid": touchedName && !errorsName }
        )}
      />
      <div className="text-danger">
        <ErrorMessage name={TextErrorsName} />
      </div>
    </div>
  );
};

export default InputComp;
