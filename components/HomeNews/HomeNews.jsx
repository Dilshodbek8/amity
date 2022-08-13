import classes from "./HomeNews.module.scss";
import cn from "classnames";
import SimpleHeading from "../SimpleHeading";
import Slider from "../../components/MySlider";
import { useTranslation } from "next-i18next";
import data from "../../fakedata/home.json";

const HomeNews = ({ className }) => {
  const classNames = cn(className, classes.home__news);
  const { t } = useTranslation();

  return (
    <div className={classNames}>
      <p>relevant news</p>
      <SimpleHeading
        hedingText={t(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        )}
        secondText={t(
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit porro, aliquid reprehenderit iusto inventore sint beatae ipsum impedit in sit  illum distinctio sequi quisquam et hic tempore"
        )}
      />
      <Slider data={data} />
    </div>
  );
};

export default HomeNews;
