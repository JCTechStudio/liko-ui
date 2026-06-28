import type { HTMLAttributes } from "astro/types";
import type { BaseProps } from "../Base.types";

type StackBaseProps = BaseProps & HTMLAttributes<"div">

export type StackProps = StackBaseProps & {
  horizontal?: boolean;
  reverse?: boolean;
}

export type StackSeparatorProps = HTMLAttributes<"div">;
