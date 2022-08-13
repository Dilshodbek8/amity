import classes from "./BgTopImg.module.scss";
import cn from "classnames";

const BgTopImg = ({ className }) => {
  const classNames = cn(className, classes["bg_wrapper"]);

  return (
    <div className={classNames}>
      <div></div>
    </div>
  );
};

export default BgTopImg;
