import * as React from "react";
import styles from "./LoginPage.module.css";
import { SignUpForm } from "../../components/SignupForm/SignupForm";

export interface ILoginPageProps {}

export function LoginPage(props: ILoginPageProps) {
  return (
    <div className={styles.container}>
      <SignUpForm />
    </div>
  );
}
