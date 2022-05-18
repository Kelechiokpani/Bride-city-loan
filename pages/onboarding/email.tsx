import { NextPage } from "next";
import AuthLayout from "../../components/Layouts/auth";
import OnBoardingWrapper from "../../components/OnBoarding/wrapper";
import Link from "next/link";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'
import { useState } from "react";


const EmailOnBoarding: NextPage = () => {

    interface UserSubmitForm {
        email: string;

    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),

    });
    
    const {
        register,
        handleSubmit,
        getValues,
        reset,
        formState: { errors }
    } = useForm<UserSubmitForm>({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = (data: UserSubmitForm) => {
        // console.log(JSON.stringify(data, null, 2));

        const values = getValues()
        console.log('values', values)
        console.log(JSON.stringify(data))


        window.location.href = "/onboarding/bvn";
    };

    return (
        <AuthLayout wide={true}>
            <OnBoardingWrapper currentStep={'kyc'}>
                <div className={'col-lg-10'}>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <div className="form-label-group">
                                <label className="form-label"
                                    htmlFor="default-01">Email Verification Code</label>
                            </div>
                            <div className="form-control-wrap">
                                <input type="text"
                                    {...register('email')}
                                    className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
                                    id="email"
                                    placeholder="email@example.com"
                                />
                                <div className="invalid-feedback">{errors.email?.message}</div>
                            </div>
                        </div>
                        <div className="form-group">

                            <button className="btn btn-lg btn-primary btn-block">Verify Email
                            </button>

                        </div>
                    </form>
                </div>
            </OnBoardingWrapper>

        </AuthLayout>
    )
}

export default EmailOnBoarding
