// import { WifiIcon } from "../../../components/Icons";
import { useFormContext } from 'react-hook-form';
import { apartmentType } from "../../../types/apartment";

const DeparmentFacilities = () => {
    const { register } = useFormContext<apartmentType>();
    const facilities = [
        'wifi',
        'view',
        'balcony',
        'pool',
        'bath',
        'terrace',
        'safe',
        'tv',
        'familyRooms',
        'parking',
        'kitchen',
        'Bathroom',
        'Washingmachine',
    ]
    return (
        <div>
            <h4 className="font-semibold mb-3">
                Facilities :
            </h4>
            <div className="flex gap-2 flex-wrap">
                {
                    facilities.map((item) =>
                        <div key={item} className='col-span-6 border w-[149px] rounded md:w-[173.3px] lg:w-[177.2px]'>
                            <label className=''>
                                <div className='flex items-center px-3 py-3 gap-2'>
                                    <div className='flex items-center'>
                                        <input type="checkbox" className="transition-all ease-in-out w-4 h-4 group" value={item} {...register(`facilities`)} />
                                    </div>
                                    <p className="whitespace-nowrap text-blue-500 text-xs md:text-sm font-semibold">{item}</p>
                                </div>
                            </label>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default DeparmentFacilities