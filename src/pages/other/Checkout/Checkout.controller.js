import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useToasts } from "react-toast-notifications";

import qs from "qs";
const CheckoutController = (cartItems) => {
  const history = useHistory();
  const { addToast } = useToasts();

  const onSubmit = (value) => {
    const products = cartItems?.map((elem) => {
      return {
        product_id: elem?.id,
        quantity: elem?.quantity,
      };
    });
    console.log(value);
    console.log(`store_id: 1,
        name: "${value?.name}",
        phone: "${value?.phone}",
        email: "${value?.email}",
        username: "test77",
        password: "123",
        address: "${value?.country} ${value?.city} ${value?.postcode}",
              products:${JSON.stringify(products).split(`"`).join("")},

        delivery_fee: 50,
        shipping_address: "${value?.country} ${value?.city} ${value?.postcode}",
        billing_address: "${value?.country} ${value?.city} ${value?.postcode}"
    }`);

    axios({
      url: process.env.REACT_APP_API_URL,
      method: "post",
      data: {
        query: `
    mutation {
    createOrderAsGuest(data: {
        store_id: 1,
        name: "${value?.name}",
        phone: "${value?.phone}",
        email: "${value?.email}",
        username: "test77",
        password: "123",
        address: "${value?.country} ${value?.city} ${value?.postcode}",
        
                      products:${JSON.stringify(products).split(`"`).join("")},

    delivery_fee: 50,
        shipping_address: "${value?.country} ${value?.city} ${value?.postcode}",
        billing_address: "${value?.country} ${value?.city} ${value?.postcode}"
  }) {
        id,
        store_id,
        user_id,
        initial_price,
        delivery_fee,
        total_price,
        shipping_address,
        billing_address,
        items {
            id,
            product_id,
            quantity,
            price,
            total_price
        },
        status,
        created_at,
        updated_at
    }
}`,
      },
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
      },
    })
      .then((result) => {
        console.log(result);

        addToast("The order is placed", {
          autoDismiss: true,
          appearance: "success",
        });
        setTimeout(() => {
          history.push("/app/dgty");
        }, 3500);
      })
      .catch((err) => {
        console.log(err);

        addToast("Something went wrong", {
          autoDismiss: true,
          appearance: "error",
        });
      });
  };

  // const [formData, setFormData] = useState({
  //   name: "",
  //   store_id: "",
  //   email: "",
  //   password: "",
  //   user_id: "",
  //   firstName: "",
  //   lastName: "",
  //   city: "",
  //   zip: "",
  //   address: "",
  // });

  // const handleChange = (event) => {
  //   setFormData((prevState) => {
  //     return { ...prevState, [event.target.name]: event.target.value };
  //   });
  // };
  return { onSubmit };
};

export default CheckoutController;
