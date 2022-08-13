import React from "react";
import InputMask from "react-input-mask";
import MaterialInput from "@mui/material/Input";

const InputMaska = () => {
  return (
    <InputMask
      mask="(+\9\98) 99 999 - 99 - 99"
      placeholder="(+998) •• ••• •• ••"
    >
      {(inputProps) => (
        <MaterialInput
          {...inputProps}
          type="tel"
          disableUnderline
          sx={{ fontSize: "22px", padding: "20px 0" }}
        />
      )}
    </InputMask>
  );
};

export default InputMaska;
