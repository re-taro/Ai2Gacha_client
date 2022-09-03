// eslint-disable-next-line import/no-extraneous-dependencies
import { ChakraProvider } from "@chakra-ui/provider";
import { theme } from "../styles/theme";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
