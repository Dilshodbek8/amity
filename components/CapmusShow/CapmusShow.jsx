import classes from "./CapmusShow.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const CapmusShow = ({ title, img, text }) => {
  const { t } = useTranslation();
  return (
    <div className={classes.showWrap}>
      <div className={classes.image}>
        <Image src={img} alt={img} />
      </div>
      <div className={classes.text}>
        <h5>{t("CAMPUS")}</h5>
        <h1>{title}</h1>
        <div className={classes.underline}></div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CapmusShow;
