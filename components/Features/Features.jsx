import classes from "./Features.module.scss";
import cn from "classnames";
import Image from "next/image";

const Features = ({ className, features }) => {
  const classNames = cn(className);
  return (
    <div className={classNames}>
      {features.map((feature, idx) => (
        <div key={idx} className={classes.feature}>
          <Image
            src={"/media/icons/Ptichka.svg"}
            width="20"
            height="20"
            alt="right"
          />
          <p>{feature}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
