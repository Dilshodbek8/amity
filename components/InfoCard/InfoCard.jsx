import classes from "./InfoCard.module.scss";
import cn from "classnames";

const InfoCard = ({ className, primary, title, text, bgImg }) => {
  const classNames = cn(primary ? "primary" : "secondary");
  return (
    <>
      <div
        className={`${classes.card} ${classes[classNames]} ${className}`}
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <h1>{title}</h1>
        <p>{text}</p>
        <div className={classes.underline}></div>
      </div>
    </>
  );
};

export default InfoCard;
