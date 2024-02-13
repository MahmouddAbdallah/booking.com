import React from 'react'
import { BathroomIcon, KitchenIcon, TvIcon, WifiIcon } from '../../../components/Icons'
interface facilitiesProps {
    facilities: {
        view: boolean,
        balcony: boolean,
        pool: boolean,
        bath: boolean,
        terrace: boolean,
        safe: boolean,
        tv: boolean,
        familyRooms: boolean,
        wifi: boolean,
        parking: boolean,
        kitchen: boolean,
        Bathroom: boolean,
        Washingmachine: boolean,
    } | undefined;
}
const Facilities: React.FC<facilitiesProps> = ({ facilities }) => {
    return (
        <div id='#facilities' className='flex flex-wrap gap-2'>
            <div>
                {
                    facilities?.wifi == true &&
                    <div className="flex items-center gap-1 border p-2 rounded">
                        <div>
                            <WifiIcon className="w-5 fill-green-500" />
                        </div>
                        <span className='text-sm'>
                            Free Wifi
                        </span>
                    </div>
                }
            </div>
            <div>
                {
                    facilities?.tv == true &&
                    <div className="flex items-center gap-1 border p-2 rounded">
                        <div>
                            <TvIcon className="w-5 fill-green-500" />
                        </div>
                        <span className='text-sm'>
                            TV
                        </span>
                    </div>
                }
            </div>
            <div>
                {
                    facilities?.Washingmachine == true &&
                    <div className="flex items-center gap-1 border p-2 rounded">
                        <span className='text-sm'>
                            Washing machine
                        </span>
                    </div>
                }
            </div>
            <div>
                {
                    facilities?.kitchen == true &&
                    <div className="flex items-center gap-1 border p-2 rounded">
                        <div>
                            <KitchenIcon className="w-5 fill-green-500" />
                        </div>
                        <span className='text-sm'>
                            Kitchen
                        </span>
                    </div>
                }
            </div>
            <div>
                {
                    facilities?.Bathroom == true &&
                    <div className="flex items-center gap-1 border p-2 rounded">
                        <div>
                            <BathroomIcon className="w-5 fill-green-500" />
                        </div>
                        <span className='text-sm'>
                            Bathroom
                        </span>
                    </div>
                }
            </div>
            <div>
                {
                    facilities?.parking == true &&
                    <div className="flex items-center gap-1 border p-2 rounded">
                        <span className='text-sm'>
                            Parking
                        </span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Facilities