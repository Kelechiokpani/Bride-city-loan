import { gql } from "@apollo/client";

export const ADD_USER = gql`
    mutation Register($input: userInput) {
        addUser(data: $input)
    }
`;

export const LOGIN_USER = gql`
    mutation Login($email: String! $password: String!) {
        loginUser(email: $email password: $password)
    }
`;
export const LOGOUT = gql`
    mutation Logout {
        logout
    }
`;


export const CODE_VERIFICATION = gql`
mutation Verification($type: String! $code: String!) {
    codeVerification(type: $type code: $code)
}
`;


export const IDENTITY_VERIFICATION = gql`
mutation IdentityVerification($type: String! $number: Int!) {
    userIdentityVerification(type: $type number: $number)
}
`;

export const UPLOAD_BILL = gql`
mutation UploadUtilityBill($image: String!) {
    uploadUtilityBill(image: $image)
}
`;

export const CREATE_PROFILE = gql`
mutation UpdatePerson($data: updatePersonInput!) {
    updatePerson(data: $data)
}
`;

// Loan Application
// personal Form---------------
export const LOAN_APPLICATION = gql`
mutation  LoanApplication(
    $category: string!
    $applicationAmount: Int!
    ) {
    applyLoan(
    data: {
        category: $category
        applicationAmount: $applicationAmount
    }
        )
}
`

export const ADMIN_LOANAPPROVAL = gql`
    mutation AdminLoanApproval(
        $id : string  
        $approvalStatus : string
        $approvalAmount : string
        $attendant : string
        ){ 
            loanapproval(id:  $id 
                approvalStatus: $approvalStatus
                approvalAmount: $approvalAmount 
                attendant: $attendant)
        }
`
