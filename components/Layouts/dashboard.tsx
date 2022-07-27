import {FC} from "react";
import Sidebar from "../sidebar";
import Header from "../header";
import Footer from "../footer";
import withAuthenticator from "../../utils/authenticator";
import VerificationChecker from "../verificationChecker";

type Props = {
    children?: JSX.Element | JSX.Element[]
}// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Teams',
      icon: SupervisorAccountIcon,
      path: '/teams'
    },
    {
      title: 'Admin',
      icon: AdminPanelSettingsIcon,
      path: '/admin'
    },
    {
      title: 'Marketers',
      icon: AdminPanelSettingsIcon,
      path: '/marketers'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Pages'
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      title: 'Reset Password',
      icon: AccountPlusOutline,
      path: '/pages/reset',
      openInNewTab: true
    },
    {
      title: 'Error',
      icon: AlertCircleOutline,
      path: '/pages/error',
      openInNewTab: true
    },
    {
      title: 'Log-Out',
      icon: AlertCircleOutline,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      sectionTitle: 'User Interface'
    },
    {
      title: 'Typography',
      icon: FormatLetterCase,
      path: '/typography'
    },
    {
      title: 'Icons',
      path: '/icons',
      icon: GoogleCirclesExtended
    },
    {
      title: 'Cards',
      icon: CreditCardOutline,
      path: '/cards'
    },
    {
      title: 'Tables',
      icon: Table,
      path: '/tables'
    },
    {
      icon: CubeOutline,
      title: 'Form Layouts',
      path: '/form-layouts'
    }
  ]
}

export default navigation

const DashboardLayout: FC<Props> = ({children}: Props) => {
    return (
        <VerificationChecker>
            <div className="nk-body npc-crypto bg-white has-sidebar">
                <div className="nk-app-root">
                    <div className="nk-main ">
                        <Sidebar/>
                        <div className="nk-wrap ">
                            <Header/>
                            {children}
                            <Footer/>

                        </div>

                    </div>
                </div>
            </div>
        </VerificationChecker>
    )
}

export const getServerSideProps = withAuthenticator((ctx: any) => {
    return {
        props: {}
    };
});

export default DashboardLayout
