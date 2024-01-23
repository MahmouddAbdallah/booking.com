import { SetStateAction } from "react"

interface props {
    context?: {
        user: {
            phone: string
        }
    },
    setToggle: React.Dispatch<SetStateAction<string>>;
    toggle: string;
}
const PhoneDetails: React.FC<props> = ({ context, setToggle, toggle }) => {
    return (
        <div className="w-full border-t p-3 flex justify-between items-center">
            <div className="w-full">
                <p>Phone number</p>
                {toggle == 'phone' ?
                    <form className=" mt-5">
                        <div className="w-full space-y-1">
                            <div>
                                <h5 className="text-sm font-semibold">
                                    Phone number
                                </h5>
                            </div>
                            <input
                                className='text-sm border border-black/30 focus:outline-blue-500 w-full rounded-md py-2 px-2'
                                value={context?.user.phone}
                                type="text"
                            />
                        </div>
                        <div className="flex justify-between pt-3">
                            <button
                                onClick={() => { setToggle("") }}
                                className="text-sm font-semibold text-blue-600 py-2 px-4 rounded hover:bg-blue-600/10 duration-300">
                                Cancel
                            </button>
                            <button
                                className="bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded hover:bg-blue-800 duration-300">
                                Save
                            </button>
                        </div>
                    </form>
                    :
                    <div>
                        <p className="text-sm">{context?.user.phone}</p>
                        <p className="text-sm py-1 text-gray-600">
                            Properties or attractions you book will use this number if they need to contact you.
                        </p>
                    </div>
                }
            </div>
            {toggle == 'phone' ? "" :
                <div>
                    <button
                        disabled={toggle ? true : false}
                        onClick={() => { setToggle("phone") }}
                        className={`text-blue-600 text-sm font-semibold ${toggle ? 'text-gray-500' : 'text-blue-600'}`}>
                        Edit
                    </button>
                </div>
            }
        </div>
    )
}

export default PhoneDetails