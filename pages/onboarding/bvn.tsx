import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import AuthLayout from "../../components/Layouts/auth";
import OnBoardingWrapper from "../../components/OnBoarding/wrapper";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useMutation } from "@apollo/client";
import { IDENTITY_VERIFICATION } from "../../graphql/mutations";
import { identityVerificationValidation } from "../../validations";



interface UserSubmitForm {
    number: string;

}
const BvnOnBoarding: NextPage = () => {
    const router: NextRouter = useRouter()
    const [verifyBvn, { loading }] = useMutation<{
        type: string,
        code: string,
    }>(IDENTITY_VERIFICATION)


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
                code: data.number,
            }
        }).then(({data}) => {
            router.push('/onboarding/kyc');
        })

    };

    return (
        <AuthLayout wide={true}>
            <OnBoardingWrapper currentStep={'bvn'}>
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

                            <button className="btn btn-lg btn-primary btn-block">Verify BVN
                            </button>

                        </div>
                    </form>
                </div>
            </OnBoardingWrapper>

        </AuthLayout>
    )
}

export default BvnOnBoarding
