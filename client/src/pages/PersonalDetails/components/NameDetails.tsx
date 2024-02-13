import axios from 'axios';
import { SetStateAction, useEffect, useState } from 'react'
import { UserInterface } from '../../../context/appContext'
interface props {
    context?: {
        user: UserInterface
        setUser: React.Dispatch<SetStateAction<UserInterface>>
    }
    setToggle: React.Dispatch<SetStateAction<string>>;
    toggle: string;
}
const NameDetails: React.FC<props> = ({ context, setToggle, toggle }) => {
    const [firstName, setFirstName] = useState(context?.user.firstName)
    const [lastName, setLastName] = useState(context?.user.lastName)

    useEffect(() => {
        if (context?.user) {
            setFirstName(context?.user.firstName || "");
            setLastName(context?.user.lastName || "");
        }
    }, [context?.user]);

    const updateUser = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        try {
            e.preventDefault()
            const { data } = await axios.put(`/api/user/${context?.user._id}`,
                { firstName: firstName, lastName: lastName });
            context?.setUser(data.user);
            setToggle("")
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="border-t p-3 flex justify-between items-center">
            <div className=" w-full">
                <p>Name</p>{
                    toggle == 'name' ?
                        <form className="pt-3">
                            <div className="flex gap-5 w-full">
                                <div className="w-full space-y-1">
                                    <div>
                                        <h5 className="text-sm font-semibold">
                                            First Name(s)
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </h5>
                                    </div>
                                    <input
                                        type="text"
                                        className='text-sm border border-black/30 focus:outline-blue-500 w-full rounded-md py-2 px-2'
                                        value={firstName}
                                        onChange={e => setFirstName(e.target.value)}
                                    />
                                </div>
                                <div className="w-full space-y-1">
                                    <div>
                                        <h5 className="text-sm font-semibold">
                                            last Name(s)
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </h5>
                                    </div>
                                    <input
                                        type="text"
                                        className='text-sm border border-black/30 focus:outline-blue-500 w-full rounded-md py-2 px-2'
                                        value={lastName}
                                        onChange={e => setLastName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between pt-3">
                                <button
                                    onClick={() => { setToggle('') }}
                                    className="text-sm font-semibold text-blue-600 py-2 px-4 rounded hover:bg-blue-600/10 duration-300">
                                    Cancel
                                </button>
                                <button
                                    onClick={updateUser}
                                    className="bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded hover:bg-blue-800 duration-300"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                        :
                        <p className="text-sm">{context?.user.firstName + " " + context?.user?.lastName}</p>}
            </div>
            {toggle == 'name' ? "" :
                <div>
                    <button
                        disabled={toggle ? true : false}
                        onClick={() => { setToggle("name") }}
                        className={`text-blue-600 text-sm font-semibold ${toggle ? 'text-gray-500' : 'text-blue-600'}`}>
                        Edit
                    </button>
                </div>
            }
        </div>
    )
}

export default NameDetails