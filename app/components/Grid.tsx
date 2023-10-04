import { ReactNode } from "react"

type Props = {
  children: ReactNode;
}

export const Grid = ({ children }: Props) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
    {children}
  </div>
)