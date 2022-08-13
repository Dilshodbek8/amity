import classes from "./Label.module.scss";
import cn from "classnames";

const Label = ({
  label,
  labelY,
  labelPosition,
  required,
  className,
  children,
  isError,
  errorMessage,
}) => {
  const classNames = cn(
    classes.label,
    labelY === "top" && classes.labelYTop,
    labelPosition === "top" && classes.labelPositionTop,
    className && className
  );

  return (
    <div className={classNames}>
      <div className={classes.labelText}>
        <p>{label}</p>
        {required && <div className={classes.labelRequired} />}
      </div>
      <div>{children}</div>
      {isError && <p className={classes.labelError}>{errorMessage}</p>}
    </div>
  );
};

export default Label;
