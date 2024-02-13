import { useParams } from "react-router-dom";
import { ftechApatmentAPI } from "../../utils/apartmentAPI";
import { useCallback, useEffect, useState } from "react";
import { apartmentType } from "../../types/apartment";
import ApartmentNaviage from "./components/ApartmentNaviage";
import { LocationIcon, StarIcon } from "../../components/Icons";
import Images from "./components/Images";
import Facilities from "./components/Facilities";
import NotFound from "../../components/NotFound";
import Rules from "./components/Rules";
import ImageSlider from "./components/ImageSlider";

const ShowApartment = () => {
  const { apartmentId } = useParams();
  const [apartment, setApartment] = useState<apartmentType>()
  const fetchApartment = useCallback(async () => {
    try {
      const data = await ftechApatmentAPI(apartmentId as string)
      setApartment(data);
    } catch (error) {
      console.error(error);
    }
  }, [apartmentId])

  useEffect(() => {
    fetchApartment()
  }, [fetchApartment])

  useEffect(() => {
    if (apartment?.title) {
      document.title = apartment?.title
    }
  }, [apartment])

  if ((apartmentId?.length != 24) || (apartment == null)) {
    return <NotFound />
  }
  return (
    <div className=" p-container py-3 ">
      <div className="w-full flex gap-7 ">
        <div className="hidden lg:block">
          <div className=" w-72 space-y-10 ">
            <div className=" w-full py-2 flex justify-center items-center bg-blue-100 ">
              <span className="text-blue-600"> We Price Match</span>
            </div>
            <div className="w-full bg-goldColor px-3 py-5">
              <span className="text-lg font-semibold">Search</span>
              <form >
                <label>
                  <div className="pt-3">
                    <span className="text-sm">Destination/property name:</span>
                    <input className="text-sm bg-white rounded outline-none w-full py-2" type="text" />
                  </div>
                </label>
                <label>
                  <div className="pt-3">
                    <span className="text-sm">Check-in date</span>
                    <input className="text-sm bg-white rounded outline-none w-full py-2" type="text" />
                  </div>
                </label>
                <label>
                  <div className="pt-3">
                    <span className="text-sm">3-night stay</span>
                    <input className="text-sm bg-white rounded outline-none w-full py-2" type="text" />
                  </div>
                </label>
                <button className=" w-full py-2 rounded bg-blue-700 text-white font-semibold mt-3">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
        <div>
          <ApartmentNaviage />
          <div >
            <div>
              <div className="py-3 flex gap-3">
                <div className="flex gap-1">
                  {Array(3).fill("").map((I, _) => (
                    <StarIcon key={_ || I} className="w-3 fill-goldColor" />
                  ))}
                </div>
                <div>
                  <span className="px-1 py-[.5px] text-xs bg-goldColor">
                    New to Booking.com
                  </span>
                </div>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold">{apartment?.title}</h1>
                <div>
                  <div className="pt-2 flex cursor-help" title="location">
                    <LocationIcon className="w-6 h-6 fill-blue-600 hover:fill-primary duration-300" />
                    <span className="text-sm">{apartment?.location.address}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="block lg:hidden">
              <ImageSlider images={apartment?.images} />
            </div>
            <div className="hidden lg:block">
              <Images images={apartment?.images} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-14 mt-10">
          <div>
            <span className="text-sm">
              {apartment?.description}
            </span>
          </div>
          <div>
            <div className=" w-80 h-full bg-blue-50 hidden lg:block">

            </div>
          </div>
        </div>
        <div>
          <div className="py-3">
            <h3 className="font-bold">Most popular facilities</h3>
          </div>
          <div>
            <Facilities facilities={apartment?.facilities} />
          </div>
        </div>
        {apartment.rules && <Rules rules={apartment?.rules} />}
      </div>
    </div>
  )
}

export default ShowApartment