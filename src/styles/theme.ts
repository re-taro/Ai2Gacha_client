import { ChakraTheme } from "@chakra-ui/react";

/**
 * typography関連を管理したい場合はここに記述する
 * @see https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/foundations/typography.ts
 */
const typography: Pick<ChakraTheme, "fonts" | "fontSizes" | "fontWeights" | "letterSpacings" | "lineHeights"> = {
  fonts: {},
  fontSizes: {},
  fontWeights: {},
  letterSpacings: {},
  lineHeights: {},
};

/**
 * marginやcolorを管理したい場合はここに記述する
 * @see https://github.com/chakra-ui/chakra-ui/tree/main/packages/theme/foundations
 */
const foundations: Pick<
  ChakraTheme,
  "borders" | "breakpoints" | "colors" | "radii" | "shadows" | "sizes" | "space" | "transition" | "zIndices"
> &
  typeof typography = {
  borders: {},
  breakpoints: {},
  colors: {},
  radii: {},
  shadows: {},
  sizes: {},
  space: {},
  transition: {
    property: {},
    easing: {},
    duration: {},
  },
  zIndices: {},
  ...typography,
};

/**
 * global stylesを変更したい場合はここに記述する
 * themeのkeyを使うことができます
 *
 * @see https://chakra-ui.com/docs/styled-system/global-styles
 */
const styles: ChakraTheme["styles"] = {
  global: {
    body: {},
    "*, *::before, &::after": {},
  },
};

/**
 * themeの設定はここに記述する
 * @see https://chakra-ui.com/docs/styled-system/color-mode#updating-the-theme-config
 */
const config: ChakraTheme["config"] = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "chakra",
};

export const theme: ChakraTheme = {
  ...foundations,
  direction: "ltr",
  components: {},
  styles,
  config,
};
