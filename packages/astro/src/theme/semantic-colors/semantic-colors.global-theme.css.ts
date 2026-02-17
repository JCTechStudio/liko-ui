import { createGlobalTheme } from "@vanilla-extract/css";
import colors from "tailwindcss/colors";
import { semanticColors } from "./semantic-colors.contract.css.ts";

createGlobalTheme(":root", semanticColors, {
  bg: {
    base: colors.white,
    subtle: colors.gray[50],
    muted: colors.gray[100],
    emphasized: colors.gray[200],
    inverted: colors.black,
    panel: colors.white,
    error: colors.red[50],
    warning: colors.orange[50],
    success: colors.green[50],
    info: colors.blue[50],
  },

  fg: {
    base: colors.black,
    subtle: colors.gray[400],
    muted: colors.gray[600],
    inverted: colors.gray[50],
    error: colors.red[500],
    warning: colors.orange[600],
    success: colors.green[600],
    info: colors.blue[600],
  },

  border: {
    base: colors.gray[200],
    subtle: colors.gray[50],
    muted: colors.gray[100],
    emphasized: colors.gray[300],
    inverted: colors.gray[800],
    error: colors.red[500],
    warning: colors.orange[500],
    success: colors.green[500],
    info: colors.blue[500],
  },

  palette: {
    contrast: colors.black,
    fg: colors.amber[800],
    subtle: colors.amber[100],
    muted: colors.amber[200],
    emphasized: colors.amber[300],
    solid: colors.amber[400],
    focusRing: colors.amber[500],
    border: colors.amber[500],
  },
});

createGlobalTheme("[data-theme='dark']", semanticColors, {
  bg: {
    base: colors.white,
    subtle: colors.gray[950],
    muted: colors.gray[900],
    emphasized: colors.gray[800],
    inverted: colors.white,
    panel: colors.gray[950],
    error: colors.red[950],
    warning: colors.orange[950],
    success: colors.green[950],
    info: colors.blue[950],
  },

  fg: {
    base: colors.gray[50],
    subtle: colors.gray[500],
    muted: colors.gray[400],
    inverted: colors.black,
    error: colors.red[400],
    warning: colors.orange[300],
    success: colors.green[300],
    info: colors.blue[300],
  },

  border: {
    base: colors.gray[800],
    subtle: colors.gray[950],
    muted: colors.gray[900],
    emphasized: colors.gray[700],
    inverted: colors.gray[200],
    error: colors.red[400],
    warning: colors.orange[400],
    success: colors.green[400],
    info: colors.blue[400],
  },

  palette: {
    contrast: colors.black,
    fg: colors.amber[300],
    subtle: colors.amber[900],
    muted: colors.amber[800],
    emphasized: colors.amber[700],
    solid: colors.amber[400],
    focusRing: colors.amber[500],
    border: colors.amber[400],
  },
});
