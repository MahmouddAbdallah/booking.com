import { CameraIcon } from '../../../components/Icons'
import { useEffect, useRef, useState } from 'react'
interface inputFileprops {
    setImageSelect: React.Dispatch<React.SetStateAction<ImageDataType[]>>;
}
type ImageDataType = string | File;
const InputFile: React.FC<inputFileprops> = ({ setImageSelect }) => {
    const [images, setImages] = useState<string[]>([]);
    const inputFileRef = useRef<HTMLInputElement>(null)
    const btnRef = useRef<HTMLButtonElement>(null);
    const handleBtnClick = (e: MouseEvent) => {
        e.preventDefault()
        const input = inputFileRef.current;
        if (btnRef && btnRef.current) {
            input?.click()
        }
    }
    useEffect(() => {
        const btn = btnRef.current
        if (btn) btn.addEventListener("click", handleBtnClick);
        return () => {
            if (btn) btn.removeEventListener('click', handleBtnClick);
        }
    }, [])

    const handleImagesFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const urls: string[] = [];
            for (let i = 0; i < files.length; i++) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    if (event.target && event.target.result) {
                        urls.push(event.target.result as string);
                        if (urls.length === files.length) {
                            setImages(urls);
                        }
                    }
                    // newFormData.append('images', files[i]);
                    setImageSelect((prev) => { return [...prev, files[i]] })
                };
                reader.readAsDataURL(files[i]);
            }
        }
    };
    return (
        <div>
            <div className="">
                <div className=" mb-2">
                    <h4 className="font-semibold">
                        Add At least one Image :
                    </h4>
                </div>
                <div className="w-full grid gap-1 grid-cols-12">
                    {
                        images.map((url, index) => (
                            index < 12 &&
                            <div key={url} className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2 relative group" >
                                <img src={url} className={`h-32 w-full object-cover rounded`} alt={`Image ${index}`} />
                                {
                                    index == 11 &&
                                    <div className='absolute right-0 top-0 w-full h-full bg-black/50 flex justify-center items-center'>
                                        <p className='text-white text-3xl'>
                                            {images.length}
                                        </p>
                                    </div>
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
            {
                images?.length < 1 && <div className="mt-1 grid grid-cols-12">
                    <input ref={inputFileRef} className="hidden" onChange={handleImagesFile} type="file" multiple />
                    <button ref={btnRef} className="w-full h-32 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2 lg:h-32 bg-slate-200 hover:bg-slate-300 rounded-lg flex justify-center items-center group">
                        <CameraIcon className="w-10 opacity-50 fill-black/50 group-hover:fill-white group-hover:opacity-100" />
                    </button>
                </div>
            }
        </div>
    )
}

export default InputFile
