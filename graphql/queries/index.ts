import { gql } from "@apollo/client";

export const GET_CURRENT_USER = gql`
query GetCurrentUser {
getCurrentUser {
    _id
    email
    phone
    verification {
        emailVerified
        phoneVerified
        bvnVerified
    }
    profile {
        firstName
        lastName
        avatar
        isBlocked
    }
}
}
`;