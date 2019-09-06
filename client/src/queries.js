import gql from "graphql-tag";

export const ALL_CUSTOMER_GET = gql` 
  query {
    customers {
      statusCode
      data {
        id
        name
        age
        gender
      }
    }
  }
`;

export const CUSTOMER_POST = gql` 
  mutation PostCustomer($name: String, $age: Int, $gender: String) {
    postCustomer(name: $name, age: $age, gender: $gender) {
      statusCode
      data {
        id
        name
        age
        gender
      }
    }
  }
`;