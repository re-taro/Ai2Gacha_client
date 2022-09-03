import { ChakraProvider } from "@chakra-ui/provider";
import { theme } from "../src/styles/theme";

const customViewports = {
  /** iPhone X */
  base: {
    name: "base",
    styles: {
      width: "375px",
      height: "812px",
    },
    type: "mobile",
  },
  /** iPad */
  md: {
    name: "md",
    styles: {
      width: "768px",
      height: "1024px",
    },
    type: "tablet",
  },
  /** MacBook Air */
  lg: {
    name: "lg",
    styles: {
      width: "1280px",
      height: "800px",
    },
    type: "desktop",
  },
};

const withChakra = (StoryFn) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <StoryFn />
    </ChakraProvider>
  );
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: customViewports,
    defaultViewport: "base",
  },
};

export const decorators = [withChakra];
