import { getCustomers, postCustomer, deleteCustomer, putCustomer } from "./dynamodb";

const resolvers = {
    Query: {
        customers: () => getCustomers()
    },
    Mutation: {
        postCustomer: (_, { name, age, gender }) => postCustomer(name, age, gender),
        putCustomer: (_, { id, name, age, gender }) => putCustomer(id, name, age, gender),
        deleteCustomer: (_, { id }) => deleteCustomer(id)
    }
};

export default resolvers;
