import { NextPage } from "next";
import LoanContextProvider from "../../components/context/LoanContext";
import AdminApplicationList from "../../components/ApplicationList";
import AdminLayout from "../../components/Layouts/admin";

const Application: NextPage = () => {
  return (
    <AdminLayout>
      <div className="nk-content nk-content-fluid">
        <div className="container-xl wide-lg">
          <div className="nk-content-body">
            <div className="nk-block-head nk-block-head-sm">
              <div className="nk-block-between g-3">
                <div className="nk-block-head-content">
                  <h3 className="nk-block-title page-title">
                    Application History
                  </h3>
                </div>

                <div className="nk-block-head-content">
                  <ul className="nk-block-tools g-3">
                    <li>
                      <div className="drodown">
                        <a
                          href="#"
                          className="dropdown-toggle btn btn-icon btn-primary"
                          data-bs-toggle="dropdown"
                        >
                          <em className="icon ni ni-plus"></em>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <ul className="link-list-opt no-bdr">
                            <li>
                              <a href="#">
                                <span>Add User</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>Assign user to Attendant</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>Add attendant</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <LoanContextProvider>
              <AdminApplicationList />
            </LoanContextProvider>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Application;
