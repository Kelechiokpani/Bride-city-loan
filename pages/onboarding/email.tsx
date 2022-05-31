import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import AuthLayout from "../../components/Layouts/auth";
import OnBoardingWrapper from "../../components/OnBoarding/wrapper";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'
import { useState } from "react";
import { codeVerificationValidatoion } from "../../validations";
import { useLazyQuery, useMutation } from "@apollo/client";
import { CODE_VERIFICATION } from "../../graphql/mutations";
import { GET_CURRENT_USER } from "../../graphql/queries";
import { setCookies } from "cookies-next";


const EmailOnBoarding: NextPage = () => {

    const router: NextRouter = useRouter()

    const [verifyEmail, { loading }] = useMutation(CODE_VERIFICATION)
    const [getCurrentUser] = useLazyQuery(GET_CURRENT_USER);

    interface UserSubmitForm {
        code: string;
    };



    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<UserSubmitForm>({
        resolver: yupResolver(codeVerificationValidatoion)
    });

    const onSubmit = (data: UserSubmitForm) => {
        verifyEmail({
            variables: {
                type: 'Email',
                code: data.code,
            }
        }).then(({data: {codeVerification}}) => {
            if(codeVerification === 'success') {

                // get current user
                getCurrentUser().then(({data: {getCurrentUser}}) =>  {
                    setCookies('x-user', getCurrentUser);
                }) .finally(() => router.push('/'));
            }

        })
    };

    return (
        <AuthLayout wide={true}>
            <OnBoardingWrapper currentStep={'email'}>
                <div className={'col-lg-10'}>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <div className="form-control-wrap">
                                <input type="text"
                                    {...register('code')}
                                    className={`form-control form-control-lg ${errors.code ? 'is-invalid' : ''}`}
                                    id="code"
                                    placeholder="Enter email verification code"
                                />
                                <div className="invalid-feedback">{errors.code?.message}</div>
                            </div>
                        </div>
                        <div className="form-group">

                            <button className="btn btn-lg btn-primary btn-block" disabled={loading}>
                                Verify Email
                            </button>

                        </div>
                    </form>
                </div>
            </OnBoardingWrapper>

        </AuthLayout>
    )
}

export default EmailOnBoarding
