import { AriaButtonProps, useButton } from "react-aria";
import { useRef } from "react";
import cx from "classnames";
import { FaSpinner } from "react-icons/fa";
import { HStack } from ".";

type Props = {
  isLoading?: boolean;
} & AriaButtonProps;

export const Button = ({ isLoading, type = "submit", ...rest }: Props) => {
  const ref = useRef(null);
  const { buttonProps } = useButton(rest, ref);
  const { children, isDisabled } = rest;

  const className = cx("bg-primary text-white px-6 h-12 transition rounded-xl", {
    "cursor-not-allowed bg-primary-light": isDisabled,
    "hover:bg-primary-dark": !isDisabled
  });

  return (
    <button {...buttonProps} ref={ref} className={className}>
      <HStack spacing={2} className="items-center">
        {isLoading && <FaSpinner className="animate-spin" />}
        <>{children}</>
      </HStack>
    </button>
  );
};
