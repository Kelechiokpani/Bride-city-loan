import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import AuthChecker from "../../components/authChecker";
import AuthLayout from "../../components/Layouts/auth";
import { CREATE_PROFILE } from "../../graphql/mutations";
import { accountSetupFormValidation } from "../../validations";

interface AccountSetupSubmitForm {
    firstName: string;
    lastName: string;
    street: string;
    city: string;
    state: string;

}

const AccountSetup: NextPage = () => {
   const router = useRouter()

   const [createProfile, { loading }] = useMutation(CREATE_PROFILE);

       const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<AccountSetupSubmitForm>({
        resolver: yupResolver(accountSetupFormValidation)
    });

    const sub = () => {
        console.log('submitted')
    }

    const onSubmit = (data: AccountSetupSubmitForm) => {
        createProfile({
            variables: {
                data: {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    address: {
                        street: data.street,
                        state: data.state,
                        city: data.city
                    }
                }
            }
        }).then(({data}) =>{
            toast.success('Profile setup complete');
            router.push('/')
        }).catch(error => {
            toast.error(error.message);
        })
        return false
    };


   return (
       <AuthChecker>
            <AuthLayout wide={true}>
           <div className="nk-content nk-content-fluid">
                <div className="container-xl wide-lg">
                    <div className="nk-content-body">
                        <div className="kyc-app wide-sm m-auto">
                            <div className="nk-block-head nk-block-head-lg wide-xs mx-auto">
                                <div className="nk-block-head-content text-center">
                                    <h2 className="nk-block-title fw-normal">Account Setup</h2>
                                    <div className="nk-block-des">
                                        <p>Complete the information below to finish registeration</p>
                                    </div>
                                </div>
                            </div>

                            <div className="nk-block">
                                <div className="card card-bordered">
                                    <div className="nk-kycfm">
                                        <form action="" onSubmit={handleSubmit(onSubmit)}>

                                            <div className="nk-kycfm-head">
                                                <div className="nk-kycfm-count">01</div>
                                                <div className="nk-kycfm-title">
                                                    <h5 className="title">Personal Details</h5>
                                                    <p className="sub-title">Your simple personal information required for
                                                        identification</p>
                                                </div>
                                            </div>

                                            <div className="nk-kycfm-content">
                                                <div className="nk-kycfm-note">
                                                    <em className="icon ni ni-info-fill" data-bs-toggle="tooltip"
                                                        data-bs-placement="right" title="Tooltip on right"></em>
                                                    <p>Please type carefully and fill out the form with your personal
                                                        details.
                                                        Your can’t edit these details once you submitted the form.</p>
                                                </div>

                                                <div className="row g-4">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <div className="form-label-group">
                                                                <label className="form-label">First Name <span
                                                                    className="text-danger">*</span></label>
                                                            </div>
                                                            <div className="form-control-group">
                                                                <input type="text"
                                                                    {...register('firstName')}
                                                                    className={`form-control form-control-lg ${errors.firstName ? 'is-invalid' : ''}`} />
                                                                <div className="invalid-feedback">{errors.firstName?.message}</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <div className="form-label-group">
                                                                <label className="form-label">Last Name <span
                                                                    className="text-danger">*</span></label>
                                                            </div>
                                                            <div className="form-control-group">
                                                                <input type="text"
                                                                    {...register('lastName')}
                                                                    className={`form-control form-control-lg ${errors.lastName ? 'is-invalid' : ''}`} />
                                                                <div className="invalid-feedback">{errors.lastName?.message}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="nk-kycfm-head">
                                                <div className="nk-kycfm-count">02</div>
                                                <div className="nk-kycfm-title">
                                                    <h5 className="title">Your street</h5>
                                                    <p className="sub-title">Your simple personal information required for
                                                        identification</p>
                                                </div>
                                            </div>

                                            <div className="nk-kycfm-content">
                                                <div className="nk-kycfm-note">
                                                    <em className="icon ni ni-info-fill" data-bs-toggle="tooltip"
                                                        data-bs-placement="right" title="Tooltip on right"></em>
                                                    <p>Your can’t edit these details once you submitted the form.</p>
                                                </div>
                                                <div className="row g-4">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <div className="form-label-group">
                                                                <label className="form-label">Full street <span
                                                                    className="text-danger">*</span></label>
                                                            </div>
                                                            <div className="form-control-group">
                                                                <input type="text"
                                                                    {...register('street')}
                                                                    className={`form-control form-control-lg ${errors.street ? 'is-invalid' : ''}`} />
                                                                <div className="invalid-feedback">{errors.street?.message}</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <div className="form-label-group">
                                                                <label className="form-label">City <span
                                                                    className="text-danger">*</span></label>
                                                            </div>
                                                            <div className="form-control-group">
                                                                <input type="text"
                                                                    {...register('city')}
                                                                    className={`form-control form-control-lg ${errors.city ? 'is-invalid' : ''}`} />
                                                                <div className="invalid-feedback">{errors.city?.message}</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <div className="form-label-group">
                                                                <label className="form-label">State <span
                                                                    className="text-danger">*</span></label>
                                                            </div>
                                                            <div className="form-control-group">
                                                                <input type="text"
                                                                    {...register('state')}
                                                                    className={`form-control form-control-lg ${errors.state ? 'is-invalid' : ''}`} />
                                                                <div className="invalid-feedback">{errors.state?.message}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="form-group">
                                                <button className="m-4 btn btn-primary btn-lg" disabled={loading}>
                                                Complete Profile Setup
                                            </button>
                                            </div>
                                        </form>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
    </AuthLayout>
       </AuthChecker>
   )
}

export default AccountSetup