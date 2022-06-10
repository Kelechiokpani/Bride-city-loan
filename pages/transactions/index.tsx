import { NextPage } from "next";
import DashboardLayout from "../../components/Layouts/dashboard";
import TransactionsList from "../../components/userlogs/ApplicationLog"


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

                            </div>

                        </div>

                        <TransactionsList  />

                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}


export default Transactions
