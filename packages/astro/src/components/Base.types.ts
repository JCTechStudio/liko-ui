import type { Palette } from "../theme/palette/palette.types.ts";

export type BaseProps = {
  as?: astroHTML.JSX.Element;
};

export type ColorProps = {
  palette?: Palette;
};
