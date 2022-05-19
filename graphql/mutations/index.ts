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