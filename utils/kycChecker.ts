import { getCookie } from "cookies-next";
import { GetServerSidePropsContext } from "next";


const withKycEnabled = (gssp: any) => {
    return async (context: GetServerSidePropsContext) => {
        let { req } = context;
        let token = req?.cookies['x-token']
        let _temp = getCookie('x-user', { req })
        if (!token && !_temp) {
            return {
                redirect: {
                    destination: '/auth/login'
                },

            }
        }

        else {
            console.log(token)
            let user = JSON.parse(_temp?.valueOf() as string)

            let kycStages = {
                email: user.verification.emailVerified,
                phone: user.verification.phoneVerified,
                bvn: user.verification.bvnVerified,
            }
            if (kycStages.email && kycStages.phone && kycStages.bvn) {
                return await gssp(context);
            }
            else if (!kycStages.email) {
                return {
                    redirect: {
                        destination: '/onboarding/email'
                    },

                }
            }
            else if (!kycStages.phone) {
                return {
                    redirect: {
                        destination: '/onboarding/phone'
                    },

                }
            }
            else if (!kycStages.bvn) {
                return {
                    redirect: {
                        destination: '/onboarding/bvn'
                    },

                }
            }
            // else {}


            // switch (kycStages) {
            //     case { email: true, phone: true, bvn: true }:
            //         return await gssp(context);
            //     case { ...kycStages, email: null }:
            //         return {
            //             redirect: {
            //                 destination: '/onboarding/email'
            //             },
            //         }
            //     case {
            //         ...kycStages, phone: null
            //     }:
            //         return {
            //             redirect: {
            //                 destination: '/onboarding/phone'
            //             },
            //         }
            //     case {
            //         ...kycStages, bvn: null
            //     }:
            //         return {
            //             redirect: {
            //                 destination: '/onboarding/bvn'
            //             },
            //         }
            //         default: return {
            //             redirect: {
            //                 destination: '/auth/login'
            //             }

            //         };
            // }

            return await gssp(context);

        }
    }
}

export default withKycEnabled;
