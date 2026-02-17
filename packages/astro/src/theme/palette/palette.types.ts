import type colors from "tailwindcss/colors";

type NestedColorKeys<T> = { [K in keyof T]: T[K] extends object ? K : never }[keyof T];

export type Palette = NestedColorKeys<typeof colors>;

export type PaletteSemanticSpec = {
  contrast: string;
  fg: string;
  subtle: string;
  muted: string;
  emphasized: string;
  solid: string;
  focusRing: string;
  border: string;
};

export type ThemePaletteSemanticSpec = {
  light: PaletteSemanticSpec;
  dark: PaletteSemanticSpec;
};

export type PaletteMap = Record<Palette, string>;

export type PaletteSemantic = Record<Palette, ThemePaletteSemanticSpec>;
