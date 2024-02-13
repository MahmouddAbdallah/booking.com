import { useState, useRef } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import ErrorMessage from '../../../components/ErrorMessage';
import axios from 'axios';
import { UseAppContext } from '../../../context/partnerContext'
import { toast } from 'react-hot-toast';

const SignUpAsPartner = () => {
    const [email, setEmail] = useState("")
    const [errorEmail, setErrorEmail] = useState("error")
    const [firstname, setFirstname] = useState("")
    const [errorFirstname, setErrorFirstname] = useState("error")
    const [lastname, setLastname] = useState("")
    const [errorLastname, setErrorLastname] = useState("error")
    const [phone, setPhone] = useState("")
    const [errorPhone, setErrorPhone] = useState("error")
    const [password, setPassword] = useState("")
    const [errorPassword, setErrorPassword] = useState("error")
    const elementRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const context = UseAppContext();

    const register = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        try {
            e.preventDefault()
            await axios.post('/auth-partner/signup',
                { firstname, lastname, password, phone, email }
            )
            navigate("category")
        } catch (error) {
            if (axios.isAxiosError(error)) toast.error(error?.response?.data.error);
            console.error(error);
        }
    }
    const next = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (errorEmail && errorEmail != "error") {
            try {
                const { data } = await axios.post('/auth-partner/signup/verfiy-partner-email', { email: email })
                if (data.message) {
                    if (elementRef.current) {
                        elementRef.current.scrollLeft = elementRef.current.clientWidth
                    }
                } else {
                    setErrorEmail("")
                }
            } catch (error) {
                if (axios.isAxiosError(error)) toast.error(error?.response?.data.error);
                console.error(error);
            }
        } else {
            setErrorEmail("")
        }
    }
    if (context?.isLogged) {
        return <Navigate to={'/partner'} />
    }
    return (
        <div className='h-[calc(100vh-60px)] flex flex-col justify-center items-center gap-10'>
            <form className='flex flex-col items-center gap-10'>
                <div>
                    <h1 className="text-center text-2xl font-semibold">Sign up to manage your property</h1>
                </div>
                <div ref={elementRef} className='flex w-[360px] overflow-hidden scroll-smooth'>
                    <div className='flex'>
                        <div className='w-[360px] px-1'>
                            <div>
                                <p className="font-semibold text-sm mb-2">
                                    Email
                                </p>
                                <input
                                    type="text"
                                    className='w-full border border-black focus:outline-blue-500 rounded py-1 px-2'
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                        setErrorEmail(e.target.value)
                                    }}
                                />
                                <ErrorMessage condition={!errorEmail} message="The email is required" />
                                <button onClick={next} className='w-full bg-blue-600 font-semibold py-3 rounded mt-3 text-white'>
                                    Next
                                </button>
                            </div>
                            <BlowEamil />
                        </div>
                        <div className='w-[360px] px-1 space-y-3'>
                            <div>
                                <p className="font-semibold text-sm mb-2">
                                    Firstname
                                </p>
                                <input
                                    type="text"
                                    className='w-full border border-black focus:outline-blue-500 rounded py-1 px-2'
                                    value={firstname}
                                    onChange={(e) => {
                                        setFirstname(e.target.value)
                                        setErrorFirstname(e.target.value)
                                    }}
                                />
                                <ErrorMessage condition={!errorFirstname} message="The firstname is required" />
                            </div>
                            <div>
                                <p className="font-semibold text-sm mb-2">
                                    Lastname
                                </p>
                                <input
                                    type="text"
                                    className='w-full border border-black focus:outline-blue-500 rounded py-1 px-2'
                                    value={lastname}
                                    onChange={(e) => {
                                        setLastname(e.target.value)
                                        setErrorLastname(e.target.value)
                                    }}
                                />
                                <ErrorMessage condition={!errorLastname} message="The lastname is required" />
                            </div>
                            <div>
                                <p className="font-semibold text-sm mb-2">
                                    phone
                                </p>
                                <input
                                    type="text"
                                    className='w-full border border-black focus:outline-blue-500 rounded py-1 px-2'
                                    value={phone}
                                    onChange={(e) => {
                                        setPhone(e.target.value)
                                        setErrorPhone(e.target.value)
                                    }}
                                />
                                <ErrorMessage condition={!errorPhone} message="The Phone is required" />
                            </div>
                            <div>
                                <p className="font-semibold text-sm mb-2">
                                    Password
                                </p>
                                <input
                                    type="text"
                                    className='w-full border border-black focus:outline-blue-500 rounded py-1 px-2'
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                        setErrorPassword(e.target.value)
                                    }}
                                />
                                <ErrorMessage condition={!errorPassword} message="The password is required" />
                                <button
                                    onClick={register}
                                    className='w-full bg-blue-600 font-semibold py-2 rounded mt-3 text-white'>
                                    Submit
                                </button>
                                <div className='w-full flex justify-center items-center pt-3 pb-6 mt-3'>
                                    <p className='text-sm font-bold text-blue-600'>
                                        Forgot your password
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}


export const BlowEamil = () => {
    return (
        <div>
            <div className='w-full flex justify-center items-center pt-3 pb-6 mt-3'>
                <p className='text-sm font-bold text-blue-600'>
                    Having trouble signing in?
                </p>
            </div>
            <div className='mb-10 py-10 border-y text-center'>
                <p className='text-xs'>
                    Questions about your property or the Extranet? Check out Partner Help or ask another partner in the Partner Community.
                </p>
                <Link to={'/partner/sign-up'} >
                    <div className='w-full text-blue-600 border border-blue-600 py-2 rounded mt-5'>
                        Create your partner account
                    </div>
                </Link>
            </div>
        </div>
    )
}


export default SignUpAsPartner