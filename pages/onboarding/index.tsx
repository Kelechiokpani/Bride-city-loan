import { useQuery } from "@apollo/client";
import { NextPage } from "next";
import Router from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AuthChecker from "../../components/authChecker";
import AuthLayout from "../../components/Layouts/auth";
import OnBoardingWrapper from "../../components/OnBoarding/wrapper";
import { GET_VERIFICATION_STATUS } from "../../graphql/queries";


export type AccountVerificationProps = {
    emailVerified: Boolean | undefined,
    phoneVerified: Boolean | undefined,
    bvnVerified: Boolean | undefined,

}
const UserOnboarding: NextPage = () => {
    const {data} = useQuery(GET_VERIFICATION_STATUS);
    const [verificationStages, setVerificationStages] = useState<AccountVerificationProps>()


    useEffect(() => {
        if(data && data.getUserVerificationStatus) {
            if(data.getUserVerificationStatus.emailVerified && data.getUserVerificationStatus.phoneVerified && data.getUserVerificationStatus.bvnVerified) {
                Router.push('/')
            }
            else {
                setVerificationStages({
                emailVerified: data.getUserVerificationStatus.emailVerified,
                phoneVerified: data.getUserVerificationStatus.phoneVerified,
                bvnVerified: data.getUserVerificationStatus.bvnVerified,
            } as AccountVerificationProps)
            }
        }
    }, [data])


    return (
        <AuthChecker>
            <AuthLayout wide={true}>
                {
                    data && <>
                        <OnBoardingWrapper
                            emailVerified={verificationStages?.emailVerified}
                            phoneVerified={verificationStages?.phoneVerified}
                            bvnVerified={verificationStages?.bvnVerified}
                            />
                    </>
                }
            </AuthLayout>
        </AuthChecker>
    );
}


export default UserOnboarding;