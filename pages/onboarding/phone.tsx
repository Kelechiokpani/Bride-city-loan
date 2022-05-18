import { NextPage } from "next";
import AuthLayout from "../../components/Layouts/auth";
import OnBoardingWrapper from "../../components/OnBoarding/wrapper";
import { useRouter } from "next/router";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { codeVerificationValidatoion } from "../../validations";
import { useMutation } from "@apollo/client";
import { CODE_VERIFICATION } from "../../graphql/mutations";



interface UserSubmitForm {
    code: string;

}
const PhoneOnBoarding: NextPage = () => {
    const router = useRouter()
    const [verifyPhone, { loading }] = useMutation<{
        type: string,
        code: string,
    }>(CODE_VERIFICATION)

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
        }).then(({data}) => {
            router.push('/onboarding/phone');
        })

    };

    return (
        <AuthLayout wide={true}>
            <OnBoardingWrapper currentStep={'phone'}>
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
            </OnBoardingWrapper>

        </AuthLayout>
    )
}

export default PhoneOnBoarding
