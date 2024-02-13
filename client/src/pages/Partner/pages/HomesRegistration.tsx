import single_home from '../../../assets/accomm_single_home.png'
import private_room from '../../../assets/private_room.png'
import { useState } from 'react'
import { ArrowLeftIcon } from '../../../components/Icons';
import { useNavigate } from 'react-router-dom';
const HomesRegistration = () => {
    const [data, setData] = useState({ type: "", address: "" });
    const navigate = useNavigate();

    return (
        <div className="p-container">
            <div className="my-7">
                <h2 className="text-xl lg:text-4xl lg:font-bold">What can guests book?</h2>
            </div>
            <div className='space-y-4 sm:w-[550px]'>
                <div
                    onClick={() => { setData({ type: 'Entire place', address: "" }) }}
                    className={`flex gap-5 border-2 ${data.type == 'Entire place' ? "border-blue-600" : 'border'} w-full sm:w-[550px] py-6 px-7 rounded relative cursor-pointer`}>
                    <div className='w-32'>
                        <img
                            className='w-14'
                            src={single_home}
                            alt="" />
                    </div>
                    <div>
                        <p className='font-bold'>Entire place</p>
                        <p className='text-sm'>
                            Guests are able to use the entire place and do not have to share this with the host or other guests.
                        </p>
                    </div>
                    {data.type == 'Entire place' && <div className='before:content-["\2713"] absolute w-5 h-5 flex justify-center items-center rounded-full text-white bg-blue-600 -top-3 -right-2 ' />}
                </div>
                <div>
                    <div
                        onClick={() => { setData({ type: 'A private room', address: '' }) }}
                        className={`flex gap-5 border-2 ${data.type == 'A private room' ? "border-blue-600" : 'border'} w-full sm:w-[550px] py-6 px-7 rounded relative cursor-pointer`}>
                        <div className='w-32'>
                            <img
                                className='w-16'
                                src={private_room}
                                alt="" />
                        </div>
                        <div>
                            <p className='font-bold'>A private room</p>
                            <p className='text-sm'>
                                Guests rent a room within the property. There are common areas that are either shared with the host or other guests.  </p>
                        </div>
                        {data.type == 'A private room' && <div className='before:content-["\2713"] absolute w-5 h-5 flex justify-center items-center rounded-full text-white bg-blue-600 -top-3 -right-2 ' />}
                    </div>
                </div>
                <div className='w-full fixed sm:static bottom-0 left-0 p-2 sm:p-0 sm:border-none border-t flex items-center space-x-3 sm:pt-5'>
                    <button onClick={
                        () => { navigate(-1) }
                    } className='px-5 border border-blue-600 py-[8.8px] rounded'>
                        <ArrowLeftIcon className='w-5 fill-blue-600' />
                    </button>
                    <button
                        disabled={data.type ? false : true}
                        className={`w-full text-white py-2 rounded font-semibold ${data.type ? 'bg-blue-600' : "bg-gray-400 cursor-not-allowed"}`}>
                        Continue
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomesRegistration