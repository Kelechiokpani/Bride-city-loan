import * as Yup from 'yup';

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

