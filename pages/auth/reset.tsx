import {NextPage} from "next";
import AuthLayout from "../../components/Layouts/auth";
import Link from "next/link";

const ResetPage: NextPage = () => {
  return (
      <AuthLayout>
          <div className="card card-bordered">
              <div className="card-inner card-inner-lg">
                  <div className="nk-block-head">
                      <div className="nk-block-head-content">
                          <h5 className="nk-block-title">Reset password</h5>
                          <div className="nk-block-des">
                              <p>If you forgot your password, well, then we’ll email you instructions to reset your
                                  password.</p>
                          </div>
                      </div>
                  </div>
                  <form action="">
                      <div className="form-group">
                          <div className="form-label-group">
                              <label className="form-label" htmlFor="default-01">Email</label>
                          </div>
                          <div className="form-control-wrap">
                              <input type="text" className="form-control form-control-lg" id="default-01"
                                     placeholder="Enter your email address"/>
                          </div>
                      </div>
                      <div className="form-group">
                          <button className="btn btn-lg btn-primary btn-block">Send Reset Link</button>
                      </div>
                  </form>
                  <div className="form-note-s2 text-center pt-4">
                      <Link href="/auth/login">
                          <a className="link link-primary link-sm">
                              <strong>Return to login</strong>
                          </a>
                      </Link>
                  </div>
              </div>
          </div>
      </AuthLayout>
  )
}

export default ResetPage
