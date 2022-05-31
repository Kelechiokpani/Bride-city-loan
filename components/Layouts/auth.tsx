import { FC } from "react";
import classNames from "classnames";

type Props = {
    children?: JSX.Element | JSX.Element[]
    wide?: boolean
}
const AuthLayout: FC<Props> = ({ children, wide = false }: Props) => {
    let containerSizingClasses = classNames([
        'nk-block', 'nk-block-middle', 'nk-auth-body',
    ], {
        'wide-xs': !wide,
        'wide-md': wide
    })
    return (
        <>
            <div className={'nk-body bg-white npc-general pg-auth'}>
                <div className="nk-app-root">
                    <div className="nk-main ">
                        <div className="nk-wrap nk-wrap-nosidebar">
                            <div className="nk-content ">
                                <div className={containerSizingClasses}>
                                    <div className="brand-logo pb-4 text-center">
                                        <a href="/" className="logo-link">

                                            <img className="logo-light logo-img logo-img-lg" src="/images/logo.png"
                                                srcSet="/images/logo2x.png 2x" alt="logo" />
                                            <img className="logo-dark logo-img logo-img-lg" src="/images/logo-dark.png"
                                                srcSet="/images/logo-dark2x.png 2x" alt="logo-dark" />

                                        </a>
                                    </div>
                                    {children}
                                </div>
                                <div className="nk-footer nk-auth-footer-full">
                                    <div className="container wide-lg">
                                        <div className="row g-3">
                                            <div className="col-lg-6 order-lg-last">
                                                <ul className="nav nav-sm justify-content-center justify-content-lg-end">
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Terms & Condition</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Privacy Policy</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Help</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="nk-block-content text-center text-lg-left">
                                                    <p className="text-soft">&copy; 2022 Bride City Loans. All Rights Reserved.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AuthLayout
