import { NextPage } from "next";
import DashboardLayout from "../../components/Layouts/dashboard";
import withKycEnabled from "../../utils/kycChecker";


const PendingLoans: NextPage = () => {
    return (
        <DashboardLayout>

        </DashboardLayout>
    )
}

export const getServerSideProps = withKycEnabled((ctx: any) => {
    return {
        props: {}
    };
});
export default PendingLoans
