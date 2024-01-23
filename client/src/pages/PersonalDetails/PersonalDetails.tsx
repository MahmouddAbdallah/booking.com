import { useState } from "react"
import { CameraIcon } from "../../components/Icons"
import EmailDetails from "./components/EmailDetails"
import NameDetails from "./components/NameDetails"
import { UseAppContext } from "../../context/appContext"
import PhoneDetails from "./components/PhoneDetails"
import GenderDetails from "./components/GenderDetails"
import AddressDetails from "./components/AddressDetails"
import Sidebar from "./components/Sidebar"

const PersonalDetails = () => {
    const context = UseAppContext()
    const [toggle, setToggle] = useState("")
    return (
        <div className="lg:px-24 xl:px-52 grid grid-cols-12 gap-4">
            <div className="hidden lg:block py-3 col-span-3">
                <Sidebar />
            </div>
            <div className="w-full col-span-12 lg:col-span-9">
                <div className="py-4 flex justify-between px-3">
                    <div className="space-y-1">
                        <h4 className="text-3xl font-bold lg:text-3xl">Personal details</h4>
                        <p className="text-gray-600">Update your information and find out how it's used.</p>
                    </div>
                    <div className="relative flex justify-center overflow-hidden h-16 w-16 rounded-full border-2 border-yellow-500 bg-red-600 text-white">
                        <div className=" text-3xl font-semibold flex justify-center items-center">
                            M
                        </div>
                        <div className="absolute bottom-0 bg-black/20 w-full flex justify-center py-1">
                            <CameraIcon className="w-4 fill-white" />
                        </div>
                    </div>
                </div>
                <div className="pb-14">
                    <NameDetails
                        setToggle={setToggle}
                        toggle={toggle}
                        context={context} />
                    <EmailDetails
                        setToggle={setToggle}
                        toggle={toggle}
                        context={context} />
                    <PhoneDetails
                        setToggle={setToggle}
                        toggle={toggle}
                        context={context} />
                    <GenderDetails
                        setToggle={setToggle}
                        toggle={toggle}
                        context={context} />

                    <AddressDetails
                        setToggle={setToggle}
                        toggle={toggle}
                        context={context} />

                </div>
            </div>
        </div>
    )
}

export default PersonalDetails