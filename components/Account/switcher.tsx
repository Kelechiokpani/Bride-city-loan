import {FC} from "react";
import Link from "next/link";
import classNames from "classnames";

type Props = {
    activeTab: String
}
const Switcher: FC<Props> = ({activeTab}: Props) => {
    const tabs = [
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
