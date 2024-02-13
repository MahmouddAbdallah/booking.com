import singleApt from '../../../assets/accomm_single_home.png'
import multipleApt from '../../../assets/accomm_multiple_homes.png'
import single_address from '../../../assets/accomm_single_address.png'
import multiple_address from '../../../assets/accomm_multiple_address.png'
import { useState } from 'react'
import { ArrowLeftIcon } from '../../../components/Icons';
import { useNavigate } from 'react-router-dom';
const DepartmentRegistration = () => {
    const [data, setData] = useState({ type: "", address: "" });
    const navigate = useNavigate();

    return (
        <div className="p-container">
            <div className="my-7">
                <h2 className="text-xl ">How many apartments are you listing?</h2>
            </div>
            <div className='space-y-4 sm:w-96'>
                <div
                    onClick={() => { setData({ type: 'singleDepartment', address: "" }) }}
                    className={`flex gap-7 border-2 ${data.type == 'singleDepartment' ? "border-blue-600" : 'border'} w-full sm:w-96 py-6 px-7 rounded relative cursor-pointer`}>
                    <div>
                        <img
                            className='w-12'
                            src={singleApt}
                            alt="" />
                    </div>
                    <p>One apartment</p>
                    {data.type == 'singleDepartment' && <div className='before:content-["\2713"] absolute w-5 h-5 flex justify-center items-center rounded-full text-white bg-blue-600 -top-3 -right-2 ' />}
                </div>
                <div>
                    <div
                        onClick={() => { setData({ type: 'multipleDepartment', address: 'single' }) }}
                        className={`flex gap-7 border-2 ${data.type == 'multipleDepartment' ? "border-blue-600" : 'border'} w-full sm:w-96 py-6 px-7 rounded relative cursor-pointer`}>
                        <div>
                            <img
                                className='w-16'
                                src={multipleApt}
                                alt="" />
                        </div>
                        <p>Multiple apartments</p>
                        {data.type == 'multipleDepartment' && <div className='before:content-["\2713"] absolute w-5 h-5 flex justify-center items-center rounded-full text-white bg-blue-600 -top-3 -right-2 ' />}
                    </div>
                    {
                        data.type === 'multipleDepartment' &&
                        <div className='mt-10 space-y-4'>
                            <div
                                onClick={() => { setData({ type: 'multipleDepartment', address: 'single' }) }}
                                className={`flex gap-7 border-2 ${data.address == 'single' ? "border-blue-600" : 'border'} w-full sm:w-96 py-6 px-7 rounded relative cursor-pointer`}>
                                <div>
                                    <img
                                        className='w-9'
                                        src={single_address}
                                        alt="" />
                                </div>
                                <p className='text-sm'>Yes, these apartments are at the same address or building</p>
                                {data.address == 'single' && <div className='before:content-["\2713"] absolute w-5 h-5 flex justify-center items-center rounded-full text-white bg-blue-600 -top-3 -right-2 ' />}
                            </div>
                            <div
                                onClick={() => { setData({ type: 'multipleDepartment', address: 'multiple' }) }}
                                className={`flex gap-7 border-2 ${data.address == 'multiple' ? "border-blue-600" : 'border'} w-full sm:w-96 py-6 px-7 rounded relative cursor-pointer`}>
                                <div>
                                    <img
                                        className='w-16'
                                        src={multiple_address}
                                        alt="" />
                                </div>
                                <p className='text-sm'>No, these apartments are at different addresses or buildings</p>
                                {data.address == 'multiple' && <div className='before:content-["\2713"] absolute w-5 h-5 flex justify-center items-center rounded-full text-white bg-blue-600 -top-3 -right-2 ' />}
                            </div>
                        </div>
                    }
                </div>
                <div className='w-full fixed sm:static bottom-0 left-0 p-2 sm:p-0 sm:border-none border-t flex items-center space-x-3 sm:pt-5'>
                    <button onClick={
                        () => { navigate(-1) }
                    } className='px-5 border border-blue-600 py-[8.8px] rounded'>
                        <ArrowLeftIcon className='w-5 fill-blue-600' />
                    </button>
                    <button
                        onClick={() => {
                            if (data.type === "singleDepartment") {
                                navigate("single")
                            } else {
                                navigate("")
                            }
                        }}
                        disabled={data.type ? false : true}
                        className={`w-full text-white py-2 rounded font-semibold ${data.type ? 'bg-blue-600' : "bg-gray-400 cursor-not-allowed"}`}>
                        Continue
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DepartmentRegistration