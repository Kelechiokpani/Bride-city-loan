import {FC} from "react";

type Props = {
    children?: JSX.Element | JSX.Element[]
}
const AuthLayout: FC<Props> = ({children}: Props) => {
    return (
        <>
            <div className={'nk-body bg-white npc-general pg-auth'}>
                <div className="nk-app-root">
                    <div className="nk-main ">
                        <div className="nk-wrap nk-wrap-nosidebar">
                            { children }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AuthLayout
