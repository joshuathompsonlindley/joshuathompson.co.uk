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

export const LoadingContainer = styled('div', {
    backgroundColor: '#f4eeee',
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
    height: "100vh"
});

export const LoadingBarPrimitive = styled("span", {
    border: `12px solid ${grayDark.gray10}`,
    borderTop: `12px solid ${violetDark.violet8}`,
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    animation: `${loader} 2s ease-in-out infinite`
})