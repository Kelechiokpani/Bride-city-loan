import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import DashboardLayout from "../../components/Layouts/dashboard";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loanApplicationForm } from "../../validations";
import {useMutation, useQuery} from "@apollo/client";
import { GET_LOAN_CATEGORIES } from "../../graphql/queries";
import {LOAN_APPLICATION} from "../../graphql/mutations";
import {useState} from "react";
import { toast } from "react-toastify";



interface UserSubmitForm {
    loanCategory: string;
    amount: string;
}

const LoanApplication: NextPage = () => {
    const router: NextRouter = useRouter()
    const [loanCategory, setLoanCategory] = useState<any>({})
    const { data } = useQuery(GET_LOAN_CATEGORIES)
    const [applyForLoan, { loading }] = useMutation(LOAN_APPLICATION)


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<UserSubmitForm>({
        resolver: yupResolver(loanApplicationForm)
    });

    const handleLoanCategorySelection = (e: any) => {
        e.preventDefault()
        let selectedCategory = data?.getLoanCategories?.find((category: any) => category.name === e.target.value)

        setLoanCategory(selectedCategory)
        console.log(selectedCategory)
    }

    const onSubmit = (data: UserSubmitForm) => {
        console.log(loanCategory, data.amount)
       applyForLoan({
           variables: {
               category: loanCategory['_id'],
               applicationAmount: parseInt(data.amount)
           }
       }).then(({data}) => {
           if(data?.applyLoan && data.applyLoan === 'application submitted') {
               toast.success("Your loan application has been received and is being processed")
           }
           else {
               toast.error("Error applying for loan")
           }
       })
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
                                                                <label className="form-label">Loan Category <span
                                                                    className="text-danger">*</span></label>
                                                            </div>
                                                            <div className="form-control-group">
                                                                <select

                                                                    defaultValue={'--Select Loan Category--'}
                                                                    {...register('loanCategory')}
                                                                    onChange={handleLoanCategorySelection}
                                                                    className={`form-control form-control-lg  ${errors.loanCategory ? 'is-invalid' : ''}`}
                                                                    // onChange={handleTypeChange}
                                                                 >
                                                                    <option value="--Select Loan Category--">--Select Loan Category--</option>
                                                                    {
                                                                        data && data.getLoanCategories ? (
                                                                            data?.getLoanCategories?.map((category: any, index: number) =>
                                                                                <option value={category?.id} key={index}>{category?.name}</option>)
                                                                        ) : null
                                                                    }
                                                                </select>
                                                                {/* <input type="text"
                                                                    {...register('firstname')}
                                                                    className={`form-control form-control-lg ${errors.firstname ? 'is-invalid' : ''}`} /> */}
                                                                <div className="invalid-feedback">{errors.loanCategory?.message}</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <div className="form-label-group">
                                                                <label className="form-label">Loan Application Amount <span
                                                                    className="text-danger">*</span></label>
                                                            </div>
                                                            <div className="form-control-group">
                                                                <input
                                                                    {...register('amount', {max: loanCategory['amount']})}
                                                                    type="text"
                                                                    className="form-control form-control-lg date-picker-alt" />
                                                                {/* <DatePicker
                                                                    selected={startDate}
                                                                    onChange={(date) => setStartDate(date)}

                                                                /> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group m-4">
                                                    <button type={'submit'} className="btn btn-primary btn-lg" disabled={loading}>
                                                        Send Application
                                                    </button>
                                                </div>
                                            </div>
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


export default LoanApplication
