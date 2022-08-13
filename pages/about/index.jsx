import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import classes from "./About.module.scss";
import MiniLayout from "../../components/MiniLayout/MiniLayout";
import Links from "../../components/MiniNavigation/Links";
import CapmusShow from "../../components/CapmusShow/CapmusShow";
import rasm from "../../public/media/images/showbg.jpg";
import Features from "../../components/Features/Features";
import data from "./data.json";
const About = () => {
  const textData = data.text;
  const programsData = data.programs;

  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MiniLayout links={Links.links} title="About Amity">
        <div className={classes.texts}>
          {textData.map((dat) => (
            <>
              <h1>{dat.big}</h1>
              <p>{dat.small}</p>
            </>
          ))}
        </div>

        <Features features={programsData}></Features>
      </MiniLayout>

      <CapmusShow
        img={rasm}
        text={
          "Amity University Dubai spans across 700,000 square feet. Not only is it environmentally sustainable, with intelligent building management systems, such as motion-sensor lights, the classrooms are digitised and there are sports and fitness facilities to help flex your athletic aspirations or simply stay fit and healthy. Amity University Dubai is also home to over 30 specialised laboratories to provide students with hands-on experience and insight into the future of industries.If it’s space you’re after, you won’t be disappointed. Students have access to various areas for brainstorming and studying. Designed by a world-renowned firm, Canon Design, each area has been carefully thought through, with bold colours strategically placed throughout the walkways and classrooms to inspire creativity and create a strong sense of community."
        }
        title={"A campus unlike any other "}
      ></CapmusShow>
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

export default About;