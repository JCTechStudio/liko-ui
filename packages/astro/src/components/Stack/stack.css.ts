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
  }
});

export const stack = recipe({
  base,
  variants: {
    direction,
  },
  defaultVariants: {
    direction: "column",
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
