import classes from "./Link.module.scss";
import cn from "classnames";
import Link from "next/link";

const LinkNav = ({ className, link, url }) => {
  const classNames = cn(link.href == url && classes.link__active, classes.link);
  return (
    <div className={classNames}>
      <Link href={link.href}>{link.title}</Link>
    </div>
  );
};

export default LinkNav;
