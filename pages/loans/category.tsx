import { NextPage } from "next";
import React, { useState } from 'react';
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";

import DashboardLayout from "../../components/Layouts/dashboard";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import AsyncSelect from 'react-select/async';
import withKycEnabled from "../../utils/kycChecker";
import { stringify } from "querystring";
import { loanApplicationForm } from "../../validations/index";


interface UserSubmitForm {
    selectpackage: string;
    selectrequirement: string;
    selectamount: string;
    selectpayback: string;
}


const LoanCategory: NextPage = () => {
    const [input, setInput] = useState("");

    const router: NextRouter = useRouter()


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<UserSubmitForm>({
        resolver: yupResolver(loanApplicationForm)
    });

    const onSubmit = (data: UserSubmitForm) => {
        // console.log(JSON.stringify(data, null, 2));
        // console.log(JSON.stringify(data))
        console.log(input)
        router.push('/loans/guarantor')
    };

    const [packagetype, setPackageType] = useState([''])
    const [requirmenttype, setRequirmentType] = useState('')
    const [amounttype, setAmountType] = useState('')
    const [paymenttype, setPaymentType] = useState('')



    const handleTypeChange = (e: any) => {
        // console.clear()
        console.log(JSON.stringify(e.target.value))
        setPackageType((e).target.value)
        setRequirmentType((e).target.value);
        setAmountType((e).target.value);
        setPaymentType((e).target.value);

    }






    return (
        <DashboardLayout>
            <div className="nk-content nk-content-fluid">
                <div className="container-xl wide-lg">
                    <div className="nk-content-body">
                        <div className="kyc-app wide-sm m-auto">
                            <div className="nk-block-head nk-block-head-lg wide-xs mx-auto">
                                <div className="nk-block-head-content text-center">
                                    <h2 className="nk-block-title fw-normal">Loan Application </h2>
                                    <div className="nk-block-des">
                                        <p>Complete the informationBelow for verification</p>
                                    </div>
                                </div>
                            </div>



                            <div className="nk-block">

                                <div className="card card-bordered">
                                    <div className="nk-kycfm">

                                        <form action="" onSubmit={handleSubmit(onSubmit)} >
                                            <div className="nk-kycfm-head">
                                                <div className="nk-kycfm-count">05</div>
                                                <div className="nk-kycfm-title">
                                                    <h5 className="title">Loan Category </h5>
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
                                                        <div className="form-group ">
                                                            <div className="form-label-group">
                                                                <label className="form-label"  > Loan Stack <span
                                                                    className="text-danger">*</span></label>
                                                            </div>
                                                            <div className="form-control-group">

                                                                <select

                                                                    defaultValue={packagetype}
                                                                    {...register('selectpackage')}
                                                                    className={`form-control form-control-lg  ${errors.selectpackage ? 'is-invalid' : ''}`}
                                                                    // value={input}
                                                                    // onChange={(e) => setInput(e.target.value)}
                                                                    onChange={handleTypeChange}
                                                                // className="browser-default custom-select bg-select"

                                                                >
                                                                    <option selected></option>
                                                                    <option value="Gold">Gold</option>
                                                                    <option value="Bronze">Bronze</option>
                                                                    <option value="Silver">Silver</option>
                                                                    <option value="Basic">Basic</option>

                                                                </select>
                                                                <div className="invalid-feedback">{errors.selectpackage?.message}</div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <div className="form-label-group">
                                                                <label className="form-label">Loan Amount<span
                                                                    className="text-danger">*</span></label>
                                                            </div>
                                                            <div className="form-control-group">
                                                                <select
                                                                    {...register('selectrequirement')}
                                                                    defaultValue={amounttype}
                                                                    onChange={handleTypeChange}
                                                                    className={`form-control form-control-lg ${errors.selectrequirement ? 'is-invalid' : ''}`}>

                                                                    <option selected></option>
                                                                    <option value="100,000" >100,000</option>
                                                                    <option value="200,000">200,000</option>
                                                                    <option value="300,000">300,000</option>
                                                                    <option value="400,000">400,000</option>
                                                                    <option value="500,000">500,000</option>
                                                                    <option value="600,000">600,000</option>
                                                                    <option value="700,000">700,000</option>
                                                                    <option value="800,000">800,000</option>
                                                                    <option value="900,000">900,000</option>
                                                                </select>
                                                                <div className="invalid-feedback">{errors.selectrequirement?.message}</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <div className="form-label-group">
                                                                <label className="form-label">Loan Requirement<span
                                                                    className="text-danger">*</span></label>
                                                            </div>
                                                            <div className="form-control-group">
                                                                <select
                                                                    {...register('selectamount')}
                                                                    defaultValue={requirmenttype}
                                                                    onChange={handleTypeChange}
                                                                    className={`form-control form-control-lg ${errors.selectamount ? 'is-invalid' : ''}`}>
                                                                    <option selected></option>
                                                                    <option value="statement">Statement of Account</option>
                                                                    <option value="guarantor">Guarantor</option>
                                                                    <option value="coleteral">Coleteral</option>
                                                                </select>
                                                                <div className="invalid-feedback">{errors.selectamount?.message}</div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <div className="form-label-group">
                                                                <label className="form-label">Loan Payment Period<span
                                                                    className="text-danger">*</span></label>
                                                            </div>
                                                            <div className="form-control-group">
                                                                <select
                                                                    {...register('selectpayback')}
                                                                    defaultValue={paymenttype}
                                                                    onChange={handleTypeChange}
                                                                    className={`form-control form-control-lg ${errors.selectpayback ? 'is-invalid' : ''}`}>

                                                                    <option selected></option>
                                                                    <option value="1 Weeks" >1 Weeks</option>
                                                                    <option value="2 Weeks" >2 Weeks</option>
                                                                    <option value="1 Month">1 Month</option>
                                                                    <option value="2 Months">2 Months</option>
                                                                    <option value="4 Months">4 Months</option>
                                                                    <option value="6 Months">6 Months</option>

                                                                </select>
                                                                <div className="invalid-feedback">{errors.selectpayback?.message}</div>
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

                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div >
        </DashboardLayout >
    )
}


export default LoanCategory
