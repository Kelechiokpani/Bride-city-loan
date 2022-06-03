import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { NextRouter, useRouter } from "next/router";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { CODE_VERIFICATION } from "../../graphql/mutations";
import { GET_VERIFICATION_STATUS } from "../../graphql/queries";
import { codeVerificationValidatoion } from "../../validations";
import { VerificationComponentPropTypes } from "./wrapper";


const EmailVerification: FC<VerificationComponentPropTypes> = ({onVerificationComplete}:VerificationComponentPropTypes) => {
        const router: NextRouter = useRouter()

    const [verifyEmail, { loading }] = useMutation(CODE_VERIFICATION, {
        refetchQueries: [
            {
                query: GET_VERIFICATION_STATUS
            }
        ]
    })

    interface UserSubmitForm {
        code: string;
    }


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
                toast.success('Email verification complete')

                 onVerificationComplete('Email')

            }

        }).catch(err => {
            toast.error(err.message)
        })
    };

    return (
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
    )
};

export default EmailVerification;