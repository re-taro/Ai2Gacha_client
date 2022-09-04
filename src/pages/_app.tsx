// eslint-disable-next-line import/no-extraneous-dependencies
import { ChakraProvider } from "@chakra-ui/provider";
import { Layout } from "../components/layout";
import { theme } from "../styles/theme";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
