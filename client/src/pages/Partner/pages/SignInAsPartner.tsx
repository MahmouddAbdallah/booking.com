import { useState, useRef } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import ErrorMessage from '../../../components/ErrorMessage';
import axios from 'axios';
import { UseAppContext } from '../../../context/partnerContext'
import { toast } from 'react-hot-toast';

const SignInAsPartner = () => {
    const [username, setUsername] = useState("")
    const [errorUsername, setErrorUsername] = useState("error")
    const elementRef = useRef<HTMLDivElement>(null);
    const [password, setPassword] = useState("")
    const [errorPassword, setErrorPassword] = useState("error")
    const navigate = useNavigate();
    const context = UseAppContext()
    const singIn = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        try {
            e.preventDefault()
            const { data } = await axios.post('/auth-partner/signin',
                { password, email: username }
            )
            toast.success(data.message)
            context?.setPartner(data.partner)
            context?.setIsLogged(true)
            navigate("/partner")
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) toast.error(error?.response?.data.error);
            console.error(error);
        }
    }
    const next = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (errorUsername && errorUsername != "error") {
            try {
                const { data } = await axios.post('/auth-partner/signup/verfiy-partner-email-sign-in', { email: username })
                if (data.message) {
                    if (elementRef.current) {
                        elementRef.current.scrollLeft = elementRef.current.clientWidth
                    }
                } else {
                    setErrorUsername("")
                }
            } catch (error) {
                if (axios.isAxiosError(error)) toast.error(error?.response?.data.error);
                console.log(error);
            }
        } else {
            setErrorUsername("")
        }
    }
    if (context?.isLogged) {
        return <Navigate to={'/partner'} />
    }
    return (
        <div className='h-[calc(100vh-60px)] flex flex-col justify-center items-center gap-10'>
            <form className='flex flex-col items-center gap-10'>
                <div>
                    <h1 className="text-center text-2xl font-semibold">Sign in to manage your property</h1>
                </div>
                <div ref={elementRef} className='flex w-[360px] overflow-hidden scroll-smooth'>
                    <div className='flex'>
                        <div className='w-[360px] px-1'>
                            <div>
                                <p className="font-semibold text-sm mb-2">
                                    Email
                                </p>
                                <input
                                    type="email"
                                    autoComplete='email'
                                    className='w-full border border-black focus:outline-blue-500 rounded py-1 px-2'
                                    value={username}
                                    onChange={(e) => {
                                        setUsername(e.target.value)
                                        setErrorUsername(e.target.value)
                                    }}
                                />
                                <ErrorMessage condition={!errorUsername} message="The username is required" />
                                <button onClick={next} className='w-full bg-blue-600 font-semibold py-3 rounded mt-3 text-white'>
                                    Next
                                </button>
                            </div>
                            <BlowUsername />
                        </div>
                        <div className='w-[360px] px-1'>
                            <p className="font-semibold text-sm mb-2">
                                Password
                            </p>
                            <input
                                type="password"
                                className='w-full border border-black focus:outline-blue-500 rounded py-1 px-2'
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                    setErrorPassword(e.target.value)
                                }}
                            />
                            <ErrorMessage condition={!errorPassword} message="The password is required" />
                            <button
                                onClick={singIn}
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
            </form>
        </div>
    )
}


export const BlowUsername = () => {
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


export default SignInAsPartner