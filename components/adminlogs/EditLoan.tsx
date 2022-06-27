import { LoanContext } from "../context/LoanContext";
import { useContext, useState } from "react";
// import { ADMIN_LOANAPPROVAL } from "../../graphql/mutations";
// import { useMutation } from "@apollo/client";
// import { loanapproval } from "../../graphql/types";

const EditLoan = ({ loaninfo }: any) => {
  const id = loaninfo.id;

  const [customerName, setCustomerName] = useState(loaninfo.customerName);
  const [loanCategory, setLoanCategory] = useState(loaninfo.loanCategory);
  const [loanAmount, setLoanAmount] = useState(loaninfo.loanAmount);
  const [approvalStatus, setApprovalStatus] = useState(loaninfo.approvalStatus);
  const [approvalAmount, setApprovalAmount] = useState(loaninfo.approvalAmount);
  const [attendant, setAttendant] = useState(loaninfo.attendant);
  const [loanRequirement, setLoanRequirement] = useState(
    loaninfo.loanRequirement
  );

  const { updateLoanApproval } = useContext(LoanContext);
  const updatedLoanApproval = {
    id,
    customerName,
    loanCategory,
    loanAmount,
    approvalStatus,
    approvalAmount,
    attendant,
    loanRequirement,
  };
  // const [updatedLoanApproval, { loading }] = useMutation<{

  // }>(ADMIN_LOANAPPROVAL);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    updateLoanApproval(id, updatedLoanApproval);
    // console.log(e.target.value);
  };

  return (
    <form action="" onSubmit={handleSubmit} className="p-fluid">
      <div style={{ display: "flex" }}>
        <div className="form-group">
          <label className="form-label">Customer Name</label>
          <div className="form-control-wrap">
            <input
              type="text"
              placeholder="Customer Name"
              name=" customerName"
              value={customerName}
              disabled
              className="p-1 rounded"
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group" style={{ paddingLeft: "2rem" }}>
          <label className="form-label">Approval Amount</label>
          <div className="form-control-wrap">
            <input
              type="text"
              placeholder="Approval Amount"
              name="approvalamount"
              value={approvalAmount}
              className="p-1 rounded"
              onChange={(e) => setApprovalAmount(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div className="form-group">
          <label className="form-label">Loan Category</label>
          <div className="form-control-wrap">
            <input
              type="text"
              placeholder="Loan Category"
              name="loanCategory"
              value={loanCategory}
              disabled
              className="p-1 rounded"
              onChange={(e) => setLoanCategory(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group" style={{ paddingLeft: "2rem" }}>
          <label className="form-label">Loan Amount</label>
          <div className="form-control-wrap">
            <input
              type="text"
              placeholder="Loan Amount"
              name="loanamount"
              value={loanAmount}
              disabled
              className="p-1 rounded"
              onChange={(e) => setLoanAmount(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="" style={{ display: "flex" }}>
        <div className="form-group">
          <label className="form-label">Attendant</label>
          <div className="form-control-wrap">
            <input
              type="text"
              placeholder="Attendant"
              name="attendant"
              value={attendant}
              className="p-1  rounded "
              onChange={(e) => setAttendant(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group" style={{ paddingLeft: "2rem" }}>
          <label className="form-label">Approval Status</label>
          <div className="form-control-wrap">
            <input
              type="text"
              placeholder="Approval Status"
              name="approvalstatus"
              value={approvalStatus}
              className="p-1  rounded "
              onChange={(e) => setApprovalStatus(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <button className="btn btn-lg btn-primary ">Save</button>
      </div>
    </form>
  );
};

export default EditLoan;
