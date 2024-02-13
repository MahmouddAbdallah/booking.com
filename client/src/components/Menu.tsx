import { useNavigate } from "react-router-dom";
import { AboutIcon, BooksIcon, CloseIcon, GoogleIcon, HomeListIcon, PartnerIcon, SupportIcon } from "./Icons";
import { UseAppContext } from "../context/appContext";
interface MenuInterface {
    open: boolean;
    setOpen: (value: boolean) => void;
}
const Menu: React.FC<MenuInterface> = ({ open, setOpen }) => {
    const navigate = useNavigate();
    const context = UseAppContext();

    const closeMenu = (link: string) => {
        setOpen(false);
        navigate(link)
    }
    const menu = [{ title: 'Help and support', element: [{ text: "Customer Service help", link: "/customer-service", icon: <SupportIcon className="w-6 fill-black" /> }, { text: "Partner dispute", link: "/partner-dispute", icon: <PartnerIcon className="w-6 fill-black" /> }] }, { title: 'Settings and legal', element: [{ text: "AboutIcon Booking.com", link: "/about", icon: <AboutIcon className="w-6 fill-black" /> }, { text: "Travel articles", link: "/travel-articles", icon: <BooksIcon className="w-6 fill-black" /> }] }]
    const menuMore = [{
        text: "Egyptian Pound",
        link: "egyptian-pound",
        icon: <p className="font-semibold">EGP</p>
    },
    {
        text: "Genius Loyalty Programme",
        link: "genius-loyalty-programme",
        icon: <GoogleIcon className="w-6 fill-black" />
    },
    {
        text: "List your property",
        link: "/partner",
        icon: <HomeListIcon className="w-6 fill-black" />
    }
    ]

    return (
        <div className={`fixed w-screen h-screen top-0 left-0 z-50 px-5 bg-white transition-all ease-in-out duration-200 ${open ? "bottom-to-top" : "top-to-bottom"}`}>
            <div className="w-full flex justify-end py-3">
                <button onClick={() => {
                    setOpen(!open)
                    document.body.style.overflow = "auto"
                }}>
                    <CloseIcon className="w-4 fill-gray-600" />
                </button>
            </div>
            <div className="my-8 mx-3">
                <h4 className="text-xl font-bold">More</h4>
            </div>
            <div>
                <ul className=" space-y-7">
                    {menuMore.map(item =>
                        <li key={item.text}>
                            <button onClick={() => {
                                navigate(item.link)
                                document.body.style.overflow = 'auto'
                            }} className="flex items-center gap-2">
                                <div>
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-sm">{item.text}</p>
                                </div>
                            </button>
                        </li>
                    )}
                </ul>
            </div>
            <div className="space-y-7">
                {
                    menu.map((item, i) => {
                        return <div key={i}>
                            <div className="text-gray-800">
                                <div className="my-3">
                                    <h4 className="text-sm font-semibold ">
                                        {item.title}
                                    </h4>
                                </div>
                                <ul className=" space-y-7">
                                    {item.element.map(item =>
                                        <li key={item.text}>
                                            <button onClick={() => {
                                                navigate(item.link)
                                                document.body.style.overflow = 'auto'
                                            }} className="flex items-center gap-2">
                                                <div>
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <p className="text-sm">{item.text}</p>
                                                </div>
                                            </button>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="flex justify-center py-5">
                <div className='space-x-2'>
                    {
                        !context?.isLogged &&
                        <>
                            <button onClick={() => closeMenu('/sign-up')} className='bg-blue-50 text-blue-600 border border-blue-600 text-sm font-semibold rounded-sm px-5 py-2'>
                                Register
                            </button>
                            <button onClick={() => closeMenu('/sign-in')} className='bg-blue-50 text-blue-600 border border-blue-600 text-sm font-semibold rounded-sm px-5 py-2'>
                                Sign in
                            </button>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}
export default Menu;