/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { ImageDataType } from "../../../../types/apartment";
import InputFile from "../../components/InputFile"
import { useForm, FormProvider } from 'react-hook-form'
import { HotelType } from "../../../../types/hotelType";
import Location from "./component/Location";

const HotelRegistration = () => {
    const [imageSelect, setImageSelect] = useState<ImageDataType[]>([]);
    const hotelForm = useForm<HotelType>();
    const { handleSubmit } = hotelForm;
    const h = handleSubmit(async (f) => {
        console.log(f);

    })
    return (
        <div className="p-container">
            <FormProvider {...hotelForm}>
                <form onSubmit={h}>
                    <div className="mb-5">
                        <InputFile
                            setImageSelect={setImageSelect}
                        />
                    </div>
                    <Location />
                    <div className="space-y-5">
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