import React from "react";
import axios from "axios";
import { useMutation } from "@apollo/client";
import { LOGIN_SCHEMA } from "./LoginSchema";
import { addUserdata } from "../../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const LoginController = ({ state }) => {
  const [loginFunction, { data }] = useMutation(LOGIN_SCHEMA);
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const history = useHistory();

  const onLogin = () => {
    loginFunction({ variables: { ...state } })
      .then((elem) => {
        console.log(elem.data.login.user);
        localStorage.setItem("accessToken", elem.data.login.token);
        dispatch(addUserdata(elem.data.login.user));
        addToast("You are successfully logged in!", {
          autoDismiss: true,
          appearance: "success",
        });
        setTimeout(() => {
          history.push("/");
        }, 3000);
      })
      .catch(() => {
        addToast("Something went wrong!", {
          autoDismiss: true,
          appearance: "error",
        });
      });
  };
  return { onLogin };
};

export default LoginController;
