import { getCustomers, postCustomer } from "./dynamodb";

const resolvers = {
    Query: {
        customers: () => getCustomers()
    },
    Mutation: {
        postCustomer: (_, { name, age, gender }) => postCustomer(name, age, gender)
    }
};

export default resolvers;
