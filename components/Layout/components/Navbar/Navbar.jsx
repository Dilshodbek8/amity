import React from "react";
import classes from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/media/icons/logo.svg";
import Eng from "../../../../public/media/icons/eng.svg";
import Rus from "../../../../public/media/icons/ru.svg";
import Uzb from "../../../../public/media/icons/uz.svg";
import Menu from "../../../../public/media/icons/menu.svg";
import ToTop from "../../../../public/media/icons/ToTop.svg";
import { Drawer } from "@mui/material";
import data from "../links.json";
import NavbarMenu from "./NavbarMenu/NavbarMenu";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <NavbarMenu
      sx={{ width: anchor === "left" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    />
  );

  const handleChangeLocale = (newLocale) => {
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.to_top}>
        <a href="#navbar">
          <Image src={ToTop} width="50" height="50" alt="left" />
        </a>
      </div>
      <div id="navbar" className={classes["navbar--content"]}>
        <div className={classes["navbar--content--left"]}>
          <Link href="/">
            <Image src={Logo} alt="" />
          </Link>
        </div>
        <Drawer
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          sx={{ backgroundColor: "transparent" }}
        >
          {list("left")}
        </Drawer>
        <ul>
          {data.navbar.map((link, idx) => (
            <li key={idx}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
          <li className={classes.icons}>
            <Image
              onClick={() => handleChangeLocale("uz")}
              width="100%"
              height="100%"
              src={Uzb}
              alt=""
            />
          </li>
          <li className={classes.icons}>
            <Image
              onClick={() => handleChangeLocale("en")}
              width="100%"
              height="100%"
              src={Eng}
              alt=""
            />
          </li>
          <li className={classes.icons}>
            <Image
              onClick={() => handleChangeLocale("ru")}
              width="100%"
              height="100%"
              src={Rus}
              alt=""
            />
          </li>
          <li className={classes.icons}>
            <Image
              onClick={toggleDrawer("left", true)}
              width="100%"
              height="100%"
              src={Menu}
              alt=""
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
