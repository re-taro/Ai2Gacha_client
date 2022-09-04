import { chakra } from "@chakra-ui/react";
import type { ProgressBarProperties } from "./type/model";
import type { FC } from "react";

const ProgressBar: FC<ProgressBarProperties> = ({ progress, ...rest }) => (
  <chakra.div height="1.25rem" width="100%" bgColor="light-gray" borderRadius="2.5rem" {...rest}>
    <chakra.div height="100%" width={`${progress}%`} bgColor="secondary" borderRadius="2.5rem" textAlign="right">
      <chakra.span padding="0.625rem" color="black">{`${progress}%`}</chakra.span>
    </chakra.div>
  </chakra.div>
);

export { ProgressBar };
