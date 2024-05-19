import { useState } from "react";
import { ImageDataType } from "../../../../types/apartment";
import InputFile from "../../components/InputFile"
import { useForm, FormProvider } from 'react-hook-form'
import { HotelType } from "../../../../types/hotelType";
import DepartmentDetails from "../../components/DepartmentDetails";
import DeparmentFacilities from "../../components/DeparmentFacilities";
import Rules from "../../components/Rules";

const HotelRegistration = () => {
    const [, setImageSelect] = useState<ImageDataType[]>([]);
    const hotelForm = useForm<HotelType>();
    const { handleSubmit } = hotelForm;
    const submitHotel = handleSubmit(async (f) => {
        console.log(f);

    })
    return (
        <div className="p-container pb-10">
            <FormProvider {...hotelForm}>
                <form onSubmit={submitHotel} >
                    <div className="mb-5">
                        <InputFile
                            setImageSelect={setImageSelect}
                        />
                    </div>
                    <div className="space-y-5">
                        <DepartmentDetails />
                        {/* <DepartmentRooms
                            typeOfRooms={typeOfRooms}
                            settypeOfRooms={settypeOfRooms}
                            numberOfRooms={numberOfRooms}
                            setnumberOfRooms={setnumberOfRooms}
                        /> */}
                        <DeparmentFacilities />
                        <Rules />
                        <div className="flex justify-center">
                            <button className="w-full text-white bg-blue-600 py-2 rounded">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}

export default HotelRegistration