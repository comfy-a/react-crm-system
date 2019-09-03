import { getCustomers } from "./db";

const resolvers = {
    Query: {
        customers: () => getCustomers()
    }
};

export default resolvers;
