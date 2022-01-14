/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

interface IPropsInputControl {
  title?: string;
  disabled?: boolean | undefined;
  values?: any;
}

const ControllableStates = ({
  title,
  values,
  ...props
}: IPropsInputControl) => {
  const [inputValue, setInputValue] = useState("");

  // const configTextfield = { disabled };

  return (
    <div>
      <Autocomplete
        {...props}
        // {...configTextfield}
        value={inputValue}
        inputValue={inputValue}
        options={values}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => (
          <TextField label={title} variant="standard" {...params} />
        )}
      />
    </div>
  );
};
export default ControllableStates;
