import { useEffect, useState } from "react"
import { ftechApatmentsAPI } from "../../utils/apartmentAPI"
import SearchApartment from "./components/SearchApartment"
import { apartmentType } from "../../types/apartment"
import { Link } from "react-router-dom"

const Apartment = () => {
    const [apartments, setApartments] = useState<apartmentType[]>([])
    const fetchApartments = async () => {
        const data = await ftechApatmentsAPI('fields=location,title,price,description,images')
        setApartments(data);
        console.log(data);

    }
    useEffect(() => {
        fetchApartments();
    }, [])

    return (
        <div className="">
            <SearchApartment />
            <div className="h-screen p-container">
                <div className="pb-5 pt-8">
                    <h4 className='text-2xl font-bold'>Our avalible  apartments</h4>
                    <p className='text-gray-700'>Pick a vibe and explore the top destinations in Egypt</p>
                </div>
                <ul className="flex gap-3">
                    {
                        apartments.map(item => {
                            return (
                                <li key={item._id}>
                                    <Link to={`${item._id}`}>
                                        <div className="w-64 md:w-72 lg:w-80 rounded overflow-hidden shadow pb-2 ">
                                            <div className="w-64 h-52 md:w-72 lg:w-80 ">
                                                <img className="w-full h-full object-cover" src={item.images[0]} alt="" />
                                            </div>
                                            <div className="px-2">
                                                <h3 className="font-semibold lg:text-lg py-2">{item.title}</h3>
                                                <div className="flex gap-2">
                                                    <p className="font-semibold">City : </p>
                                                    <span>{item.location.city}</span>
                                                </div>
                                                <span className="text-sm text-black/70">{item?.description?.substring(0, 70)}....</span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Apartment