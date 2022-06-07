import { useQuery } from "@apollo/client";
import Router from "next/router";
import { FC, useEffect, useState } from "react";
import { GET_CURRENT_USER } from "../graphql/queries";

type Props = {
    children?: JSX.Element | JSX.Element[]
}
const AuthChecker: FC<Props> = ({children}: Props) => {

    const { data, error } = useQuery(GET_CURRENT_USER)
    const  [authorized, setAuthorized] = useState(false)

    useEffect(() => {
        if(data && data.getCurrentUser) {
            if(!data.getCurrentUser.profile) {
                Router.push("/onboarding")
            }
            else {
                setAuthorized(true)
            }
        }
        else {
            if(error) {
                Router.push('/auth/login')
                console.log(data)
            }
        }
    }, [data, error])
    return (
        <>
            {
                authorized && children
            }
        </>
    )
}


export default AuthChecker