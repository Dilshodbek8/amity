import classes from "./MiniLayoutRight.module.scss";
import cn from "classnames";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import SimpleHeading from "../SimpleHeading";
import MiniNavigation from "../MiniNavigation";
const MiniLayoutRight = ({ className, title, links, children }) => {
  const classNames = cn(className);

  return (
    <div>
      <div className={classes.showcase}>
        <BreadCrumb className={classes.bread} />
        <SimpleHeading hedingText={title} />
      </div>
      <div className="container">
        <div className={classes.body}>
          <div className={classes.body__left}>{children}</div>
          <div className={classes.body__right}>
            <MiniNavigation links={links} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniLayoutRight;
