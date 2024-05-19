import map from '../../../assets/world-map-gray.png'
const GlobalCustomer = () => {
    return (
        <section className='py-5 h-[80vh] lg:h-[60vh] relative'>
            <img className='absolute h-[80vh] lg:h-[60vh] top-0 left-0 w-full object-cover' src={map} alt="" />
            <div className='px-8 lg:px-24 xl:px-52'>
                <div className='py-16'>
                    <div className='md:py-4'>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Reach a unique global customer base
                        </h2>
                    </div>
                    <div className='grid grid-cols-12 gap-10'>
                        <div className='col-span-12 md:col-span-6 lg:col-span-4 py-4 space-y-2'>
                            <h4 className='font-bold text-3xl md:text-5xl'>2/3</h4>
                            <p className='text-black/60'>
                                of holiday rental guests return to book with us again
                            </p>
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-4 py-4 space-y-2'>
                            <h4 className='font-bold text-3xl md:text-5xl'>48%</h4>
                            <p className='text-black/60'>
                                of nights booked on Booking.com in 2022 were for international stays
                            </p>
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-4 py-4 space-y-2'>
                            <h4 className='font-bold text-3xl md:text-5xl'>33%</h4>
                            <p className='text-black/60'>
                                of holiday rental customers are Genius loyalty level 2 or 3 who tend to spend more per booking
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GlobalCustomer