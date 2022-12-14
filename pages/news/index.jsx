import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import classes from "./News.module.scss";
import { useTranslation } from "next-i18next";
import MainNews from "../../components/Mainnews";
import DetailedCard from "../../components/DetailedCard/DetailedCard";
import { news as news } from "./data.json";
import MiniLayoutRight from "../../components/MiniLayoutRight/MiniLayoutRight";
let links = [
  { title: "All Categories", href: "/amitywelcomes" },
  { title: "Admission", href: "/founders" },
  { title: "Application", href: "/ourcampus" },
  { title: "Competition", href: "/alumni" },
  { title: "Courses", href: "/internationalcampus" },
  { title: "Events", href: "/policies" },
];
const News = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>News</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MiniLayoutRight title={"News"} links={links}>
        <div className="container">
          <div className={classes.body}>
            <div className={classes.left}>
              <MainNews
                date={"22 feb 2022"}
                img={
                  "https://s3-alpha-sig.figma.com/img/ad67/7cc4/d2691b11d32464e2f64d03857a0f31ab?Expires=1661126400&Signature=D19L06qHfaAhpU0x4rv2mmkqeYjiGBBfsTPhoEjnfCvDT1P2Hp7yMA9TDcAzgESwwfDaiL8yd4-uHQBt8CT16aPjJ1WXBKrkK6F9iEtOhNwk0-XedPDDVj3PL0ixQqRRyPu~H1faZx01~oqxOhVEyo~fdhM40oiVLcQRV0C4gKosfflWsh23Us9a36Wg7HEPGIRVTzJYb-cMvxQRRSPmD5ce5FKwU6K7TRIl885PZ7jquoKBMvEqyXqDLCIqmyZHk8Qmu6JMTAx5DjLbfhlRDhKSqOO1OH4EOoIpJpHW0jV-tGeQfBqd8RtuMbi40hMctU0GPCiGuZDOln5t7UuFmg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                }
                categ={"Admission"}
                desc={
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                }
              />
              <div className={classes.cards}>
                {news.map((item, index) => (
                  <div key={index} className={classes.card}>
                    <DetailedCard
                      st
                      date={"22 feb 2022"}
                      img={
                        "https://s3-alpha-sig.figma.com/img/ad67/7cc4/d2691b11d32464e2f64d03857a0f31ab?Expires=1661126400&Signature=D19L06qHfaAhpU0x4rv2mmkqeYjiGBBfsTPhoEjnfCvDT1P2Hp7yMA9TDcAzgESwwfDaiL8yd4-uHQBt8CT16aPjJ1WXBKrkK6F9iEtOhNwk0-XedPDDVj3PL0ixQqRRyPu~H1faZx01~oqxOhVEyo~fdhM40oiVLcQRV0C4gKosfflWsh23Us9a36Wg7HEPGIRVTzJYb-cMvxQRRSPmD5ce5FKwU6K7TRIl885PZ7jquoKBMvEqyXqDLCIqmyZHk8Qmu6JMTAx5DjLbfhlRDhKSqOO1OH4EOoIpJpHW0jV-tGeQfBqd8RtuMbi40hMctU0GPCiGuZDOln5t7UuFmg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                      }
                      categ={"Admission"}
                      text={
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MiniLayoutRight>
    </>
  );
};

export const getStaticProps = async (context) => {
  const locale = context.locale;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default News;
