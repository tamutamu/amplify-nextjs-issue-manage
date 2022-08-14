import {
  Authenticator,
  ThemeProvider,
  useAuthenticator,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify, I18n } from "aws-amplify";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import config from "../src/aws-exports";
import "../styles/globals.css";
import { translations } from "@aws-amplify/ui";

Amplify.configure({ ...config, ssr: true });

I18n.putVocabularies(translations);
I18n.putVocabulariesForLanguage("ja", {
  "User does not exist.": "ユーザーが存在しません",
});
I18n.setLanguage("ja");

const NoSSR = dynamic(() => import("../components/NoSSR"), {});

function Authcheck() {
  const { route } = useAuthenticator((context) => [context.route]);
  return route === "authenticated" ? <></> : <></>;
}

function MyApp({ Component, pageProps }: AppProps) {
  const theme = {
    name: "my-theme",
    tokens: {
      colors: {
        font: {
          primary: { value: "#008080" },
        },
        background: {
          primary: { value: "#f4f5f5" },
        },
      },
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Authenticator.Provider>
        <Component {...pageProps} />
      </Authenticator.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
