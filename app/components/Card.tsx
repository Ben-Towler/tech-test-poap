import { ReactNode } from "react";

type Props = {
  children: ReactNode;
}

export const Card = ({ children }: Props) => (
  <div className="rounded-xl bg-white shadow-md px-4 py-8 relative overflow-hidden">
    { children }
  </div>
);