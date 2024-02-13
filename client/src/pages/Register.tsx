import { useForm } from 'react-hook-form'
import axios from 'axios'
import { UseAppContext } from '../context/appContext';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';


type registerTypes = {
    firstName: string
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
}
const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<registerTypes>();
    const context = UseAppContext();
    const navigate = useNavigate();
    const onSubmit = handleSubmit(async (formData) => {
        try {
            const { data } = await axios.post('/auth/signup', {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            toast.success(data?.message);
            context?.setIsLogged(true);
            navigate('/');
            window.location.reload();
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
                <div className='flex gap-3'>
                    <div className='w-full'>
                        <h6 className='font-semibold'>First Name</h6>
                        <input
                            autoComplete='frist name'
                            type="text"
                            className='border border-black/30 focus:outline-blue-500 w-full rounded-md py-1 px-2'
                            {...register('firstName', { required: "The first Name is required" })}
                        />
                        {
                            errors.firstName && <div>
                                <span className="text-red-500 font-semibold text-sm">
                                    {errors.firstName?.message}
                                </span>
                            </div>
                        }
                    </div>
                    <div className='w-full'>
                        <h6 className='font-semibold'>LastName</h6>
                        <input
                            autoComplete='last name'
                            type="text"
                            className='border border-black/30 focus:outline-blue-500 w-full rounded-md py-1 px-2'
                            {...register('lastName', { required: "The last name is required!" })}
                        />
                        {
                            errors.lastName && <div>
                                <span className="text-red-500 font-semibold text-sm">
                                    {errors.lastName?.message}
                                </span>
                            </div>
                        }
                    </div>
                </div>
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
                    <h6 className='font-semibold'>Confirm Password</h6>
                    <input
                        autoComplete='confirm password'
                        type="password"
                        className='border border-black/30 focus:outline-blue-500 w-full rounded-md py-1 px-2'
                        {...register('confirmPassword', {
                            validate: (val) => {
                                if (!val) {
                                    return "Please enter your password again.";
                                } else if (watch('password') != val) {
                                    return "Passwords do not match!";
                                }
                            }
                        })}
                    />
                    {
                        errors.confirmPassword && <div>
                            <span className="text-red-500 font-semibold text-sm">
                                {errors.confirmPassword?.message}
                            </span>
                        </div>
                    }
                </div>
                <div className='w-full'>
                    <button className='w-full bg-primary text-white py-2 rounded-md my-3'>
                        Register
                    </button>
                </div>
                <div className='flex justify-center'>
                    <span className=' text-xs'>
                        Already have an account? <Link className='text-blue-600 hover:underline' to={'/sign-in'}>Sign in</Link>
                    </span>
                </div>
            </form>
        </div>
    )
}

export default Register