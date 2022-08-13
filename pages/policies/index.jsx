import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import classes from "./Policies.module.scss";
import MiniLayout from "../../components/MiniLayout/MiniLayout";
import Links from "../../components/MiniNavigation/links";
import data from "./data.json";
import SimpleHeading from "../../components/SimpleHeading";
import Link from "next/link";

const Policies = () => {
  return (
    <>
      <Head>
        <title>Policies</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MiniLayout links={Links.links} title="School Policies & Documents">
        <div className={classes.head}>
          <h1>{data.head.title}</h1>
          <p>{data.head.desc}</p>
        </div>

        <div className={classes.body}>
          <SimpleHeading
            hedingText={data.policy[0].heading}
            left
          ></SimpleHeading>
          <ul>
            {data.policy.map((dat) => (
              <>
                <li>
                  <Link href={dat.link}>{dat.text}</Link>
                </li>
              </>
            ))}
          </ul>

          <SimpleHeading
            hedingText={data.forms[0].heading}
            left
          ></SimpleHeading>
          <ul>
            {data.forms.map((dat) => (
              <>
                <li>
                  <Link href={dat.link}>{dat.text}</Link>
                </li>
              </>
            ))}
          </ul>
        </div>
      </MiniLayout>
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

export default Policies;
