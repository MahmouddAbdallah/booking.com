import { useState } from 'react'
import { BedIcon } from "./Icons";
import CheckDate from "./CheckDate";
import Genderd from './Genderd';

const Search = () => {
    const [start, setStart] = useState({ day: 0, month: "" });
    const [end, setEnd] = useState({ day: 35, month: "" });

    return (
        <div className="relative w-full">
            <div className="absolute top-[-250px] lg:top-[-90px] w-full">
                <form className="p-container py-14">
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
    )
}

export default Search