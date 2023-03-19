import { users } from "../../db/mockdb";

export const resolvers = {
        Query: {
            users: () => users,
        },
};
