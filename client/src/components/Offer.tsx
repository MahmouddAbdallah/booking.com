import holiday from '../assets/holiday.jpg'
import adventures from '../assets/adventures.jpg'

const Offer = () => {
    return (
        <div className='space-y-3'>
            <div className='p-container'>
                <h4 className='text-2xl font-bold'>Offers</h4>
                <p className='text-gray-700'>Promotions, deals and special offers for you</p>
            </div>
            <div className='flex flex-col md:flex-row px-3 md:px-0 gap-4 lg:px-24 xl:px-52 overflow-x-scroll hidden-scrollbar scroll-smooth'>
                <div className='px-3 py-3 rounded-md border'>
                    <div className='w-full md:w-[530px] lg:w-full grid grid-cols-7 gap-3 '>
                        <div className='col-span-5 space-y-7'>
                            <div className='space-y-1'>
                                <h5 className='text-xl font-bold'>Take your longest holiday yet</h5>
                                <p className='text-sm text-gray-600'>Browse properties offering long-term stays, many at reduced monthly rates.</p>
                            </div>
                            <div>
                                <button className='bg-blue-600 text-white text-sm rounded-md font-semibold py-2 px-3'>
                                    Find a stay
                                </button>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className='p-2'>
                                <img src={holiday} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='w-full md:w-[545px] h-[178px] rounded-md overflow-hidden relative flex'>
                        <div className='absolute grid grid-cols-7 h-full px-3 py-3'>
                            <div className='h-full space-y-7 col-span-5'>
                                <div className='space-y-1'>
                                    <h5 className='text-xl font-bold text-white'>New year, new adventures</h5>
                                    <p className='text-sm text-gray-100'>Save 15% or more when you book and stay before 1 April 2024</p>
                                </div>
                                <div>
                                    <button className='bg-blue-600 text-white text-sm rounded-md font-semibold py-2 px-3'>
                                        Find Early 2024 Deals
                                    </button>
                                </div>
                            </div>
                        </div>
                        <picture className=''>
                            <img className='object-contain' src={adventures} alt="" />
                        </picture>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='w-2 h-2 rounded-full bg-blue-600 hidden md:block' />
            </div>
        </div>
    )
}

export default Offer