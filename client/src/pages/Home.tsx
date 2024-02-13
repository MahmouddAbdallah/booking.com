import { useEffect } from "react";
import Offer from "../components/Offer";
// import QuickAndEasy from "../components/QuickAndEasy";
import Search from "../components/Search";
import { UseAppContext } from "../context/appContext";
import BrowseByPropertyType from "../components/BrowseByPropertyType";

const Home = () => {
    const context = UseAppContext()
    useEffect(() => {
        document.title = 'Booking.com'
    }, [])
    return (
        <div className="">
            <div className="bg-primary p-container pt-16 pb-60 lg:pb-16">
                <div>
                    <h4 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold py-3">
                        {context?.user?.firstName ? `Where to next, ${context?.user?.firstName}?` : "Find your next stay"}
                    </h4>
                    <p className="text-white text-lg lg:text-xl xl:text-2xl">
                        {context?.user?.firstName ? `Find exclusive Genius rewards in every corner of the world!` : "Search low prices on hotels, homes and much more..."}
                    </p>
                </div>
            </div>
            <div>
                <Search />
            </div>
            <div className=" mt-28">
                <Offer />
                <BrowseByPropertyType />
                {/* <QuickAndEasy /> */}
            </div>
        </div>
    );
}

export default Home;