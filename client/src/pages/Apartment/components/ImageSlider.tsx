import { useRef } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "../../../components/Icons";

interface imagesProps {
    images: string[] | undefined;
}
const ImageSlider: React.FC<imagesProps> = ({ images }) => {
    const sliderRef = useRef<HTMLUListElement>(null);
    const handleRightSide = () => {
        const slider = sliderRef.current
        if (slider) {
            slider.scrollLeft += slider.clientWidth + 2
        }
    }
    const handleLeftSide = () => {
        const slider = sliderRef.current
        if (slider) {
            slider.scrollLeft -= slider.clientWidth + 2
        }
    }
    return (
        <div className="pt-5 flex items-center">
            <div className="absolute h-44 left-0 w-[calc((100vw-40px)/2)]">
                <button
                    className="w-full h-full pr-32 flex justify-center items-center"
                    onClick={handleLeftSide}
                >
                    <ArrowLeftIcon className="w-10 md:w-16 fill-white stroke-slate-950/30" />
                </button>
            </div>
            <ul ref={sliderRef} className="flex overflow-hidden w-[calc(100vw-40px)] scroll-smooth">
                {images?.map(image =>
                    <li key={image}>
                        <div className="w-[calc(100vw-40px)]">
                            <img src={image} className="h-96 w-full object-cover" alt="Imagem do produto" />
                        </div>
                    </li>
                )}
            </ul>
            <div className="absolute h-44 right-0 w-[calc((100vw-40px)/2)]">
                <button
                    className="w-full h-full pl-32 flex justify-center items-center stroke-slate-950/30"
                    onClick={handleRightSide}
                >
                    <ArrowRightIcon className="w-10 md:w-16 fill-white" />
                </button>
            </div>
        </div>
    )
}

export default ImageSlider