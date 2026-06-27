import type { HTMLAttributes } from "astro/types";
import type { BaseProps } from "../Base.types";

type Direction = "row" | "column";

type StackBaseProps = BaseProps & HTMLAttributes<"div">

export type StackProps = StackBaseProps & {
  direction?: Direction;
}
