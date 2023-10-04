import { getValidChildren } from "@/app/lib/utils";
import { ReactNode, forwardRef, useMemo } from "react";
import cx from "classnames";

export type StackProps  = {
  direction: "row" | "column";
  children: ReactNode;
  spacing: 1 | 2 | 3 |  4 | 5 | 6 | 7 | 8;
  className?: string;
};

export const Stack = forwardRef<HTMLDivElement, StackProps>(({ spacing = 2, children, direction, className }, ref) => {
  const clones = useMemo(() => getValidChildren(children), [ children ]);

  const classNames = cx("flex", className, {
    "flex-row": direction === "row",
    "flex-col": direction === "column",
    "gap-1": spacing === 1,
    "gap-2": spacing === 2,
    "gap-3": spacing === 3,
    "gap-4": spacing === 4,
    "gap-5": spacing === 5,
    "gap-6": spacing === 6,
    "gap-7": spacing === 7,
    "gap-8": spacing === 8,
  });

  return (
    <div ref={ref} className={classNames}>
      {clones}
    </div>
  )
});

Stack.displayName = "Stack";
