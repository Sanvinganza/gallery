import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { HTag } from "../HTag/HTag";
import styles from "./SignUpForm.module.css";
import { useRef } from "react";
import { Button } from "../Button/Button";

const SignUpSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  password: Yup.string()
    .min(8, "Password should be longer than 8 chars")
    .required("Required"),
});

const handleSubmit = (values: { name: string; password: string }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
  }, 500);
};

export const SignUpForm = () => {
  const formRef = useRef<any>();

  return (
    <div className={styles.container}>
      <HTag tag="h1">log in</HTag>

      <Formik
        innerRef={formRef}
        initialValues={{
          name: "",
          password: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={handleSubmit}
        render={() => (
          <Form
            className={styles.form}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                console.log(formRef.current?.values);
              }
            }}
          >
            <Field
              name="name"
              placeholder="John Doe"
              type="text"
              className={styles.signup_input}
            />
            <ErrorMessage
              name="name"
              render={(msg) => <div className={styles.field_error}>{msg}</div>}
            />

            <Field
              name="password"
              placeholder="qwerty123"
              type="password"
              className={styles.signup_input}
            />
            <ErrorMessage
              name="password"
              render={(msg) => <div className={styles.field_error}>{msg}</div>}
            />
            <Button apperance="primary" type="submit" className={styles.button}>
              Continue
            </Button>
          </Form>
        )}
      />
    </div>
  );
};
