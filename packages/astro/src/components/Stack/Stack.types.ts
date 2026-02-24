import type { HTMLAttributes } from "astro/types";
import type { BaseProps } from "../Base.types";

export type StackProps = BaseProps & HTMLAttributes<"div">;
