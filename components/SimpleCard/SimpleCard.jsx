import classes from "./SimpleCard.module.scss";

const SimpleCard = ({ backImg, title, link }) => {
  return (
    <div className={classes.card}>
      <div style={{ backgroundImage: `url(${backImg})` }}></div>
      <a href={link}>{title}</a>
    </div>
  );
};

export default SimpleCard;
