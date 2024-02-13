
const ApartmentNaviage = () => {
    const listNav = [
        {
            title: 'Overview',
            link: "#overview"
        },
        {
            title: 'Info & prices',
            link: "#prices"
        },
        {
            title: 'Facilities',
            link: "#facilities"
        },
        {
            title: 'House rules',
            link: "#rules"
        },
        {
            title: 'Guest reviws',
            link: "#reviws"
        },
    ];
    return (
        <div className="border-b">
            <ul className='flex w-full lg:w-[70%]'>
                {
                    listNav.map((item, i) => {
                        return (
                            <li key={item.link} className="w-full">
                                <a href={item.link}>
                                    <div className={`w-full hover:bg-black/10 duration-300 py-3 flex justify-center items-center ${i == 0 && 'border-b-2 border-blue-600'}`}>
                                        <span className="whitespace-nowrap text-sm">
                                            {item.title}
                                        </span>
                                    </div>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ApartmentNaviage