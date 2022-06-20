import { NextPage } from "next";
import AdminLayout from "../../../../components/Layouts/admin";
import Link from "next/link";
import { useRouter } from "next/router";



const AdminUserActivity: NextPage = () => {
  const router = useRouter()
  const attendantId = router.query.attendantId;


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
                          <h3>Attendant Id Number {attendantId}</h3>
                          <h4 className="nk-block-title">Customers Assingned to:</h4>
                          <div className="nk-block-des">
                            <p>Recent activities log. <span className="text-soft"><em
                              className="icon ni ni-info"></em></span></p>
                          </div>
                        </div>
                        <div className="nk-block-head-content align-self-start d-lg-none">
                          <a href="#" className="toggle btn btn-icon btn-trigger mt-n1" data-target="userAside"><em
                            className="icon ni ni-menu-alt-r"></em></a>
                        </div>
                      </div>
                    </div>
                    <div className="nk-block card card-bordered">
                      <table className="table table-ulogs">
                        <thead className="table-light">
                          <tr>
                            <th className="tb-col-os"><span className="overline-title">Customer Name</span></th>
                            <th className="tb-col-ip"><span className="overline-title">Loan Amount</span></th>
                            <th className="tb-col-ip"><span className="overline-title">Loan Package</span></th>
                            <th className="tb-col-time"><span className="overline-title">Requirement</span></th>
                            <th className="tb-col-action"><span className="overline-title">&nbsp;</span></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="tb-col-os">Philips james igwe</td>
                            <td className="tb-col-ip"><span className="sub-text">250,000</span></td>
                            <td className="tb-col-time"><span className="sub-text">Basic</span></td>
                            <td className="tb-col-time"><span className="sub-text">Statement of Account</span></td>

                          </tr>
                          <tr>
                            <td className="tb-col-os">justin igwe</td>
                            <td className="tb-col-ip"><span className="sub-text">120,000</span></td>
                            <td className="tb-col-time"><span className="sub-text">Gold </span></td>
                            <td className="tb-col-time"><span className="sub-text">Coleteral  </span></td>

                          </tr>
                          <tr>
                            <td className="tb-col-os">Philips james </td>
                            <td className="tb-col-ip"><span className="sub-text">250,000</span></td>
                            <td className="tb-col-time"><span className="sub-text">Gold </span></td>
                            <td className="tb-col-time"><span className="sub-text">Statement of Account</span></td>

                          </tr>
                          <tr>
                            <td className="tb-col-os">Philips james igwe</td>
                            <td className="tb-col-ip"><span className="sub-text">250,000</span></td>
                            <td className="tb-col-time"><span className="sub-text">Gold </span></td>
                            <td className="tb-col-time"><span className="sub-text">Guarantor</span></td>

                          </tr>
                          <tr>
                            <td className="tb-col-os">justin igwe</td>
                            <td className="tb-col-ip"><span className="sub-text">120,000</span></td>
                            <td className="tb-col-time"><span className="sub-text">Bronze</span></td>
                            <td className="tb-col-time"><span className="sub-text">Statement of Account</span></td>

                          </tr>
                          <tr>
                            <td className="tb-col-os">Philips james </td>
                            <td className="tb-col-ip"><span className="sub-text">250,000</span></td>
                            <td className="tb-col-time"><span className="sub-text">Bronze</span></td>
                            <td className="tb-col-time"><span className="sub-text">Guarantor</span></td>

                          </tr>
                          <tr>
                            <td className="tb-col-os">Philips james igwe</td>
                            <td className="tb-col-ip"><span className="sub-text">250,000</span></td>
                            <td className="tb-col-time"><span className="sub-text">Bronze</span></td>
                            <td className="tb-col-time"><span className="sub-text">Coleteral</span></td>


                          </tr>
                          <tr>
                            <td className="tb-col-os">justin igwe</td>
                            <td className="tb-col-ip"><span className="sub-text">120,000</span></td>
                            <td className="tb-col-time"><span className="sub-text">Bronze</span></td>
                            <td className="tb-col-time"><span className="sub-text">Guarantor</span></td>

                          </tr>
                          <tr>
                            <td className="tb-col-os">Philips james </td>
                            <td className="tb-col-ip"><span className="sub-text">250,000</span></td>
                            <td className="tb-col-time"><span className="sub-text">Bronze </span> </td>
                            <td className="tb-col-time"><span className="sub-text">Coleteral </span> </td>

                          </tr>
                        </tbody>
                      </table>
                    </div>

                  </div>

                  <div
                    className="card-aside card-aside-left user-aside toggle-slide toggle-slide-left toggle-break-lg"
                    data-toggle-body="true" data-content="userAside" data-toggle-screen="lg"
                    data-toggle-overlay="true">
                    <div className="card-inner-group">

                      <div className="card-inner">
                        <div className="user-account-info py-0">
                          <h6 className="overline-title-alt">Attendant Detail</h6>
                        </div>
                      </div>
                      <div className="card-inner">
                        <div className="user-card">
                          <div className="user-avatar bg-primary">
                            <span>SJ</span>
                          </div>
                          <div className="user-info">
                            <span className="lead-text">Sarah Igwe justice</span>
                            <span className="sub-text">SarahIgwe@gmail.com</span>
                          </div>
                          <div className="user-action">
                            <div className="dropdown">
                              <a className="btn btn-icon btn-trigger me-n2" data-bs-toggle="dropdown" href="#"><em
                                className="icon ni ni-more-v"></em></a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <ul className="link-list-opt no-bdr">
                                  <li><a href="#"><em
                                    className="icon ni ni-camera-fill"></em><span>Change Photo</span></a></li>
                                  <li><a href="#"><em
                                    className="icon ni ni-edit-fill"></em><span>Update Profile</span></a></li>
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

            </div>

          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminUserActivity
