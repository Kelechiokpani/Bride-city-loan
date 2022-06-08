import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const AdminSidebar: FC = () => {
  return (
    <>
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
        <div className="nk-sidebar-element">
          <div className="nk-sidebar-body" data-simplebar>
            <div className="nk-sidebar-content">
              <div className="nk-sidebar-menu">
                <ul className="nk-menu">

                  <li className="nk-menu-item">
                    <Link href="/admin/">
                      <a className="nk-menu-link">
                        <span className="nk-menu-icon"><em className="icon ni ni-home"></em></span>
                        <span className="nk-menu-text">DashBoard</span>
                      </a>
                    </Link>
                  </li>

                  <li className="nk-menu-item">
                    <Link href="/admin/users">
                      <a className="nk-menu-link">
                        <span className="nk-menu-icon"><em className="icon ni ni-users"></em></span>
                        <span className="nk-menu-text">Users</span>
                      </a>
                    </Link>
                  </li>
                  <li className="nk-menu-item">
                    <Link href="/admin/attendantlog">
                      <a href="" className="nk-menu-link">
                        <span className="nk-menu-icon"><em
                          className="icon ni ni-wallet-alt"></em></span>
                        <span className="nk-menu-text">Attendant Log</span>
                      </a>

                    </Link>
                  </li>
                  <li className="nk-menu-item">
                    <Link href="/admin/applicationlist">
                      <a href="" className="nk-menu-link">
                        <span className="nk-menu-icon"><em className="icon ni ni-coins"></em></span>
                        <span className="nk-menu-text">Loan Applications</span>
                      </a>
                    </Link>
                  </li>
                  <li className="nk-menu-item">
                    <Link href="/transactions/pendingloan">
                      <a href="" className="nk-menu-link">
                        <span className="nk-menu-icon"><em className="icon ni ni-repeat"></em></span>
                        <span className="nk-menu-text">Pending Loans</span>
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
                </ul>
                {/*nk-menu*/}
              </div>
              {/*nk-sidebar-menu*/}

            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default AdminSidebar
