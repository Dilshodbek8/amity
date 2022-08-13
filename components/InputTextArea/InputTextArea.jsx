import classes from "./InputTextArea.module.scss";
import cn from "classnames";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const InputTextArea = ({ className, ...props }) => {
  const classNames = cn(className);

  return (
    <div className={classNames}>
      <TextareaAutosize
        variant="outlined"
        color="primary"
        style={{
          height: "100px",
          width: "100%",
          padding: "20px",
          borderRadius: "15px",
          backgroundColor: "#F4F4F8",
          borderColor: "#F4F4F8",
        }}
        sx={{
          backgroundColor: "#F4F4F8",
        }}
        {...props}
      />
    </div>
  );
};

export default InputTextArea;
