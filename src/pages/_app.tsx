// eslint-disable-next-line import/no-extraneous-dependencies
import { ChakraProvider } from "@chakra-ui/provider";
import { useEffect } from "react";
import { Layout } from "../components/layout";
import { theme } from "../styles/theme";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps, router }: AppProps) => {
  useEffect(() => {
    if (!localStorage.getItem("userId")) {
      router.push("/start");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
