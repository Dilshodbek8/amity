import classes from "./Amityglobal.module.scss";
import cn from "classnames";
import Image from "next/image";

const Amityglobal = ({ className, img, title, text }) => {
  return (
    <div className={classes.card}>
      <Image src={`/media/images/${img}`} alt="img" width="100" height="100" />
      <div className={classes.card__text}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Amityglobal;
