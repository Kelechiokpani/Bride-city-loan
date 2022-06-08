import { FC, useState } from "react";
// import EditModal from "../Edit";
import * as React from 'react';
import { EDIT_USERDETAILS } from "../../graphql/mutations";
import { GET_EDITDETAILS } from "../../graphql/queries";
import { useMutation, useQuery } from "@apollo/client";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Input } from "@mui/material";
// import { useState } from 'react';


const ApplicationLog: FC = () => {

    const EditModal = () => {
        const [open, setOpen] = React.useState(false);
        const [editUserDetails, { loading }] = useMutation<{
            id: string,
            text: string
        }>(EDIT_USERDETAILS)

        const confirmation = {
            Status: editUserDetails
        }

        const handleClickOpen = () => { setOpen(true); };
        const handleClose = () => { setOpen(false); };



        const handleChange = (e: any) => {
            editUserDetails((e).target.value)
            console.log(JSON.stringify(e.target.value))

        }

        {/*
            const handleSubmit = (e: any) => {
            console.clear()
            e.preventDefault()
            setStatus((e).target.value)
            console.log(JSON.stringify(confirmation))
            setStatus("")
        }  */}


        const handleSubmit = async (data: any) => {

            await editUserDetails({
                variables: {
                    id: data.id,
                    text: data.text,
                },
                refetchQueries: [
                    {
                        query: GET_EDITDETAILS
                    }
                ]
            }).then(({ data }) => {
                console.log(data);
            });
        };

        return (
            <div>
                <Button onClick={handleClickOpen} style={{ fontSize: "13px" }}>
                    Edit
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Edit details</DialogTitle>
                    <form action="" onSubmit={handleSubmit}>
                        <DialogContent>

                            <Input autoFocus margin="dense" id="name" type="text"
                                onChange={handleChange}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">Save</Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </div>
        );
    }

    return (
        <div className="nk-block" >
            <div className="card card-bordered card-stretch">
                <div className="card-inner-group">
                    <div className="card-inner">
                        <div className="card-title-group">
                            <div className="card-title">
                                <h5 className="title">Loan Application Log</h5>
                            </div>
                            {/* check edit buttton */}

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
                                            <span>Full - Name</span>
                                        </span>
                                        <span className="tb-tnx-date d-md-inline-block d-none">
                                            {/* <span className="d-md-none"> Date</span> */}
                                            <span className="d-none d-md-block">
                                                <span>Application Date</span>
                                            </span>
                                        </span>
                                    </th>

                                    <th className="tb-tnx-amount is-alt">
                                        <span className="tb-tnx-total">Loan Request</span>
                                        <span className="tb-tnx-status d-none d-md-inline-block">Status</span>
                                    </th>

                                    {/* <th className="tb-tnx-info">
                                        <span className="tb-tnx-desc d-none d-sm-"></span>
                                    </th> */}
                                    <th className="tb-tnx-id">
                                        <span className=""> Category
                                        </span>
                                    </th>

                                    {/* <th className="tb-tnx-action"> */}
                                    {/* <span>&nbsp;</span> */}
                                    {/* <span>Edit</span> */}
                                    {/* </th> */}
                                </tr>

                            </thead>
                            <tbody>
                                <tr className="tb-tnx-item">
                                    <td className="tb-tnx-id">
                                        <a href="#"><span>4947</span></a>
                                    </td>
                                    <td className="tb-tnx-info">
                                        <div className="tb-tnx-desc">
                                            <span className="title">Sixtus Justin</span>
                                        </div>
                                        <div className="tb-tnx-date">
                                            <span className="date">10-05-2022</span>

                                        </div>
                                    </td>
                                    <td className="tb-tnx-amount is-alt">
                                        <div className="tb-tnx-total">
                                            <span className="amount">N230,000</span>
                                        </div>

                                        <div className="tb-tnx-status">
                                            {/* check edit buttton */}

                                            <span className="badge badge-dot bg-warning">Due
                                                <div className="dropdown">
                                                    <a className="text-soft dropdown-toggle btn btn-icon btn-trigger"
                                                        data-bs-toggle="dropdown"><em
                                                            className="icon ni ni-more-h"></em></a>
                                                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-xs">
                                                        <ul className="link-list-plain">
                                                            <li><EditModal /></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </span>

                                        </div>

                                    </td>
                                    <td className="tb-tnx-info">
                                        <div className="tb-tnx-desc">
                                            <span className="title">Basic</span>
                                        </div>
                                    </td>


                                </tr>
                                <tr className="tb-tnx-item">
                                    <td className="tb-tnx-id">
                                        <a href="#"><span>2904</span></a>
                                    </td>
                                    <td className="tb-tnx-info">
                                        <div className="tb-tnx-desc">
                                            <span className="title">Philip christain</span>
                                        </div>
                                        <div className="tb-tnx-date">
                                            <span className="date">06-19-2020</span>

                                        </div>
                                    </td>

                                    <td className="tb-tnx-amount is-alt">
                                        <div className="tb-tnx-total">
                                            <span className="amount">N130,000</span>
                                        </div>
                                        <div className="tb-tnx-status"><span
                                            className="badge badge-dot bg-success">Paid
                                            <div className="dropdown">
                                                <a className="text-soft dropdown-toggle btn btn-icon btn-trigger"
                                                    data-bs-toggle="dropdown"><em
                                                        className="icon ni ni-more-h"></em></a>
                                                <div className="dropdown-menu dropdown-menu-end dropdown-menu-xs">
                                                    <ul className="link-list-plain">
                                                        <li><EditModal /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </span>
                                        </div>
                                    </td>
                                    <td className="tb-tnx-info">
                                        <div className="tb-tnx-desc">
                                            <span className="title">Silver</span>
                                        </div>
                                    </td>

                                </tr>

                                <tr className="tb-tnx-item">
                                    <td className="tb-tnx-id">
                                        <a href="#"><span>4829</span></a>
                                    </td>
                                    <td className="tb-tnx-info">
                                        <div className="tb-tnx-desc">
                                            <span className="title">Andrew Chuks</span>
                                        </div>
                                        <div className="tb-tnx-date">
                                            <span className="date">10-04-2022</span>

                                        </div>
                                    </td>
                                    <td className="tb-tnx-amount is-alt">
                                        <div className="tb-tnx-total">
                                            <span className="amount">N500,000</span>
                                        </div>
                                        <div className="tb-tnx-status"><span
                                            className="badge badge-dot bg-light">pending
                                            <div className="dropdown">
                                                <a className="text-soft dropdown-toggle btn btn-icon btn-trigger"
                                                    data-bs-toggle="dropdown"><em
                                                        className="icon ni ni-more-h"></em></a>
                                                <div className="dropdown-menu dropdown-menu-end dropdown-menu-xs">
                                                    <ul className="link-list-plain">
                                                        <li><EditModal /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </span>
                                        </div>
                                    </td>
                                    <td className="tb-tnx-info">
                                        <div className="tb-tnx-desc">
                                            <span className="title">Liquidty</span>
                                        </div>
                                    </td>

                                </tr>

                                <tr className="tb-tnx-item">
                                    <td className="tb-tnx-id">
                                        <a href="#"><span>2904</span></a>
                                    </td>
                                    <td className="tb-tnx-info">
                                        <div className="tb-tnx-desc">
                                            <span className="title">Jennifer christain</span>
                                        </div>
                                        <div className="tb-tnx-date">
                                            <span className="date">06-19-2020</span>

                                        </div>
                                    </td>
                                    <td className="tb-tnx-amount is-alt">
                                        <div className="tb-tnx-total">
                                            <span className="amount">N130,000</span>
                                        </div>

                                        <div className="tb-tnx-status"><span
                                            className="badge badge-dot bg-danger">Rejected
                                            <div className="dropdown">
                                                <a className="text-soft dropdown-toggle btn btn-icon btn-trigger"
                                                    data-bs-toggle="dropdown"><em
                                                        className="icon ni ni-more-h"></em></a>
                                                <div className="dropdown-menu dropdown-menu-end dropdown-menu-xs">
                                                    <ul className="link-list-plain">
                                                        <li><EditModal /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </span>
                                        </div>
                                    </td>
                                    <td className="tb-tnx-info ">
                                        <div className="tb-tnx-desc">
                                            <span className="title">Gold</span>
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
export default ApplicationLog
