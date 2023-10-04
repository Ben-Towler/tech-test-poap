import cx from "classnames";

type Props = {
  children: string;
  align?: "center" | "left" | "right";
  size?: "5xl" | "4xl" | "3xl" | "2xl" | "xl" | "lg";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = ({ children, size, align = "left", as = "h1" }: Props) => {
  const className = cx("text-primary-dark", {
    // Alignment
    "text-center": align === "center",
    "text-right": align === "right",
    "text-left": align === "left",

    // Font sizing
    "text-5xl": size === "5xl",
    "text-4xl": size === "4xl",
    "text-3xl": size === "3xl",
    "text-2xl": size === "2xl",
    "text-xl": size === "xl",
    "text-lg": size === "lg",

    // Font family
    "font-heading": size !== "xl" && size !== "lg",
    "font-body": size === "xl" || size === "lg",

    // Font weight
    "font-medium": size === "xl" || size === "lg",
    "font-extrabold": size !== "xl" && size !== "lg",
  });

  const Title = as;

  return (
    <Title className={className}>{children}</Title>
  )
}

type HeadingProps = Omit<Props, "size" | "as">;

export const H1 = (props: HeadingProps) => <Heading {...props} size="5xl" as="h1" />;
export const H2 = (props: HeadingProps) => <Heading {...props} size="4xl" as="h2" />;
export const H3 = (props: HeadingProps) => <Heading {...props} size="3xl" as="h3" />;
export const H4 = (props: HeadingProps) => <Heading {...props} size="2xl" as="h4" />;
export const H5 = (props: HeadingProps) => <Heading {...props} size="xl" as="h5" />;
export const H6 = (props: HeadingProps) => <Heading {...props} size="lg" as="h6" />;
