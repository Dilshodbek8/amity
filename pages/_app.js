import "../styles/globals.scss";
import Layout from "../components/Layout/";
import { appWithTranslation } from "next-i18next";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#ffc600",
      main: "#ffc600",
      dark: "#ffc600",
      contrastText: "#ffc600",
    },
    secondary: {
      light: "#002b49",
      main: "#002b49",
      dark: "#002b49",
      contrastText: "#002b49",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
