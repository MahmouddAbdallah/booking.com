import { SetStateAction, useRef } from "react"
import useCloseModal from "../hook/closeModel"

interface props {
    adults: number,
    children: number,
    rooms: number,
    setAdults: (callback: (prev: number) => number) => void,
    setRooms: (callback: (prev: number) => number) => void,
    setChildren: (callback: (prev: number) => number) => void,
    toggleGenderd: boolean,
    setToggleGenderd: React.Dispatch<SetStateAction<boolean>>
}
const Genderd: React.FC<props> = ({ adults, children, rooms, setAdults, setRooms, setChildren, toggleGenderd, setToggleGenderd }) => {
    const modalRef = useRef(null)
    useCloseModal(modalRef, () => { setToggleGenderd(!toggleGenderd) })
    return (
        <>
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
        </>
    )
}

export default Genderd