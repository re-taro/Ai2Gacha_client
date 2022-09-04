import { chakra } from "@chakra-ui/react";
import type { LayoutProperties } from "./type/model";
import type { FC } from "react";

const Layout: FC<LayoutProperties> = ({ children }) => (
  <chakra.div minHeight="100vh" bgColor="black">
    <chakra.main px="0.625rem" py="1.875rem">
      {children}
    </chakra.main>
  </chakra.div>
);

export { Layout };
