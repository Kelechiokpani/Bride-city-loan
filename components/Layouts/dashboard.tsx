import {FC} from "react";
import Sidebar from "../sidebar";
import Header from "../header";
import Footer from "../footer";

type Props = {
    children?: JSX.Element | JSX.Element[]
}
const DashboardLayout: FC<Props> = ({children}: Props) => {
    return (
        <div className="nk-body npc-crypto bg-white has-sidebar">
            <div className="nk-app-root">
                <div className="nk-main ">
                    <Sidebar/>
                    <div className="nk-wrap ">
                        <Header/>
                        {children}
                        <Footer/>

                    </div>

                </div>
            </div>
        </div>
    )
}


export default DashboardLayout
