
import { NextPage } from "next";
import React, { useState } from 'react';
import { NextRouter, useRouter } from "next/router";
import Link from "next/link";
import DashboardLayout from "../../components/Layouts/dashboard";
import Select from 'react-select'
import AsyncSelect from 'react-select/async';



const LoanCategory: NextPage = () => {

    const loancategory = [
        { value: 'loan', label: 'GOLD' },
        { value: 'loan', label: 'SILVER' },
        { value: 'loan', label: 'BRONZE' },
        { value: 'loan', label: 'LIQUIDITY' }
    ]
    const loanreason = [
        { value: 'reason', label: 'Starting a new Business' },
        { value: 'reason', label: 'Expanding your Current Business' },
        { value: 'reason', label: 'Construction' },
        { value: 'reason', label: 'Buying An Existing Business' },
        { value: 'reason', label: 'clear Business Debt' },
        { value: 'reason', label: 'Buy Real Estate' },
        { value: 'reason', label: 'Buy a House' },
        { value: 'reason', label: 'other' },
    ]
    const loanBusinessType = [
        { value: 'business', label: 'Private Limited Company' },
        { value: 'business', label: 'co-operative' },
        { value: 'business', label: 'Partnership' },
        { value: 'business', label: 'Public listed Company' },
        { value: 'business', label: 'Sole Proprietorship' },
        { value: 'business', label: 'Others' }


    ]

    const router: NextRouter = useRouter()

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

                            <form action="">

                                <div className="nk-block">
                                    <div className="card card-bordered">
                                        <div className="nk-kycfm">
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
                                                        <div className="form-group">
                                                            <div className="form-label-group">
                                                                <label className="form-label"> Loan Stack <span
                                                                    className="text-danger">*</span></label>
                                                            </div>
                                                            <div className="form-control-group">
                                                                {/* <input type="text"
                                                                    className="form-control form-control-lg" /> */}
                                                                <Select options={loancategory} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <div className="form-label-group">
                                                                <label className="form-label">Reason For Applying  <span
                                                                    className="text-danger">*</span></label>
                                                            </div>
                                                            <div className="form-control-group">
                                                                <Select options={loanreason} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <div className="form-label-group">
                                                                <label className="form-label">Business Type<span
                                                                    className="text-danger">*</span></label>
                                                            </div>
                                                            <div className="form-control-group">
                                                                <Select options={loanBusinessType} />

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <div className="form-label-group">
                                                                <label className="form-label">Funding you require<span
                                                                    className="text-danger">*</span></label>
                                                            </div>
                                                            <div className="form-control-group">
                                                                <input type="text"
                                                                    className="form-control form-control-lg" />
                                                            </div>
                                                        </div>
                                                    </div>



                                                </div>

                                            </div>



                                            <button className="btn btn-lg   ">
                                                <Link href='/'>
                                                    Next
                                                </Link>
                                            </button>
                                        </div>

                                    </div>

                                </div>

                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default LoanCategory
