import { FC } from "react";
import Sidebar from "../sidebar";
import Header from "../header";
import Footer from "../footer";


type Props = {
    // title: string,
    children?:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[];
};
const DashboardLayout: FC<Props> = ({ children }: Props) => {
    return (
        <div className="nk-body npc-crypto bg-white has-sidebar">
            <div className="nk-app-root">
                <div className="nk-main">
                    <Sidebar />
                    <div className="nk-wrap ">
                        <Header />
                        {children}

                    </div>
                </div>

            </div>
        </div>
        // <div className="nk-body npc-crypto bg-white has-sidebar">
        //     <div className="nk-app-root">
        //         <div className="nk-main ">
        //             <Sidebar />
        //             <div className="nk-wrap ">
        //                 <Header />
        //                 {children}
        //                 <Footer />
        //             </div>

        //         </div>
        //     </div>
        // </div>
    )
}


export default DashboardLayout
