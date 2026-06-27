import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const base = style({
  "@layer": {
    components: {
      display: "flex",
      gap: "8px",
    },
  },
});

const direction = styleVariants({
  row: {
    "@layer": {
      components: {
        flexDirection: "row",
      },
    }
  },
  column: {
    "@layer": {
      components: {
        flexDirection: "column",
      },
    }
  },
});

const reverse = styleVariants({
  true: {},
  false: {},
});

export const stack = recipe({
  base,
  variants: {
    direction,
    reverse,
  },
  compoundVariants: [
    {
      variants: {
        direction: "row",
        reverse: true,
      },
      style: {
        "@layer": {
          components: {
            flexDirection: "row-reverse",
          },
        },
      },
    },
    {
      variants: {
        direction: "column",
        reverse: true,
      },
      style: {
        "@layer": {
          components: {
            flexDirection: "column-reverse",
          },
        },
      },
    },
  ],
  defaultVariants: {
    direction: "column",
    reverse: false,
  },
});

export const hstack = style({
  "@layer": {
    components: {
      alignItems: "center",
    },
  },
});

export const vstack = style({
  "@layer": {
    components: {
      alignItems: "center",
    },
  },
});
