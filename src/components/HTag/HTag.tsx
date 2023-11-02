import * as React from "react";
import styles from "./HTag.module.css";

export interface IHTagProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  tag: "h1" | "h2" | "h3";
  children: React.ReactNode;
}

export function HTag({ tag, children, ...props }: IHTagProps): JSX.Element {
  switch (tag) {
    case "h1":
      return (
        <h1 className={styles.h1} {...props}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={styles.h2} {...props}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={styles.h3} {...props}>
          {children}
        </h3>
      );
    default:
      return <></>;
  }
}
