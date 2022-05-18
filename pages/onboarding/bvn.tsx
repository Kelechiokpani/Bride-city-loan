import { NextPage } from "next";
import AuthLayout from "../../components/Layouts/auth";
import OnBoardingWrapper from "../../components/OnBoarding/wrapper";
import Link from "next/link";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';



interface UserSubmitForm {
    phone: string;

}
const BvnOnBoarding: NextPage = () => {

    const validationSchema = Yup.object().shape({

        phone: Yup.number()
            .typeError("That doesn't look like a Valid BVN number")
            .positive("A valid Bvn can't start with a minus")
            .integer("A valid Bvn can't include a decimal point")
            .min(10)
            //   .max(12)
            .required('A valid bank verification number is required'),

    })
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

        window.location.href = "/onboarding/nin";

    };

    return (
        <AuthLayout wide={true}>
            <OnBoardingWrapper currentStep={'kyc'}>
                <div className={'col-lg-10'}>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <div className="form-label-group">
                                <label className="form-label"
                                    htmlFor="default-01">Bank verification Number </label>
                            </div>
                            <div className="form-control-wrap">
                                <input type="text"
                                    {...register('phone')}
                                    className={`form-control form-control-lg ${errors.phone ? 'is-invalid' : ''}`}
                                    id="phone"
                                    placeholder="Enter a Valid Bvn "
                                />
                                <div className="invalid-feedback">{errors.phone?.message}</div>

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
