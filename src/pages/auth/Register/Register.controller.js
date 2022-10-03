import React from "react";
import { useMutation } from "@apollo/client";
import { REGISTER_SCHEMA } from "./RegisterSchema";
import { useToasts } from "react-toast-notifications";
import { addUserdata } from "../../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const RegisterController = ({ state }) => {
  const [registerFunction, { data }] = useMutation(REGISTER_SCHEMA);

  const { addToast } = useToasts();
  const history = useHistory();

  const dispatch = useDispatch();
  const onRegister = () => {
    registerFunction({ variables: { ...state } })
      .then((elem) => {
        console.log(elem.data.register.user);
        localStorage.setItem("accessToken", elem.data.register.token);
        dispatch(addUserdata(elem.data.register.user));
        addToast("Account was created successfully!", {
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

  return { onRegister };
};

export default RegisterController;
