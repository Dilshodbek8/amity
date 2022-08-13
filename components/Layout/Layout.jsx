import React from "react";
import classes from "./Layout.module.scss";
import cn from "classnames";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/index";

const Layout = ({ className, children }) => {
  const classNames = cn(className);

  return (
    <div className={classNames}>
      <Navbar />

      <div className={classes["page__content"]}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
