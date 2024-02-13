import home from '../../../assets/accomm_home.png'
import hotels from '../../../assets/accomm_hotels.png'
import apt from '../../../assets/accomm_one_apt.png'
import big from '../../../assets/tent-big.png'
import { ArrowRightIcon } from '../../../components/Icons'
import { useNavigate } from 'react-router-dom'
const SignUpCategory = () => {
    const navigate = useNavigate();
    const ListElement = [
        {
            img: home,
            title: "Homes",
            desc: "Properties like apartments, holiday homes, villas, etc.",
            link: "home"
        },
        {
            img: hotels,
            title: "Hotel, B&Bs, and more",
            desc: "Properties like hotels, B&Bs, guest houses, hostels, aparthotels, etc.",
            link: "hotel"
        },
        {
            img: big,
            title: "Alternative places",
            desc: "Properties like boats, campsites, luxury tents, etc.",
            link: "guests"
        },
    ]
    return (
        <div className='p-container h-screen bg-[#F9F9FA]'>
            <div className='space-y-5 py-8'>
                <h3 className='mt-5 text-xl lg:text-4xl font-bold'>List your property on Booking.com and start welcoming guests in no time!</h3>
                <p className='text-xs lg:text-xl'>To get started, choose the type of property you want to list on Booking.com</p>
            </div>
            <div className='flex flex-col lg:flex-row gap-5'>
                <div className='w-full bg-white lg:w-64 flex justify-between gap-5 border rounded-md px-3 py-5'>
                    <div className='flex lg:flex-col items-center gap-8'>
                        <div>
                            <img className='w-16' src={apt} alt="" />
                        </div>
                        <div className='space-y-2 lg:text-center'>
                            <h4 className='font-bold'>Apartment</h4>
                            <p className='text-xs'>Furnished and self-catering accommodation, where guests rent the entire place.</p>
                        </div>
                        <button
                            onClick={() => { navigate('department') }}
                            className='hidden lg:block w-full bg-blue-600 py-1 rounded-t rounded-b-lg text-white font-semibold'>
                            <p>List your property</p>
                        </button>
                    </div>
                    <button
                        onClick={() => { navigate('department') }}
                        className=' block lg:hidden'>
                        <ArrowRightIcon className='w-12 fill-blue-600' />
                    </button>
                </div>
                <div className='flex flex-col lg:flex-row border rounded-md bg-white'>
                    {
                        ListElement.map((item, i) =>
                            <div key={item.img} className='w-full lg:w-64 flex justify-between gap-5 px-3 py-5'>
                                <div className='flex lg:flex-col lg:justify-between items-center '>
                                    <div className='flex lg:flex-col items-center gap-8'>
                                        <div>
                                            <img className='w-16' src={item.img} alt="" />
                                        </div>
                                        <div className='space-y-2 lg:text-center'>
                                            <h4 className='font-bold'>{item.title}</h4>
                                            <p className='text-xs'>{item.desc}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => { navigate(item.link) }}
                                        className='hidden lg:block w-full bg-blue-600 py-1 rounded-t rounded-b-lg text-white font-semibold'>
                                        <p>List your property</p>
                                    </button>
                                </div>
                                {!(i == 2) && <div className='h-full border-s'></div>}
                                <button
                                    onClick={() => { navigate(item.link) }}
                                    className=' block lg:hidden'>
                                    <ArrowRightIcon className='w-12 fill-blue-600' />
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default SignUpCategory