import { useEffect, useRef } from "react"
import { MouseIcon } from "../../../components/Icons";

const ScrollMouse = () => {
    const elementRef = useRef<HTMLDivElement>(null);
    const handleScroll = () => {
        if (elementRef.current) {
            elementRef.current.style.display = 'none';
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div
            ref={elementRef}
            onClick={() => {
                if (elementRef.current) {
                    elementRef.current.style.display = 'none';
                }
            }} className="fixed h-screen w-screen top-0 left-0 flex items-end justify-center bg-black/30 z-40">
            <div>
                <div className="py-8 flex flex-col items-center text-white">
                    <div>
                        scroll
                    </div>
                    <div>
                        <MouseIcon className="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScrollMouse