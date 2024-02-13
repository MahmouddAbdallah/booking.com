interface imagesProps {
    images: string[] | undefined;
}
const Images: React.FC<imagesProps> = ({ images }) => {
    return (
        <div>
            <div id="overview" className=" h-[350px] w-[calc(450px+280px)] mt-5 mb-3 relative block">
                {

                    images?.map((url, index) => (
                        index < 3 &&
                        <div
                            key={url}
                            className={`object-cover rounded overflow-hidden absolute  
                                ${index == 0 ? "w-[280px] h-[170px] " :
                                    index == 2 ? "w-[280px] h-[170px] top-[180px]" :
                                        " w-[490px] h-[350px] ml-[290px]"
                                }`}
                        >
                            <img key={index} src={url} alt={`Image ${index}`} className={`h-full w-full object-cover border`} />
                        </div>
                    ))
                }
            </div>
            <div className="flex w-[calc(490px+280px)] gap-2 overflow-hidden">
                {images?.map((url, index) => (
                    index > 3 &&
                    <div key={url}>
                        <div className="w-44 h-36">
                            <img src={url} className="w-56 h-36 object-cover" alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Images