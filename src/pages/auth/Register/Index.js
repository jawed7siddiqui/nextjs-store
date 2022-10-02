import React from "react";
import { useParams } from "react-router-dom";
import MainWrapper from "../../../components/wrapper/MainWrapper";
import useInputsForm from "../../other/Checkout/useInputsForm";
import { Box } from "@mui/material";
import Button from "../../../components/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

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
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { handleChange, state, customInput } = useInputsForm(null, {
    onChange: formik.handleChange,
    errors: formik.errors,
  });
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
          <Button
            // disabled={formik.errors}
            text={"Login"}
            type={"submit"}
          />
        </Box>
      </form>
    </MainWrapper>
  );
};

export default Register;
