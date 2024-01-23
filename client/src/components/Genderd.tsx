import { useRef, useState } from "react"
import useCloseModal from "../hook/closeModel"
import { AccountIcon } from "./Icons"


const Genderd = () => {
    const [adults, setAdults] = useState(1)
    const [children, setChildren] = useState(0)
    const [rooms, setRooms] = useState(1)
    const [toggleGenderd, setToggleGenderd] = useState(false)
    const modalRef = useRef(null)
    useCloseModal(modalRef, () => { setToggleGenderd(false) })
    return (
        <div onClick={() => { setToggleGenderd(() => { return true }) }} className="w-full relative flex items-center  bg-white rounded-md">
            <div className="absolute ml-2">
                <AccountIcon className="w-5" />
            </div>
            <div className="w-full h-[55px] flex gap-5 items-center text-black  pl-9 text-sm">
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
                {
                    toggleGenderd &&
                    <div ref={modalRef} className='w-96 border shadow-md rounded-md px-3 py-4 bg-white'>
                        <div className='space-y-2'>
                            <div className='flex justify-between items-center'>
                                <h4 className='font-semibold text-sm'>Adults</h4>
                                <div className='w-24 border-2 border-gray-400 flex justify-between items-center px-2 py-2 rounded-md'>
                                    <button
                                        disabled={adults == 1 ? true : false}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setAdults((prev) => { if (prev == 1) { return 1 } else { return prev - 1 } })
                                        }}
                                        className={`${adults == 1 && 'cursor-not-allowed'}`}
                                    >
                                        -
                                    </button>
                                    <p> {adults}</p>
                                    <button onClick={(e) => {
                                        e.preventDefault()
                                        setAdults((prev) => { return prev + 1 })
                                    }}>
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className='flex justify-between items-center'>
                                <h4 className='font-semibold text-sm'>Children</h4>
                                <div className='w-24 border-2 border-gray-400 flex justify-between items-center px-2 py-2 rounded-md'>
                                    <button
                                        disabled={children == 0 ? true : false}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setChildren((prev) => { if (prev == 0) { return 0 } else { return prev - 1 } })
                                        }}
                                        className={`${children == 0 && 'cursor-not-allowed'}`}
                                    >
                                        -
                                    </button>
                                    <p> {children}</p>
                                    <button onClick={(e) => {
                                        e.preventDefault()
                                        setChildren((prev) => { return prev + 1 })
                                    }}>
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className='flex justify-between items-center'>
                                <h4 className='font-semibold text-sm'>Rooms</h4>
                                <div className='w-24 border-2 border-gray-400 flex justify-between items-center px-2 py-2 rounded-md'>
                                    <button
                                        disabled={rooms == 1 ? true : false}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setRooms((prev) => { if (prev == 1) { return 1 } else { return prev - 1 } })
                                        }}
                                        className={`${rooms == 1 && 'cursor-not-allowed'}`}
                                    >
                                        -
                                    </button>
                                    <p> {rooms}</p>
                                    <button onClick={(e) => {
                                        e.preventDefault()
                                        setRooms((prev) => { return prev + 1 })
                                    }}>
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className=' mt-3'>
                            <button className='w-full py-2 text-blue-600 border border-blue-600 rounded font-semibold text-sm'>Done</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Genderd