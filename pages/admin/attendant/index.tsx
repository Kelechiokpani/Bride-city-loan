import { NextPage } from "next";
import AdminLayout from "../../../components/Layouts/admin";
import Link from "next/link";

const AdminAttendant: NextPage = () => {
  return (
    <AdminLayout>
      <div className="nk-content nk-content-fluid">
        <div className="container-xl wide-lg">
          <div className="nk-content-body">
            <div className="nk-block">
              <div className="card card-bordered">
                <div className="card-aside-wrap">
                  <div className="card-inner card-inner-lg">
                    <div className="nk-block-head nk-block-head-lg">
                      <div className="nk-block-between">
                        <div className="nk-block-head-content">
                          <h4 className="nk-block-title">Bride City</h4>
                          <div className="nk-block-des">
                            <p>
                              Please Make Use You Have Full details Of your
                              Assigned customers
                              <span className="text-soft">
                                <em className="icon ni ni-info"></em>
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="nk-block-head-content align-self-start d-lg-none">
                          <a
                            href="#"
                            className="toggle btn btn-icon btn-trigger mt-n1"
                            data-target="userAside"
                          >
                            <em className="icon ni ni-menu-alt-r"></em>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <div className="nk-block card card-bordered">
                                            <table className="table table-ulogs">
                                                <thead className="table-light">
                                                    <tr>
                                                        <th className="tb-col-os">
                                                            <span className="overline-title">customer Name </span>
                                                        </th>
                                                        <th className="tb-col-ip"><span className="overline-title">Loan Request</span></th>
                                                        <th className="tb-col-time"><span className="overline-title">Assigned</span></th>
                                                        <th className="tb-col-action"><span className="overline-title">&nbsp;</span></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="tb-col-os">Sunday williams</td>
                                                        <td className="tb-col-ip">
                                                            <span className="sub-text">200,000</span>
                                                        </td>
                                                        <td className="tb-col-time">
                                                            <span className="sub-text">Nov 20, 2019</span>
                                                        </td>
                                                        <td className="tb-col-action"></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tb-col-os">philips james</td>
                                                        <td className="tb-col-ip"><span className="sub-text">140,000</span></td>
                                                        <td className="tb-col-time">
                                                            <span className="sub-text">Nov 20, 2019 </span>
                                                        </td>
                                                        <td className="tb-col-action">
                                                            <a href="#" className="link-cross me-sm-n1"><em
                                                                className="icon ni ni-cross"></em></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tb-col-os">Chrome on iMac</td>
                                                        <td className="tb-col-ip"><span className="sub-text">192.149.122.128</span></td>
                                                        <td className="tb-col-time"><span className="sub-text">Nov 12, 2019 <span
                                                            className="d-none d-sm-inline-block">08:56 PM</span></span></td>
                                                        <td className="tb-col-action"><a href="#" className="link-cross me-sm-n1"><em
                                                            className="icon ni ni-cross"></em></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tb-col-os">Chrome on Window</td>
                                                        <td className="tb-col-ip"><span className="sub-text">192.149.122.128</span></td>
                                                        <td className="tb-col-time"><span className="sub-text">Nov 03, 2019 <span
                                                            className="d-none d-sm-inline-block">04:29 PM</span></span></td>
                                                        <td className="tb-col-action"><a href="#" className="link-cross me-sm-n1"><em
                                                            className="icon ni ni-cross"></em></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tb-col-os">Mozilla on Window</td>
                                                        <td className="tb-col-ip"><span className="sub-text">86.188.154.225</span></td>
                                                        <td className="tb-col-time"><span className="sub-text">Oct 29, 2019 <span
                                                            className="d-none d-sm-inline-block">09:38 AM</span></span></td>
                                                        <td className="tb-col-action"><a href="#" className="link-cross me-sm-n1"><em
                                                            className="icon ni ni-cross"></em></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tb-col-os">Chrome on iMac</td>
                                                        <td className="tb-col-ip"><span className="sub-text">192.149.122.128</span></td>
                                                        <td className="tb-col-time"><span className="sub-text">Oct 23, 2019 <span
                                                            className="d-none d-sm-inline-block">04:16 PM</span></span></td>
                                                        <td className="tb-col-action"><a href="#" className="link-cross me-sm-n1"><em
                                                            className="icon ni ni-cross"></em></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tb-col-os">Chrome on Window</td>
                                                        <td className="tb-col-ip"><span className="sub-text">192.149.122.128</span></td>
                                                        <td className="tb-col-time"><span className="sub-text">Oct 15, 2019 <span
                                                            className="d-none d-sm-inline-block">11:41 PM</span></span></td>
                                                        <td className="tb-col-action"><a href="#" className="link-cross me-sm-n1"><em
                                                            className="icon ni ni-cross"></em></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tb-col-os">Mozilla on Window</td>
                                                        <td className="tb-col-ip"><span className="sub-text">86.188.154.225</span></td>
                                                        <td className="tb-col-time"><span className="sub-text">Oct 13, 2019 <span
                                                            className="d-none d-sm-inline-block">05:43 AM</span></span></td>
                                                        <td className="tb-col-action"><a href="#" className="link-cross me-sm-n1"><em
                                                            className="icon ni ni-cross"></em></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tb-col-os">Chrome on iMac</td>
                                                        <td className="tb-col-ip"><span className="sub-text">192.149.122.128</span></td>
                                                        <td className="tb-col-time"><span className="sub-text">Oct 03, 2019 <span
                                                            className="d-none d-sm-inline-block">04:12 AM</span></span></td>
                                                        <td className="tb-col-action"><a href="#" className="link-cross me-sm-n1"><em
                                                            className="icon ni ni-cross"></em></a></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div> */}
                  </div>

                  <div
                    className="card-aside card-aside-left user-aside toggle-slide toggle-slide-left toggle-break-lg"
                    data-toggle-body="true"
                    data-content="userAside"
                    data-toggle-screen="lg"
                    data-toggle-overlay="true"
                  >
                    <div className="card-inner-group">
                      <div className="card-inner p-0">
                        <ul className="link-list-menu">
                          <li>
                            <Link href={"/admin/attendant/1"}>
                              <a>
                                <em className="icon ni ni-user-fill-c"></em>
                                <span>Attendant 1</span>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href={"/admin/attendant/2"}>
                              <a>
                                <em className="icon ni ni-user-fill-c"></em>
                                <span>Attendant 2</span>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href={"/admin/attendant/3"}>
                              <a>
                                <em className="icon ni ni-user-fill-cicon ni ni-user-fill-c"></em>
                                <span>Attendant 3</span>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href={"/admin/attendant/4"}>
                              <a>
                                <em className="icon ni ni-user-fill-cicon ni ni-user-fill-c"></em>
                                <span>Attendant 4</span>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href={"/admin/attendant/5"}>
                              <a>
                                <em className="icon ni ni-user-fill-cicon ni ni-user-fill-c"></em>
                                <span>Attendant 5</span>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href={"/admin/attendant/6"}>
                              <a>
                                <em className="icon ni ni-user-fill-cicon ni ni-user-fill-c"></em>
                                <span>Attendant 6</span>
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminAttendant;
