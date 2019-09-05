import { getCustomers } from "./dynamodb";

const resolvers = {
    Query: {
        customers: () => getCustomers()
    }
};

export default resolvers;
