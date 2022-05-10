import {NextPage} from "next";
import AuthLayout from "../../components/Layouts/auth";
import Link from "next/link";


const RegisterPage: NextPage = () => {
    return (
        <AuthLayout>
            <div className="nk-content ">
                <div className="nk-block nk-block-middle nk-auth-body wide-xs">
                    <div className="brand-logo pb-4 text-center">
                        <a href="/" className="logo-link">
                            <img className="logo-light logo-img logo-img-lg" src="/images/logo.png"
                                 srcSet="/images/logo2x.png 2x" alt="logo"/>
                            <img className="logo-dark logo-img logo-img-lg" src="/images/logo-dark.png"
                                 srcSet="/images/logo-dark2x.png 2x" alt="logo-dark"/>
                        </a>
                    </div>
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
                            <div className="form-note-s2 text-center pt-4"> Already have an account? <Link
                                href="/auth/login"><strong>Sign in instead</strong></Link>
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
                </div>
                <div className="nk-footer nk-auth-footer-full">
                    <div className="container wide-lg">
                        <div className="row g-3">
                            <div className="col-lg-6 order-lg-last">
                                <ul className="nav nav-sm justify-content-center justify-content-lg-end">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Terms & Condition</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Privacy Policy</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Help</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <div className="nk-block-content text-center text-lg-left">
                                    <p className="text-soft">&copy; 2022 CryptoLite. All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}

export default RegisterPage
