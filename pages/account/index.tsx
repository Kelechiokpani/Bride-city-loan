import { NextPage } from "next";
import DashboardLayout from "../../components/Layouts/dashboard";
import Switcher from "../../components/Account/switcher";
import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../../graphql/queries";
import {useEffect, useState} from "react";


const AccountProfile: NextPage = () => {

    const { data, loading } = useQuery(GET_CURRENT_USER)
    const [user, setUser] = useState<any>({})

    useEffect(() => {
        if (data && data?.getCurrentUser) {
            setUser(data?.getCurrentUser)
        }
    }, [data])

    return (
        <DashboardLayout>
            <div className="nk-content nk-content-fluid">
                <div className="container-xl wide-lg">
                    <div className="nk-content-body">
                        <div className="nk-block-head">
                            <div className="nk-block-head-content">
                                <div className="nk-block-head-sub"><span>Account Setting</span></div>
                                <h2 className="nk-block-title fw-normal">My Profile</h2>
                                <div className="nk-block-des">
                                    <p>You have full control to manage your own account setting. <span
                                        className="text-primary"><em className="icon ni ni-info"
                                            data-bs-toggle="tooltip" data-bs-placement="right"
                                            title="Tooltip on right"></em></span></p>
                                </div>
                            </div>
                        </div>

                        <Switcher activeTab={'Personal'} />

                        {
                            loading ? <div>Loading...</div> : (
                                <div className="nk-block">
                            <div className="nk-block-head">
                                <div className="nk-block-head-content">
                                    <h5 className="nk-block-title">Personal Information</h5>
                                    <div className="nk-block-des">
                                        <p>Basic info, like your name and address, that you use on Nio Platform.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="nk-data data-list">
                                <div className="data-head">
                                    <h6 className="overline-title">Basics</h6>
                                </div>
                                <div className="data-item" data-bs-toggle="modal" data-bs-target="#profile-edit">
                                    <div className="data-col">
                                        <span className="data-label">Full Name</span>
                                        <span className="data-value capitalize">{user?.profile?.firstName + ' ' + user?.profile?.lastName}</span>
                                    </div>
                                    <div className="data-col data-col-end"><span className="data-more"><em
                                        className="icon ni ni-forward-ios"></em></span></div>
                                </div>
                                <div className="data-item">
                                    <div className="data-col">
                                        <span className="data-label">Email</span>
                                        <span className="data-value">{user.email}</span>
                                    </div>
                                    <div className="data-col data-col-end"><span className="data-more disable"><em
                                        className="icon ni ni-lock-alt"></em></span></div>
                                </div>

                                <div className="data-item" data-bs-toggle="modal" data-bs-target="#profile-edit">
                                    <div className="data-col">
                                        <span className="data-label">Phone Number</span>
                                        <span className="data-value text-soft">{user.phone}</span>
                                    </div>
                                    <div className="data-col data-col-end"><span className="data-more"><em
                                        className="icon ni ni-forward-ios"></em></span></div>
                                </div>

                                {/*<div className="data-item" data-bs-toggle="modal" data-bs-target="#profile-edit">*/}
                                {/*    <div className="data-col">*/}
                                {/*        <span className="data-label">Date of Birth</span>*/}
                                {/*        <span className="data-value">29 Feb, 1986</span>*/}
                                {/*    </div>*/}
                                {/*    <div className="data-col data-col-end"><span className="data-more"><em*/}
                                {/*        className="icon ni ni-forward-ios"></em></span></div>*/}
                                {/*</div>*/}

                                <div className="data-item" data-bs-toggle="modal" data-bs-target="#profile-edit"
                                    data-tab-target="#address">
                                    <div className="data-col">
                                        <span className="data-label">Address</span>
                                        <span className="data-value">2337 Kildeer Drive,<br />Kentucky, Canada</span>
                                    </div>
                                    <div className="data-col data-col-end"><span className="data-more"><em
                                        className="icon ni ni-forward-ios"></em></span></div>
                                </div>

                            </div>

                        </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default AccountProfile
