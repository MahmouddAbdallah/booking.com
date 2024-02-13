import img1 from '../../../assets/BasicSetupEmptyState.png'
import img2 from '../../../assets/BoardChartUp.png'
import img3 from '../../../assets/CustomerSupport.png'
import img4 from '../../../assets/Document.png'
import img5 from '../../../assets/ChannelManager.png'
import img6 from '../../../assets/Websites.png'

const ManageYourProperty = () => {
    const sectionList = [
        {
            img: img1,
            title: "Quick registration",
            content: "Set up your property listing in 15 minutes"
        },
        {
            img: img6,
            title: "Easy property import",
            content: "Quickly import your property information from other travel sites"
        },
        {
            img: img3,
            title: "Robust support",
            content: "We offer customer support in 45 languages and provide partners with Pulse, our booking management app"
        },
        {
            img: img2,
            title: "Secure growth",
            content: "Get guaranteed payouts and fraud protection with Online Payments by Booking.com"
        },
        {
            img: img5,
            title: "Streamlined work",
            content: "Manage your property efficiently by working with one of our 600+ trusted Connectivity providers"
        },
        {
            img: img4,
            title: "Transparent commission",
            content: "Understand what and whom you’re paying with the transparent commission"
        },
    ]
    return (
        <section className='p-container py-20'>
            <div>
                <div className=''>
                    <h2 className='text-3xl font-bold'>
                        Manage your property with ease
                    </h2>
                </div>
                <div className='grid grid-cols-12 pt-10 gap-10'>
                    {sectionList.map((item, i) =>
                        <div key={item.img}
                            className='col-span-12 md:col-span-6'>
                            <div>
                                <img className={`${i == 1 ? 'w-20' :
                                    i == 2 ? 'w-16' :
                                        i == 3 ? "w-16" :
                                            i == 5 ? "w-14" :
                                                "w-24"}`} src={item.img} alt="" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold">
                                    {item.title}
                                </h1>
                                <p>
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default ManageYourProperty