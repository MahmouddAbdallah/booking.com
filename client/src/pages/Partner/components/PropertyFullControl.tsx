import { CorrectCircleIcon } from '../../../components/Icons'
import heroImage from '../../../assets/property_full_control.png'
const PropertyFullControl = () => {
    const sectionList = [
        'For extra reassurance, we’ll facilitate damage payment requests on your behalf in case of damage up to €/$/£500',
        'Receive protection against liability claims from guests and neighbours up to €/£/$1,000,000 for every reservation',
    ]
    return (
        <section className='bg-[#f2f2f2] p-container'>
            <div>
                <div className='block lg:hidden pt-10'>
                    <h2 className='text-3xl font-bold'>
                        Maintain full control over your property and finances
                    </h2>
                </div>
                <div className='lg:grid grid-cols-12 lg:items-center lg:gap-10'>
                    <div className=' lg:col-span-7 lg:pr-20 pt-10 lg:py-20'>
                        <img className='w-full object-cover' src={heroImage} alt="" />
                    </div>
                    <div className='lg:col-span-5 py-10 lg:space-y-10'>
                        <div className='hidden lg:block'>
                            <h2 className='text-3xl font-bold'>
                                Maintain full control over your property and finances
                            </h2>
                        </div>
                        <div>
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PropertyFullControl