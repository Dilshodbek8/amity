import classes from "./MainSlider.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "../SliderCard/SliderCard";

const MainSlider = ({ className, data }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={classes.slider}>
      <Slider {...settings}>
        {data.map((slide, idx) => (
          <SliderCard
            className={classes.slider__item}
            key={idx}
            slide={slide}
          />
        ))}
      </Slider>
    </div>
  );
};

export default MainSlider;
