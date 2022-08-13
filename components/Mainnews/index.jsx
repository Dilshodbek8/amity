import classes from "./mainnews.module.scss";
import Image from "next/image";
const MainNews = ({ date, img, categ, desc }) => {
  return (
    <>
      <div className={classes.bigCard}>
        <Image src={img} layout="fill" alt={img} />
        <div className={classes.bottom}>
          <div className={classes.dat_categ}>
            <p>{date}</p>
            <p>{categ}</p>
          </div>
          <p className={classes.desc}>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default MainNews;
