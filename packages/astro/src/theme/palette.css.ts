import { assignVars, style } from "@vanilla-extract/css";
import colors from "tailwindcss/colors";
import { vars } from "./contract.css";

type Theme = "light" | "dark";

type NestedColorKeys<T> = { [K in keyof T]: T[K] extends object ? K : never }[keyof T];

type PaletteName = NestedColorKeys<typeof colors>;

type Contrast = "white" | "black";

type PaletteSemanticSpec = {
  contrast: Contrast; fg: number; subtle: number; muted: number; emphasized: number; solid: number; focusRing: number;
};

type ThemePaletteSemantic = { light: PaletteSemanticSpec; dark: PaletteSemanticSpec };

type PaletteSemantic = Record<PaletteName, ThemePaletteSemantic>;

type Scale = Record<number, string>;

const PALETTE_SEMANTICS: PaletteSemantic = {
  red: {
    light: { contrast: "white", fg: 700, subtle: 100, muted: 200, emphasized: 300, solid: 600, focusRing: 500 },
    dark: { contrast: "white", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 600, focusRing: 500 },
  },
  orange: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 600, focusRing: 500 },
    dark: { contrast: "black", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 400, focusRing: 500 },
  },
  amber: {
    light: { contrast: "black", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 400, focusRing: 500 },
    dark: { contrast: "black", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 400, focusRing: 500 },
  },
  yellow: {
    light: { contrast: "black", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 400, focusRing: 500 },
    dark: { contrast: "black", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 400, focusRing: 500 },
  },
  lime: {
    light: { contrast: "black", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 400, focusRing: 500 },
    dark: { contrast: "black", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 400, focusRing: 500 },
  },
  green: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 600, focusRing: 500 },
    dark: { contrast: "black", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 400, focusRing: 500 },
  },
  emerald: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 600, focusRing: 500 },
    dark: { contrast: "black", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 400, focusRing: 500 },
  },
  teal: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 600, focusRing: 500 },
    dark: { contrast: "black", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 400, focusRing: 500 },
  },
  cyan: {
    light: { contrast: "black", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 400, focusRing: 500 },
    dark: { contrast: "black", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 400, focusRing: 500 },
  },
  sky: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 600, focusRing: 500 },
    dark: { contrast: "black", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 400, focusRing: 500 },
  },
  blue: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 600, focusRing: 500 },
    dark: { contrast: "black", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 400, focusRing: 500 },
  },
  indigo: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 600, focusRing: 500 },
    dark: { contrast: "white", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 600, focusRing: 500 },
  },
  violet: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 600, focusRing: 500 },
    dark: { contrast: "white", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 600, focusRing: 500 },
  },
  purple: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 600, focusRing: 500 },
    dark: { contrast: "white", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 600, focusRing: 500 },
  },
  fuchsia: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 600, focusRing: 500 },
    dark: { contrast: "white", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 600, focusRing: 500 },
  },
  pink: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 600, focusRing: 500 },
    dark: { contrast: "white", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 600, focusRing: 500 },
  },
  rose: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 600, focusRing: 500 },
    dark: { contrast: "white", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 600, focusRing: 500 },
  },
  slate: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 900, focusRing: 400 },
    dark: { contrast: "black", fg: 200, subtle: 900, muted: 800, emphasized: 700, solid: 50, focusRing: 400 },
  },
  gray: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 900, focusRing: 400 },
    dark: { contrast: "black", fg: 200, subtle: 900, muted: 800, emphasized: 700, solid: 50, focusRing: 400 },
  },
  zinc: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 900, focusRing: 400 },
    dark: { contrast: "black", fg: 200, subtle: 900, muted: 800, emphasized: 700, solid: 50, focusRing: 400 },
  },
  neutral: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 900, focusRing: 400 },
    dark: { contrast: "black", fg: 200, subtle: 900, muted: 800, emphasized: 700, solid: 50, focusRing: 400 },
  },
  stone: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 900, focusRing: 400 },
    dark: { contrast: "black", fg: 200, subtle: 900, muted: 800, emphasized: 700, solid: 50, focusRing: 400 },
  },
};

const DARK_SELECTOR = "[data-theme='dark'] &";

function resolveContrast(c: Contrast) {
  return c === "white" ? colors.white : colors.black;
}

function getThemePaletteVars(theme: Theme, scale: Scale, semantic: ThemePaletteSemantic) {
  return {
    50: scale[50],
    100: scale[100],
    200: scale[200],
    300: scale[300],
    400: scale[400],
    500: scale[500],
    600: scale[600],
    700: scale[700],
    800: scale[800],
    900: scale[900],
    950: scale[950],

    contrast: resolveContrast(semantic[theme].contrast),
    fg: scale[semantic[theme].fg],
    subtle: scale[semantic[theme].subtle],
    muted: scale[semantic[theme].muted],
    emphasized: scale[semantic[theme].emphasized],
    solid: scale[semantic[theme].solid],
    focusRing: scale[semantic[theme].focusRing],
  };
}

function makePaletteClass(name: PaletteName) {
  const scale: Scale = (colors as any)[name];
  const semantic = PALETTE_SEMANTICS[name];

  const lightVars = getThemePaletteVars("light", scale, semantic);
  const darkVars = getThemePaletteVars("dark", scale, semantic);

  return style({
    vars: assignVars(vars.palette, lightVars), selectors: {
      [DARK_SELECTOR]: {
        vars: assignVars(vars.palette, darkVars),
      },
    },
  });
}

function makePaletteClasses() {
  const classes = {} as Record<PaletteName, string>;

  for (const name in PALETTE_SEMANTICS) {
    classes[name as PaletteName] = makePaletteClass(name as PaletteName);
  }

  return classes;
}

export const paletteClasses = makePaletteClasses();

export type Palette = keyof typeof paletteClasses;
