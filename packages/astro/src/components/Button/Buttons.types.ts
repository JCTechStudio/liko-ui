import type { HTMLAttributes } from "astro/types";
import type { RecipeVariants } from "@vanilla-extract/recipes";
import type { BaseProps, ColorProps } from "../Base.types";
import type { button } from "./button.css";

type ButtonVariants = RecipeVariants<typeof button>;

type SpinnerPlacement = "start" | "end";

type ButtonsLoadingProps = {
  loading?: boolean;
  loadingText?: astroHTML.JSX.Element;
  loadingSpinner?: astroHTML.JSX.Element;
  spinnerPlacement?: SpinnerPlacement;
}

export type ButtonsBaseProps = BaseProps & ColorProps & ButtonVariants & ButtonsLoadingProps & HTMLAttributes<"button">;
