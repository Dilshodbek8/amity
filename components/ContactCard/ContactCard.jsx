import classes from "./ContactCard.module.scss";
import cn from "classnames";
import Link from "next/link";
import Image from "next/image";
const ContactCard = ({ className, cardData }) => {
  const classNames = cn(className, classes["contact__card"]);
  const { icon, title, link, linkText, isTarget } = cardData;

  return (
    <div className={classNames}>
      <div className={classes["contact__card--left"]}>
        <Image {...icon} alt="contact_icons" />
      </div>
      <div className={classes["contact__card--right"]}>
        <h3 className={classes["contact__card--right-title"]}>{title}</h3>
        <div className={classes["contact__card--right-link"]}>
          <Link href={link}>
            <a target={isTarget ? "_blank" : null}>{linkText}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
