import { chakra } from "@chakra-ui/react";
import type { WrapperProperties } from "./type/model";
import type { FC } from "react";

const SvgWrapper: FC<WrapperProperties> = ({ path, ...rest }) => (
  <chakra.div px="0.625rem" py="0.75rem" bgColor="white" rounded="0.75rem" display="flex" {...rest}>
    <chakra.img src={path} alt="this is svg file" />
  </chakra.div>
);

export { SvgWrapper };
