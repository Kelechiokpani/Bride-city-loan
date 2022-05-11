import {FC} from "react";
import Link from "next/link";
import classNames from "classnames";

type SwitcherProps = {
    activeTab: String
}

type TabOption = {
    name: String,
    link: any
}
const Switcher: FC<SwitcherProps> = ({activeTab}: SwitcherProps) => {
    const tabs:TabOption[] = [
        {
            "name": 'Personal',
            'link': '/account/'
        }, {
            "name": 'Security',
            'link': '/account/security'
        }, {
            "name": 'Activity',
            'link': '/account/activity'
        },
    ];

    const tabClass = (link: String) => classNames({
        'nav-link': true,
        'active': activeTab === link
    })
    return (
        <ul className="nk-nav nav nav-tabs">
            {
                tabs.map((tab, index) => (

                    <li className="nav-item" key={index}>
                        <Link href={tab.link}>
                          <a className={tabClass(tab.name)}>{tab.name}</a>
                        </Link>
                    </li>
                ))
            }

        </ul>
    )
}

export default Switcher
