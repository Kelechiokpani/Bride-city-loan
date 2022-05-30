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


export const CODE_VERIFICATION = gql`
mutation Verification($type: String! $code: String!) {
    codeVerification(type: $type code: $code)
}
`;


export const IDENTITY_VERIFICATION = gql`
mutation IdentityVerification($type: String! $number: String!) {
    userIdentityVerification(type: $type number: $number)
}
`;

export const UPLOAD_BILL = gql`
mutation UploadUtilityBill($image: String!) {
    uploadUtilityBill(image: $image)
}
`;

// Loan Application
// personal Form---------------
export const LOAN_APPLICATION = gql`
mutation  LoanApplication(
    $firstname: String!
    $lastname: String! 
    $email: String! 
    $address:string!
    $number: String!
    $date: string!
    $lga: string!
    $city: string!
    $nationality: string!
    ) {
    loanApplication(
        firstname: $firstname
        lastname: $lastname 
        email: $email  
        address: $string
        number: $number
        dateofbirth: $string
        lga: $string
        address:$string
        state: $string
        nationality: $string
        
        )
}

`
// Guarantor's Form

