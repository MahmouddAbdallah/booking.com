import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { UseAppContext } from '../context/appContext'
import { AccountIcon, CloseIcon, SignOutIcon } from './Icons';
import { useState, } from 'react';
import useCloseOnOutsideClick from '../hook/useCloseOnOutsideClick';


const PersonMenu = () => {
    const navigate = useNavigate()
    const constext = UseAppContext()
    const [openPersonMenu, setOpenPersonMenu] = useState(false);
    const close = useCloseOnOutsideClick(() => { setOpenPersonMenu(false) })

    const context = UseAppContext()
    const menu = [
        {
            text: "Manage account",
            link: `/account`,
            icon: <AccountIcon className="lg:w-4 w-5 fill-black" />
        },
    ]
    const signOut = async () => {
        try {
            const { data } = await axios.get("/auth/log-out");
            console.log(data.message);
            navigate('/sign-in');
            constext?.setIsLogged(false)
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div ref={close}>
            <button
                onClick={() => {
                    setOpenPersonMenu(!openPersonMenu);
                }}
                className='flex gap-2'
            >
                <div className='bg-yellow-500 w-6 h-6 lg:w-8 lg:h-8 rounded-full text-xs lg:text-base flex justify-center items-center lg:font-semibold select-none'>
                    {
                        context?.
                            user?.
                            firstName?.
                            split("")[0]?.
                            toUpperCase()
                    }
                </div>
                <div className='hidden lg:block text-start leading-3'>
                    <h3 className='font-bold text-white text-sm'>
                        {
                            context?.user?.firstName +
                            " " +
                            context?.user?.lastName
                        }
                    </h3>
                    <span className='text-xs text-yellow-700'>
                        Genius Level 1
                    </span>
                </div>
            </button>
            <div className='lg:relative'>
                {
                    <div className={`fixed left-0 top-0 w-full h-full bg-white z-50 ${openPersonMenu ? "bottom-to-top" : "top-to-bottom"} lg:absolute lg:w-60 `}>
                        <div className='bg-white px-5 pt-3 lg:rounded-md lg:px-3 lg:pt-0'>
                            <div className="w-full flex justify-end py-3 lg:hidden">
                                <button onClick={() => {
                                    setOpenPersonMenu((prev) => !prev)
                                    document.body.style.overflow = "auto"
                                }}>
                                    <CloseIcon className="w-4 fill-gray-600" />
                                </button>
                            </div>
                            <div className='lg:py-4'>
                                <div className='flex items-center gap-1 mb-7 lg:hidden'>
                                    <div className='bg-yellow-500  w-12 h-12 flex justify-center items-center rounded-full text-xl font-bold select-none'>
                                        {context?.
                                            user?.
                                            firstName?.
                                            split("")[0]?.
                                            toUpperCase()}
                                    </div>
                                    <div>
                                        <h3 className='font-bold leading-3'>
                                            {
                                                context?.user?.firstName +
                                                " " +
                                                context?.user?.lastName
                                            }
                                        </h3>
                                        <span className='text-xs text-yellow-700'>
                                            Genius Level 1
                                        </span>
                                    </div>
                                </div>
                                <ul className=" space-y-7">
                                    {menu.map(item =>
                                        <li key={item.text}>
                                            <Link to={item.link} className="flex items-center gap-2">
                                                <div>
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <p className="text-sm">{item.text}</p>
                                                </div>
                                            </Link>
                                        </li>
                                    )}
                                    <li>
                                        <button
                                            onClick={signOut}
                                            className="flex items-center gap-2">
                                            <div>
                                                <SignOutIcon className="w-5 lg:w-4 fill-black" />
                                            </div>
                                            <div>
                                                <p className="text-sm">Sign Out</p>
                                            </div>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default PersonMenu