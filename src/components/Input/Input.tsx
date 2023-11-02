import * as React from "react";

export interface IInputProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  placeholder: string;
  type: "email" | "password";
}

export function Input({ placeholder, type }: IInputProps) {
  return <input type={type} placeholder={placeholder} />;
}
