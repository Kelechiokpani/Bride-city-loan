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
    name
    code
    requirement
    amount
    maxPeriod

  }
}
`;
