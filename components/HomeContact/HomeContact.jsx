import classes from "./HomeContact.module.scss";
import cn from "classnames";
import SimpleHeading from "../SimpleHeading";
import ContactCard from "../ContactCard/ContactCard";
import InputText from "../InputText";
import { cardData } from "../ContactCard/facedata/facadata";
import InputTextArea from "../InputTextArea/InputTextArea";
const HomeContact = ({ className }) => {
  const classNames = cn(className);

  return (
    <div className={classes.info}>
      <div className="container">
        <p className={classes.info__p}>Contact Us</p>
        <SimpleHeading
          hedingText={"Get In Touch"}
          secondText={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit porro, aliquid reprehenderit iusto inventore sint beatae ipsum impedit in sit  illum distinctio sequi quisquam et hic tempore"
          }
        />

        <div className={classes.info__content}>
          <div className={classes.info__content__contacts}>
            {cardData.map((card, i) => {
              return <ContactCard key={i} cardData={card} />;
            })}
          </div>
          <div className={classes.info__content__form}>
            <form action="">
              <div className={classes.info__content__form__inputs}>
                <InputText placeholder="Your name" radius />
                <InputText fullWidth placeholder="Your name" radius />
              </div>
              <InputTextArea placeholder={"Your message"} />

              <div className={classes.info__content__form__privacy}>
                <input type="checkbox" id="privacy" />

                <label htmlFor="privacy">
                  Accept Terms & Conditions and Privacy Policy.
                </label>
                <br />
                <button>send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
