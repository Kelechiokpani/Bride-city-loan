import { FC, NextPage } from "next";
import "primeicons/primeicons.css";
import React, { useContext, useState, useEffect } from "react";
import { LoanContext } from "./context/LoanContext";
// import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import EditLoan from "./adminlogs/EditLoan";
import { boolean } from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap";

const AdminApplicationList: FC = () => {
  const { loanapproval } = useContext(LoanContext);
  const [modal, setModal] = React.useState(false);
  const [displayBasic, setdisplayBasic] = useState(false);

  const toggle = () => setModal(!modal);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="nk-block">
      <div className="card card-bordered card-stretch">
        <div className="card-inner-group">
          <div className="card-inner">
            <div className="card-title-group">
              <div className="card-title">
                <h5 className="title">Loan Application Log</h5>
              </div>
              <div className="card-tools me-n1">
                <ul className="btn-toolbar">
                  <li>
                    <a
                      href="#"
                      className="btn btn-icon search-toggle toggle-search"
                      data-target="search"
                    >
                      <em className="icon ni ni-search"></em>
                    </a>
                  </li>

                  <li className="btn-toolbar-sep"></li>

                  <li>
                    <div className="dropdown">
                      <a
                        href="#"
                        className="btn btn-trigger btn-icon dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        <em className="icon ni ni-setting"></em>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end dropdown-menu-xs">
                        <ul className="link-check">
                          <li>
                            <span>Show</span>
                          </li>
                          <li className="active">
                            <a href="#">10</a>
                          </li>
                          <li>
                            <a href="#">20</a>
                          </li>
                          <li>
                            <a href="#">50</a>
                          </li>
                        </ul>
                        <ul className="link-check">
                          <li>
                            <span>Order</span>
                          </li>
                          <li className="active">
                            <a href="#">DESC</a>
                          </li>
                          <li>
                            <a href="#">ASC</a>
                          </li>
                        </ul>
                        <ul className="link-check">
                          <li>
                            <span>Density</span>
                          </li>
                          <li className="active">
                            <a href="#">Regular</a>
                          </li>
                          <li>
                            <a href="#">Compact</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card-search search-wrap" data-search="search">
                <div className="search-content">
                  <a
                    href="#"
                    className="search-back btn btn-icon toggle-search"
                    data-target="search"
                  >
                    <em className="icon ni ni-arrow-left"></em>
                  </a>
                  <input
                    type="text"
                    className="form-control form-control-sm border-transparent form-focus-none"
                    placeholder="Quick search by order id"
                  />
                  <button className="search-submit btn btn-icon">
                    <em className="icon ni ni-search"></em>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="card-inner p-0">
            <table className="table table-tranx">
              <thead>
                <tr className="tb-tnx-head">
                  <th className="tb-tnx-id">
                    <span className="">User Id</span>
                  </th>
                  <th className="tb-tnx-info">
                    <span className="tb-tnx-desc d-none d-sm-inline-block">
                      <span>Customer Name</span>
                    </span>
                    <span className="tb-tnx-desc d-none d-sm-inline-block">
                      <span>Loan Category</span>
                    </span>
                  </th>
                  <th className="tb-tnx-info">
                    <span className="tb-tnx-desc d-none d-sm-inline-block">
                      <span>Loan Amount</span>
                    </span>
                    <span className="tb-tnx-desc d-none d-sm-inline-block">
                      <span>Loan status</span>
                    </span>
                  </th>

                  <th className="tb-tnx-amount is-alt">
                    <span className="tb-tnx-total">Approved Amount</span>
                    <span className="tb-tnx-status d-none d-md-inline-block">
                      Attendant
                    </span>
                  </th>
                  <th className="tb-tnx-action">
                    <span>&nbsp;</span>
                  </th>
                  <th className="tb-tnx-action">
                    <span>&nbsp;</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {loanapproval.map((loandata: any) => (
                  <tr key={loandata.id} className="tb-tnx-item">
                    <td className="tb-tnx-id">
                      <a href="#">
                        <span>4947</span>
                      </a>
                    </td>
                    <td className="tb-tnx-info">
                      <div className="tb-tnx-desc">
                        <span className="title">{loandata.customerName}</span>
                      </div>
                      <div className="tb-tnx-desc">
                        <span className="title">{loandata.loanCatergory}</span>
                      </div>
                    </td>

                    <td className="tb-tnx-amount is-alt">
                      <div className="tb-tnx-total">
                        <span className="amount">{loandata.loanAmount}</span>
                      </div>
                      <div className="tb-tnx-status">
                        <span className="badge badge-dot bg-warning">
                          {loandata.approvalstatus}
                        </span>
                      </div>
                    </td>
                    <td className="tb-tnx-amount is-alt">
                      <div className="tb-tnx-total">
                        <span className="amount">
                          {" "}
                          {loandata.approvalAmount}
                        </span>
                      </div>
                      <div className="tb-tnx-status">
                        <span className="title">{loandata.attendant}</span>
                      </div>
                    </td>

                    <td className="tb-tnx-action">
                      <Button
                        style={{ marginRight: "1rem" }}
                        className="btn text-warning btn-act"
                        // onClick={handleShow}
                        onClick={toggle}
                      >
                        <i className="pi pi-user-edit" />
                        <span>Edit</span>
                      </Button>
                    </td>
                    <td className="tb-tnx-action">
                      <Button
                        className="btn text-danger btn-act"
                        data-toggle="modal"
                        onClick={toggle}
                      >
                        <i className="pi pi-trash" />
                      </Button>
                    </td>
                    <Modal show={show} isOpen={modal} toggle={toggle}>
                      <ModalHeader toggle={toggle}>Loan Approval</ModalHeader>
                      <ModalBody>
                        <EditLoan />
                      </ModalBody>
                      <ModalFooter>
                        <Button color="secondary" onClick={toggle}>
                          Cancel
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card-inner">
            <ul className="pagination justify-content-center justify-content-md-start">
              <li className="page-item">
                <a className="page-link" href="#">
                  Prev
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <span className="page-link">
                  <em className="icon ni ni-more-h"></em>
                </span>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  6
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  7
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminApplicationList;
