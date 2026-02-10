import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../theme/contract.css.ts";

const base = style({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  userSelect: "none",
  whiteSpace: "nowrap",
  verticalAlign: "middle",
  border: "1px solid transparent",
  cursor: "pointer",
  outline: 0,
  lineHeight: 1.2,
  isolation: "isolate",
  fontWeight: 500,
  selectors: {
    "&:disabled": {
      pointerEvents: "none",
      opacity: 0.5,
    },
  },
});

const shape = styleVariants({
  sharp: { borderRadius: 0 },
  rounded: { borderRadius: "0.375rem" },
  circular: { borderRadius: "calc(infinity * 1px)" },
});

const fill = styleVariants({
  solid: {
    backgroundColor: vars.palette.solid,
    color: vars.palette.contrast,
    selectors: {
      "&:not(:disabled):hover, &:not(:disabled)[aria-expanded='true']": {
        backgroundColor: `color-mix(in srgb, ${vars.palette.solid} 90%, transparent)`,
      },
    },
  },
  tonal: {
    backgroundColor: vars.palette.subtle,
    color: vars.palette.fg,
    selectors: {
      "&:not(:disabled):hover, &:not(:disabled)[aria-expanded='true']": {
        backgroundColor: vars.palette.muted,
      },
    },
  },
  surface: {
    backgroundColor: vars.palette.subtle,
    color: vars.palette.fg,
    boxShadow: `0 0 0 1px ${vars.palette.muted}`,
    selectors: {
      "&:not(:disabled):hover, &:not(:disabled)[aria-expanded='true']": {
        backgroundColor: vars.palette.muted,
      },
    },
  },
  outline: {
    borderColor: vars.palette.muted,
    backgroundColor: "transparent",
    color: vars.palette.fg,
    selectors: {
      "&:not(:disabled):hover, &:not(:disabled)[aria-expanded='true']": {
        backgroundColor: vars.palette.subtle,
      },
    },
  },
  clear: {
    backgroundColor: "transparent",
    color: vars.palette.fg,
    selectors: {
      "&:not(:disabled):hover, &:not(:disabled)[aria-expanded='true']": {
        backgroundColor: vars.palette.subtle,
      },
    },
  },
  text: {
    backgroundColor: "transparent",
    color: vars.palette.fg,
  },
});

const size = styleVariants({
  xs: {
    height: "2rem",
    minWidth: "2rem",
    fontSize: "0.75rem",
    paddingLeft: "0.625rem",
    paddingRight: "0.625rem",
    gap: "0.25rem",
  },
  sm: {
    height: "2.25rem",
    minWidth: "2.25rem",
    fontSize: "0.875rem",
    paddingLeft: "0.875rem",
    paddingRight: "0.875rem",
    gap: "0.5rem",
  },
  md: {
    height: "2.5rem",
    minWidth: "2.5rem",
    fontSize: "0.875rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    gap: "0.5rem",
  },
  lg: {
    height: "2.75rem",
    minWidth: "2.75rem",
    fontSize: "1rem",
    paddingLeft: "1.25rem",
    paddingRight: "1.25rem",
    gap: "0.75rem",
  },
  xl: {
    height: "3rem",
    minWidth: "3rem",
    fontSize: "1rem",
    paddingLeft: "1.25rem",
    paddingRight: "1.25rem",
    gap: "0.625rem",
  },
});

const block = styleVariants({
  true: {
    display: "flex",
    width: "100%",
  },
});

export const button = recipe({
  base,
  variants: {
    shape,
    fill,
    size,
    block,
  },
  defaultVariants: {
    shape: "rounded",
    fill: "solid",
    size: "md",
    block: false,
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
