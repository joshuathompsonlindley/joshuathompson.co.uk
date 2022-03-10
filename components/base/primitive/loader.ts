import { styled, keyframes } from "@stitches/react";
import { grayDark, violetDark } from "@radix-ui/colors";

const loader = keyframes({
    '0%': {
        transform: 'rotate(0deg)'
    },
    '100%': {
        transform: 'rotate(360deg)'
    }
});

export const LoaderPrimitive = styled("div", {
    border: `16px solid ${grayDark.gray10}`,
    borderTop: `16px solid ${violetDark.violet8}`,
    borderRadius: "50%",
    width: "130px",
    height: "130px",
    animation: `${loader} 2s ease-in-out infinite`
})