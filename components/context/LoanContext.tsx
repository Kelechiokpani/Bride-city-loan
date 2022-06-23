import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const LoanContext = createContext();

const LoanContextProvider = (props) => {
  const [loanapproval, setLoanApproval] = useState([
    {
      id: uuidv4(),
      customerName: "jane david",
      loanCatergory: "Basic",
      loanAmount: 50000,
      approvalAmount: 20000,
      approvalstatus: "pending",
      attendant: "jennifer philips",
    },
    {
      id: uuidv4(),
      customerName: "judith john",
      loanCatergory: "Bronze",
      loanAmount: 100000,
      approvalstatus: "pending",
      approvalAmount: 60000,
      attendant: "jennifer philips",
    },
    {
      id: uuidv4(),
      customerName: "ken philip",
      loanCatergory: "silver",
      loanAmount: 90000,
      approvalAmount: 40000,
      approvalstatus: "pending",
      attendant: "jennifer philips",
    },
  ]);

  const updateLoanApproval = (id, updateLoanApproval) => {
    setLoanApproval(
      loanapproval.map((loandata) =>
        loandata.id === id ? updateLoanApproval : loandata
      )
    );
  };

  return (
    <LoanContext.Provider value={{ loanapproval }}>
      {props.children}
    </LoanContext.Provider>
  );
};

export default LoanContextProvider;
