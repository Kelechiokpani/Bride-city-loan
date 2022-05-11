import {NextPage} from "next";
import AuthLayout from "../../components/Layouts/auth";
import Link from "next/link";


const RegisterPage: NextPage = () => {
    return (
        <AuthLayout>
            <div className="card card-bordered">
                <div className="card-inner card-inner-lg">
                    <div className="nk-block-head">
                        <div className="nk-block-head-content">
                            <h4 className="nk-block-title">Register</h4>
                            <div className="nk-block-des">
                                <p>Create New Bride City Loan Account</p>
                            </div>
                        </div>
                    </div>
                    <form action="">
                        <div className="form-group">
                            <label className="form-label" htmlFor="email">Email Address</label>
                            <div className="form-control-wrap">
                                <input type="text" className="form-control form-control-lg" id="email"
                                       placeholder="email@example.com"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="phone">Phone Number</label>
                            <div className="form-control-wrap">
                                <input type="text" className="form-control form-control-lg" id="phone"
                                       placeholder="Enter Phone Number"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="password">Password</label>
                            <div className="form-control-wrap">
                                <a href="#" className="form-icon form-icon-right passcode-switch lg"
                                   data-target="password">
                                    <em className="passcode-icon icon-show icon ni ni-eye"></em>
                                    <em className="passcode-icon icon-hide icon ni ni-eye-off"></em>
                                </a>
                                <input type="password" className="form-control form-control-lg" id="password"
                                       placeholder="*********"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="custom-control custom-control-xs custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="checkbox"/>
                                <label className="custom-control-label" htmlFor="checkbox">I agree to
                                    Bride City <a href="#">Privacy Policy</a> &amp; <a
                                        href="#"> Terms.</a></label>
                            </div>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-lg btn-primary btn-block">Register</button>
                        </div>
                    </form>
                    <div className="form-note-s2 text-center pt-4"> Already have an account?
                        <Link  href="/auth/login">
                        <a><strong>Sign in instead</strong></a>
                    </Link>
                    </div>
                    <div className="text-center pt-4 pb-3">
                        <h6 className="overline-title overline-title-sap"><span>OR</span></h6>
                    </div>
                    <ul className="nav justify-center gx-8">
                        <li className="nav-item"><a className="nav-link" href="#">Facebook</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Google</a></li>
                    </ul>
                </div>
            </div>
        </AuthLayout>
    )
}

export default RegisterPage
