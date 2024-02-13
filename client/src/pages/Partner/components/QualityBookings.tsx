import { CorrectCircleIcon } from '../../../components/Icons'
import heroImage from '../../../assets/elegant-businessman-office.jpg'
const QualityBookings = () => {
    const sectionList = [
        'Your review scores on other travel websites are converted and displayed on your property page until you receive your first Booking.com guest review',
        'Stand out in search results with the ‘New to Booking.com’ label on your property',
        'Our listing strength checklist helps you complete your property setup to attract more guests',
        'Get discovered quickly with our innovative Quality rating system',
        'Sell up to 30% more nights with the Smart Flex Reservations programme, which adds flexibility to some of your existing cancellation policies to attract more guests. If a guest cancels, we’ll look for a replacement'
    ]
    return (
        <section className='py-20 p-container'>
            <div>
                <div>
                    <h2 className='text-3xl font-bold'>Get quality bookings quickly</h2>
                </div>
                <div className='flex flex-col-reverse lg:grid grid-cols-12 lg:items-center lg:gap-10'>
                    <div className='lg:col-span-5 py-10'>
                        {sectionList.map(item =>
                            <div key={item}>
                                <div className='flex gap-3 mb-7'>
                                    <div>
                                        <CorrectCircleIcon className='w-7' />
                                    </div>
                                    <div>
                                        <p className='text-black/90'>{item}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className=' lg:col-span-7 lg:pl-20 pt-10 lg:py-20'>
                        <img className='w-full object-cover' src={heroImage} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QualityBookings