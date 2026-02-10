import { createGlobalTheme } from "@vanilla-extract/css";
import colors from "tailwindcss/colors";
import { vars } from "./contract.css";

createGlobalTheme(":root", vars, {
  ui: {
    bg: colors.white,
    bgSubtle: colors.gray[50],
    bgMuted: colors.gray[100],
    bgEmphasized: colors.gray[200],
    bgInverted: colors.black,
    bgPanel: colors.white,

    bgError: colors.red[50],
    bgWarning: colors.orange[50],
    bgSuccess: colors.green[50],
    bgInfo: colors.blue[50],

    border: colors.gray[200],
    borderSubtle: colors.gray[50],
    borderMuted: colors.gray[100],
    borderEmphasized: colors.gray[300],
    borderInverted: colors.gray[800],

    borderError: colors.red[500],
    borderWarning: colors.orange[500],
    borderSuccess: colors.green[500],
    borderInfo: colors.blue[500],

    fg: colors.black,
    fgSubtle: colors.gray[400],
    fgMuted: colors.gray[600],
    fgInverted: colors.gray[50],

    fgError: colors.red[500],
    fgWarning: colors.orange[600],
    fgSuccess: colors.green[600],
    fgInfo: colors.blue[600],
  },

  palette: {
    50: colors.amber[50],
    100: colors.amber[100],
    200: colors.amber[200],
    300: colors.amber[300],
    400: colors.amber[400],
    500: colors.amber[500],
    600: colors.amber[600],
    700: colors.amber[700],
    800: colors.amber[800],
    900: colors.amber[900],
    950: colors.amber[950],

    contrast: colors.black,
    fg: colors.amber[800],
    subtle: colors.amber[100],
    muted: colors.amber[200],
    emphasized: colors.amber[300],
    solid: colors.amber[400],
    focusRing: colors.amber[500],
  },
});

createGlobalTheme("[data-theme='dark']", vars, {
  ui: {
    bg: colors.black,
    bgSubtle: colors.gray[950],
    bgMuted: colors.gray[900],
    bgEmphasized: colors.gray[800],
    bgInverted: colors.white,
    bgPanel: colors.gray[950],

    bgError: colors.red[950],
    bgWarning: colors.orange[950],
    bgSuccess: colors.green[950],
    bgInfo: colors.blue[950],

    border: colors.gray[800],
    borderSubtle: colors.gray[950],
    borderMuted: colors.gray[900],
    borderEmphasized: colors.gray[700],
    borderInverted: colors.gray[200],

    borderError: colors.red[400],
    borderWarning: colors.orange[400],
    borderSuccess: colors.green[400],
    borderInfo: colors.blue[400],

    fg: colors.gray[50],
    fgSubtle: colors.gray[500],
    fgMuted: colors.gray[400],
    fgInverted: colors.black,

    fgError: colors.red[400],
    fgWarning: colors.orange[300],
    fgSuccess: colors.green[300],
    fgInfo: colors.blue[300],
  },

  palette: {
    50: colors.amber[50],
    100: colors.amber[100],
    200: colors.amber[200],
    300: colors.amber[300],
    400: colors.amber[400],
    500: colors.amber[500],
    600: colors.amber[600],
    700: colors.amber[700],
    800: colors.amber[800],
    900: colors.amber[900],
    950: colors.amber[950],

    contrast: colors.black,
    fg: colors.amber[300],
    subtle: colors.amber[900],
    muted: colors.amber[800],
    emphasized: colors.amber[700],
    solid: colors.amber[400],
    focusRing: colors.amber[500],
  },
});
