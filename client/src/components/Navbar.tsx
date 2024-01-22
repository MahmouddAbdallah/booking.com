import { useState } from 'react'
import { AboutIcon, BedIcon, CarIcon, FlightIcon, LogoIcon, MenuIcon, PersonIcon, TaxisIcon } from './Icons'
import Menu from './Menu'
import { Link, useLocation } from 'react-router-dom';
import { UseAppContext } from '../context/appContext';
import LogOut from './LogOut';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();
    const context = UseAppContext()
    const navItem = [
        {
            title: "Stays",
            icon: <BedIcon className='w-4 fill-white' />,
            link: "/stays"
        },
        {
            title: "Flights",
            icon: <FlightIcon className='w-4 fill-white' />,
            link: "/flights"
        },
        {
            title: "Car rentals",
            icon: <CarIcon className='w-4 fill-white' />,
            link: "/car-rentals"
        },
        {
            title: "Airport taxis",
            icon: <TaxisIcon className='w-4 fill-white' />,
            link: "/airport-taxis"
        },
    ]
    return (
        <nav className='bg-primary'>
            <div className=' px-3 lg:px-24 xl:px-44'>
                <div className='flex justify-between py-5'>
                    <Link to={'/'}>
                        <LogoIcon className='w-[120px] lg:w-[130px]' />
                    </Link>
                    <div className='flex gap-3 lg:hidden'>
                        {!pathname.includes("sign-up") && <PersonIcon className='w-6 fill-white' />}
                        <button onClick={() => { setOpen(!open) }}>
                            <MenuIcon className='w-5 fill-white' />
                        </button>
                    </div>
                    <div className="hidden lg:flex items-center gap-5">
                        <div className='flex gap-5'>
                            <span className='text-white font-semibold text-sm'>EGP</span>
                            <div>
                                <AboutIcon className='w-5 fill-white' />
                            </div>
                        </div>
                        <div>
                            <span className='text-white font-semibold text-sm'>
                                List your property
                            </span>
                        </div>
                        {
                            !pathname.includes("sign-up") &&
                            <div className='space-x-2'>
                                {
                                    context?.isLogged ?
                                        <LogOut />
                                        :
                                        <>
                                            <Link to={'/sign-up'} className='bg-white text-blue-600 border border-blue-600 text-sm font-semibold rounded-sm px-2 py-1'>
                                                Register
                                            </Link>
                                            <Link to={'/sign-in'} className='bg-white text-blue-600 border border-blue-600 text-sm font-semibold rounded-sm px-2 py-1'>
                                                Sign in
                                            </Link>
                                        </>
                                }
                            </div>
                        }
                    </div>
                </div>
                {
                    !pathname.includes("sign-in") &&
                    !pathname.includes("sign-up")

                    &&
                    <ul className='flex justify-between text-white sm:w-[70%] md:w-[50%]'>
                        {navItem.map((item, i) => {
                            return <li key={item.title}>
                                <div className={`flex items-center gap-2 py-2 px-3 rounded-full ${i == 0 ? 'border bg-white/10' : "hover:bg-white/10 duration-300 cursor-pointer"}`}>
                                    <div>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <span className='text-sm'>
                                            {item.title}
                                        </span>
                                    </div>
                                </div>
                            </li>
                        })}
                    </ul>}
            </div>
            {open && <Menu open={open} setOpen={setOpen} />}
        </nav>
    )
}

export default Navbar