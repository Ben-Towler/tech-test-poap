import { Children, isValidElement, ReactNode, ReactElement } from "react"

export const getValidChildren = (children: ReactNode) => {
  return Children.toArray(children).filter((child) =>
    isValidElement(child),
  ) as ReactElement[]
}