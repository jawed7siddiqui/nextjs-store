import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderOne from "../../wrappers/hero-slider/HeroSliderOne";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import TabProduct from "../../wrappers/product/TabProduct";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import { useParams } from "react-router-dom";
import MainWrapper from "../../components/wrapper/MainWrapper";
import useInputsForm from "../other/Checkout/useInputsForm";
import { Box } from "@mui/material";
import Button from "../../components/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

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
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { handleChange, state, customInput } = useInputsForm(null, {
    onChange: formik.handleChange,
    errors: formik.errors,
  });

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
          {customInput({ name: "password", title: "Password" })}
          <Button
            // disabled={!state?.login || !state?.password}
            text={"Login"}
            onClick={() => alert()}
          />
        </Box>
      </form>
    </MainWrapper>
  );
};

export default Login;
