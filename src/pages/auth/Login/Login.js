import React, { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import MainWrapper from "../../../components/wrapper/MainWrapper";
import useInputsForm from "../../other/Checkout/useInputsForm";
import { Box, Typography } from "@mui/material";
import Button from "../../../components/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import LoginController from "./Login.controller";

const Login = () => {
  const { slug } = useParams();

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },

    validationSchema: Yup.object({
      login: Yup.string().required("Login is required"),
      password: Yup.string().required("Password is required"),
    }),

    onSubmit: (values) => {
      onLogin();
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { handleChange, state, customInput } = useInputsForm(null, {
    onChange: formik.handleChange,
    errors: formik.errors,
  });

  const { onLogin } = LoginController({ state });
  return (
    <MainWrapper title={"Login"} content={"Login page"}>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            width: "30vw",
            height: "50vh",
            margin: "auto",
            display: "block",
          }}
        >
          {customInput({ name: "login", title: "Login" })}
          {customInput({
            name: "password",
            title: "Password",
            type: "password",
          })}
          <Box sx={{ display: "flex" }}>
            <Button text={"Login"} type={"submit"} />
            <Link
              to={process.env.PUBLIC_URL + "/register"}
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
              Not registered yet?
            </Link>
          </Box>
        </Box>
      </form>
    </MainWrapper>
  );
};

export default Login;
