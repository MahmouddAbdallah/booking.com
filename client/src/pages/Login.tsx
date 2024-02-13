import { useForm } from 'react-hook-form'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { UseAppContext } from '../context/appContext';
type registerTypes = {
    email: string,
    password: string,
}
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<registerTypes>();
    const navigate = useNavigate();
    const context = UseAppContext();
    const onSubmit = handleSubmit(async (formData) => {
        try {
            const { data } = await axios.post('/auth/signin', {
                email: formData.email,
                password: formData.password
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            toast.success(data?.message);
            context?.setIsLogged(true)
            navigate("/")
        } catch (error) {
            if (axios.isAxiosError(error)) toast.error(error?.response?.data.error);
            console.error(error);
        }
    })
    if (context?.isLogged) {
        return <Navigate to={'/'} />
    }
    return (
        <div className='flex justify-center px-5 items-center h-[calc(100vh-60px)] lg:h-[calc(100vh-64px)]'>
            <form className='w-full space-y-3 md:w-[450px]' onSubmit={onSubmit}>
                <div className='w-full'>
                    <h6 className='font-semibold'>Email</h6>
                    <input
                        autoComplete='email'
                        type="email"
                        className='border border-black/30 focus:outline-blue-500 w-full rounded-md py-1 px-2'
                        {...register('email', { required: "The email is requried" })}
                    />
                    {
                        errors.email && <div>
                            <span className="text-red-500 font-semibold text-sm">
                                {errors.email?.message}
                            </span>
                        </div>
                    }
                </div>
                <div className='w-full'>
                    <h6 className='font-semibold'>Password</h6>
                    <input
                        autoComplete='password'
                        type="password"
                        className='border border-black/30 focus:outline-blue-500 w-full rounded-md py-1 px-2'
                        {...register('password', { required: "The password is requried" })}
                    />
                    {
                        errors.password && <div>
                            <span className="text-red-500 font-semibold text-sm">
                                {errors.password?.message}
                            </span>
                        </div>
                    }
                </div>
                <div className='w-full'>
                    <button className='w-full bg-primary text-white py-2 rounded-md my-3'>
                        Login
                    </button>
                </div>
                <div className='flex justify-center'>
                    <span className=' text-xs'>
                        Don't have an account? <Link className='text-blue-600 hover:underline' to={'/sign-up'}>Sign up</Link>
                    </span>
                </div>
            </form>
        </div>
    )
}

export default Login