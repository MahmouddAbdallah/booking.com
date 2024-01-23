
const Footer = () => {

    return (
        <footer>
            <div className='bg-darkBlue w-full py-5 flex items-center justify-center'>
                <div className='py-12'>
                    <div className='text-center mb-5'>
                        <h4 className='text-lg md:text-2xl text-white font-light mb-1'>Save time, save money!</h4>
                        <p className='text-sm text-gray-400'>Sign Up and we'll send the best deals to you</p>
                    </div>
                    <form className='w-full'>
                        <div className='flex flex-col md:flex-row h-full gap-4'>
                            <div>
                                <input
                                    type="text"
                                    placeholder='Your email address'
                                    className='placeholder:text-gray-600 placeholder:font-light text-lg h-12 px-3 rounded-sm w-[300px] md:w-[400px] outline-none' />
                            </div>
                            <button className='px-3 py-2 bg-blue-600 h-12 rounded-sm text-white text-lg font-light md:px-10'>
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='bg-primary flex flex-col items-center'>
                <div className='py-5'>
                    <button className=' border border-white rounded-sm text-white bg-transparent py-1 px-5 text-sm'>
                        List your property
                    </button>
                </div>
                <div className='border-t border-white flex justify-center w-full'>
                    <div className='flex flex-wrap'>
                        {['Mobile version', 'Your account', 'Make change to your booking online', 'Customer Service help', 'Become a affiliate', 'Booking.com for business'].map(item =>
                            <div key={item} className='py-3'>
                                <span className='text-xs font-bold underline text-white px-3 py-3 border-s border-gray-700 whitespace-nowrap cursor-pointer'>
                                    {item}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer