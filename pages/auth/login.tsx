import {NextPage} from "next";
import AuthLayout from "../../components/Layouts/auth";
import Link from "next/link";


const LoginPage: NextPage = () => {
    return (
        <AuthLayout>
            <div className="nk-content ">
                <div className="nk-block nk-block-middle nk-auth-body  wide-xs">
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
                                    <h4 className="nk-block-title">Sign-In</h4>
                                    <div className="nk-block-des">
                                        <p>Access the Bride City App using your email and Password.</p>
                                    </div>
                                </div>
                            </div>
                            <form action="html/index.html">
                                <div className="form-group">
                                    <div className="form-label-group">
                                        <label className="form-label" htmlFor="default-01">Email or Username</label>
                                    </div>
                                    <div className="form-control-wrap">
                                        <input type="text" className="form-control form-control-lg" id="default-01"
                                               placeholder="Enter your email address or username"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-label-group">
                                        <label className="form-label" htmlFor="password">Passcode</label>
                                        <a className="link link-primary link-sm"
                                           href="html/pages/auths/auth-reset-v2.html">Forgot Code?</a>
                                    </div>
                                    <div className="form-control-wrap">
                                        <a href="#" className="form-icon form-icon-right passcode-switch lg"
                                           data-target="password">
                                            <em className="passcode-icon icon-show icon ni ni-eye"></em>
                                            <em className="passcode-icon icon-hide icon ni ni-eye-off"></em>
                                        </a>
                                        <input type="password" className="form-control form-control-lg"
                                               id="password"
                                               placeholder="Enter your passcode"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-lg btn-primary btn-block">Sign in</button>
                                </div>
                            </form>
                            <div className="form-note-s2 text-center pt-4"> New on our platform? <Link
                                href="/auth/register">Create an account</Link>
                            </div>
                            <div className="text-center pt-4 pb-3">
                                <h6 className="overline-title overline-title-sap"><span>OR</span></h6>
                            </div>
                            <ul className="nav justify-center gx-4">
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
                                    <p className="text-soft">&copy; 2022 Bride City Loans. All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}

export default LoginPage
