import { getCustomers, postCustomer, deleteCustomer } from "./dynamodb";

const resolvers = {
    Query: {
        customers: () => getCustomers()
    },
    Mutation: {
        postCustomer: (_, { name, age, gender }) => postCustomer(name, age, gender),
        deleteCustomer: (_, { id }) => deleteCustomer(id)
    }
};

export default resolvers;
