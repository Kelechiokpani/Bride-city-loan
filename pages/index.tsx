import type { GetServerSidePropsContext, NextPage } from 'next'
import Link from 'next/link';
import { NextRouter, useRouter } from "next/router";
import DashboardLayout from "../components/Layouts/dashboard";
import TransactionsList from "../components/ApplicationLog";
import withAuthenticator from "../utils/authenticator";
import withKycEnabled from '../utils/kycChecker';
const Home: NextPage = () => {
    return (
        <DashboardLayout>
            <div className="nk-content nk-content-fluid">
                <div className="container-xl wide-lg">
                    <div className="nk-content-body">
                        <div className="nk-block-head">
                            <div className="nk-block-head-sub"><span>Welcome! A</span>
                            </div>
                            <div className="nk-block-between-md g-4">
                                <div className="nk-block-head-content">
                                    <h2 className="nk-block-title fw-normal">Abu Bin Ishityak</h2>
                                    <div className="nk-block-des">
                                        <p>At a glance summary of your account. Have fun!</p>
                                    </div>
                                </div>

                                <div className="nk-block-head-content">
                                    <ul className="nk-block-tools gx-3">
                                        <Link href='/loans/apply'>
                                            <a className="btn btn-primary">
                                                <span>Apply</span>
                                                <em className="icon ni ni-arrow-long-right"></em>
                                            </a>
                                        </Link>
                                        <li><a href="#" className="btn btn-white btn-light"><span>Withdraw</span> <em
                                            className="icon ni ni-arrow-long-right d-none d-sm-inline-block"></em></a>
                                        </li>
                                        <li className="opt-menu-md dropdown">
                                            <a href="#" className="btn btn-white btn-light btn-icon"
                                                data-bs-toggle="dropdown"><em className="icon ni ni-setting"></em></a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <ul className="link-list-opt no-bdr">
                                                    <li><a href="#"><em className="icon ni ni-coin-alt"></em><span>Curreny Settings</span></a>
                                                    </li>
                                                    <li><a href="#"><em className="icon ni ni-notify"></em><span>Push Notification</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                        <div className="nk-block">
                            <div className="row gy-gs">
                                <div className="col-lg-5 col-xl-4">
                                    <div className="nk-block">
                                        <div className="nk-block-head-xs">
                                            <div className="nk-block-head-content">
                                                <h5 className="nk-block-title title">Overview</h5>
                                            </div>
                                        </div>

                                        <div className="nk-block">
                                            <div className="card card-bordered text-light is-dark h-100">
                                                <div className="card-inner">
                                                    <div className="nk-wg7">
                                                        <div className="nk-wg7-stats">
                                                            <div className="nk-wg7-title">Available balance in USD</div>
                                                            <div className="number-lg amount">179,850.950</div>
                                                        </div>
                                                        <div className="nk-wg7-stats-group">
                                                            <div className="nk-wg7-stats w-50">
                                                                <div className="nk-wg7-title">Wallets</div>
                                                                <div className="number-lg">5</div>
                                                            </div>
                                                            <div className="nk-wg7-stats w-50">
                                                                <div className="nk-wg7-title">Transactions</div>
                                                                <div className="number">34,405</div>
                                                            </div>
                                                        </div>
                                                        <div className="nk-wg7-foot">
                                                            <span className="nk-wg7-note">Last activity at <span>19 Nov, 2019</span></span>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="col-lg-7 col-xl-8">
                                    <div className="nk-block nk-block-md">
                                        <div className="nk-block-head-xs">
                                            <div className="nk-block-head-content">
                                                <h5 className="nk-block-title title">Loan History Overview</h5>
                                            </div>
                                        </div>

                                        <div className="row g-gs">
                                            <div className="col-md-6">
                                                <div className="card card-bordered card-full">
                                                    <div className="card-inner">
                                                        <div className="card-title-group align-start mb-0">
                                                            <div className="card-title">
                                                                <h6 className="subtitle">Total amount</h6>
                                                            </div>
                                                            <div className="card-tools">
                                                                <em className="card-hint icon ni ni-help-fill"
                                                                    data-toggle="tooltip" data-placement="left"
                                                                    title="Total Deposited"></em>
                                                            </div>
                                                        </div>
                                                        <div className="card-amount">
                                                            <span className="amount"> 2000</span>
                                                        </div>
                                                        <div className="invest-data">
                                                            <div className="invest-data-amount g-2">
                                                                <div className="invest-data-history">
                                                                    <div className="title">This Month</div>
                                                                    <div
                                                                        className="amount">40
                                                                    </div>
                                                                </div>
                                                                <div className="invest-data-history">
                                                                    <div className="title">This Week</div>
                                                                    <div
                                                                        className="amount">3,000
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="invest-data-ck">
                                                                <canvas className="iv-data-chart"
                                                                    id="totalDeposit"></canvas>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="col-md-6">
                                                <div className="card card-bordered card-full">
                                                    <div className="card-inner">
                                                        <div className="card-title-group align-start mb-0">
                                                            <div className="card-title">
                                                                <h6 className="subtitle">Total Withdrawals</h6>
                                                            </div>
                                                            <div className="card-tools">
                                                                <em className="card-hint icon ni ni-help-fill"
                                                                    data-toggle="tooltip" data-placement="left"
                                                                    title="Total Transfer"></em>
                                                            </div>
                                                        </div>
                                                        <div className="card-amount">
                                                            <span className="amount">
                                                                6,000
                                                            </span>
                                                        </div>
                                                        <div className="invest-data">
                                                            <div className="invest-data-amount g-2">
                                                                <div className="invest-data-history">
                                                                    <div className="title">This Month</div>
                                                                    <div
                                                                        className="amount">10,000
                                                                    </div>
                                                                </div>
                                                                <div className="invest-data-history">
                                                                    <div className="title">This Week</div>
                                                                    <div
                                                                        className="amount">12,000
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="invest-data-ck">
                                                                <canvas className="iv-data-chart"
                                                                    id="totalWithdraw"></canvas>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        {/* Transactions Here */}
                        <TransactionsList />
                        <div className="nk-block">
                            <div className="card card-bordered">
                                <div className="nk-refwg">
                                    <div className="nk-refwg-invite card-inner">
                                        <div className="nk-refwg-head g-3">
                                            <div className="nk-refwg-title">
                                                <h5 className="title">Refer Us & Earn</h5>
                                                <div className="title-sub">Use the bellow link to invite your friends.
                                                </div>
                                            </div>
                                            <div className="nk-refwg-action">
                                                <a href="#" className="btn btn-primary">Invite</a>
                                            </div>
                                        </div>
                                        <div className="nk-refwg-url">
                                            <div className="form-control-wrap">
                                                <div className="form-clip clipboard-init"
                                                    data-clipboard-target="#refUrl"
                                                    data-success="Copied" data-text="Copy Link"><em
                                                        className="clipboard-icon icon ni ni-copy"></em> <span
                                                            className="clipboard-text">Copy Link</span></div>
                                                <div className="form-icon">
                                                    <em className="icon ni ni-link-alt"></em>
                                                </div>
                                                <input type="text" className="form-control copy-text" id="refUrl"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="nk-refwg-stats card-inner bg-lighter">
                                        <div className="nk-refwg-group g-3">
                                            <div className="nk-refwg-name">
                                                <h6 className="title">My Referral <em className="icon ni ni-info"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="right"
                                                    title="Referral Informations"></em>
                                                </h6>
                                            </div>
                                            <div className="nk-refwg-info g-3">
                                                <div className="nk-refwg-sub">
                                                    <div className="title">394</div>
                                                    <div className="sub-text">Total Joined</div>
                                                </div>
                                                <div className="nk-refwg-sub">
                                                    <div className="title">548.49</div>
                                                    <div className="sub-text">Referral Earn</div>
                                                </div>
                                            </div>
                                            <div className="nk-refwg-more dropdown mt-n1 me-n1">
                                                <a href="#" className="btn btn-icon btn-trigger"
                                                    data-bs-toggle="dropdown"><em className="icon ni ni-more-h"></em></a>
                                                <div className="dropdown-menu dropdown-menu-xs dropdown-menu-end">
                                                    <ul className="link-list-plain sm">
                                                        <li><a href="#">7 days</a></li>
                                                        <li><a href="#">15 Days</a></li>
                                                        <li><a href="#">30 Days</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="nk-refwg-ck">
                                            <canvas className="chart-refer-stats" id="refBarChart"></canvas>
                                        </div>
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


export default Home;
