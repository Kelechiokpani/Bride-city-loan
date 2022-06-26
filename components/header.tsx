import { useMutation, useQuery } from "@apollo/client";
import Link from "next/link";
import Router from "next/router";
import { FC, useEffect, useState } from "react";
import { LOGOUT } from "../graphql/mutations";
import { GET_CURRENT_USER } from "../graphql/queries";
import { User } from "../graphql/types";
import Logo from "./logo";
import {toCurrency} from "../utils/formatter";

const Header: FC = () => {
  const { data } = useQuery(GET_CURRENT_USER);
  const [logout] = useMutation(LOGOUT);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (data && data.getCurrentUser) {
      setUser(data.getCurrentUser as User);
    }
  }, [data]);

  const signOut = () => {
    logout().finally(() => Router.push("/auth/login"));
  };
  return (
    <>
      {/*main header @s*/}
      <div className="nk-header nk-header-fluid nk-header-fixed is-light">
        <div className="container-fluid">
          <div className="nk-header-wrap">
            <div className="nk-menu-trigger d-xl-none ms-n1">
              <a
                href="/admin"
                className="nk-nav-toggle nk-quick-nav-icon"
                data-target="sidebarMenu"
              >
                <em className="icon ni ni-menu"></em>
              </a>
            </div>

            <div className="nk-header-brand d-xl-none">
              <Logo />
            </div>
            <div className="nk-header-news d-none d-xl-block">
              <div className="nk-news-list">
                <a className="nk-news-item" href="#">
                  <div className="nk-news-icon">
                    <em className="icon ni ni-card-view"></em>
                  </div>
                  <div className="nk-news-text">
                    <p>
                      Do you know the latest update of 2022?{" "}
                      <span>
                        {" "}
                        A overview of our is now available on YouTube
                      </span>
                    </p>
                    <em className="icon ni ni-external"></em>
                  </div>
                </a>
              </div>
            </div>
            <div className="nk-header-tools">
              <ul className="nk-quick-nav">
                <li className="dropdown user-dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <div className="user-toggle">
                      <div className="user-avatar sm">
                        <em className="icon ni ni-user-alt"></em>
                      </div>
                      <div className="user-info d-none d-md-block">
                        <div className="user-status user-status-unverified">
                          Unverified
                        </div>
                        <div className="user-name dropdown-indicator capitalize">
                          {user?.profile?.firstName +
                            " " +
                            user?.profile?.lastName}
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-md dropdown-menu-end dropdown-menu-s1">
                    <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                      <div className="user-card">
                        <div className="user-avatar">
                          <span>AB</span>
                        </div>
                        <div className="nk-header-tools">
                            <ul className="nk-quick-nav">
                                <li className="dropdown user-dropdown">
                                    <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
                                        <div className="user-toggle">
                                            <div className="user-avatar sm">
                                                <em className="icon ni ni-user-alt"></em>
                                            </div>
                                            <div className="user-info d-none d-md-block">
                                                <div className="user-status user-status-unverified">Unverified</div>
                                                <div className="user-name dropdown-indicator capitalize">{user?.profile?.firstName + ' ' + user?.profile?.lastName}</div>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-md dropdown-menu-end dropdown-menu-s1">
                                        <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                                            <div className="user-card">
                                                <div className="user-avatar">
                                                    <span>AB</span>
                                                </div>
                                                <div className="user-info">
                                                    <span className="lead-text capitalize">{user?.profile?.firstName + ' ' + user?.profile?.lastName}</span>
                                                    <span className="sub-text">{user?.email}</span>
                                                </div>
                                            </div>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-md dropdown-menu-end dropdown-menu-s1">
                                            <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                                                <div className="user-card">
                                                    <div className="user-avatar">
                                                        <span>AB</span>
                                                    </div>
                                                    <div className="user-info">
                                                        <span className="lead-text capitalize">{user?.profile?.firstName + ' ' + user?.profile?.lastName}</span>
                                                        <span className="sub-text">{user?.email}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown-inner user-account-info">
                                                <h6 className="overline-title-alt">Account Balance</h6>
                                                <div className="user-balance">{toCurrency(100000)} </div>

                                            <a href="#" className="link"><span>Withdraw Funds</span> <em
                                                className="icon ni ni-wallet-out"></em></a>
                                        </div>
                                        <div className="dropdown-inner">
                                            <ul className="link-list">
                                                <li>
                                                    <Link href={'/account'}>
                                                        <a>
                                                            <em className="icon ni ni-user-alt"></em>
                                                            <span>View Profile</span>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={'/account/security'}>
                                                        <a>
                                                            <em className="icon ni ni-setting-alt"></em><span>Account Security</span>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={'/account/activity'}>
                                                        <a>
                                                            <em className="icon ni ni-activity-alt"></em>
                                                            <span>Login Activity</span>
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="dropdown-inner">
                                            <ul className="link-list">
                                                <li>
                                                    <a className="pointer" onClick={signOut}>
                                                        <em className="icon ni ni-signout"></em>
                                                        <span>Sign out</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown notification-dropdown me-n1">
                                    <a href="#" className="dropdown-toggle nk-quick-nav-icon" data-bs-toggle="dropdown">
                                        <div className="icon-status icon-status-info"><em
                                            className="icon ni ni-bell"></em></div>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-xl dropdown-menu-end dropdown-menu-s1">
                                        <div className="dropdown-head">
                                            <span className="sub-title nk-dropdown-title">Notifications</span>
                                            <a href="#">Mark All as Read</a>
                                        </div>
                                        <div className="dropdown-body">
                                            <div className="nk-notification">
                                                <div className="nk-notification-item dropdown-inner">
                                                    <div className="nk-notification-icon">
                                                        <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                                    </div>
                                                    <div className="nk-notification-content">
                                                        <div className="nk-notification-text">You have requested
                                                            to <span>Widthdrawl</span></div>
                                                        <div className="nk-notification-time">2 hrs ago</div>
                                                    </div>
                                                </div>

                                                <div className="nk-notification-item dropdown-inner">
                                                    <div className="nk-notification-icon">
                                                        <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                                    </div>
                                                    <div className="nk-notification-content">
                                                        <div
                                                            className="nk-notification-text">Your <span>Deposit Order</span> is
                                                            placed
                                                        </div>
                                                        <div className="nk-notification-time">2 hrs ago</div>
                                                    </div>
                                                </div>

                      <a href="#" className="link">
                        <span>Withdraw Funds</span>{" "}
                        <em className="icon ni ni-wallet-out"></em>
                      </a>
                    </div>
                    <div className="dropdown-inner">
                      <ul className="link-list">
                        <li>
                          <Link href={"/account"}>
                            <a>
                              <em className="icon ni ni-user-alt"></em>
                              <span>View Profile</span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href={"/account/security"}>
                            <a>
                              <em className="icon ni ni-setting-alt"></em>
                              <span>Account Security</span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href={"/account/activity"}>
                            <a>
                              <em className="icon ni ni-activity-alt"></em>
                              <span>Login Activity</span>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown-inner">
                      <ul className="link-list">
                        <li>
                          <a className="pointer" onClick={signOut}>
                            <em className="icon ni ni-signout"></em>
                            <span>Sign out</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="dropdown notification-dropdown me-n1">
                  <a
                    href="#"
                    className="dropdown-toggle nk-quick-nav-icon"
                    data-bs-toggle="dropdown"
                  >
                    <div className="icon-status icon-status-info">
                      <em className="icon ni ni-bell"></em>
                    </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-xl dropdown-menu-end dropdown-menu-s1">
                    <div className="dropdown-head">
                      <span className="sub-title nk-dropdown-title">
                        Notifications
                      </span>
                      <a href="#">Mark All as Read</a>
                    </div>
                    <div className="dropdown-body">
                      <div className="nk-notification">
                        <div className="nk-notification-item dropdown-inner">
                          <div className="nk-notification-icon">
                            <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                          </div>
                          <div className="nk-notification-content">
                            <div className="nk-notification-text">
                              You have requested to <span>Widthdrawl</span>
                            </div>
                            <div className="nk-notification-time">
                              2 hrs ago
                            </div>
                          </div>
                        </div>

                        <div className="nk-notification-item dropdown-inner">
                          <div className="nk-notification-icon">
                            <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                          </div>
                          <div className="nk-notification-content">
                            <div className="nk-notification-text">
                              Your <span>Deposit Order</span> is placed
                            </div>
                            <div className="nk-notification-time">
                              2 hrs ago
                            </div>
                          </div>
                        </div>

                        <div className="nk-notification-item dropdown-inner">
                          <div className="nk-notification-icon">
                            <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                          </div>
                          <div className="nk-notification-content">
                            <div className="nk-notification-text">
                              You have requested to <span>Widthdrawl</span>
                            </div>
                            <div className="nk-notification-time">
                              2 hrs ago
                            </div>
                          </div>
                        </div>

                        <div className="nk-notification-item dropdown-inner">
                          <div className="nk-notification-icon">
                            <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                          </div>
                          <div className="nk-notification-content">
                            <div className="nk-notification-text">
                              Your <span>Deposit Order</span> is placed
                            </div>
                            <div className="nk-notification-time">
                              2 hrs ago
                            </div>
                          </div>
                        </div>

                        <div className="nk-notification-item dropdown-inner">
                          <div className="nk-notification-icon">
                            <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                          </div>
                          <div className="nk-notification-content">
                            <div className="nk-notification-text">
                              You have requested to <span>Widthdrawl</span>
                            </div>
                            <div className="nk-notification-time">
                              2 hrs ago
                            </div>
                          </div>
                        </div>

                        <div className="nk-notification-item dropdown-inner">
                          <div className="nk-notification-icon">
                            <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                          </div>
                          <div className="nk-notification-content">
                            <div className="nk-notification-text">
                              Your <span>Deposit Order</span> is placed
                            </div>
                            <div className="nk-notification-time">
                              2 hrs ago
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="dropdown-foot center">
                      <a href="#">View All</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*main header @e*/}
    </>
  );
};

export default Header;
