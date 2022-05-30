import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import Link from "next/link";
import DashboardLayout from "../../components/Layouts/dashboard";
import withKycEnabled from "../../utils/kycChecker";
import { useState } from "react";
import DatePicker from "react-date-picker";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loanApplicationForm } from "../../validations/index";
import { date } from "yup";




interface UserSubmitForm {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    date: string;
    lga: string;
    address: string;
    city: string;
    state: string;
    nationality: string;
    zipcode: string;

}

const LoanApplication: NextPage = () => {
    const router: NextRouter = useRouter()
    // const [startDate, setStartDate] = useState(new Date());


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<UserSubmitForm>({
        resolver: yupResolver(loanApplicationForm)
    });

    const onSubmit = (data: UserSubmitForm) => {
        console.log(JSON.stringify(data, null, 2));
        router.push('/loans/guarantor')
    };




    return (
        <DashboardLayout>
            <div className="nk-content nk-content-fluid">
                <div className="container-xl wide-lg">
                    <div className="nk-content-body">
                        <div className="kyc-app wide-sm m-auto">
                            <div className="nk-block-head nk-block-head-lg wide-xs mx-auto">
                                <div className="nk-block-head-content text-center">
                                    <h2 className="nk-block-title fw-normal">Loan Application</h2>
                                    <div className="nk-block-des">
                                        <p>Complete the informationBelow for verification</p>
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
                                                                    {...register('firstname')}
                                                                    className={`form-control form-control-lg ${errors.firstname ? 'is-invalid' : ''}`} />
                                                                <div className="invalid-feedback">{errors.firstname?.message}</div>
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
                                                                    {...register('lastname')}
                                                                    className={`form-control form-control-lg ${errors.lastname ? 'is-invalid' : ''}`} />
                                                                <div className="invalid-feedback">{errors.lastname?.message}</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <div className="form-label-group">
                                                                <label className="form-label">Email Address <span
                                                                    className="text-danger">*</span></label>
                                                            </div>
                                                            <div className="form-control-group">
                                                                <input type="text"
                                                                    {...register('email')}
                                                                    className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`} />
                                                                <div className="invalid-feedback">{errors.email?.message}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <div className="form-label-group">
                                                                <label className="form-label">Phone Number <span
                                                                    className="text-danger">*</span></label>
                                                            </div>
                                                            <div className="form-control-group">
                                                                <input type="text"
                                                                    {...register('phone')}
                                                                    className={`form-control form-control-lg ${errors.phone ? 'is-invalid' : ''}`} />
                                                                <div className="invalid-feedback">{errors.phone?.message}</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <div className="form-label-group">
                                                                <label className="form-label">Loan Application Date <span
                                                                    className="text-danger">*</span></label>
                                                            </div>
                                                            <div className="form-control-group">
                                                                <input type="text"
                                                                    className="form-control form-control-lg date-picker-alt" />
                                                                {/* <DatePicker
                                                                    selected={startDate}
                                                                    onChange={(date) => setStartDate(date)}

                                                                /> */}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <div className="form-label-group">
                                                                <label className="form-label">L G A<span
                                                                    className="text-danger">*</span></label>
                                                            </div>
                                                            <div className="form-control-group">
                                                                <input type="text"
                                                                    {...register('lga')}
                                                                    className={`form-control form-control-lg ${errors.lga ? 'is-invalid' : ''}`} />
                                                                <div className="invalid-feedback">{errors.lga?.message}</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>

                                            <div className="nk-kycfm-head">
                                                <div className="nk-kycfm-count">02</div>
                                                <div className="nk-kycfm-title">
                                                    <h5 className="title">Your Address</h5>
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
                                                                <label className="form-label">Address Line 1 <span
                                                                    className="text-danger">*</span></label>
                                                            </div>
                                                            <div className="form-control-group">
                                                                <input type="text"
                                                                    {...register('address')}
                                                                    className={`form-control form-control-lg ${errors.address ? 'is-invalid' : ''}`} />
                                                                <div className="invalid-feedback">{errors.address?.message}</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <div className="form-label-group">
                                                                <label className="form-label">Address Line 2</label>
                                                            </div>
                                                            <div className="form-control-group">
                                                                <input type="text"
                                                                    {...register('address')}
                                                                    className={`form-control form-control-lg ${errors.address ? 'is-invalid' : ''}`} />
                                                                <div className="invalid-feedback">{errors.address?.message}</div>
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

                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <div className="form-label-group">
                                                                <label className="form-label">Nationality <span
                                                                    className="text-danger">*</span></label>
                                                            </div>
                                                            <div className="form-control-group">
                                                                <input type="text"
                                                                    {...register('nationality')}
                                                                    className={`form-control form-control-lg ${errors.nationality ? 'is-invalid' : ''}`} />
                                                                <div className="invalid-feedback">{errors.nationality?.message}</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <div className="form-label-group">
                                                                <label className="form-label">Zip Code <span
                                                                    className="text-danger">*</span></label>
                                                            </div>
                                                            <div className="form-control-group">
                                                                <input type="text"
                                                                    {...register('zipcode')}
                                                                    className={`form-control form-control-lg ${errors.zipcode ? 'is-invalid' : ''}`} />
                                                                <div className="invalid-feedback">{errors.zipcode?.message}</div>
                                                            </div>
                                                        </div>
                                                    </div>



                                                </div>

                                            </div>
                                            <button className="btn btn-lg   ">
                                                Next
                                            </button>
                                        </form>

                                    </div>
                                    {/* <button className="btn btn-lg btn-primary btn-block" >Nexts</button> */}
                                </div>

                            </div>




                        </div>

                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

// export const getServerSideProps = withKycEnabled((ctx: any) => {
//     return {
//         props: {}
//     };
// });

export default LoanApplication
