import * as React from "react";
import styles from "./Button.module.css";
import cn from "classnames";

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  apperance: "primary" | "ghost";
}

export function Button({
  apperance,
  children,
  className,
  ...props
}: IButtonProps): JSX.Element {
  return (
    <button
      className={cn(
        styles.button,
        {
          [styles.primary]: apperance === "primary",
          [styles.ghost]: apperance === "ghost",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
