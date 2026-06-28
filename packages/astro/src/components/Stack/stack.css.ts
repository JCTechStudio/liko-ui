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

const horizontal = styleVariants({
  true: {
    "@layer": {
      components: {
        flexDirection: "row",
      },
    }
  },
  false: {
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
    horizontal,
    reverse,
  },
  compoundVariants: [
    {
      variants: {
        horizontal: true,
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
        horizontal: false,
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
    horizontal: false,
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

export const stackSeparator = style({
  "@layer": {
    components: {
      alignSelf: "stretch",
      borderWidth: 0,
      borderColor: "inherit",
      width: "auto",
      height: "auto",
      selectors: {
        [`${horizontal.true} > &`]: {
          borderInlineStartWidth: "1px",
          borderTopWidth: 0,
        },
        [`${horizontal.true}${reverse.true} > &`]: {
          borderInlineStartWidth: "1px",
          borderTopWidth: 0,
        },
        [`${horizontal.false} > &`]: {
          borderInlineStartWidth: 0,
          borderTopWidth: "1px",
        },
        [`${horizontal.false}${reverse.true} > &`]: {
          borderInlineStartWidth: 0,
          borderTopWidth: "1px",
        },
      },
    },
  },
});
