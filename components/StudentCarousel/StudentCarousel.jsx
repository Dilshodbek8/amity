import classes from "./StudentCarousel.module.scss";
import cn from "classnames";
import Slider from "react-slick";
import Image from "next/image";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const StudentCarousel = ({ className, imgs }) => {
  const classNames = cn(className);

  return (
    <div className={classes.carousel}>
      <Slider {...settings}>
        {imgs.map((img, index) => (
          <div key={index} className={classes.carousel__item}>
            <Image src={`/media/images/${img}`} alt="" layout="fill" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StudentCarousel;
