import type { NextPage } from 'next'
import Head from 'next/head'
import DashboardLayout from "../components/Layouts/dashboard";
import LoginPage from './auth/login';
import RegisterPage from './auth/register';

const Home: NextPage = () => {
  return (
    // <DashboardLayout>

    // </DashboardLayout>
    <div>
      {/* <LoginPage /> */}
      <RegisterPage />
    </div>

  )
}

export default Home
