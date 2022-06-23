import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useForm } from "react-hook-form";

// import { EmployeeContext } from "../context/LoanContext";
import { useContext, useState } from "react";

const EditLoan = ({}) => {
  // const id = theEmployee.id;

  // const [name, setName] = useState(theEmployee.name);
  // const [email, setEmail] = useState(theEmployee.email);
  // const [phone, setPhone] = useState(theEmployee.phone);

  // const { updateEmployee } = useContext(EmployeeContext);
  // const updatedEmployee = { id, name, email, phone };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // updateEmployee(id, updatedEmployee);
  };

  return (
    <form action="" onSubmit={handleSubmit} className="p-fluid">
      <div className="flex" style={{ display: "flex" }}>
        <div className="form-group">
          <label className="form-label" htmlFor="password">
            Loan Status
          </label>
          <div className="form-control-wrap">
            <input type="text" className="p-1 rounded" />
          </div>
        </div>

        <div className="form-group" style={{ paddingLeft: "2rem" }}>
          <label className="form-label" htmlFor="password">
            Approval Amount
          </label>
          <div className="form-control-wrap">
            <input type="text" className="p-1 rounded" />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="password">
          Attendant
        </label>
        <div className="form-control-wrap">
          <input type="text" className="p-1  rounded " />
        </div>
      </div>

      <div className="form-group">
        <button className="btn btn-lg btn-primary ">Save</button>
      </div>
    </form>
    
    // <form onSubmit={handleSubmit} className="p-fluid">
    //
    //   <div className="field">
    //     <span className="p-float-label">
    //       <InputText
    //         // autoFocus
    //         type="text"
    //         placeholder="Phone"
    //         name="phone"
    //         // value={phone}
    //         // onChange={(e) => setPhone(e.target.value)}
    //       />
    //     </span>
    //   </div>
    //   <Button
    //     type="submit"
    //     label="Edit Subcribes"
    //     className="mt-2"
    //     style={{ height: "2.4rem", color: "white", background: "green" }}
    //   />
    // </form>
  );
};

export default EditLoan;
