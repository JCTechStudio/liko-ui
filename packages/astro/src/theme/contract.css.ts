import { createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  ui: {
    bg: null,
    bgSubtle: null,
    bgMuted: null,
    bgEmphasized: null,
    bgInverted: null,
    bgPanel: null,

    bgError: null,
    bgWarning: null,
    bgSuccess: null,
    bgInfo: null,

    border: null,
    borderSubtle: null,
    borderMuted: null,
    borderEmphasized: null,
    borderInverted: null,

    borderError: null,
    borderWarning: null,
    borderSuccess: null,
    borderInfo: null,

    fg: null,
    fgSubtle: null,
    fgMuted: null,
    fgInverted: null,

    fgError: null,
    fgWarning: null,
    fgSuccess: null,
    fgInfo: null,
  },

  palette: {
    50: null, 100: null, 200: null, 300: null, 400: null,
    500: null, 600: null, 700: null, 800: null, 900: null, 950: null,

    contrast: null,
    fg: null,
    subtle: null,
    muted: null,
    emphasized: null,
    solid: null,
    focusRing: null,
  },
});
