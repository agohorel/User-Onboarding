import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const SignUpForm = ({
  values: { name, email, password, tos },
  errors,
  touched,
  status
}) => {
  return (
    <Form>
      <label htmlFor="name">
        Name:
        <Field type="text" name="name"></Field>
      </label>
      {touched.name && errors.name && <p>{errors.name}</p>}

      <label htmlFor="email">
        email:
        <Field type="text" name="email"></Field>
      </label>
      {touched.email && errors.email && <p>{errors.email}</p>}

      <label htmlFor="password">
        password:
        <Field type="password" name="password"></Field>
      </label>
      {touched.password && errors.password && <p>{errors.password}</p>}

      <label htmlFor="tos">
        Terms of Service:
        <Field type="checkbox" name="tos"></Field>
      </label>
      {touched.tos && errors.tos && <p>{errors.tos}</p>}

      <button type="submit">Sign Up!</button>
    </Form>
  );
};

const RegisterForm = withFormik({
  mapPropsToValues({ name, email, password, tos }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      tos: false || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required("Must enter a name!")
      .min(3, "Your name must be 3 or more characters long."),
    email: Yup.string()
      .required("An email address is required for registration.")
      .email("Please enter a valid email address"),
    password: Yup.string()
      .required("You must provide a password!")
      .min(
        6,
        "For security purposes, please enter a password longer than 5 characters"
      ),
    tos: Yup.boolean()
      .required(
        "You must agree to the Terms of Service to proceed with registration."
      )
      .oneOf(
        [true],
        "You must agree to the Terms of Service to proceed with registration."
      )
  })
})(SignUpForm);

export default RegisterForm;
