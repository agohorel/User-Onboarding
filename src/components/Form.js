import React from "react";
import { withFormik, Form, Field } from "formik";

const SignUpForm = ({ values: { name, email, password, tos } }) => {
  console.log(name, email, password, tos);
  return (
    <Form>
      <label htmlFor="name">
        Name:
        <Field type="text" id="name" name="name"></Field>
      </label>

      <label htmlFor="email">
        email:
        <Field type="text" id="email" name="email"></Field>
      </label>

      <label htmlFor="password">
        password:
        <Field type="password" id="password" name="password"></Field>
      </label>

      <label htmlFor="tos">
        Terms of Service:
        <Field type="checkbox" id="tos" name="tos"></Field>
      </label>

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
  }
})(SignUpForm);

export default RegisterForm;
