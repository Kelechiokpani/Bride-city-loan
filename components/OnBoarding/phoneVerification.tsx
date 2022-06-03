import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { CODE_VERIFICATION } from "../../graphql/mutations";
import { GET_VERIFICATION_STATUS } from "../../graphql/queries";
import { codeVerificationValidatoion } from "../../validations";
import { VerificationComponentPropTypes } from "./wrapper";


interface UserSubmitForm {
    code: string;

}

const PhoneVerification:FC<VerificationComponentPropTypes> = ({onVerificationComplete}: VerificationComponentPropTypes) => {
    const [verifyPhone, { loading }] = useMutation(CODE_VERIFICATION, {
        refetchQueries: [
            {
                query: GET_VERIFICATION_STATUS
            }
        ]
    })

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<UserSubmitForm>({
        resolver: yupResolver(codeVerificationValidatoion)
    });

    const onSubmit = (data: UserSubmitForm) => {
         verifyPhone({
            variables: {
                type: 'Phone',
                code: data.code,
            }
        }).then(({data: {codeVerification}}) => {
            if(codeVerification === 'success') {
                toast.success('Phone verification complete')
               onVerificationComplete('Phone')
            }
        }).catch(err => {
            toast.error(err.message)
        })

    };

    return (
        <div className={'col-lg-10'}>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <div className="form-label-group">
                            </div>
                            <div className="form-control-wrap">
                                <input type="text"
                                    {...register('code')}
                                    className={`form-control form-control-lg ${errors.code ? 'is-invalid' : ''}`}
                                    id="code"
                                    placeholder="Enter phone verification code"
                                />
                                <div className="invalid-feedback">{errors.code?.message}</div>

                            </div>
                        </div>
                        <div className="form-group">

                            <button className="btn btn-lg btn-primary btn-block" disabled={loading}>
                                Verify Phone Number
                            </button>

                        </div>
                    </form>
                </div>
    )
}

export default PhoneVerification;