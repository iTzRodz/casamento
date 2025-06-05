import React from "react";
import { twMerge } from "tailwind-merge";
import { ArrowRightIcon } from "./icons/ArrowRightIcon";
import classNames from "classnames";
import { LoadingIcon } from "./icons/LoadingIcon";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "default";
  arrowIcon?: boolean;
  loading?: boolean;
}
export function Button(props: IButtonProps) {
  const { children, variant, className, arrowIcon, loading, ...otherProps } =
    props;

  const bgButtonAndHover = classNames(
    variant === "primary" && "bg-[#1a1a1a]",
    variant === "secondary" && "bg-black",
  );

  const buttonClassName = twMerge(
    "py-2 px-4 rounded-lg border border-transparent  cursor-pointer shadow-md  font-semibold text-center transition-all duration-200 hover:shadow-xl ease-in flex items-center justify-center",
    loading && "cursor-not-allowed opacity-80 ",
    bgButtonAndHover,
    className,
    arrowIcon && "relative group",
  );

  return (
    <button {...otherProps} className={twMerge(buttonClassName)}>
      <span className="flex items-center justify-center gap-1">
        {loading && <LoadingIcon className={"mr-2 animate-spin"} />}
        {children}
      </span>
      <ArrowRightIcon className="absolute right-16 top-1/2 translate-y-[-50%] opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-2 group-hover:text-black group-hover:opacity-100" />
    </button>
  );
}
