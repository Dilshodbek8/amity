import classes from "./DetailedCard.module.scss";
import Image from "next/image";

const DetailedCard = ({ date, img, categ, text, st }) => {
  let newDate = new Date(date);
  let day = newDate.getDate();
  let month = newDate.toLocaleString("en-US", { month: "short" });
  let year = newDate.getFullYear();
  return (
    <div className={classes.card}>
      <div className={classes.head}>
        <div className={classes.dates}>
          <h5>{day}</h5>
          <h4>{month}</h4>
          <h6>{year}</h6>
        </div>
        <Image
          src={st ? `${img}` : `/media/fakeimages/${img}`}
          alt={img}
          width="1000"
          height="1000"
        />
        <p>{categ}</p>
      </div>

      <div className={classes.foot}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default DetailedCard;
