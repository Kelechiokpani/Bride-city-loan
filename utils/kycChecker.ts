import { getCookie } from "cookies-next";
import { GetServerSidePropsContext } from "next";


const withKycEnabled = (gssp: any) => {
    return async (context: GetServerSidePropsContext) => {
        let {req} = context;
        let token = req?.cookies['x-token']
        let user: any = getCookie('x-user')
        if (!token && !user) {
            return {
                redirect: {
                    destination:'/auth/login'
                },

            }
        }

        else {
            let kycStages = {
                email: user.emailVerified,
                phone: user.phoneVerified,
                bvn: user.bvnVerified,
            }
            switch(kycStages) {
                case {email: true, phone: true, bvn: true}:
                    return await gssp(context);
                case {...kycStages, email: false}:
                    return {
                        redirect: {
                            destination: '/onboarding/email'
                        },
                    }
                case {...kycStages, phone: false}:
                    return {
                        redirect: {
                            destination: '/onboarding/phone'
                        },
                    }
                case {...kycStages, bvn: false}:
                    return {
                        redirect: {
                            destination: '/onboarding/phone'
                        },
                    }
            }
        }
    }
}

export default withKycEnabled;