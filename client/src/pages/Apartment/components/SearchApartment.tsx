import { useState } from 'react'
import { BedIcon } from "../../../components/Icons";
import CheckDate from "../../../components/CheckDate";
import Genderd from '../../../components/Genderd';
import hero from '../../../assets/apartment.jpg'

const SearchApartment = () => {
    const [start, setStart] = useState({ day: 0, month: "" });
    const [end, setEnd] = useState({ day: 35, month: "" });

    return (
        <div className=' relative bg-primary/60 h-[75vh] lg:h-[70vh]'>
            <div className=" p-container pt-10 pb-60 lg:pb-16">
                <div className=''>
                    <h4 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold py-2">
                        Apartments
                    </h4>
                    <p className="text-white text-sm font-bold lg:text-base ">
                        A home away from home - choose the apartment that's right for you.
                    </p>
                </div>
            </div>
            <div className='h-full w-full absolute top-0 left-0 -z-10'>
                <img src={hero} className='h-full w-full object-cover' alt="" />
            </div>
            <div>
                <div className="relative w-full">
                    <div className="absolute top-[-250px] lg:top-[-90px] w-full">
                        <form className="p-container pb-14 pt-12">
                            <div className="flex flex-col lg:flex-row lg:items-center bg-goldColor p-1 gap-1 rounded-md">
                                <div className="w-full relative flex items-center">
                                    <input
                                        type="text"
                                        placeholder="Where are you going?"
                                        className="w-full text-black bg-white pl-10 text-sm h-[55px] outline-none placeholder:text-black placeholder:font-semibold rounded-md"
                                    />
                                    <div className="absolute pl-2">
                                        <BedIcon className="w-6 fill-gray-700" />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <CheckDate
                                        end={end}
                                        setStart={setStart}
                                        setEnd={setEnd}
                                        start={start} />
                                </div>
                                <div className='w-full'>
                                    <Genderd />
                                </div>
                                <div>
                                    <button className=" w-full h-[55px] bg-blue-600 text-white rounded-md px-7 font-semibold text-lg">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchApartment