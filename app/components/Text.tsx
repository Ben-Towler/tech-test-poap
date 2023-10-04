import cx from "classnames";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  align?: "center" | "left" | "right";
  variant?: "light" | "dark";
  size?: "md" | "sm";
  onClick?: () => void;
  className?: string;
}

export const Text = ({ children, align = "left", variant = "dark", size = "md", onClick, className }: Props) => {
  const textClassName = cx(className, {
    // Alignment
    "text-center": align === "center",
    "text-right": align === "right",
    "text-left": align === "left",

    // Variants
    "text-primary-dark": variant === "dark",
    "text-primary-light": variant === "light",

    // Size
    "text-md": size === "md",
    "text-sm": size === "sm",
  });

  return <span className={textClassName} onClick={onClick}>{children}</span>;
}