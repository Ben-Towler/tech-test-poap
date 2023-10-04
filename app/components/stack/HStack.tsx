import { forwardRef } from "react"
import { Stack, StackProps } from "./Stack"

type Props = Omit<StackProps, "direction">;

export const HStack = forwardRef<HTMLDivElement, Props>((props, ref) => (
  <Stack {...props} direction="row" ref={ref} />
))

HStack.displayName = "HStack";
