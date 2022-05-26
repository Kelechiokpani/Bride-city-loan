import { gql } from "@apollo/client";

export const GET_CURRENT_USER = gql`
query GetCurrentUser {
getCurrentUser {
    _id
    email
    phone
    firstName
    lastName
    emailVerified
    phoneVerified
    bvnVerified
    utilityBill
}
}
`;