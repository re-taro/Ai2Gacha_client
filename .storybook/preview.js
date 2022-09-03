const theme = require("../src/styles/theme");

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

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme,
  },
  viewport: {
    viewports: customViewports,
    defaultViewport: "base",
  },
};
