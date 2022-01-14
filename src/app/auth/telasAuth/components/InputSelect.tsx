import React, { useState } from "react";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const options = ["oprtion 1", "Option 2", "ms", "teste"];

interface IPropsInputControl {
  title?: string;
  disabled?: boolean | undefined;
}

const ControllableStates = ({ title, disabled }: IPropsInputControl) => {
  const [value, setValue] = useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  const configTextfield = {
    disabled,
  };

  return (
    <div>
      <Autocomplete
        {...configTextfield}
        value={value}
        inputValue={inputValue}
        options={options}
        onChange={(event, newValue: string | null) => {
          setValue(newValue);
        }}
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
