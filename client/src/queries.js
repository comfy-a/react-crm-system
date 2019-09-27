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
  mutation PostCustomer($name: String, $age: String, $gender: String) {
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

export const CUSTOMER_PUT = gql` 
  mutation PutCustomer($id: String, $name: String, $age: String, $gender: String) {
    putCustomer(id: $id, name: $name, age: $age, gender: $gender) {
      statusCode
      data
    }
  }
`;

export const CUSTOMER_DELETE = gql` 
  mutation DeleteCustomer($id: String) {
    deleteCustomer(id: $id) {
      statusCode
      data
    }
  }
`;