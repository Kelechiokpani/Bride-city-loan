import {NextPage} from "next";
import AuthLayout from "../../components/Layouts/auth";
import OnBoardingWrapper from "../../components/OnBoarding/wrapper";


const EmailOnBoarding: NextPage = () => {
    return (
        <AuthLayout wide={true}>
            <OnBoardingWrapper>
                <div className={'col-lg-10'}>
                    <form action="">
                        <div className="form-group">
                            <div className="form-label-group">
                                <label className="form-label"
                                       htmlFor="default-01">Verification Code</label>
                            </div>
                            <div className="form-control-wrap">
                                <input type="text" className="form-control form-control-lg"
                                       id="default-01"
                                       placeholder="Enter email verification code"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-lg btn-primary btn-block">Verify Email
                            </button>
                        </div>
                    </form>
                </div>
            </OnBoardingWrapper>
        </AuthLayout>
    )
}

export default EmailOnBoarding
