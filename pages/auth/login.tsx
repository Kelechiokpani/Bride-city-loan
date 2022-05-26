import React from "react";
import { NextPage } from "next";
import AuthLayout from "../../components/Layouts/auth";
import Link from "next/link";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidation } from "../../validations";
import { useLazyQuery, useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../graphql/mutations";
import Router from "next/router";
import { GET_CURRENT_USER } from "../../graphql/queries";
import { User } from "../../graphql/types";
import { getCookie, setCookies } from "cookies-next";


interface UserSubmitForm {
    email: string;
    password: string;

}

const LoginPage: NextPage = () => {

    const [getCurrentUser] = useLazyQuery(GET_CURRENT_USER);

    const [loginUser, { loading }] = useMutation(LOGIN_USER)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserSubmitForm>({
        resolver: yupResolver(loginValidation)
    });

    const onSubmit = async (data: UserSubmitForm) => {

       await loginUser({
            variables: {
                email: data.email,
                password: data.password,
            }
        }).then(({data: {loginUser}}) => {
            if(loginUser === 'login completed') {

                // get current user
                getCurrentUser().then(({data: {getCurrentUser}}) =>  {
                    setCookies('x-user', getCurrentUser);

                }) .finally(() => Router.push('/'));
            }
        });
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
                            <button className="btn btn-lg btn-primary btn-block" disabled={loading}>Login</button>
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

export default LoginPage
