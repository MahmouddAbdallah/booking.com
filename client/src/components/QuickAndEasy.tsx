import { BeachtIcon, BikeIcon, CityIcon } from './Icons'

const QuickAndEasy = () => {
    const tools = [
        {
            Icon: <BeachtIcon className='w-4' />,
            title: "Beach"
        },
        {
            Icon: <CityIcon className='w-4' />,
            title: "City"
        },
        {
            Icon: <BikeIcon className='w-4' />,
            title: "Outdoors"
        },
    ];

    return (
        <div className='space-y-3 mt-14'>
            <div className='p-container'>
                <div>
                    <h4 className='text-2xl font-bold'>Quick and easy trip planner</h4>
                    <p className='text-gray-700'>Pick a vibe and explore the top destinations in Egypt</p>
                </div>
                <div className='flex gap-5 my-3'>
                    {
                        tools.map((tool) =>
                            <button key={tool.title}>
                                <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${tool.title == 'Beach' ? 'border border-blue-600 bg-blue-600/5' : 'hover:bg-black/5 duration-300'}`}>
                                    <div className={`${tool.title == 'Beach' && ' fill-blue-500'}`}>
                                        {tool.Icon}
                                    </div>
                                    <div>
                                        <span className={`font-ight text-sm ${tool.title == 'Beach' && ' text-blue-500'}`}>
                                            {tool.title}
                                        </span>
                                    </div>
                                </div>
                            </button>
                        )
                    }
                </div>
                <div className='flex gap-2 overflow-x-auto hidden-scrollbar'>
                    {
                        Array(100).fill(undefined).map((_, i) => {
                            return (
                                <div key={i}>
                                    <div>
                                        <div>
                                            <div className='h-28 w-32 bg-slate-300 animate-pulse rounded-md' />
                                        </div>
                                        <div>
                                            <h5 className='font-bold'>Ain Sokhna</h5>
                                            <p className='text-sm text-gray-600'>117 km away</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default QuickAndEasy