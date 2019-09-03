import gql from "graphql-tag";

export const Q_CUSTOMER = gql`
  {
    customers {
      id
      name
      image
      age
      gender
    }
  }
`;