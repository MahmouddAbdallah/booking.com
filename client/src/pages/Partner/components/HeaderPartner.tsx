import { useCallback, useEffect, useState } from 'react'
import { CorrectIcon } from '../../../components/Icons';
import { Link } from 'react-router-dom';

const HeaderPartner = () => {
    const words = ['apartment', 'anything', 'hotel', 'holiday home', 'guest house', 'bed and breack fast'];
    const [currentWord, setCurrentWord] = useState(0)
    const changeWords = useCallback(() => {
        setCurrentWord(currentWord === words?.length - 1 ? 0 : currentWord + 1)
    }, [currentWord, words?.length])
    useEffect(() => {
        const autoChange = setInterval(() => {
            changeWords()
        }, 3000)
        return () => { clearInterval(autoChange) }
    }, [changeWords])
    return (
        <header className='bg-primary2 p-container pb-16 lg:pb-0 lg:h-[calc(100vh-69.6px)]'>
            <div className='h-full grid grid-cols-12 gap-6'>
                <div className='text-center lg:text-start lg:col-span-7 col-span-12 h-full text-3xl lg:text-6xl font-bold text-white flex flex-col justify-center'>
                    <span> List your</span>
                    <div className='relative h-10 lg:h-[68.5px] overflow-hidden flex justify-center lg:justify-start'>
                        {
                            words.map((item, index) => (
                                currentWord === index &&
                                <div key={index} className='absolute bottom-to-top-text text-textBlue'>
                                    <p>
                                        {item}
                                    </p>
                                </div>
                            ))}
                    </div>
                    <span>
                        on Booking.com
                    </span>
                    <p className='text-lg lg:text-[22px] font-semibold mt-4'>Whether hosting is your side passion or full-time job, register your holiday rental on Booking.com to reach travellers worldwide</p>
                </div>
                <div className='lg:col-span-5 col-span-12 flex lg:items-center justify-center'>
                    <div className='bg-white py-5 w-[416px] h-fit rounded-md z-50'>
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
                        <div className='border-y px-7 py-4 w-full mt-5'>
                            <Link className='' to={''}>
                                <div className='bg-[#0071c2] w-full text-center text-white py-3 rounded'>
                                    Get started now
                                </div>
                            </Link>
                        </div>
                        <div className='px-7 pt-3'>
                            <p className="font-bold">
                                Already started a registration?
                            </p>
                            <p className='text-sm font-bold text-[#0071c2]'>
                                Continue your registration
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderPartner