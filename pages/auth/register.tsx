import React from "react";
import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import AuthLayout from "../../components/Layouts/auth";
import Link from "next/link";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { newUserValidation } from "../../validations";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../graphql/mutations";
import { NewUserInput } from "../../graphql/types";



interface UserSubmitForm {
    email: string;
    phone: string;
    password: string;
    acceptTerms: boolean;

}


const RegisterPage: NextPage = () => {

    const router = useRouter()

    const [createUser, { loading }] = useMutation<{
        data: NewUserInput
    }>(ADD_USER)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserSubmitForm>({
        resolver: yupResolver(newUserValidation)
    });

    const onSubmit = async (data: UserSubmitForm) => {

        let input: NewUserInput = {
            email: data.email,
            phone: data.phone,
            password: data.password,
        }
        createUser({
            variables: {
                input
            }
        }).then(({data}) => {

            // use toast alert

            router.push('/onboarding/email')

        });
    }

        return (
            <AuthLayout>
                <div className="card card-bordered">
                    <div className="card-inner card-inner-lg">
                        <div className="nk-block-head">
                            <div className="nk-block-head-content">
                                <h4 className="nk-block-title">Register</h4>
                                <div className="nk-block-des">
                                    <p>Create New Bride City Loan Account</p>
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
                                <label className="form-label" htmlFor="phone">Phone Number</label>
                                <div className="form-control-wrap">
                                    <input type="text"
                                        {...register('phone')}
                                        className={`form-control form-control-lg ${errors.phone ? 'is-invalid' : ''}`}
                                        id="phone"
                                        placeholder="Enter Phone Number"
                                    />
                                    <div className="invalid-feedback">{errors.phone?.message}</div>

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
                                <div className="custom-control custom-control-xs custom-checkbox">
                                    <input type="checkbox"
                                        {...register('acceptTerms')}
                                        className={`custom-control-input ${errors.acceptTerms ? 'is-invalid' : ''
                                            }`} id="checkbox" />
                                    <label className="custom-control-label" htmlFor="checkbox">
                                        I agree to Bride City <a href="#">Privacy Policy</a> &amp;<a href="#"> Terms.</a>
                                    </label>
                                    <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
                                </div>
                            </div>
                            <div className="form-group">

                                <button className="btn btn-lg btn-primary btn-block" disabled={loading}>Register</button>

                            </div>
                        </form>
                        <div className="form-note-s2 text-center pt-4"> Already have an account?
                            <Link href="/auth/login">
                                <a><strong>Sign in instead</strong></a>
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
