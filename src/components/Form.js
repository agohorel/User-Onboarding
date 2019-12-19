import React, { useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";

const SignUpForm = ({
  values: { name, email, password, role, tos },
  errors,
  touched,
  status,
  members,
  setMembers
}) => {
  useEffect(() => {
    status && setMembers(members => [...members, status]);
  }, [status, setMembers]);

  return (
    <StyledFormik>
      <label htmlFor="name">
        <FormGroup>
          Name:
          <Field type="text" name="name"></Field>
          {touched.name && errors.name && (
            <ValidationWarning>{errors.name}</ValidationWarning>
          )}
        </FormGroup>
      </label>

      <label htmlFor="email">
        <FormGroup>
          Email:
          <Field type="text" name="email"></Field>
          {touched.email && errors.email && (
            <ValidationWarning>{errors.email}</ValidationWarning>
          )}
        </FormGroup>
      </label>

      <label htmlFor="password">
        <FormGroup>
          Password:
          <Field type="password" name="password"></Field>
          {touched.password && errors.password && (
            <ValidationWarning>{errors.password}</ValidationWarning>
          )}
        </FormGroup>
      </label>

      <label htmlFor="role">
        <FormGroup>
          Role:
          <Field as="select" name="role">
            <option value="Front-End Developer">Front-End Dev</option>
            <option value="Back-End Developer">Back-End Dev</option>
            <option value="Full-Stack Developer">Full-Stack Dev</option>
            <option value="None">None</option>
          </Field>
          {touched.role && errors.role && (
            <ValidationWarning>{errors.role}</ValidationWarning>
          )}
        </FormGroup>
      </label>

      <label htmlFor="tos">
        <FormGroup>
          Terms of Service:
          <Field type="checkbox" name="tos"></Field>
          {touched.tos && errors.tos && (
            <ValidationWarning>{errors.tos}</ValidationWarning>
          )}
        </FormGroup>
      </label>

      <Button type="submit">Sign Up!</Button>
    </StyledFormik>
  );
};

const RegisterForm = withFormik({
  mapPropsToValues({ name, email, password, role, tos }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      role: role || "",
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
    role: Yup.string()
      .required("Please select a role.")
      .notOneOf(
        ["None"],
        "Sorry but this site is intended for developers only :*("
      ),
    tos: Yup.boolean()
      .required(
        "You must agree to the Terms of Service to proceed with registration."
      )
      .oneOf(
        [true],
        "You must agree to the Terms of Service to proceed with registration."
      )
  }),
  async handleSubmit(values, { setStatus }) {
    try {
      const res = await axios.post("https://reqres.in/api/users", values);
      setStatus(res.data);
    } catch (err) {
      console.error(err);
    }
  }
})(SignUpForm);

export default RegisterForm;

const StyledFormik = styled(Form)`
  display: flex;
  justify-content: space-between;
  background-color: black;
  padding: 2rem 10%;
  box-shadow: 0px 0px 10px black;

  label {
    font-size: 1.4rem;
    color: #aaa;
  }

  input {
    background-color: #272629;
    border: none;
    border-radius: 3px;
    padding: 0.5rem;
    color: #aaa;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  border: none;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  background-color: #272629;
  color: #aaa;
  height: 4rem;
`;

const ValidationWarning = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  background-color: #d90d21;
  padding: 1rem;
  border-radius: 3px;
  color: black;
`;
