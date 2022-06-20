import {gql} from "@apollo/client";

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

export const GET_VERIFICATION_STATUS = gql`
    query GETVERIFICATIONSTATUS {
        getUserVerificationStatus {
            emailVerified
            phoneVerified
            bvnVerified
        }
    }
`;

export const STATES_AND_CITIES = gql`
    query GetStatesAndCities {
        getStateAndCities {
            state {
                name
            }
            cities
        }
    }
`;

// loans
export const GET_LOAN_CATEGORIES = gql`
    query GetLoanCategories {
        getLoanCategories {
            _id
            name
            code
            requirement
            amount
            maxPeriod

        }
    }
`;


export const LOAN_APPLICATIONS = gql`
    query GetUserLoans {
        getUserLoanApplication {
            user {
                email
                phone
            }
            category {
                _id
                name
                code
                requirement
                amount
                maxPeriod
            }
            applicationAmount
            approvedAmount
            status {
                name
            }
            applicationDate
            approvedDate
            lastServiceDate
            completedDate
        }

    }
`;


export const GET_EDITDETAILS  = gql `
query GetEditDetails {
  id
  text
}

`