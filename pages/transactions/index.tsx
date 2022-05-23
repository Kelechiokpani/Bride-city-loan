import { NextPage } from "next";
import DashboardLayout from "../../components/Layouts/dashboard";
import TransactionsList from "../../components/TransactionsList";


const Transactions: NextPage = () => {
    return (
        <DashboardLayout>
            <div className="nk-content nk-content-fluid">
                <div className="container-xl wide-lg">
                    <div className="nk-content-body">
                        <div className="nk-block-head nk-block-head-sm">
                            <div className="nk-block-between g-3">
                                <div className="nk-block-head-content">
                                    <h3 className="nk-block-title page-title">Transactions History</h3>
                                    <div className="nk-block-des text-soft">
                                        <p>You have a total of 20 Transactions.</p>
                                    </div>
                                </div>

                                <div className="nk-block-head-content">
                                    <ul className="nk-block-tools g-3">
                                        <li>
                                            <div className="drodown">
                                                <a href="#" className="dropdown-toggle btn btn-icon btn-primary"
                                                    data-bs-toggle="dropdown"><em className="icon ni ni-plus"></em></a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <ul className="link-list-opt no-bdr">
                                                        <li><a href="#"><span>Add User</span></a></li>
                                                        <li><a href="#"><span>Add Team</span></a></li>
                                                        <li><a href="#"><span>Import User</span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                        <TransactionsList/>

                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Transactions
