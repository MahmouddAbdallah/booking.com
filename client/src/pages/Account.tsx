import { Link } from "react-router-dom"
import { LockIcon, NotificationIcon, OtherIcon, PaymentIcon, PersonalIcon, PreferenceIcon, PrivacyIcon } from "../components/Icons"

const Account = () => {
    const accountSettings = [
        {
            text: "Personal details",
            icons: <PersonalIcon className="w-7" />,
            link: "/account/personalDetails",
            desc: "Update your information and find out how it's used."
        },
        {
            text: "Preferences",
            icons: <PreferenceIcon className="w-7" />,
            link: "/account/personalDetails",
            desc: "Change your language, currency and accessibility requirements.",

        },
        {
            text: "Security",
            icons: <LockIcon className="w-7" />,
            link: "/account/personalDetails",
            desc: "Change your security settings, set up secure authentication or delete your account."
        },
        {
            text: "Payment details",
            icons: <PaymentIcon className="w-7" />,
            link: "/account/personalDetails",
            desc: " Securely add or remove payment methods to make it easier when you book.",

        },
        {
            text: "Privacy",
            icons: <PrivacyIcon className="w-7" />,
            link: "/account/personalDetails",
            desc: "Exercise your privacy rights and control how your data is used."
        },
        {
            text: "Email notifications",
            icons: <NotificationIcon className="w-7" />,
            link: "/account/personalDetails",
            desc: "Decide what you want to be notified about, and unsubscribe from what you don't.",
        },
        {
            text: "Other travellers",
            icons: <OtherIcon className="w-7" />,
            link: "/account/personalDetails",
            desc: "Add or edit information about the people you`re travelling with.",
        }
    ]
    return (
        <div className=" p-container pt-8 pb-60 lg:pb-16">
            <div className="space-y-2 pb-10">
                <h4 className="text-3xl font-bold lg:text-4xl">Account settings</h4>
                <p className="text-gray-600">Manage your Booking.com experience</p>
            </div>
            <div>
                <ul className=" grid gap-6 grid-cols-12">
                    {
                        accountSettings.map(item =>
                            <li className="col-span-12 md:col-span-6 border rounded-lg group" key={item.link}>
                                <Link to={item.link}>
                                    <div className="px-4 py-3">
                                        <div className="flex gap-2">
                                            <div className="px-3 py-3 h-12 w-12 flex justify-center items-center rounded-full bg-black/5 group-hover:fill-blue-600">
                                                {item.icons}
                                            </div>
                                            <div className="space-y-1 group-hover:text-blue-600">
                                                <h4 className="text-xl font-bold">{item.text}</h4>
                                                <p className="text-sm">{item.desc}</p>
                                                <div >
                                                    <p className="text-blue-600 text-sm group-hover:underline">Manage personal details</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Account