import classes from "./InputText.module.scss";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import cn from "classnames";

const InputText = ({ className, label, radius, ...props }) => {
  const classNames = cn(className, "my_input");
  return (
    <TextField
      className={classes[classNames]}
      id="outlined-basic"
      label={null}
      variant="outlined"
      color="primary"
      placeholder={label}
      sx={{
        border: "none",
        backgroundColor: "#F4F4F8",
        borderRadius: radius ? "15px" : "0",
        "& fieldset": {
          borderColor: "#F4F4F8",
          borderRadius: radius ? "15px" : "0",
        },
      }}
      {...props}
    />
  );
};

export default InputText;
