import { useSearchFieldState } from "react-stately";
import { AriaSearchFieldProps, useButton, useSearchField } from "react-aria";
import { useRef } from "react";
import { VStack } from ".";
import cx from "classnames";
import { FaTimesCircle } from "react-icons/fa";

export const SearchField = (props: AriaSearchFieldProps) => {
  const { label, errorMessage } = props;
  const state = useSearchFieldState(props);
  const ref = useRef(null);
  const buttonRef = useRef(null);
  const { labelProps, inputProps, errorMessageProps, clearButtonProps } = useSearchField(props, state, ref);

  const { buttonProps } = useButton(clearButtonProps, buttonRef);

  const inputClassName = cx("rounded-xl border h-12 px-5 w-[250px] md:w-[350px] text-primary transition border border-primary-dark outline-none focus:border-primary bg-white", {
    "border-2 !border-error": !!errorMessage
  });

  const errorClassName = cx("bg-error-light rounded-lg py-1 px-3 max-w-max text-sm text-error");

  return (
    <div className="flex flex-col w-full">
      <label {...labelProps}>{label}</label>
      <VStack spacing={1}>
        <div className="relative">
          <input
            {...inputProps}
            ref={ref}
            className={inputClassName}
          />
          {state.value && (
            <button ref={buttonRef} {...buttonProps} className="absolute right-5 top-4">
              <FaTimesCircle className="text-primary hover:text-primary-dark transition bg-white"/>
            </button>
          )}
        </div>
        {errorMessage && (
          <div {...errorMessageProps} className={errorClassName}>
            {errorMessage}
          </div>
        )}
      </VStack>
    </div>
  );
}