import { Link, useLocation } from "react-router-dom";
import { LockIcon, NotificationIcon, OtherIcon, PaymentIcon, PersonalIcon, PreferenceIcon, PrivacyIcon } from "../../../components/Icons";
const Sidebar = () => {
    const { pathname } = useLocation();
    const accountSettings = [
        {
            text: "Personal details",
            icons: <PersonalIcon className="w-4" />,
            link: "/account/personalDetails",
            desc: "Update your information and find out how it's used."
        },
        {
            text: "Preferences",
            icons: <PreferenceIcon className="w-4" />,
            link: "/account/Preferences",
            desc: "Change your language, currency and accessibility requirements.",

        },
        {
            text: "Security",
            icons: <LockIcon className="w-4" />,
            link: "/account/",
            desc: "Change your security settings, set up secure authentication or delete your account."
        },
        {
            text: "Payment details",
            icons: <PaymentIcon className="w-4" />,
            link: "/account/",
            desc: " Securely add or remove payment methods to make it easier when you book.",

        },
        {
            text: "Privacy",
            icons: <PrivacyIcon className="w-4" />,
            link: "/account/",
            desc: "Exercise your privacy rights and control how your data is used."
        },
        {
            text: "Email notifications",
            icons: <NotificationIcon className="w-4" />,
            link: "/account/",
            desc: "Decide what you want to be notified about, and unsubscribe from what you don't.",
        },
        {
            text: "Other travellers",
            icons: <OtherIcon className="w-4" />,
            link: "/account/",
            desc: "Add or edit information about the people you`re travelling with.",
        }
    ]
    return (
        <div>
            <ul className=" border rounded-lg">
                {
                    accountSettings.map(item =>
                        <li className="border-t p-1 w-full group first:border-t-0" key={item.link}>
                            <Link to={item.link}>
                                <div className="px-4 py-3">
                                    <div className="flex items-center gap-2">
                                        <div className={`h-9 w-9 bg-black/5 group-hover:fill-blue-600 flex justify-center items-center rounded-full
                                        ${pathname == item.link ? "fill-blue-600" : ""}`}>
                                            {item.icons}
                                        </div>
                                        <div className="space-y-1 group-hover:text-blue-600">
                                            <h4 className={`text-sm ${pathname == item.link ? "text-blue-600" : ""}`}>{item.text}</h4>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Sidebar