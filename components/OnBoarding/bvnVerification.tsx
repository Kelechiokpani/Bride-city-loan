import { useMutation } from "@apollo/client"
import { yupResolver } from "@hookform/resolvers/yup"
import Router from "next/router"
import { FC } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { IDENTITY_VERIFICATION } from "../../graphql/mutations"
import { GET_VERIFICATION_STATUS } from "../../graphql/queries"
import { identityVerificationValidation } from "../../validations"
import { VerificationComponentPropTypes } from "./wrapper"


interface UserSubmitForm {
    number: string;

}

const BvnVerification: FC<VerificationComponentPropTypes> = ({onVerificationComplete}: VerificationComponentPropTypes) => {
    const [verifyBvn, { loading }] = useMutation(IDENTITY_VERIFICATION, {

    })


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserSubmitForm>({
        resolver: yupResolver(identityVerificationValidation)
    });

    const onSubmit = (data: UserSubmitForm) => {
       verifyBvn({
            variables: {
                type: 'BVN',
                number: parseInt(data.number),
            }
        }).then(_ => {
            toast.success('Bvn Verification complete');
            Router.push('/account/setup')
        }).catch(err => {
            toast.error(err.message)
        })

    };
    return (
        <div className={'col-lg-10'}>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <div className="form-label-group">
                                <label className="form-label"
                                    htmlFor="default-01">Bank verification Number </label>
                            </div>
                            <div className="form-control-wrap">
                                <input type="text"
                                    {...register('number')}
                                    className={`form-control form-control-lg ${errors.number ? 'is-invalid' : ''}`}
                                    id="number"

                                    placeholder="Enter a Valid Bvn "
                                />
                                <div className="invalid-feedback">{errors.number?.message}</div>

                            </div>
                        </div>
                        <div className="form-group">

                            <button className="btn btn-lg btn-primary btn-block" disabled={loading}>
                                Verify BVN
                            </button>

                        </div>
                    </form>
                </div>
    )
}

export default BvnVerification