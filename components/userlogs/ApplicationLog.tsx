import {FC, useEffect, useState} from "react";
import {toCurrency} from "../../utils/formatter";
import {useQuery} from "@apollo/client";
import {LOAN_APPLICATIONS} from "../../graphql/queries";


const ApplicationLog: FC = () => {
    const { data, loading } = useQuery(LOAN_APPLICATIONS)
    const [loans, setLoans] = useState([])

    useEffect(() => {
        if (data && data?.getUserLoanApplication) {
            setLoans(data?.getUserLoanApplication)
        }
    }, [data])
    return (
        <div className="nk-block">
            <div className="card card-bordered card-stretch">
                <div className="card-inner-group">
                    <div className="card-inner">
                        <div className="card-title-group">
                            <div className="card-title">
                                <h5 className="title">Loan Application Overview</h5>
                            </div>
                        </div>

                    </div>

                    <div className="card-inner p-0">
                        <table className="table table-tranx">
                            <thead>
                                <tr className="tb-tnx-head">
                                    <th className="tb-tnx-id"><span className="">#</span></th>
                                    <th className="tb-tnx-info">
                                        <span className="tb-tnx-desc d-none d-sm-inline-block">
                                            <span>Amount</span>
                                        </span>
                                        <span className="tb-tnx-date d-md-inline-block d-none">
                                            <span className="d-md-none">Approved</span>
                                            <span className="d-none d-md-block">
                                                <span>Approved</span>

                                            </span>
                                        </span>
                                    </th>
                                    <th className="tb-tnx-info">
                                        <span className="tb-tnx-desc d-none d-sm-inline-block">
                                            <span>Category</span>
                                        </span>
                                    </th>
                                    <th className="tb-tnx-amount is-alt">
                                        <span className="tb-tnx-total">Date</span>
                                        <span className="tb-tnx-status d-none d-md-inline-block">Status</span>
                                    </th>
                                    <th className="tb-tnx-action">
                                        <span>&nbsp;</span>
                                    </th>
                                </tr>

                            </thead>
                            <tbody>
                            {
                                loans.map((loan: any, index) => (
                                    <tr className="tb-tnx-item" key={index}>
                                        <td className="tb-tnx-id">
                                            <a href="#"><span>{index + 15 * 36}</span></a>
                                        </td>
                                        <td className="tb-tnx-info">
                                            <div className="tb-tnx-desc">
                                                <span className="amount">{toCurrency(loan.applicationAmount)}</span>
                                            </div>
                                            <div className="tb-tnx-date">
                                                <span className="amount">{loan.approvedAmount ? loan.approvedAmount : 'Waiting Approval'}</span>

                                            </div>
                                        </td>
                                        <td className="tb-tnx-info">
                                            <div className="tb-tnx-desc">
                                                <span className="amount">{loan.category?.name}</span>
                                            </div>
                                        </td>
                                        <td className="tb-tnx-amount is-alt">
                                            <div className="tb-tnx-total">
                                                <span className="date">{loan.approvedDate ? loan.approvedDate : 'Waiting Approval'}</span>
                                            </div>
                                            <div className="tb-tnx-status">
                                                <span className="badge badge-dot bg-warning">{loan.status?.name}</span>
                                            </div>
                                        </td>
                                        <td className="tb-tnx-action">
                                            <div className="dropdown">
                                                <a className="text-soft dropdown-toggle btn btn-icon btn-trigger"
                                                   data-bs-toggle="dropdown"><em
                                                    className="icon ni ni-more-h"></em></a>
                                                <div className="dropdown-menu dropdown-menu-end dropdown-menu-xs">
                                                    <ul className="link-list-plain">
                                                        <li><a href="#">View</a></li>
                                                        <li><a href="#">Edit</a></li>
                                                        <li><a href="#">Remove</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ApplicationLog
