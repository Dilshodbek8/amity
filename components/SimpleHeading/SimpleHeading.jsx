import classes from "./SimpleHeading.module.scss";
import cn from "classnames";
import { textAlign } from "@mui/system";

const SimpleHeading = ({ primary, hedingText, secondText, white, left }) => {
  const classNames = cn(primary ? "primary" : "secondary");

  return (
    <div className={classes[classNames]}>
      <h1
        style={{
          color: white ? "white" : null,
          textAlign: left ? "left" : null,
        }}
      >
        {hedingText}
      </h1>
      <div
        style={{ margin: left ? "5px 0" : null }}
        className={classes.underline}
      ></div>
      <p>{secondText}</p>
    </div>
  );
};

export default SimpleHeading;
