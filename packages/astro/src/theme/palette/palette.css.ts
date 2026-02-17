import { assignVars, style } from "@vanilla-extract/css";
import { semanticColors } from "../semantic-colors/semantic-colors.contract.css.ts";
import { PALETTE_SEMANTICS } from "./palette.constants.ts";
import type { Palette, PaletteMap } from "./palette.types.ts";

function makePalette(palette: Palette) {
  const {
    light: lightSemanticSpec,
    dark: darkSemanticSpec,
  } = PALETTE_SEMANTICS[palette];

  return style({
    vars: assignVars(semanticColors.palette, lightSemanticSpec),
    selectors: {
      "[data-theme='dark'] &": {
        vars: assignVars(semanticColors.palette, darkSemanticSpec),
      },
    },
  });
}

function makePalettes() {
  const paletteMap = {} as PaletteMap;

  for (const palette in PALETTE_SEMANTICS) {
    paletteMap[palette as Palette] = makePalette(palette as Palette);
  }

  return paletteMap;
}

export const palettes = makePalettes();
