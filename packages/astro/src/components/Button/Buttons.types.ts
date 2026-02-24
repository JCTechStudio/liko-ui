import type { HTMLAttributes } from "astro/types";
import type { BaseProps, ColorProps } from "../Base.types";
import type { ButtonVariants } from "./button.css";

type SpinnerPlacement = "start" | "end";

type ButtonsLoadingProps = {
  loading?: boolean;
  loadingText?: astroHTML.JSX.Element;
  loadingSpinner?: astroHTML.JSX.Element;
  spinnerPlacement?: SpinnerPlacement;
}

export type ButtonsBaseProps = BaseProps & ColorProps & ButtonVariants & ButtonsLoadingProps & HTMLAttributes<"button">;
