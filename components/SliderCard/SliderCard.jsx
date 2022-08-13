import classes from "./SliderCard.module.scss";
import cn from "classnames";
import Link from "next/link";

const SliderCard = ({ className, slide }) => {
  const classNames = cn(className);

  return (
    <div
      style={{ backgroundImage: `url(${slide.img})` }}
      className={classNames}
    >
      <div className={classes.slider__text}>
        <h1>{slide.title}</h1>
        <p>{slide.text}</p>
        <Link href={slide.link.href}>{slide.link.title}</Link>
      </div>
    </div>
  );
};

export default SliderCard;
