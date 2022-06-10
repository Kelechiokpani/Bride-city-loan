import { FC } from "react";
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AdminEditmodal } from "../validations/index";


interface UserSubmitForm {
    selectapprovalstatus: string;
    approvalstatus: string;
    approvalamount: string;
    paybackstatus: string
    date: string;
}

const AdminApplicationList: FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<UserSubmitForm>({
        resolver: yupResolver(AdminEditmodal)
    });
    function FormEdit() {
        const [approvalstatus, setApprovalstatus] = useState([''])
        const [approvalamount, setApprovalamount] = useState('')
        const [paybackstatus, setPaybackstatus] = useState('')
        const [Date, setDate] = useState('')
        const [open, setOpen] = React.useState(false);



        const handleTypeChange = (e: any) => {
            // console.clear()
            setApprovalstatus((e).target.value)
            setApprovalamount((e).target.value);
            setPaybackstatus((e).target.value);
            console.log(JSON.stringify(e.target.value))
        }


        const handleClickOpen = () => { setOpen(true); };
        const handleClose = () => { setOpen(false); };

        const onSubmit = (data: UserSubmitForm) => {
            console.log('UserSubmitForm data', JSON.stringify(data, null, 2))
        }


        return (
            <div>
                <Button onClick={handleClickOpen}>
                    Edit
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Edit Loan Modal</DialogTitle>
                    <DialogContent>
                        <form action="" onSubmit={handleSubmit(onSubmit)} >

                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <div className="form-label-group">
                                            <label className="form-label">Approval Status <span
                                                className="text-danger">*</span></label>
                                        </div>
                                        <div className="form-control-group">

                                            <select

                                                defaultValue={approvalstatus}
                                                {...register('selectapprovalstatus')}
                                                className={`form-control form-control-lg  ${errors.selectapprovalstatus ? 'is-invalid' : ''}`}
                                                // value={input}
                                                // onChange={(e) => setInput(e.target.value)}
                                                onChange={handleTypeChange}
                                            // className="browser-default custom-select bg-select"

                                            >
                                                <option selected></option>
                                                <option value="pending">Pending</option>
                                                <option value="debtor">Debtor</option>
                                                <option value="approved">Approved</option>
                                                <option value="due">Due</option>
                                                <option value="rejected">Rejected</option>

                                            </select>
                                            <div className="invalid-feedback">{errors.selectapprovalstatus?.message}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <div className="form-label-group">
                                            <label className="form-label">Approval Amount<span
                                                className="text-danger">*</span></label>
                                        </div>
                                        <div className="form-control-group">
                                            <input type="text"

                                                {...register('approvalamount')}
                                                onChange={handleTypeChange}
                                                className={`form-control form-control-lg ${errors.approvalamount ? 'is-invalid' : ''}`} />
                                            <div className="invalid-feedback">{errors.approvalamount?.message}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <div className="form-label-group">
                                            <label className="form-label">PayBack Status<span
                                                className="text-danger">*</span></label>
                                        </div>
                                        <div className="form-control-group">
                                            <input type="text"
                                                {...register('paybackstatus')}
                                                onChange={handleTypeChange}
                                                className={`form-control form-control-lg ${errors.paybackstatus ? 'is-invalid' : ''}`} />
                                            <div className="invalid-feedback">{errors.paybackstatus?.message}</div>
                                        </div>
                                    </div>
                                </div>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button type="submit">save</Button>
                                </DialogActions>
                            </div>


                        </form>
                    </DialogContent>

                </Dialog>
            </div>
        );
    }




    return (
        <div className="nk-block">
            <div className="card card-bordered card-stretch">
                <div className="card-inner-group">
                    <div className="card-inner">
                        <div className="card-title-group">
                            <div className="card-title">
                                <h5 className="title">Loan Application History</h5>
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
                                    <th className="tb-tnx-id"><span className="">User Id</span></th>
                                    <th className="tb-tnx-info">
                                        <span className="tb-tnx-desc d-none d-sm-inline-block">
                                            <span>Loan Category</span>
                                        </span>
                                        <span className="tb-tnx-date d-md-inline-block d-none">
                                            <span className="d-md-none">Date</span>
                                            <span className="d-none d-md-block">
                                                <span>Application Date</span>

                                                <span>Approval Date</span>
                                            </span>
                                        </span>
                                    </th>
                                    <th className="tb-tnx-amount is-alt">
                                        <span className="tb-tnx-total">Applicant <br /> Amount</span>
                                        <span className="tb-tnx-status d-none d-md-inline-block">Approval Status</span>
                                    </th>
                                    <th className="tb-tnx-amount is-alt">
                                        <span className="tb-tnx-total">Approval <br /> Amount</span>
                                        <span className="tb-tnx-status d-none d-md-inline-block">PayBack Status</span>
                                    </th>
                                    <th className="tb-tnx-action">
                                        <span>&nbsp;</span>
                                    </th>
                                </tr>

                            </thead>
                            <tbody>
                                <tr className="tb-tnx-item">
                                    <td className="tb-tnx-id">
                                        <a href="#"><span>1001</span></a>
                                    </td>
                                    <td className="tb-tnx-info">
                                        <div className="tb-tnx-desc">
                                            <span className="title">Basic</span>
                                        </div>
                                        <div className="tb-tnx-date">
                                            <span className="date">10-05-2019</span>
                                            <span className="date">10-13-2019</span>
                                        </div>
                                    </td>
                                    <td className="tb-tnx-amount is-alt">
                                        <div className="tb-tnx-total">
                                            <span className="amount">450,000</span>
                                        </div>
                                        <div className="tb-tnx-status">
                                            <span className="badge badge-dot bg-danger">Rejectd</span>

                                        </div>
                                    </td>
                                    <td className="tb-tnx-amount is-alt">
                                        <div className="tb-tnx-total">
                                            <span className="amount">2400,00</span>

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
                                                    <FormEdit />
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="tb-tnx-item">
                                    <td className="tb-tnx-id">
                                        <a href="#"><span>1001</span></a>
                                    </td>
                                    <td className="tb-tnx-info">
                                        <div className="tb-tnx-desc">
                                            <span className="title">Gold</span>
                                        </div>
                                        <div className="tb-tnx-date">
                                            <span className="date">10-05-2019</span>
                                            <span className="date">10-13-2019</span>
                                        </div>
                                    </td>
                                    <td className="tb-tnx-amount is-alt">
                                        <div className="tb-tnx-total">
                                            <span className="amount">600,000</span>
                                        </div>
                                        <div className="tb-tnx-status">
                                            <span className="badge badge-dot bg-success">Accepted</span>

                                        </div>
                                    </td>
                                    <td className="tb-tnx-amount is-alt">
                                        <div className="tb-tnx-total">
                                            <span className="amount">300,000</span>

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
                                                    <FormEdit />
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
                                            <span className="title">Silver</span>
                                        </div>
                                        <div className="tb-tnx-date">
                                            <span className="date">06-19-2021</span>
                                            <span className="date">06-26-2022</span>
                                        </div>
                                    </td>
                                    <td className="tb-tnx-amount is-alt">
                                        <div className="tb-tnx-total">
                                            <span className="amount">340,000</span>
                                        </div>
                                        <div className="tb-tnx-status">
                                            <span
                                                className="badge badge-dot bg-warning">Pending</span>

                                        </div>
                                    </td>
                                    <td className="tb-tnx-amount is-alt">
                                        <div className="tb-tnx-total">
                                            <span className="amount">140,000</span>

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
                                                    <FormEdit />
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="tb-tnx-item">
                                    <td className="tb-tnx-id">
                                        <a href="#"><span>1001</span></a>
                                    </td>
                                    <td className="tb-tnx-info">
                                        <div className="tb-tnx-desc">
                                            <span className="title">Gold</span>
                                        </div>
                                        <div className="tb-tnx-date">
                                            <span className="date">10-05-2019</span>
                                            <span className="date">10-13-2019</span>
                                        </div>
                                    </td>
                                    <td className="tb-tnx-amount is-alt">
                                        <div className="tb-tnx-total">
                                            <span className="amount">600,000</span>
                                        </div>
                                        <div className="tb-tnx-status">
                                            <span className="badge badge-dot bg-success">Accepted</span>

                                        </div>
                                    </td>
                                    <td className="tb-tnx-amount is-alt">
                                        <div className="tb-tnx-total">
                                            <span className="amount">300,000</span>

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
                                                    <FormEdit />
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
                                            <span className="title">Bronze</span>
                                        </div>
                                        <div className="tb-tnx-date">
                                            <span className="date">10-04-2018</span>
                                            <span className="date">10-12-2018</span>
                                        </div>
                                    </td>
                                    <td className="tb-tnx-amount is-alt">
                                        <div className="tb-tnx-total">
                                            <span className="amount">500,000</span>
                                        </div>
                                        <div className="tb-tnx-status"><span
                                            className="badge badge-dot bg-light">Assigned</span>
                                        </div>
                                    </td>
                                    <td className="tb-tnx-amount is-alt">
                                        <div className="tb-tnx-total">
                                            <span className="amount">100,000</span>

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
                                                    <FormEdit />
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="tb-tnx-item">
                                    <td className="tb-tnx-id">
                                        <a href="#"><span>1001</span></a>
                                    </td>
                                    <td className="tb-tnx-info">
                                        <div className="tb-tnx-desc">
                                            <span className="title">Gold</span>
                                        </div>
                                        <div className="tb-tnx-date">
                                            <span className="date">10-05-2019</span>
                                            <span className="date">10-13-2019</span>
                                        </div>
                                    </td>
                                    <td className="tb-tnx-amount is-alt">
                                        <div className="tb-tnx-total">
                                            <span className="amount">600,000</span>
                                        </div>
                                        <div className="tb-tnx-status">
                                            <span className="badge badge-dot bg-success">
                                                Accepted
                                            </span>

                                        </div>
                                    </td>
                                    <td className="tb-tnx-amount is-alt">
                                        <div className="tb-tnx-total">
                                            <span className="amount">300,000</span>
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
                                                    <FormEdit />
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
    )
}

export default AdminApplicationList
