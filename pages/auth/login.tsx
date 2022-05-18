import React, { useState } from "react";
import { NextPage } from "next";
import AuthLayout from "../../components/Layouts/auth";
import Link from "next/link";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
// import { useState } from "react";


interface UserSubmitForm {
    email: string;
    password: string;

}

const RegisterPage: NextPage = () => {
    const [values, setValues] = useState({
        email: "",
        password: ""
    })


    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),


        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(12, 'Password must not exceed 12 characters'),

    });

    const {
        register,
        handleSubmit,
        getValues,
        reset,
        formState: { errors },
    } = useForm<UserSubmitForm>({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = (data: UserSubmitForm) => {
        // console.log(JSON.stringify(data, null, 2));

        const values = getValues()
        console.log('values', values)
        console.log(JSON.stringify(data))

        window.location.href = "/onboarding/phone";
    };


    return (
        <AuthLayout>
            <div className="card card-bordered">
                <div className="card-inner card-inner-lg">
                    <div className="nk-block-head">
                        <div className="nk-block-head-content">
                            <h4 className="nk-block-title">Login</h4>
                            <div className="nk-block-des">
                                <p>Login  Bride City Loan Account</p>
                            </div>
                        </div>
                    </div>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="email">Email Address</label>
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
                            <div className="form-label-group">

                                <Link href="/auth/reset">
                                    <a className="link link-primary link-sm" >Forgot Code?</a>
                                </Link>
                            </div>
                        </div>


                        <div className="form-group">
                            <label className="form-label" htmlFor="password">Password</label>
                            <div className="form-control-wrap">
                                <a href="#" className="form-icon form-icon-right passcode-switch lg"
                                    data-target="password">
                                    <em className="passcode-icon icon-show icon ni ni-eye"></em>
                                    <em className="passcode-icon icon-hide icon ni ni-eye-off"></em>
                                </a>
                                <input type="password"
                                    {...register('password')}
                                    className={`form-control form-control-lg ${errors.password ? 'is-invalid' : ''}`}
                                    id="password"
                                    placeholder="*********"
                                />
                                <div className="invalid-feedback">{errors.password?.message}</div>
                            </div>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-lg btn-primary btn-block">Login</button>
                        </div>
                    </form>
                    <div className="form-note-s2 text-center pt-4"> Already have an account?
                        <Link href="/auth/register">
                            <a><strong>Sign Up instead</strong></a>
                        </Link>
                    </div>
                    <div className="text-center pt-4 pb-3">
                        <h6 className="overline-title overline-title-sap"><span>OR</span></h6>
                    </div>
                    <ul className="nav justify-center gx-8">
                        <li className="nav-item"><a className="nav-link" href="#">Facebook</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Google</a></li>
                    </ul>
                </div>
            </div>
        </AuthLayout>
    )
}

export default RegisterPage
