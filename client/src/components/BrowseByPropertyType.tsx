import { Link } from "react-router-dom"
import { ArrowRightIcon } from "./Icons"
import { useRef } from "react"

const BrowseByPropertyType = () => {
    const sliderRef = useRef<HTMLDivElement>(null)
    const sectionList = [
        {
            img: 'https://res.cloudinary.com/dbqcy0tzn/image/upload/v1707127530/57584488_mn4xpp.jpg',
            name: 'Hotels',
            link: "/hotels"
        },
        {
            img: 'https://res.cloudinary.com/dbqcy0tzn/image/upload/v1707125635/apartment.jpg',
            name: 'Apartment',
            link: "/apartment"
        },
        {
            img: 'https://res.cloudinary.com/dbqcy0tzn/image/upload/v1707127529/45450084_iknnzb.jpg',
            name: 'Resorts',
            link: "/resorts"
        },
        {
            img: 'https://res.cloudinary.com/dbqcy0tzn/image/upload/v1707127530/100235855_gnujq9.jpg',
            name: 'Villas',
            link: "/villas"
        },
    ]
    const btnSlide = () => {
        const slider = sliderRef.current
        if (slider) slider.scrollLeft += 200;
    }
    return (
        <section >
            <div className='p-container py-5'>
                <div>
                    <h4 className='text-2xl font-bold'>Browse by property type</h4>
                </div>
                <div className="relative flex items-center">
                    <div ref={sliderRef} className="mt-5 flex items-center gap-5 overflow-x-auto hidden-scrollbar scroll-smooth ">
                        {
                            sectionList.map((item) => {
                                return (
                                    <div key={item.link}>
                                        <Link to={item.link}>
                                            <div>
                                                <div className='w-56 md:w-60 lg:w-[260px] shadow-sm rounded-md overflow-hidden' >
                                                    <img
                                                        className=""
                                                        src={item.img}
                                                        alt={item.name}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <h5 className='font-bold'>{item.name}</h5>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="absolute -right-4 hidden md:block">
                        <button
                            onClick={btnSlide}
                            className="bg-white rounded-full p-3 shadow border">
                            <ArrowRightIcon className="w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BrowseByPropertyType