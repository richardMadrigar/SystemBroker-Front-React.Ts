import React, { useState } from "react";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const options = ["Option 1", "Option 2", "ms", "teste"];

interface IPropsInputControl {
  title?: string;
  // disabled?: any;
}

const ControllableStates = ({ title }: IPropsInputControl) => {
  const [value, setValue] = useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  console.log(inputValue);

  return (
    <div>
      <Autocomplete
        // sx={{ width: 300 }}
        value={value}
        inputValue={inputValue}
        options={options}
        // disabled
        onChange={(event, newValue: string | null) => {
          setValue(newValue);
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => (
          <TextField variant="standard" label={title} {...params} />
        )}
      />
    </div>
  );
};
export default ControllableStates;
