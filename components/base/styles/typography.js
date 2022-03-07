import { styled } from "@stitches/react";
import { grayDark, violetDark } from "@radix-ui/colors";

export const TextPrimitive = styled("span", {
  color: grayDark.gray1,

  "&.bold": {
    fontWeight: 700,
  },

  "&.medium": {
    fontWeight: 500,
  },

  "&.regular": {
    fontWeight: 400,
  },

  "&.rem-lg": {
    fontSize: "2.5rem",
  },

  "&.rem-md": {
    fontSize: "1.5rem",
  },

  "&.rem-sm": {
    fontSize: "1rem",
  },

  "&.link, a": {
    color: violetDark.violet8,
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline",
    },
  },
});
