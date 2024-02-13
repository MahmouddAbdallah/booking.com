import { useFormContext } from 'react-hook-form'
import { apartmentType } from '../../../types/apartment';
import ErrorMessageFrom from '../../../components/ErrorMessageFrom';
const Rules = () => {
    const { register, formState: { errors } } = useFormContext<apartmentType>();
    return (
        <div>
            <h4 className="font-semibold">
                Rules :
            </h4>
            <div>
                <div className="lg:flex gap-5">
                    <div className="mt-5 gap-3 lg:w-full border pt-2 pb-3 px-5 rounded bg-black/5">
                        <p className="whitespace-nowrap text-lg font-semibold mb-3">Check-in</p>
                        <div className="flex gap-5 w-full">
                            <label className="w-full flex items-center gap-3">
                                <p className=" font-semibold whitespace-nowrap">From :</p>
                                <input
                                    {...register("rules.CheckIn.time.from")}
                                    type="time"
                                    className="w-full border border-black/50 px-2 py-1 text-lg rounded" />
                            </label>
                            <label className="w-full flex items-center gap-3">
                                <p className=" font-semibold whitespace-nowrap">To :</p>
                                <input
                                    {...register("rules.CheckIn.time.to")}
                                    type="time"
                                    className="w-full border border-black/50 px-2 py-1 text-lg rounded" />
                            </label>
                        </div>
                        <div className='pl-14 pt-2'>
                            <input
                                type="text"
                                {...register("rules.CheckIn.message")}
                                placeholder='Add description'
                                className="border border-black/50 rounded w-full py-1 px-2 outline-none focus:border-blue-600"
                            />
                        </div>
                    </div>
                    <div className="mt-5 gap-3 lg:w-full border pt-2 pb-3 px-5 rounded bg-black/5">
                        <p className="whitespace-nowrap text-lg font-semibold mb-3">Check-out</p>
                        <div className="flex gap-5 w-full">
                            <label className="w-full flex items-center gap-3">
                                <p className=" font-semibold whitespace-nowrap">From :</p>
                                <input
                                    {...register("rules.CheckOut.time.from")}
                                    type="time"
                                    className="w-full border border-black/50 px-2 py-1 text-lg rounded" />
                            </label>
                            <label className="w-full flex items-center gap-3">
                                <p className=" font-semibold whitespace-nowrap">To :</p>
                                <input
                                    {...register("rules.CheckOut.time.to")}
                                    type="time"
                                    className="w-full border border-black/50 px-2 py-1 text-lg rounded" />
                            </label>
                        </div>
                        <div className='pl-14 pt-2'>
                            <input
                                type="text"
                                {...register("rules.CheckOut.message")}
                                placeholder='Add description'
                                className="border border-black/50 rounded w-full py-1 px-2 outline-none focus:border-blue-600"
                            />
                        </div>
                    </div>
                </div>
                <div className=' lg:grid grid-cols-12 gap-5 mt-5'>
                    <label className="w-full space-y-2 col-span-6">
                        <p className='text-sm font-semibold text-black/60'>smoking</p>
                        <input
                            type='text'
                            {...register('rules.smoking', { required: "Please add a smoking" })}
                            placeholder={"Please add smoking"}
                            className="border-[1.6px] border-black/30 rounded w-full py-1 px-2 outline-none focus:border-blue-600"
                        />
                        <ErrorMessageFrom errors={errors.rules?.smoking} message={errors.rules?.smoking?.message} />
                    </label>
                    <label className="w-full space-y-2 col-span-6">
                        <p className='text-sm font-semibold text-black/60'>pets</p>
                        <input
                            type='text'
                            {...register('rules.pets', { required: "Please add a pets" })}
                            placeholder={"Please add pets"}
                            className="border-[1.6px] border-black/30 rounded w-full py-1 px-2 outline-none focus:border-blue-600"
                        />
                        <ErrorMessageFrom errors={errors.rules?.pets} message={errors.rules?.pets?.message} />
                    </label>
                    <label className="w-full space-y-2 col-span-6">
                        <p className='text-sm font-semibold text-black/60'>Age restriction</p>
                        <input
                            type='text'
                            {...register('rules.ageRestriction', { required: "Please add a ageRestriction" })}
                            placeholder={"Please add ageRestriction"}
                            className="border-[1.6px] border-black/30 rounded w-full py-1 px-2 outline-none focus:border-blue-600"
                        />
                        <ErrorMessageFrom errors={errors.rules?.ageRestriction} message={errors.rules?.ageRestriction?.message} />
                    </label>
                    <label className="w-full space-y-2 col-span-6">
                        <p className='text-sm font-semibold text-black/60'>Damage policy</p>
                        <input
                            type='text'
                            {...register('rules.Damagepolicy', { required: "Please add a Damagepolicy" })}
                            placeholder={"Please add Damagepolicy"}
                            className="border-[1.6px] border-black/30 rounded w-full py-1 px-2 outline-none focus:border-blue-600"
                        />
                        <ErrorMessageFrom errors={errors.rules?.Damagepolicy} message={errors.rules?.Damagepolicy?.message} />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Rules