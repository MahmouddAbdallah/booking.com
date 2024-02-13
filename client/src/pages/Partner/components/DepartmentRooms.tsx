import React, { SetStateAction } from 'react'

interface departmentRoomsProps {
    typeOfRooms: string[],
    settypeOfRooms: React.Dispatch<SetStateAction<string[]>>,
    numberOfRooms: number,
    setnumberOfRooms: React.Dispatch<SetStateAction<number>>
}
const DepartmentRooms: React.FC<departmentRoomsProps> = ({ typeOfRooms, settypeOfRooms, numberOfRooms, setnumberOfRooms }) => {
    return (
        <div>
            <div>
                <label className="w-full space-y-2">
                    <p className='text-sm font-semibold text-black/60'>Number of rooms</p>
                    <input
                        type={"number"}
                        value={numberOfRooms}
                        min={3}
                        max={10}
                        onChange={(e) => {
                            setnumberOfRooms((prev) => {
                                if (prev < 3 || isNaN(parseInt(e.target.value))) {
                                    return 3
                                } else {
                                    return parseInt(e.target.value);
                                }
                            })
                        }}
                        placeholder='number of rooms'
                        className="border-[1.6px] border-black/30 rounded w-full py-1 px-2 outline-none focus:border-blue-600"
                    />
                </label>
                {numberOfRooms &&
                    <div className="w-full flex flex-col space-y-1">
                        <h4 className="font-semibold">
                            Type of rooms :
                        </h4>
                        <div className="w-full flex gap-3">
                            {
                                Array(numberOfRooms)?.fill(undefined)?.map((_, i) =>
                                    <label key={i} className="w-full space-y-2">
                                        <p className='text-sm font-semibold text-black/60'>Room Name</p>
                                        <input
                                            type={"text"}
                                            value={typeOfRooms[i]}
                                            onChange={() => { settypeOfRooms((prev) => [...prev, typeOfRooms[i]]) }}
                                            placeholder={'Enter Room Name ' + (1 + i)}
                                            className="border-[1.6px] border-black/30 rounded w-full py-1 px-2 outline-none focus:border-blue-600"
                                        />
                                    </label>
                                )}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default DepartmentRooms