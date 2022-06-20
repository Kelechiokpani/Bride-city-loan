import { FC, useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_VERIFICATION_STATUS } from "../graphql/queries";
import { useRouter } from "next/router";

type Props = {
    children?: JSX.Element | JSX.Element[]
}

const VerificationChecker: FC<Props> = ({ children }: Props) => {
    const router = useRouter()
    const [getVerificationStatus] = useLazyQuery(GET_VERIFICATION_STATUS);
    const [authorized, setAuthorized] = useState(false);


    function isVerificationComplete() {
        getVerificationStatus().then(({ data }) => {
            if (data?.getUserVerificationStatus) {
                let { getUserVerificationStatus } = data
                let kycStages = {
                    email: getUserVerificationStatus?.emailVerified,
                    phone: getUserVerificationStatus?.phoneVerified,
                    bvn: getUserVerificationStatus?.bvnVerified,
                }
                if (kycStages.email && kycStages.phone && kycStages.bvn) {
                    setAuthorized(true)
                    // router.push('/')
                } else if (!kycStages.email || !kycStages.phone || !kycStages.bvn) {
                    router.push('/onboarding');
                }
            }
            else {

                router.push('/auth/login');
            }
        });
    }

    useEffect(() => {
        isVerificationComplete();

        // on route change start - hide page content by setting authorized to false
        const hideContent = () => setAuthorized(false);
        router.events.on('routeChangeStart', hideContent);

        // on route change complete - run auth check
        router.events.on('routeChangeComplete', isVerificationComplete)

        // unsubscribe from events in useEffect return function
        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', isVerificationComplete);
        }
    }, [])

    return (
        <>
            {authorized && children}
        </>
    )
}

export default VerificationChecker
