import {
  Authenticator,
  ThemeProvider,
  useAuthenticator,
} from "@aws-amplify/ui-react";
import "../styles/globals.css";
import "@aws-amplify/ui-react/styles.css";
import { Amplify, API, I18n, graphqlOperation, Auth } from "aws-amplify";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import config from "../src/aws-exports";
import { translations } from "@aws-amplify/ui";
import { useEffect } from "react";
import { eventSubscriber } from "../src/lib/eventStoreUtil";

Amplify.configure({ ...config, ssr: true });

I18n.putVocabularies(translations);
I18n.putVocabulariesForLanguage("ja", {
  "User does not exist.": "ユーザーが存在しません",
});
I18n.setLanguage("ja");

const NoSSR = dynamic(() => import("../components/NoSSR"), {});

const _MyApp = ({ Component, pageProps }: AppProps) => {
  const { user, signOut, route } = useAuthenticator((context) => [
    context.user,
    context.route,
  ]);

  useEffect(() => {
    if (user) {
      return eventSubscriber(() => console.log("sub triggerd"), user);
    }
  }, []);

  return (
    <>
      {route === "authenticated" ? (
        <Component {...pageProps} />
      ) : (
        <Authenticator />
      )}
    </>
  );
};

function MyApp(props: AppProps) {
  return (
    <ThemeProvider>
      <Authenticator.Provider>{<_MyApp {...props} />}</Authenticator.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
