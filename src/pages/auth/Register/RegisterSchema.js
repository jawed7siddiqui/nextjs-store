import { gql } from "@apollo/client";

export const REGISTER_SCHEMA = gql`
  mutation register(
    $name: String
    $phone: String
    $email: String!
    $password: String!
    $address: String
    $username: String
  ) {
    register(
      data: {
        name: $name
        phone: $phone
        email: $email
        username: $username
        password: $password
        address: $address
      }
    ) {
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
