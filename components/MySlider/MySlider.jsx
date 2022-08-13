import classes from "./MySlider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cn from "classnames";
import Slider from "react-slick";
import DetailedCard from "../DetailedCard/DetailedCard";

const MySlider = ({ className, data }) => {
  const classNames = cn(className);
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={classes.slider}>
      <Slider {...settings}>
        {data.news.map((news, idx) => (
          <div key={idx} className={classes.slider__item}>
            <DetailedCard
              date={news.date}
              text={news.text}
              img={news.img}
              categ={news.categ}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MySlider;
