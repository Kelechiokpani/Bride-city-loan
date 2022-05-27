import {GetServerSidePropsContext, NextApiRequest, NextPage} from "next";
const withAuthenticator = (gssp: any) => {
    return async (context: GetServerSidePropsContext) => {
        let {req} = context;
type Context = {
    res?: NextApiRequest,
    req?: NextApiRequest,
}
        let token = req?.cookies['x-token']

    if (!token) {
        return {
            redirect: {
                destination:'/auth/login'
            },

        }
    }
    return await gssp(context);
    }
}


export default withAuthenticator;