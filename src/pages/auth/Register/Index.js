import React from "react";
import { Link, useParams } from "react-router-dom";
import MainWrapper from "../../../components/wrapper/MainWrapper";
import useInputsForm from "../../other/Checkout/useInputsForm";
import { Box } from "@mui/material";
import Button from "../../../components/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import RegisterController from "./Register.controller";

const Register = () => {
  const { slug } = useParams();

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      address: "",
    },

    validationSchema: Yup.object({
      password: Yup.string()
        .required("Password is required")
        .min(6, "Must be at least 6 characters"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Conform password is required"),

      email: Yup.string().email("Invalid email address").required("Required"),
    }),

    onSubmit: (values) => {
      onRegister();
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { handleChange, state, customInput } = useInputsForm(null, {
    onChange: formik.handleChange,
    errors: formik.errors,
  });

  const { onRegister } = RegisterController({ state });
  console.log(formik.errors);
  return (
    <MainWrapper title={"Login"} content={"Login page"}>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            width: "30vw",
            minHeight: "50vh",
            margin: "auto",
            display: "block",
          }}
        >
          {customInput({ name: "name", title: "Name" })}
          {customInput({ name: "phone", title: "Phone" })}
          {customInput({
            name: "email",
            title: "Email",
            required: true,
            type: "email",
          })}
          {customInput({ name: "username", title: "Username" })}
          {customInput({
            name: "password",
            title: "Password",
            required: true,
            type: "password",
          })}
          {customInput({
            name: "confirmPassword",
            title: "Confirm Password",
            required: true,
            type: "password",
          })}
          {customInput({ name: "address", title: "Address" })}
          <Box sx={{ display: "flex" }}>
            <Button
              // disabled={formik.errors}
              text={"Register"}
              type={"submit"}
            />
            <Link
              to={process.env.PUBLIC_URL + "/login"}
              style={{
                color: "#555252",
                cursor: "pointer",
                display: "flex",
                textDecoration: "none",
                margin: "auto 5px auto auto",
                "&:hover": {
                  color: "#a749ff",
                },
              }}
            >
              Already registered?
            </Link>
          </Box>
        </Box>
      </form>
    </MainWrapper>
  );
};

export default Register;
