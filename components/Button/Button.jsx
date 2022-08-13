import classes from "./Button.module.scss";
import cn from "classnames";

const Button = ({ className, text, primary, radius }) => {
  const classNames = cn(className, primary ? "primary" : "secondary");

  return (
    <div className={classNames}>
      <button className={classes.button}>{text}</button>
    </div>
  );
};

export default Button;
