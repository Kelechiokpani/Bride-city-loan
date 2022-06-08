import * as Yup from 'yup';
import * as moment from 'moment';






export const newUserValidation = Yup.object().shape({
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),

    phone: Yup.string()
        .typeError("That doesn't look like a phone number")
        .min(11)
        //   .max(12)
        .required('A phone number is required'),

    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(12, 'Password must not exceed 12 characters'),

    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
});



export const loginValidation = Yup.object().shape({
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),


    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(12, 'Password must not exceed 12 characters'),

});


export const codeVerificationValidatoion = Yup.object().shape({
    code: Yup.string()
        .required('Email is required')

});

export const identityVerificationValidation = Yup.object().shape({

    number: Yup.number()
        .typeError("That doesn't look like a Valid BVN number")
        .positive("A valid Bvn can't start with a minus")
        .integer("A valid Bvn can't include a decimal point")
        .min(10)
        //   .max(12)
        .required('A valid bank verification number is required'),

})

// Account Setup Form

export const accountSetupFormValidation = Yup.object().shape({
    firstName: Yup.string()
        .required('FirstName is required'),
    lastName: Yup.string()
        .required('LastName is required'),
    street: Yup.string()
        .required('Street is required'),
    city: Yup.string()
        .required('City  is required'),
    state: Yup.string()
        .required('State of Residence  is required'),
});



// Loan Application
export const loanApplicationForm = Yup.object().shape({


    firstname: Yup.string()
        .required('FirstName is required'),
    lastname: Yup.string()
        .required('LastName is required'),
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    phone: Yup.number()
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .min(11)
        .required('A phone number is required'),

    dateOfBirth: Yup.date().max(new Date(), "Are you a time traveler?!"),


    occupation: Yup.string()
        .required('This Field  is required'),
    relationshipstatus: Yup.string()
        .required('State your Relation With this person'),
    lga: Yup.string()
        .required('Local Govt, Area  is required'),
    address: Yup.string()
        .required('Local Govt, Area  is required'),
    city: Yup.string()
        .required('City  is required'),
    state: Yup.string()
        .required('State of Residence  is required'),
    nationality: Yup.string()
        .required('Nationality  is required'),
    zipcode: Yup.string()
        .required()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(5, 'Must be exactly 5 digits')
        .max(5, 'Must be exactly 5 digits'),


    selectpackage: Yup.string()
        .required("status is required (from label)"),
    selectrequirement: Yup.string()
        .required("status is required (from label)"),
    selectamount: Yup.string()
        .required("status is required (from label)"),
    selectpayback: Yup.string()
        .required("status is required (from label)"),

    // value: Yup.string().required("status is required")
    // .nullable() // for handling null value when clearing options via clicking "x"
    // .required("status is required (from outter null check)")

})

export const  AdminEditmodal =Yup.object().shape({
    approvalamount: Yup.number()
    .positive("Approval amount can't start with a minus")
    .integer("Approval Amount can't include a decimal point")
    .required('Approval Amount number is required'),

    // approvalstatus: Yup.string()
    // .required('Approval status is required'),
    selectapprovalstatus: Yup.string()
    .required(" Approval status is required (from label)"),
    
    paybackstatus: Yup.string()
    .required('PayBack status is required'),

    date: Yup.string()
    .required('Loan Expiration Date is required'),
})
