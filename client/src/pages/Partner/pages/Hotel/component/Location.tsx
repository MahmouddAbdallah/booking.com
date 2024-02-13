import { useFormContext } from 'react-hook-form'
import { HotelType } from '../../../../../types/hotelType'

const Location = () => {
  const { register } = useFormContext<HotelType>()
  return (
    <div>
      <select className='text-black'  {...register('location.country')} >
        <option value="Egypt">Egypt</option>
        <option value="GAZA">GAZA</option>
      </select>
    </div>
  )
}

export default Location