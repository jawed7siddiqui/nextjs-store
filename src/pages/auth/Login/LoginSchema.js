import { gql } from "@apollo/client";

export const LOGIN_SCHEMA = gql`
  mutation login($login: String!, $password: String!) {
    login(email: $login, password: $password) {
      token
      user {
        id
        role_id
        store_id
        name
        phone
        email
        username
        address
        #        orders
      }
    }
  }
`;
