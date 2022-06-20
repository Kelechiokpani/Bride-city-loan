import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import 'simplebar';
import 'simplebar/dist/simplebar.css';
import {toCurrency} from "../utils/formatter";

const Sidebar: FC = () => {

    return (
        <div className="nk-sidebar nk-sidebar-fixed " data-content="sidebarMenu">
            <div className="nk-sidebar-element nk-sidebar-head">
                <div className="nk-sidebar-brand">
                    <a href="/" className="logo-link" style={{ marginTop: "15px" }} >
                        <Image className="logo-light"
                            src={Logo2}
                            alt="logo"
                            width={20}
                            height={20} />
                        <Image className="logo-dark "
                            src={Logo}
                            alt="logo"
                            width={150}
                            height={50} />
                        <span style={{ fontSize: "16px", fontWeight: "600" }}>Bride City</span>
                    </a>
                </div>
                <div className="nk-menu-trigger me-n2">
                    <a href="#" className="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu"><em
                        className="icon ni ni-arrow-left"></em></a>
                </div>
            </div>
            {/*nk-sidebar-element*/}
            <div className="nk-sidebar-element sidebarMenu">
                <div className="nk-sidebar-body" >
                    <div className="nk-sidebar-content">
                        {/* data-simplebar */}
                        <div className="nk-sidebar-widget d-none d-xl-block">
                            <div className="user-account-info between-center">
                                <div className="user-account-main">
                                    <h6 className="overline-title-alt">Available Balance</h6>
                                    <div className="user-balance">{toCurrency(2104095)} </div>

                                </div>
                                <a href="#" className="btn btn-white btn-icon btn-light"><em
                                    className="icon ni ni-line-chart"></em></a>
                            </div>
                            <ul className="user-account-data gy-1">
                                <li>
                                    <div className="user-account-label">
                                        <span className="sub-text">Loan Duration (30days)</span>
                                    </div>
                                    <div className="user-account-value">
                                        <span className="lead-text"> <span
                                            className="currency currency-btc">interest</span></span>
                                        <span className="text-success ms-2">3.1% <em
                                            className="icon ni ni-arrow-long-up"></em></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="user-account-label">
                                        <span className="sub-text">Loan approved</span>
                                    </div>
                                    <div className="user-account-value">
                                        <span className="sub-text">{toCurrency(100000)}</span>
                                    </div>
                                </li>
                            </ul>
                            <div className="user-account-actions">
                                <ul className="g-3">
                                    <li><a href="#" className="btn btn-lg btn-primary"><span>Pay Loan</span></a></li>
                                    <li><a href="#" className="btn btn-lg btn-success"><span>Withdraw</span></a></li>
                                </ul>
                            </div>
                        </div>

                        {/*nk-sidebar-widget*/}
                        <div className="nk-sidebar-widget nk-sidebar-widget-full d-xl-none pt-0">
                            <a className="nk-profile-toggle toggle-expand" data-target="sidebarProfile" href="#">
                                <div className="user-card-wrap">
                                    <div className="user-card">
                                        <div className="user-avatar">
                                            <span>AB</span>
                                        </div>
                                        <div className="user-info">
                                            <span className="lead-text">Nice, Abu Bin Ishtiyak!</span>
                                            <span className="sub-text">Nice, Ishtiyak!@softnio.com</span>
                                        </div>
                                        <div className="user-action">
                                            <em className="icon ni ni-chevron-down"></em>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <div className="nk-profile-content toggle-expand-content" data-content="sidebarProfile">
                                <div className="user-account-info between-center">
                                    <div className="user-account-main">
                                        <h6 className="overline-title-alt">Available Balance</h6>
                                        <div className="user-balance">2.014095 <small
                                            className="currency currency-btc">BTC</small></div>
                                        <div className="user-balance-alt">18,934.84 <span
                                            className="currency currency-btc">BTC</span></div>
                                    </div>
                                    <a href="#" className="btn btn-icon btn-light"><em
                                        className="icon ni ni-line-chart"></em></a>
                                </div>
                                <ul className="user-account-data">
                                    <li>
                                        <div className="user-account-label">
                                            <span className="sub-text">Profits (7d)</span>
                                        </div>
                                        <div className="user-account-value">
                                            <span className="lead-text">+ 0.0526 <span
                                                className="currency currency-btc">BTC</span></span>
                                            <span className="text-success ms-2">3.1% <em
                                                className="icon ni ni-arrow-long-up"></em></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="user-account-label">
                                            <span className="sub-text">Deposit in orders</span>
                                        </div>
                                        <div className="user-account-value">
                                            <span className="sub-text text-base">0.005400 <span
                                                className="currency currency-btc">BTC</span></span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="user-account-links">
                                    <li><a href="#" className="link"><span>Withdraw Funds</span> <em
                                        className="icon ni ni-wallet-out"></em></a></li>
                                    <li><a href="#" className="link"><span>Deposit Funds</span> <em
                                        className="icon ni ni-wallet-in"></em></a></li>
                                </ul>
                                <ul className="link-list">
                                    <li><a><em
                                        className="icon ni ni-user-alt"></em><span>View Profile</span></a></li>
                                    <li><a><em
                                        className="icon ni ni-setting-alt"></em><span>Account Setting</span></a></li>
                                    <li><a><em
                                        className="icon ni ni-activity-alt"></em><span>Login Activity</span></a></li>
                                </ul>
                                <ul className="link-list">
                                    <li><a href="#"><em className="icon ni ni-signout"></em><span>Sign out</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* -------------------------- */}
                        <div className="nk-sidebar-menu">
                            <ul className="nk-menu">
                                {/* <li className="nk-menu-heading">
                                    <span className="nk-menu-icon">
                                        <em
                                            className="icon ni ni-wallet-alt"></em>Dashboard</span>

                                </li> */}
                                <li className="nk-menu-item">
                                    <Link href="/">
                                        <a className="nk-menu-link">
                                            <span className="nk-menu-icon">
                                                <em className="icon ni ni-dashboard"> </em>
                                            </span>
                                            <span className="nk-menu-text">Overview</span>
                                        </a>

                                    </Link>
                                </li>

                                <li className="nk-menu-item">
                                    <Link href="/account">
                                        <a className="nk-menu-link">
                                            <span className="nk-menu-icon"><em className="icon ni ni-account-setting"></em></span>
                                            <span className="nk-menu-text">My Profile</span>
                                        </a>
                                    </Link>
                                </li>

                                <li className="nk-menu-item">
                                    <Link href="/transactions">
                                        <a className="nk-menu-link">
                                            <span className="nk-menu-icon"><em className="icon ni ni-coins"></em></span>
                                            <span className="nk-menu-text">Loans</span>
                                        </a>
                                    </Link>
                                </li>



                                {/*nk-menu-item*/}
                                <li className="nk-menu-heading">
                                    <h6 className="overline-title">Other</h6>
                                </li>
                                <li className="nk-menu-item">
                                    <a className="nk-menu-link">
                                        <span className="nk-menu-icon"><em
                                            className="icon ni ni-chat-circle"></em></span>
                                        <span className="nk-menu-text">Customer Support</span>
                                    </a>
                                </li>
                            </ul>
                            {/*nk-menu*/}
                        </div>
                        {/*nk-sidebar-menu*/}

                    </div>
                    {/*nk-sidebar-content*/}
                </div>

            </div>

        </div>
    )
}

export default Sidebar
