import { useState, useRef } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "./Icons";
import useCloseOnOutsideClick from "../hook/useCloseTap";

interface calendarInterface {
    start: { day: number, month: string }
    end: { day: number, month: string }
    setStart: React.Dispatch<React.SetStateAction<{ day: number; month: string }>>;
    setEnd: React.Dispatch<React.SetStateAction<{ day: number; month: string }>>;
    setToggle: (value: boolean) => void;
}
const Calendar: React.FC<calendarInterface> = ({ start, end, setStart, setEnd, setToggle }) => {
    const days = ['Mo', 'Tu', 'We', "Th", "Fr", "Sa", "Su"];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [hoverNum, setHoverNum] = useState({ day: 0, month: "" });
    const calendarRef = useRef<HTMLDivElement>(null);
    const ref = useCloseOnOutsideClick(() => { setToggle(false) })

    const handleCalendar = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number, month: string) => {
        e.preventDefault()
        if (start.day == 0 && start.day < end.day) {
            setStart({ day: index + 1, month });
        }
        else if (start.day > 0 && start.day < (index + 1) && start.day != index + 1) {
            setEnd({ day: index + 1, month })
            setToggle(false)
            setHoverNum({ day: index + 1, month })
        }
        else if (start.day == (index + 1)) {
            setStart({ day: 0, month: "" })
            setEnd({ day: 35, month: "" })
            setHoverNum({ day: 0, month: "" })
        }
    }

    const nextMonth = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.preventDefault();
        const calendar = calendarRef.current;
        if (calendar) {
            calendar.scrollLeft += calendar.clientWidth - 2;
        }
    };
    const prevMonth = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        const calendar = calendarRef.current;
        if (calendar) {
            calendar.scrollLeft -= calendar.clientWidth - 2;
        }
    };
    const handleHoverCalendar = (index: number, month: string) => {
        if (start.day > 0 && start.day < (index + 1) && start.day != index + 1 && end.day == 35) {
            setHoverNum({ day: index + 1, month })
        }
    }

    return (
        <div ref={ref} className="flex justify-center bg-white">
            <div className="w-[350px] md:w-[500px] lg:w-[550px] border rounded-md py-3 relative">
                <div className="w-full flex">
                    <button className="w-full py-2">
                        Calendar
                    </button>
                    <button className="w-full py-2">
                        I'm flexible
                    </button>
                </div>
                <div className="absolute right-2 top-5">
                    <button onClick={nextMonth}>
                        <ArrowRightIcon className="w-5" />
                    </button>
                </div>
                <div className="absolute left-2 top-5">
                    <button onClick={prevMonth}>
                        <ArrowLeftIcon className="w-5" />
                    </button>
                </div>
                <div ref={calendarRef} className=" relative w-full flex overflow-x-scroll scroll-smooth px-3 gap-5 hidden-scrollbar" id="default-carousel" data-carousel="slide">
                    {monthNames.map((month) =>
                        <div key={month} className=" col-span-12">
                            <div className=" w-full text-center">
                                {month}
                            </div>
                            <div >
                                <div className="grid grid-cols-7 py-2">
                                    {days.map(item =>
                                        <div key={item} className="col-span-1 flex items-center justify-center text-sm">
                                            {item}
                                        </div>
                                    )}
                                </div>
                                <div className="w-[325px] md:w-[475px] lg:w-[525px]">
                                    <div className="grid grid-cols-7 ">
                                        {
                                            Array(
                                                month == "February" ? 29 :
                                                    month == "April" ? 30 :
                                                        month == "June" ? 30 :
                                                            month == "September" ? 30 :
                                                                31
                                            ).fill(undefined).map((_, i) => {
                                                const currentDate = i + 1;
                                                const isStartMonth = start.month === month;
                                                const isEndMonth = end.month === month;
                                                const isBetweenStartAndEnd =
                                                    ((isStartMonth)
                                                        && (end.day != 35)
                                                        && (currentDate > start.day)
                                                        && (end.month == start.month ? false : true))
                                                    || (isEndMonth && currentDate < end.day && start.month != end.month);
                                                return (
                                                    <button
                                                        key={i}
                                                        onClick={(e) => handleCalendar(e, i, month)}
                                                        className={`
                                                    col-span-1 
                                                    ${start.day === currentDate && isStartMonth && "bg-slate-600 text-white"}
                                                    ${isBetweenStartAndEnd && "bg-slate-200"}
                                                    ${((currentDate > start.day && hoverNum.day > currentDate - 1) && month == hoverNum.month) ? "bg-slate-200" : ""}
                                                    ${end.day === currentDate && isEndMonth && "bg-slate-600 text-white"}
                                                `}
                                                    >
                                                        <div
                                                            onMouseMove={() => handleHoverCalendar(i, month)}
                                                            className="p-2 text-sm"
                                                        >
                                                            {currentDate}
                                                        </div>
                                                    </button>
                                                );
                                            })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Calendar;