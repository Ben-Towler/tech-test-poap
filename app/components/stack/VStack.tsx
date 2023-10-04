import { forwardRef } from "react"
import { Stack, StackProps } from "./Stack"

type Props = Omit<StackProps, "direction">;

export const VStack = forwardRef<HTMLDivElement, Props>((props, ref) => (
  <Stack {...props} direction="column" ref={ref} />
));

VStack.displayName = "VStack";
