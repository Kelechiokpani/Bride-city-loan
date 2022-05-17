import {NextPage} from "next";
import AuthLayout from "../../components/Layouts/auth";
import OnBoardingWrapper from "../../components/OnBoarding/wrapper";
import KycPrompt from "../../components/OnBoarding/kycPrompt";
import {useState} from "react";
import KycApplication from "../../components/OnBoarding/kycApplication";

const KycOnBoarding: NextPage = () => {
    const [isApplying, setApplying] = useState<boolean>(false)
    return (
        <AuthLayout wide={true}>
            <OnBoardingWrapper currentStep={'kyc'}>
                {
                    !isApplying ? <KycPrompt onApply={() => setApplying(true)}/>
                        : <KycApplication/>
                }
            </OnBoardingWrapper>
        </AuthLayout>
    )
}

export default KycOnBoarding
