import classes from "./ProgramCard.module.scss";
import cn from "classnames";
import Image from "next/image";
const ProgramCard = ({ className, data, descBig }) => {
  const classNames = cn(className, classes["program__card"]);

  const { icon, title, description } = data;
  return (
    <div className={classNames}>
      <div className={classes["top_img"]}>
        <Image {...icon} alt="contact_icons" />
      </div>
      <div className={classes["body"]}>
        <h4>{title}</h4>
        {descBig ? (
          <h2
            className={cn(
              classes["description"],
              classes["center-line"],
              classes["big"]
            )}
          >
            {description}
          </h2>
        ) : (
          <p className={cn(classes["description"], classes["center-line"])}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProgramCard;
