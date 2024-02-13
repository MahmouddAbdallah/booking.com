import { useState } from "react"
import InputFile from "../components/InputFile";
import axios from "axios";
import { UseAppContext } from '../../../context/partnerContext'
import { FormProvider, useForm } from "react-hook-form";
import { apartmentType, ImageDataType } from "../../../types/apartment";
import DepartmentDetails from "../components/DepartmentDetails";
import DeparmentFacilities from "../components/DeparmentFacilities";
import Rules from "../components/Rules";
import { useNavigate } from 'react-router-dom'


const DepartmentSingle = () => {
    const context = UseAppContext()
    const [imageSelect, setImageSelect] = useState<ImageDataType[]>([]);
    const navigate = useNavigate();

    const formMothed = useForm<apartmentType>()
    const { handleSubmit } = formMothed;

    const submitApartment = handleSubmit(async (dataForm) => {
        const formData = new FormData();
        imageSelect.forEach((file) => {
            formData.append("imageFiles", file)
        })
        formData.append('title', dataForm.title)
        formData.append('price', dataForm.price.toString())
        formData.append('city', dataForm.location.city);
        formData.append('address', dataForm.location.address);
        formData.append('description', dataForm.description)
        formData.append('authorizedUser', context?.partner._id as string)
        formData.append("facilities", JSON.stringify(dataForm.facilities))
        formData.append("checkIn", JSON.stringify(dataForm.rules.CheckIn))
        formData.append("rules", JSON.stringify(dataForm.rules))
        console.log(dataForm);

        await axios.post('/api/apartment', formData)
        navigate("/partner/my_properties")
    })

    return (
        <div className="p-container pb-10">
            <div className="my-5">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold">Department Single Page</h1>
            </div>
            <FormProvider {...formMothed}>
                <form onSubmit={submitApartment} >
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
export default DepartmentSingle