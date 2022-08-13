import classes from "./MiniLayout.module.scss";
import cn from "classnames";
import BreadCrumb from "../BreadCrumb";
import SimpleHeading from "../SimpleHeading";
import MiniNavigation from "./../MiniNavigation";

const MiniLayout = ({ className, title, links, children }) => {
  const classNames = cn(className);

  return (
    <div className={classes.content}>
      <div className={classes.body}></div>

      <div className="container">
        <div className={classes.body__paper}>
          <BreadCrumb />
          <SimpleHeading hedingText={title} />
          <div className={classes.body__paper__mid}>
            <div className={classes.body__paper__mid__lt}>
              <MiniNavigation links={links} />
            </div>

            <div className={classes.body__paper__mid__rt}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniLayout;
