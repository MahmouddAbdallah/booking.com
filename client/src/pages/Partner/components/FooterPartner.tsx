import { Link } from 'react-router-dom'
import { CorrectIcon } from '../../../components/Icons'

const FooterPartner = () => {
    return (
        <footer className='bg-primary2 py-12'>
            <div className='p-container'>
                <div className='h-full grid grid-cols-12 gap-12'>
                    <div className='flex justify-center items-center h-full text-center lg:text-start col-span-12 lg:col-span-7 text-3xl lg:text-5xl font-semibold text-white'>
                        <h6 className='leading-[65px]'>
                            Sign up and start welcoming guests today!
                        </h6>
                    </div>
                    <div className='lg:col-span-5 col-span-12 flex lg:items-center justify-center'>
                        <div className='bg-white pt-5 w-[416px] h-fit rounded-md z-50'>
                            <div className='space-y-4  px-7'>
                                <h4 className='text-2xl font-bold'>Earn more with consistent bookings</h4>
                                <div className='space-y-4'>
                                    {
                                        [
                                            '45% of partners get their first booking within a week',
                                            'More than 1,1 billion holiday rental guests since 2010',
                                            'Full control over your property and finances',
                                            'Registration is free and takes 15 minutes'
                                        ].map((item) =>
                                            <div key={item}>
                                                <div className='flex gap-4'>
                                                    <div>
                                                        <CorrectIcon className='w-6 fill-green-600' />
                                                    </div>
                                                    <p className='text-sm'>{item}</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className='border-t px-7 py-4 w-full mt-5'>
                                <Link className='' to={''}>
                                    <div className='bg-[#0071c2] w-full text-center text-white py-3 rounded'>
                                        Get started now
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-10 mt-12 flex justify-between text-white border-t border-white '>
                    <p className='text-sm'>
                        Thank you for watching
                    </p>
                    <p className='text-sm'>
                        © Copyright <Link className='underline' to={'/'}>Booking.com</Link> 2024
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default FooterPartner