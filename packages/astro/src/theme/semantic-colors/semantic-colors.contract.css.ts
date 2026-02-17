import { createThemeContract } from "@vanilla-extract/css";

export const semanticColors = createThemeContract({
  bg: {
    base: null,
    subtle: null,
    muted: null,
    emphasized: null,
    inverted: null,
    panel: null,
    error: null,
    warning: null,
    success: null,
    info: null,
  },

  fg: {
    base: null,
    subtle: null,
    muted: null,
    inverted: null,
    error: null,
    warning: null,
    success: null,
    info: null,
  },

  border: {
    base: null,
    subtle: null,
    muted: null,
    emphasized: null,
    inverted: null,
    error: null,
    warning: null,
    success: null,
    info: null,
  },

  palette: {
    contrast: null,
    fg: null,
    subtle: null,
    muted: null,
    emphasized: null,
    solid: null,
    focusRing: null,
    border: null,
  },
});
