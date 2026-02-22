import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { fallbackVar, style, styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { semanticColors } from "../../theme/semantic-colors/semantic-colors.contract.css.ts";
import { utils } from "../../theme/utils/utils.contract.css.ts";
import colors from "tailwindcss/colors";

const base = style({
  "@layer": {
    components: {
      appearance: "none",
      position: "relative",
      display: "inline-flex",
      flexShrink: 0,
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      borderWidth: "1px",
      borderColor: colors.transparent,
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
    },
  },
});

const shape = styleVariants({
  sharp: {
    "@layer": {
      components: { borderRadius: 0 },
    },
  },
  round: {
    "@layer": {
      components: { borderRadius: "0.375rem" },
    },
  },
  circle: {
    "@layer": {
      components: { borderRadius: calc.multiply("infinity", "1px") },
    },
  },
});

const fill = styleVariants({
  solid: {
    "@layer": {
      components: {
        borderColor: colors.transparent,
        backgroundColor: semanticColors.palette.solid,
        color: semanticColors.palette.contrast,
        selectors: {
          "&:not(:disabled):hover, &:not(:disabled)[aria-expanded='true']": {
            backgroundColor: `color-mix(in srgb, ${semanticColors.palette.solid} 90%, transparent)`,
          },
        },
      },
    },
  },
  tonal: {
    "@layer": {
      components: {
        borderColor: colors.transparent,
        backgroundColor: semanticColors.palette.subtle,
        color: semanticColors.palette.fg,
        selectors: {
          "&:not(:disabled):hover, &:not(:disabled)[aria-expanded='true']": {
            backgroundColor: semanticColors.palette.muted,
          },
        },
      },
    },
  },
  surface: {
    "@layer": {
      components: {
        vars: {
          [utils.shadow.color]: semanticColors.palette.muted,
        },
        boxShadow: `0 0 0 1px ${utils.shadow.color}`,
        backgroundColor: semanticColors.palette.subtle,
        color: semanticColors.palette.fg,
        selectors: {
          "&:not(:disabled):hover, &:not(:disabled)[aria-expanded='true']": {
            backgroundColor: semanticColors.palette.muted,
          },
        },
      },
    },
  },
  outline: {
    "@layer": {
      components: {
        vars: {
          [utils.outline.color.base]: semanticColors.palette.border,
          [utils.outline.color.legacy]: semanticColors.palette.muted,
        },
        borderColor: fallbackVar(utils.outline.color.base, utils.outline.color.legacy),
        backgroundColor: colors.transparent,
        color: semanticColors.palette.fg,
        selectors: {
          "&:not(:disabled):hover, &:not(:disabled)[aria-expanded='true']": {
            backgroundColor: semanticColors.palette.subtle,
          },
        },
      },
    },
  },
  clear: {
    "@layer": {
      components: {
        backgroundColor: colors.transparent,
        color: semanticColors.palette.fg,
        selectors: {
          "&:not(:disabled):hover, &:not(:disabled)[aria-expanded='true']": {
            backgroundColor: semanticColors.palette.subtle,
          },
        },
      },
    },
  },
  text: {
    "@layer": {
      components: {
        backgroundColor: colors.transparent,
        color: semanticColors.palette.fg,
      },
    },
  },
});

const size = styleVariants({
  xs: {
    "@layer": {
      components: {
        height: "2rem",
        minWidth: "2rem",
        fontSize: "0.75rem",
        paddingLeft: "0.625rem",
        paddingRight: "0.625rem",
        gap: "0.25rem",
      },
    },
  },
  sm: {
    "@layer": {
      components: {
        height: "2.25rem",
        minWidth: "2.25rem",
        fontSize: "0.875rem",
        paddingLeft: "0.875rem",
        paddingRight: "0.875rem",
        gap: "0.5rem",
      },
    },
  },
  md: {
    "@layer": {
      components: {
        height: "2.5rem",
        minWidth: "2.5rem",
        fontSize: "0.875rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        gap: "0.5rem",
      },
    },
  },
  lg: {
    "@layer": {
      components: {
        height: "2.75rem",
        minWidth: "2.75rem",
        fontSize: "1rem",
        paddingLeft: "1.25rem",
        paddingRight: "1.25rem",
        gap: "0.75rem",
      },
    },
  },
  xl: {
    "@layer": {
      components: {
        height: "3rem",
        minWidth: "3rem",
        fontSize: "1rem",
        paddingLeft: "1.25rem",
        paddingRight: "1.25rem",
        gap: "0.625rem",
      },
    },
  },
});

const block = styleVariants({
  true: {
    "@layer": {
      components: {
        display: "flex",
        width: "100%",
      },
    },
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
    shape: "round",
    fill: "solid",
    size: "md",
    block: false,
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
