import { SetStateAction } from "react"

interface props {
    context?: {
        user: {
            gender: string
        }
    },
    setToggle: React.Dispatch<SetStateAction<string>>;
    toggle: string;
}
const GenderDetails: React.FC<props> = ({ context, setToggle, toggle }) => {
    return (
        <div className="w-full border-t p-3 flex justify-between items-center">
            <div className="w-full">
                <p>Gender</p>
                {toggle == 'gender' ?
                    <form className=" mt-5">
                        <div className="w-full space-y-1">
                            <div>
                                <h5 className="text-sm font-semibold">
                                    Gender
                                    <span className="text-red-500">
                                        *
                                    </span>
                                </h5>
                            </div>
                            <select className="w-full border p-2 rounded outline-blue-600 text-sm cursor-pointer"
                                name="gender"
                                autoComplete="sex" >
                                <option value="">Select your gender</option>
                                <option value="male">I am a man</option>
                                <option value="female">I am a woman</option>
                            </select>
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
                        <p className="text-sm">{context?.user.gender}</p>
                        <p className="text-sm py-1 text-gray-600">
                            {context?.user.gender ? context.user.gender : "Select your gender"}
                        </p>
                    </div>
                }
            </div>
            {toggle == 'gender' ? "" :
                <div>
                    <button
                        disabled={toggle ? true : false}
                        onClick={() => { setToggle("gender") }}
                        className={`text-blue-600 text-sm font-semibold ${toggle ? 'text-gray-500' : 'text-blue-600'}`}>
                        Edit
                    </button>
                </div>
            }
        </div>
    )
}

export default GenderDetails