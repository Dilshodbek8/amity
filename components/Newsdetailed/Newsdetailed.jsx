import classes from "./Newsdetailed.module.scss";

const Newsdetailed = ({ className, img, date, category, text }) => {
  const data = new Date(date);
  const day = data.getDate();
  let month = Number(data.getMonth() + 1).toString();
  month = month.length === 1 ? "0" + month : month;
  const year = data.getFullYear();

  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className={classes.news__detailed}
    >
      <div className={classes.news__detailed__text}>
        <div className={classes.news__detailed__text__data}>
          {day + " " + month + " " + year}
        </div>
        <div className={classes.news__detailed__text__category}>{category}</div>
        <div className={classes.news__detailed__text__title}>
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  );
};

export default Newsdetailed;
