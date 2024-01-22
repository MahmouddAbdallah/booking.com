import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UseAppContext } from '../context/appContext'

const LogOut = () => {
    const navigate = useNavigate()
    const constext = UseAppContext()
    const logOut = async () => {
        try {
            const { data } = await axios.get("/auth/log-out");
            console.log(data.message);
            navigate('/sign-in');
            constext?.setIsLogged(false)
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <button
            onClick={logOut}
            className='bg-white text-blue-600 border border-blue-600 text-sm font-semibold rounded-sm px-2 py-1'>
            Log out
        </button>
    )
}

export default LogOut