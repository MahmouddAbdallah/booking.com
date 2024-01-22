import Offer from "../components/Offer";
import QuickAndEasy from "../components/QuickAndEasy";
import Search from "../components/Search";

const Home = () => {
    return (
        <div className="">
            <div className="bg-primary px-3 lg:px-24 xl:px-44 pt-16 pb-60 lg:pb-16">
                <div>
                    <h4 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold py-3">
                        Find your next stay
                    </h4>
                    <p className="text-white text-lg lg:text-xl">
                        Search low prices on hotels, homes and much more...
                    </p>
                </div>
            </div>
            <div>
                <Search />
            </div>
            <div className=" mt-28">
                <Offer />
                <QuickAndEasy />
            </div>
        </div>
    );
}

export default Home;