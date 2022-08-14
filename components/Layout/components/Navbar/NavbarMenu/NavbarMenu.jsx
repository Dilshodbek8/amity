import classes from "./NavbarMenu.module.scss";
import Link from "next/link";
import Exit from "../../../../../public/media/icons/exit.svg";
import Arrow from "../../../../../public/media/icons/arrow.svg";
import Image from "next/image";
import data from "../../links.json";
import cn from "classnames";

const NavbarMenu = ({ className, onClick }) => {
  const classNames = cn(className, classes["menu__navbar"]);

  return (
    <div className={classNames}>
      <div className={classes["menu__navbar__top"]}>
        <button
          className={classes["menu__navbar__top-btn"]}
          onClick={() => onClick(false)}
        >
          <Image src={Exit} alt="x" />
        </button>
      </div>
      <form action="">
        <input type="text" placeholder="search" />
      </form>
      <div className={classes["menu__navbar__bottom"]}>
        <div className={classes["menu__navbar__bottom__info"]}>
          <h1>about us</h1>
          <ul>
            {data["about-info"].map((info, idx) => (
              <li key={idx} onClick={() => onClick(false)}>
                <Link href={info.href}>
                  <a>
                    {info.title}
                    <Image src={Arrow} width="50" alt="top" />
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes["menu__navbar__bottom__info"]}>
          <h1>admission</h1>
          <ul>
            {data["admission-info"].map((info, idx) => (
              <li key={idx} onClick={() => onClick(false)}>
                <Link href={info.href}>
                  <a>
                    {info.title}
                    <Image src={Arrow} width="50" alt="top" />
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes["menu__navbar__bottom__info"]}>
          <h1>information</h1>
          <ul>
            {data["information-info"].map((info, idx) => (
              <li key={idx} onClick={() => onClick(false)}>
                <Link href={info.href}>
                  <a>
                    {info.title}
                    <Image src={Arrow} width="50" alt="top" />
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarMenu;
