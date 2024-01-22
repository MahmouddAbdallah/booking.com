import { useState } from 'react'
import { BedIcon } from "./Icons";
import CheckDate from "./CheckDate";
import Genderd from './Genderd';

const Search = () => {
    const [start, setStart] = useState({ day: 0, month: "" });
    const [end, setEnd] = useState({ day: 35, month: "" });
    const [adults, setAdults] = useState(1)
    const [children, setChildren] = useState(0)
    const [rooms, setRooms] = useState(1)
    const [toggleGenderd, setToggleGenderd] = useState(false)
    return (
        <div className="relative w-full">
            <div className="absolute top-[-250px] lg:top-[-90px] w-full">
                <form className="px-3 lg:px-24 xl:px-44 py-14">
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
                        <div
                            onClick={() => { setToggleGenderd(!toggleGenderd) }}
                            className="w-full relative flex items-center">
                            <div className="w-full h-[55px] flex gap-5 items-center text-black bg-white pl-8 text-sm rounded-md">
                                <div className='flex items-center gap-2 cursor-pointer'>
                                    <h4 className='text-sm font-semibold'>Adults</h4>
                                    <span className='font-semibold'>{adults}</span>
                                </div>
                                <div className='flex items-center gap-2 cursor-pointer'>
                                    <h4 className='text-sm font-semibold'>Children</h4>
                                    <span className='font-semibold'>{children}</span>
                                </div>
                                <div className='flex items-center gap-2 cursor-pointer'>
                                    <h4 className='text-sm font-semibold'>Rooms</h4>
                                    <span className='font-semibold'>{rooms}</span>
                                </div>
                            </div>
                            <div
                                className='absolute left-0 top-14 z-50'>
                                <Genderd
                                    adults={adults}
                                    setAdults={setAdults}
                                    children={children}
                                    setChildren={setChildren}
                                    rooms={rooms}
                                    setRooms={setRooms}
                                    toggleGenderd={toggleGenderd}
                                    setToggleGenderd={setToggleGenderd}
                                />
                            </div>
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