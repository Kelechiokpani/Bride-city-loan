import { NextPage } from "next";
import AuthLayout from "../../components/Layouts/auth";
import Link from "next/link";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


interface UserSubmitForm {
    email: string;
}

const ResetPage: NextPage = () => {


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
        formState: { errors },
    } = useForm<UserSubmitForm>({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = (data: UserSubmitForm) => {
        // console.log(JSON.stringify(data, null, 2));

        const values = getValues()
        console.log('values', values)
        console.log(JSON.stringify(data))

        window.location.href = "/onboarding/email";
    };


    return (
        <AuthLayout>
            <div className="card card-bordered">
                <div className="card-inner card-inner-lg">
                    <div className="nk-block-head">
                        <div className="nk-block-head-content">
                            <h5 className="nk-block-title">Reset password</h5>
                            <div className="nk-block-des">
                                <p>If you forgot your password, well, then we’ll email you instructions to reset your
                                    password.</p>
                            </div>
                        </div>
                    </div>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <div className="form-label-group">
                                <label className="form-label" htmlFor="default-01">Email</label>
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
                            <button className="btn btn-lg btn-primary btn-block">Send Reset Link</button>
                        </div>
                    </form>
                    <div className="form-note-s2 text-center pt-4">
                        <Link href="/auth/login">
                            <a className="link link-primary link-sm">
                                <strong>Return to login</strong>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}

export default ResetPage
