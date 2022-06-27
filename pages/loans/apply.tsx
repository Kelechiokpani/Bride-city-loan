import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import DashboardLayout from "../../components/Layouts/dashboard";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loanApplicationForm } from "../../validations/index";
import { useMutation, useQuery } from "@apollo/client";
import { GET_LOAN_CATEGORIES } from "../../graphql/queries";
import { LOAN_APPLICATION } from "../../graphql/mutations";

interface UserSubmitForm {
  loanCategory: string;
  amount: string;
}

const LoanApplication: NextPage = () => {
  const router: NextRouter = useRouter();
  const { data } = useQuery(GET_LOAN_CATEGORIES);
  const [applyForLoan] = useMutation(LOAN_APPLICATION);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(loanApplicationForm),
  });

  const onSubmit = (data: UserSubmitForm) => {
    applyForLoan({
      variables: {
        category: data,
        applicationAmount: data,
      },
    });
  };

  return (
    <DashboardLayout>
      <div className="nk-content nk-content-fluid">
        <div className="container-xl wide-lg">
          <div className="nk-content-body">
            <div className="kyc-app wide-sm m-auto">
              <div className="nk-block-head nk-block-head-lg wide-xs mx-auto">
                <div className="nk-block-head-content text-center">
                  <h2 className="nk-block-title fw-normal">Loan Application</h2>
                  <div className="nk-block-des">
                    <p>Complete the informationBelow for verification</p>
                  </div>
                </div>
              </div>

              <div className="nk-block">
                <div className="card card-bordered">
                  <div className="nk-kycfm">
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                      <div className="nk-kycfm-head">
                        <div className="nk-kycfm-count">01</div>
                        <div className="nk-kycfm-title">
                          <h5 className="title">Personal Details</h5>
                          <p className="sub-title">
                            Your simple personal information required for
                            identification
                          </p>
                        </div>
                      </div>

                      <div className="nk-kycfm-content">
                        <div className="nk-kycfm-note">
                          <em
                            className="icon ni ni-info-fill"
                            data-bs-toggle="tooltip"
                            data-bs-placement="right"
                            title="Tooltip on right"
                          ></em>
                          <p>
                            Please type carefully and fill out the form with
                            your personal details. Your can’t edit these details
                            once you submitted the form.
                          </p>
                        </div>

                        <div className="row g-4">
                          <div className="col-md-6">
                            <div className="form-group">
                              <div className="form-label-group">
                                <label className="form-label">
                                  Loan Category{" "}
                                  <span className="text-danger">*</span>
                                </label>
                              </div>
                              <div className="form-control-group">
                                <select
                                  defaultValue={"--Select Loan Category--"}
                                  {...register("loanCategory")}
                                  className={`form-control form-control-lg  ${
                                    errors.loanCategory ? "is-invalid" : ""
                                  }`}
                                  // onChange={handleTypeChange}
                                >
                                  <option value="--Select Loan Category--">
                                    --Select Loan Category--
                                  </option>
                                  {data && data.getLoanCategories
                                    ? data?.getLoanCategories?.map(
                                        (category: any, index: number) => (
                                          <option
                                            value={category?.id}
                                            key={index}
                                          >
                                            {category?.name}
                                          </option>
                                        )
                                      )
                                    : null}
                                </select>
                                <div className="invalid-feedback">
                                  {errors.loanCategory?.message}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <div className="form-label-group">
                                <label className="form-label">
                                  Loan Application Amount{" "}
                                  <span className="text-danger">*</span>
                                </label>
                              </div>
                              <div className="form-control-group">
                                <input
                                  type="text"
                                  className="form-control form-control-lg date-picker-alt"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button className="btn btn-lg">Next</button>
                    </form>
                  </div>
                  {/* <button className="btn btn-lg btn-primary btn-block" >Nexts</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LoanApplication;
