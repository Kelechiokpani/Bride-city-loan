import { NextPage } from "next";
import DashboardLayout from "../../components/Layouts/dashboard";
import Switcher from "../../components/Account/switcher";
import withKycEnabled from "../../utils/kycChecker";


const Security: NextPage = () => {
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
                                        className="text-primary"><em className="icon ni ni-info"></em></span></p>
                                </div>
                            </div>
                        </div>
                        <Switcher activeTab={'Security'} />

                        <div className="nk-block">
                            <div className="nk-block-head">
                                <div className="nk-block-head-content">
                                    <h5 className="nk-block-title">Security Settings</h5>
                                    <div className="nk-block-des">
                                        <p>These settings are helps you keep your account secure.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card card-bordered">
                                <div className="card-inner-group">
                                    <div className="card-inner">
                                        <div className="between-center flex-wrap flex-md-nowrap g-3">
                                            <div className="nk-block-text">
                                                <h6>Save my Activity Logs</h6>
                                                <p>You can save your all activity logs including unusual activity
                                                    detected.</p>
                                            </div>
                                            <div className="nk-block-actions">
                                                <ul className="align-center gx-3">
                                                    <li className="order-md-last d-inline-flex">
                                                        <div className="custom-control custom-switch me-n2">
                                                            <input type="checkbox" className="custom-control-input"
                                                                id="activity-log" />
                                                            <label className="custom-control-label"
                                                                htmlFor="activity-log"></label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="#recent-activity" className="link link-sm link-primary">See
                                                            Recent Activity</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-inner">
                                        <div className="between-center flex-wrap flex-md-nowrap g-3">
                                            <div className="nk-block-text">
                                                <h6>Security Pin Code</h6>
                                                <p>You can set your pin code, we will ask you on your withdraw and
                                                    transfer funds.</p>
                                            </div>
                                            <div className="nk-block-actions">
                                                <div className="custom-control custom-switch me-n2">
                                                    <input type="checkbox" className="custom-control-input"
                                                        id="security-pin" />
                                                    <label className="custom-control-label"
                                                        htmlFor="security-pin"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-inner">
                                        <div className="between-center flex-wrap flex-md-nowrap g-3">
                                            <div className="nk-block-text">
                                                <h6>Change Password</h6>
                                                <p>Set a unique password to protect your account.</p>
                                            </div>
                                            <div className="nk-block-actions flex-shrink-sm-0">
                                                <ul className="align-center flex-wrap flex-sm-nowrap gx-3 gy-2">
                                                    <li className="order-md-last">
                                                        <a href="#" className="btn btn-primary">Change Password</a>
                                                    </li>
                                                    <li>
                                                        <em className="text-soft text-date fs-12px">Last changed: <span>Oct 2, 2019</span></em>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-inner">
                                        <div className="between-center flex-wrap flex-md-nowrap g-3">
                                            <div className="nk-block-text">
                                                <h6>2FA Authentication <span className="badge bg-success">Enabled</span>
                                                </h6>
                                                <p>Secure your account with 2FA security. When it is activated you will
                                                    need to enter not only your password, but also a special code using
                                                    app. You can receive this code by in mobile app. </p>
                                            </div>
                                            <div className="nk-block-actions">
                                                <a href="#" className="btn btn-primary">Disable</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}


export default Security
