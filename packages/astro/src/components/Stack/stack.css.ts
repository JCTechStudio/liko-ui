import { style } from "@vanilla-extract/css";

export const stack = style({
  "@layer": {
    components: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
  },
});

export const hstack = style({
  "@layer": {
    components: {
      flexDirection: "row",
      alignItems: "center",
    },
  },
});

export const vstack = style({
  "@layer": {
    components: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
});
