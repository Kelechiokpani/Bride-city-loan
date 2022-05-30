import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import 'simplebar';
import 'simplebar/dist/simplebar.css';

const Sidebar: FC = () => {

    return (
        <div className="nk-sidebar nk-sidebar-fixed " data-content="sidebarMenu">
            <div className="nk-sidebar-element nk-sidebar-head">
                <div className="nk-sidebar-brand">
                    <a href="/" className="logo-link nk-sidebar-logo" style={{ paddingTop: "10vh" }}>
                        <Image className="logo-light logo-img" src="/images/logo.png"
                            // srcSet="/images/logo2x.png 2x"
                            alt="logo"
                            width={60}
                            height={20} />
                        <Image className="logo-dark logo-img" src="/images/logo-dark.png" alt="logo"
                            // srcSet="/images/logo-dark2x.png 2x" alt="logo-dark"
                            width={120}
                            height={50} />
                        <span className="nio-version">Bride City</span>
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
                                    <div className="user-balance">210,4095 <small
                                        className="currency currency-btc">Naira</small></div>

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
                                        <span className="sub-text">100,000 <span
                                            className="currency currency-btc">Naira</span></span>
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
                                    <li><a href=""><em
                                        className="icon ni ni-user-alt"></em><span>View Profile</span></a></li>
                                    <li><a href=""><em
                                        className="icon ni ni-setting-alt"></em><span>Account Setting</span></a></li>
                                    <li><a href=""><em
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
                                        <a href="" className="nk-menu-link">
                                            <span className="nk-menu-icon">
                                                <em className="icon ni ni-dashboard"> </em>
                                            </span>
                                            <span className="nk-menu-text">Overview</span>
                                        </a>

                                    </Link>
                                </li>

                                <li className="nk-menu-item">
                                    <Link href="/account">
                                        <a href="" className="nk-menu-link">
                                            <span className="nk-menu-icon"><em className="icon ni ni-account-setting"></em></span>
                                            <span className="nk-menu-text">My Profile</span>
                                        </a>
                                    </Link>
                                </li>

                                <li className="nk-menu-item">
                                    <Link href="/onboarding/kyc">
                                        <a href="" className="nk-menu-link">
                                            <span className="nk-menu-icon"><em className="icon ni ni-user-c"></em></span>
                                            <span className="nk-menu-text">KYC</span>
                                        </a>
                                    </Link>
                                </li>

                                <li className="nk-menu-item">
                                    <Link href="/transactions/unpaidLoan">
                                        <a href="" className="nk-menu-link">
                                            <span className="nk-menu-icon"><em className="icon ni ni-coins"></em></span>
                                            <span className="nk-menu-text">Unpaid Loan</span>
                                        </a>
                                    </Link>
                                </li>
                                <li className="nk-menu-item">
                                    <Link href="/transactions/withdrawal">
                                        <a href="" className="nk-menu-link">
                                            <span className="nk-menu-icon"><em className="icon ni ni-repeat"></em></span>
                                            <span className="nk-menu-text">Withdrawal</span>
                                        </a>
                                    </Link>
                                </li>  <li className="nk-menu-item">
                                    <Link href="/transactions">
                                        <a href="" className="nk-menu-link">
                                            <span className="nk-menu-icon">  <em
                                                className="icon ni ni-wallet-alt"></em></span>
                                            <span className="nk-menu-text">Transactions</span>
                                        </a>
                                    </Link>
                                </li>
                                <li className="nk-menu-item">
                                    <a href="" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em
                                            className="icon ni ni-chat-circle"></em></span>
                                        <span className="nk-menu-text">Customer Support</span>
                                    </a>
                                </li>

                                <li className="nk-menu-item has-sub">
                                    <a href="#" className="nk-menu-link nk-menu-toggle">
                                        <span className="nk-menu-icon"><em className="icon ni ni-files"></em></span>
                                        <span className="nk-menu-text">Additional Pages</span>
                                    </a>
                                    <ul className="nk-menu-sub">
                                        <li className="nk-menu-item">
                                            <a href="" className="nk-menu-link"><span
                                                className="nk-menu-text">Welcome</span></a>
                                        </li>
                                        <li className="nk-menu-item">
                                            <a href="" className="nk-menu-link"><span
                                                className="nk-menu-text">KYC - Get Started</span></a>
                                        </li>
                                        <li className="nk-menu-item">
                                            <a href="" className="nk-menu-link"><span
                                                className="nk-menu-text">KYC - Application Form</span></a>
                                        </li>
                                    </ul>
                                    {/*nk-menu-sub*/}
                                </li>
                                {/*nk-menu-item*/}
                                <li className="nk-menu-heading">
                                    <h6 className="overline-title">Return to</h6>
                                </li>
                                <li className="nk-menu-item">
                                    <a href="" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-dashlite"></em></span>
                                        <span className="nk-menu-text">Main Dashboard</span>
                                    </a>
                                </li>
                                <li className="nk-menu-item">
                                    <a href="" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-layers"></em></span>
                                        <span className="nk-menu-text">All Components</span>
                                    </a>
                                </li>
                            </ul>
                            {/*nk-menu*/}
                        </div>
                        {/*nk-sidebar-menu*/}
                        <div className="nk-sidebar-widget">
                            <div className="widget-title">
                                <h6 className="overline-title">Crypto Accounts <span>(4)</span></h6>
                                <a href="#" className="link">View All</a>
                            </div>
                            <ul className="wallet-list">
                                <li className="wallet-item">
                                    <a href="#">
                                        <div className="wallet-icon"><em className="icon ni ni-sign-kobo"></em></div>
                                        <div className="wallet-text">
                                            <h6 className="wallet-name">NioWallet</h6>
                                            <span className="wallet-balance">30.959040 <span
                                                className="currency currency-nio">NIO</span></span>
                                        </div>
                                    </a>
                                </li>
                                <li className="wallet-item">
                                    <a href="#">
                                        <div className="wallet-icon"><em className="icon ni ni-sign-btc"></em></div>
                                        <div className="wallet-text">
                                            <h6 className="wallet-name">Bitcoin Wallet</h6>
                                            <span className="wallet-balance">0.0495950 <span
                                                className="currency currency-btc">BTC</span></span>
                                        </div>
                                    </a>
                                </li>
                                <li className="wallet-item wallet-item-add">
                                    <a href="#">
                                        <div className="wallet-icon"><em className="icon ni ni-plus"></em></div>
                                        <div className="wallet-text">
                                            <h6 className="wallet-name">Add another wallet</h6>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/*nk-sidebar-widget*/}
                        <div className="nk-sidebar-footer">
                            <ul className="nk-menu nk-menu-footer">
                                <li className="nk-menu-item">
                                    <a href="#" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-help-alt"></em></span>
                                        <span className="nk-menu-text">Support</span>
                                    </a>
                                </li>

                            </ul>
                            {/*nk-footer-menu*/}
                        </div>
                        {/*nk-sidebar-footer*/}
                    </div>
                    {/*nk-sidebar-content*/}
                </div>

            </div>

        </div>
    )
}

export default Sidebar
