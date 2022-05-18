import { NextPage } from "next";
import DashboardLayout from "../../components/Layouts/dashboard";


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

                        <div className="nk-block">
                            <div className="card card-bordered card-stretch">
                                <div className="card-inner-group">
                                    <div className="card-inner">
                                        <div className="card-title-group">
                                            <div className="card-title">
                                                <h5 className="title">All Transactions</h5>
                                            </div>
                                            <div className="card-tools me-n1">
                                                <ul className="btn-toolbar">
                                                    <li>
                                                        <a href="#" className="btn btn-icon search-toggle toggle-search"
                                                            data-target="search"><em
                                                                className="icon ni ni-search"></em></a>
                                                    </li>

                                                    <li className="btn-toolbar-sep"></li>

                                                    <li>
                                                        <div className="dropdown">
                                                            <a href="#"
                                                                className="btn btn-trigger btn-icon dropdown-toggle"
                                                                data-bs-toggle="dropdown">
                                                                <em className="icon ni ni-setting"></em>
                                                            </a>
                                                            <div
                                                                className="dropdown-menu dropdown-menu-end dropdown-menu-xs">
                                                                <ul className="link-check">
                                                                    <li><span>Show</span></li>
                                                                    <li className="active"><a href="#">10</a></li>
                                                                    <li><a href="#">20</a></li>
                                                                    <li><a href="#">50</a></li>
                                                                </ul>
                                                                <ul className="link-check">
                                                                    <li><span>Order</span></li>
                                                                    <li className="active"><a href="#">DESC</a></li>
                                                                    <li><a href="#">ASC</a></li>
                                                                </ul>
                                                                <ul className="link-check">
                                                                    <li><span>Density</span></li>
                                                                    <li className="active"><a href="#">Regular</a></li>
                                                                    <li><a href="#">Compact</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                    </li>

                                                </ul>
                                            </div>

                                            <div className="card-search search-wrap" data-search="search">
                                                <div className="search-content">
                                                    <a href="#" className="search-back btn btn-icon toggle-search"
                                                        data-target="search"><em
                                                            className="icon ni ni-arrow-left"></em></a>
                                                    <input type="text"
                                                        className="form-control form-control-sm border-transparent form-focus-none"
                                                        placeholder="Quick search by order id" />
                                                    <button className="search-submit btn btn-icon"><em
                                                        className="icon ni ni-search"></em></button>
                                                </div>
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
                                                            <span>Bill For</span>
                                                        </span>
                                                        <span className="tb-tnx-date d-md-inline-block d-none">
                                                            <span className="d-md-none">Date</span>
                                                            <span className="d-none d-md-block">
                                                                <span>Issue Date</span>
                                                                <span>Due Date</span>
                                                            </span>
                                                        </span>
                                                    </th>
                                                    <th className="tb-tnx-amount is-alt">
                                                        <span className="tb-tnx-total">Total</span>
                                                        <span className="tb-tnx-status d-none d-md-inline-block">Status</span>
                                                    </th>
                                                    <th className="tb-tnx-action">
                                                        <span>&nbsp;</span>
                                                    </th>
                                                </tr>

                                            </thead>
                                            <tbody>
                                                <tr className="tb-tnx-item">
                                                    <td className="tb-tnx-id">
                                                        <a href="#"><span>4947</span></a>
                                                    </td>
                                                    <td className="tb-tnx-info">
                                                        <div className="tb-tnx-desc">
                                                            <span className="title">Enterprize Year Subscrition</span>
                                                        </div>
                                                        <div className="tb-tnx-date">
                                                            <span className="date">10-05-2019</span>
                                                            <span className="date">10-13-2019</span>
                                                        </div>
                                                    </td>
                                                    <td className="tb-tnx-amount is-alt">
                                                        <div className="tb-tnx-total">
                                                            <span className="amount">$599.00</span>
                                                        </div>
                                                        <div className="tb-tnx-status">
                                                            <span className="badge badge-dot bg-warning">Due</span>
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
                                                <tr className="tb-tnx-item">
                                                    <td className="tb-tnx-id">
                                                        <a href="#"><span>4904</span></a>
                                                    </td>
                                                    <td className="tb-tnx-info">
                                                        <div className="tb-tnx-desc">
                                                            <span className="title">Maintenance Year Subscription</span>
                                                        </div>
                                                        <div className="tb-tnx-date">
                                                            <span className="date">06-19-2019</span>
                                                            <span className="date">06-26-2019</span>
                                                        </div>
                                                    </td>
                                                    <td className="tb-tnx-amount is-alt">
                                                        <div className="tb-tnx-total">
                                                            <span className="amount">$99.00</span>
                                                        </div>
                                                        <div className="tb-tnx-status"><span
                                                            className="badge badge-dot bg-success">Paid</span></div>
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

                                                <tr className="tb-tnx-item">
                                                    <td className="tb-tnx-id">
                                                        <a href="#"><span>4829</span></a>
                                                    </td>
                                                    <td className="tb-tnx-info">
                                                        <div className="tb-tnx-desc">
                                                            <span className="title">Enterprize Year Subscrition</span>
                                                        </div>
                                                        <div className="tb-tnx-date">
                                                            <span className="date">10-04-2018</span>
                                                            <span className="date">10-12-2018</span>
                                                        </div>
                                                    </td>
                                                    <td className="tb-tnx-amount is-alt">
                                                        <div className="tb-tnx-total">
                                                            <span className="amount">$599.00</span>
                                                        </div>
                                                        <div className="tb-tnx-status"><span
                                                            className="badge badge-dot bg-success">Paid</span></div>
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



                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="card-inner">
                                        <ul className="pagination justify-content-center justify-content-md-start">
                                            <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><span className="page-link"><em
                                                className="icon ni ni-more-h"></em></span></li>
                                            <li className="page-item"><a className="page-link" href="#">6</a></li>
                                            <li className="page-item"><a className="page-link" href="#">7</a></li>
                                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                        </ul>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Transactions