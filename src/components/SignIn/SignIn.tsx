import * as React from "react";
import { HTag } from "../HTag/HTag";
import { Input } from "../Input/Input";

export interface ISignInProps {}

export function SignIn(props: ISignInProps) {
  return (
    <body className="container">
      <div className="container--inner">
        <div className="login-container">
          <HTag tag="h1">log in</HTag>
          <form>
            <Input type="email" placeholder="Enter your name" />
            <Input type="password" placeholder="Enter password" />
          </form>
        </div>
      </div>
    </body>
  );
}
