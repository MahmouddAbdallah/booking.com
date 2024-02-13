import { useFormContext } from 'react-hook-form'
import { apartmentType } from '../../../types/apartment'
import ErrorMessageFrom from '../../../components/ErrorMessageFrom'

const DepartmentDetails = () => {
    const { register, formState: { errors } } = useFormContext<apartmentType>()
    return (
        <div>
            <label className="w-full space-y-2">
                <p className='text-sm font-semibold text-black/60'>Title</p>
                <input
                    type='text'
                    {...register('title', { required: "Please add a title" })}
                    placeholder={"Please add title"}
                    className="border-[1.6px] border-black/30 rounded w-full py-1 px-2 outline-none focus:border-blue-600"
                />
                <ErrorMessageFrom errors={errors.title} message={errors.title?.message} />
            </label>
            <label className="w-full space-y-2">
                <p className='text-sm font-semibold text-black/60'>price</p>
                <input type='number' min={300} max={1000}
                    {...register('price', { required: "Please add a price" })}
                    placeholder={"Please add price"}
                    className="border-[1.6px] border-black/30 rounded w-full py-1 px-2 outline-none focus:border-blue-600"
                />
                <ErrorMessageFrom errors={errors.price} message={errors.price?.message} />
            </label>
            <div className="w-full flex flex-col space-y-1">
                <h4 className="font-semibold">
                    Location :
                </h4>
                <div className="w-full flex gap-3">
                    <label className="w-full space-y-2">
                        <p className='text-sm font-semibold text-black/60'>City</p>
                        <input
                            type='text'
                            {...register('location.city', { required: "Please add a city location" })}
                            placeholder={"Please add city location"}
                            className="border-[1.6px] border-black/30 rounded w-full py-1 px-2 outline-none focus:border-blue-600"
                        />
                        <ErrorMessageFrom errors={errors.floor?.index} message={errors.location?.city?.message} />
                    </label>
                    <label className="w-full space-y-2">
                        <p className='text-sm font-semibold text-black/60'>Address</p>
                        <input
                            type='text'
                            {...register('location.address', { required: "Please add a address location" })}
                            placeholder={"Please add address location"}
                            className="border-[1.6px] border-black/30 rounded w-full py-1 px-2 outline-none focus:border-blue-600"
                        />
                        <ErrorMessageFrom errors={errors.floor?.total} message={errors.location?.address?.message} />
                    </label>
                </div>
            </div>
            <div className="w-full flex flex-col space-y-1">
                <h4 className="font-semibold">
                    Floor :
                </h4>
                <div className="w-full flex gap-3">
                    <label className="w-full space-y-2">
                        <p className='text-sm font-semibold text-black/60'>Index</p>
                        <input
                            type='number'
                            {...register('floor.index', { required: "Please add a floor index" })}
                            placeholder={"Please add floor index"}
                            className="border-[1.6px] border-black/30 rounded w-full py-1 px-2 outline-none focus:border-blue-600"
                        />
                        <ErrorMessageFrom errors={errors.floor?.index} message={errors.floor?.index?.message} />
                    </label>
                    <label className="w-full space-y-2">
                        <p className='text-sm font-semibold text-black/60'>Total</p>
                        <input
                            type='number'
                            {...register('floor.total', { required: "Please add a floor total" })}
                            placeholder={"Please add floor total"}
                            className="border-[1.6px] border-black/30 rounded w-full py-1 px-2 outline-none focus:border-blue-600"
                        />
                        <ErrorMessageFrom errors={errors.floor?.total} message={errors.floor?.total?.message} />
                    </label>
                </div>
            </div>
            <div>
                <h4 className="font-semibold">
                    Description :
                </h4>
                <textarea
                    placeholder="Add description"
                    {...register('description', { required: 'please add description' })}
                    className="border-[1.6px] border-black/30 rounded w-full mt-2 py-1 px-2 outline-none focus:border-blue-600 h-36 resize-none" >
                </textarea>
                <ErrorMessageFrom errors={errors.description} message={errors.description?.message} />
            </div>
        </div>
    )
}

export default DepartmentDetails