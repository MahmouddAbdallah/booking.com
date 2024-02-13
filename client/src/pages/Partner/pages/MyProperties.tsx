import { Link } from 'react-router-dom'
// import bedRoomImg from '../../../assets/illustrated_bedroom.jpg'
const MyProperties = () => {
    return (
        <div>
            <div className="p-container">
                <div className='py-3'>
                    <h1 className='text-2xl'>My properties</h1>
                </div>
                <div>
                    <div className='flex justify-end'>
                        <Link to={'/partner/sign-up/category'} className="block text-blue-600 px-3 py-2 text-sm rounded border border-blue-600">
                            Add another property
                        </Link>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProperties