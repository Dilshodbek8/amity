import classes from "./MiniNavigation.module.scss";
import Navigation from "./Navigation";
import { useRouter } from "next/router";
const MiniNavigation = ({ className, links }) => {
  const router = useRouter();

  return (
    <div className={classes.mini__nav}>
      {links.map((link, idx) => (
        <Navigation url={router.pathname} key={idx} link={link} />
      ))}
    </div>
  );
};

export default MiniNavigation;
