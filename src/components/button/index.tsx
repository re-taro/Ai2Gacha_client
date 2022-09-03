import { chakra } from "@chakra-ui/react";
import { forwardRef } from "react";
import type { ButtonProperties } from "./type/model";

// eslint-disable-next-line react/display-name
const Button = forwardRef<HTMLButtonElement, ButtonProperties>(
  ({ isNegative = false, border = false, children, disable = false, ...rest }, ref) => {
    let bg;
    let color;
    if (disable) {
      bg = " light-gray";
      color = "gray";
    } else if (isNegative) {
      bg = "black";
      color = "secondary";
    } else {
      bg = "secondary";
      color = "black";
    }
    return (
      <chakra.button
        bg={bg}
        color={color}
        border={border ? "1px solid" : ""}
        borderColor={border ? "secondary" : ""}
        px="2rem"
        py="0.5rem"
        fontSize="1.625rem"
        borderRadius="1.5625rem"
        disabled={disable}
        cursor={disable ? "not-allowed" : ""}
        ref={ref}
        {...rest}
      >
        {children}
      </chakra.button>
    );
  },
);

export { Button };
