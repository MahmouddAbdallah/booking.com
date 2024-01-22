import { SetStateAction, useState } from 'react'
import Calendar from './Calendar'
import { CalendarIcon } from './Icons'
interface checkDateProps {
    start: { day: number, month: string },
    end: { day: number, month: string },
    setStart: React.Dispatch<SetStateAction<{ day: number; month: string; }>>,
    setEnd: React.Dispatch<SetStateAction<{ day: number; month: string; }>>,
}
const CheckDate: React.FC<checkDateProps> = ({ start, end, setStart, setEnd }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="flex items-center w-full h-[55px] bg-white rounded-md relative">
            <div className=" px-2">
                <CalendarIcon className="w-5 fill-gray-700" />
            </div>
            <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { e.preventDefault(); setToggle(!toggle) }} className='flex gap-2'>
                <h5 className='text-black font-semibold text-sm '>{start.day != 0 ? start.day + " " + start.month : "Check-in date"} </h5>
                <span> — </span>
                <h5 className='text-black font-semibold text-sm '>{end.day != 35 ? end.day + " " + end.month : "Check-out date"} </h5>
            </button>
            {
                toggle &&
                <div className='absolute top-12 left-0 z-50'>
                    <Calendar
                        setToggle={setToggle}
                        start={start}
                        end={end}
                        setStart={setStart}
                        setEnd={setEnd}
                    />
                </div>
            }
        </div>
    )
}

export default CheckDate