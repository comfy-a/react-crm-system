import gql from "graphql-tag";

export const Q_CUSTOMER = gql` 
  {
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