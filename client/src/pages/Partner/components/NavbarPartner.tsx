import { Link, useLocation, useNavigate } from "react-router-dom";
import { LogoIcon, PersonIcon } from "../../../components/Icons";
import { UseAppContext } from '../../../context/partnerContext'
import axios from "axios";
import { useState } from "react";
import useCloseOnOutsideClick from "../../../hook/useCloseOnOutsideClick";
const NavbarPartner = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const context = UseAppContext();
  const [toggle, setToggle] = useState(false)
  const signOut = async () => {
    try {
      await axios.get('/auth-partner/log-out')
      navigate('/')
    } catch (error) {
      console.error(error);
    }
  }
  const ref = useCloseOnOutsideClick(() => setToggle(false))
  return (
    <nav className='bg-primary2'>
      <div className='p-container'>
        <div className='flex justify-between items-center py-5'>
          <Link to={'/partner'}>
            <LogoIcon className='w-[120px] lg:w-[140px]' />
          </Link>
          <div className='flex gap-3 lg:hidden'>
          </div>
          <div className="flex items-center gap-5">
            <div className='flex gap-5'>
              <span className='text-white font-semibold text-sm'>EGP</span>
            </div>
            <div ref={ref}>
              {
                context?.isLogged ?
                  <div className="relative">
                    <button onClick={() => setToggle(!toggle)} className="flex items-center gap-2">
                      <div className="p-1 rounded-full bg-gray-700">
                        <PersonIcon className="w-6 fill-white" />
                      </div>
                      <h3 className="text-white text-sm font-bold">
                        {context?.partner?.firstname + " " + context?.partner?.lastname}
                      </h3>
                    </button>
                    {
                      toggle &&
                      <div className="w-full absolute bg-white shadow-lg rounded py-1 z-[999]">
                        <Link to={"/partner/my_properties"} className="text-sm hover:bg-black/20 px-3 py-4 w-full block">
                          View my properties
                        </Link>
                        <Link to={'/partner/sign-up/category'} className="text-sm hover:bg-black/20 px-3 py-4 w-full block">
                          Add new property
                        </Link>
                        <div
                          onClick={signOut}
                          className="text-sm hover:bg-black/20 px-3 py-4 w-full cursor-pointer">
                          log out
                        </div>
                      </div>
                    }
                  </div>
                  : !pathname?.includes("/sign-in") &&
                  !pathname?.includes("/sign-up") &&
                  <Link to={'/partner/sign-in'} className='text-white border border-white text-sm font-semibold rounded-sm px-2 py-1'>
                    Sign in
                  </Link>
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarPartner