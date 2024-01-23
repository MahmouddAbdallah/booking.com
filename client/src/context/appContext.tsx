import axios from 'axios';
import {
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useEffect,
    useState
} from 'react'
interface User {
    _id: string;
    email: string;
    lastName: string;
    firstName: string;
    phone: string;
    gender: string;
    address: {
        country: string;
        address: string;
        city: string;
        postalCode: string;
    }
}
type appContext = {
    user: User;
    isLogged: boolean
    setIsLogged: React.Dispatch<SetStateAction<boolean>>
}
const appContext = createContext<appContext | undefined>(undefined);
interface appProps {
    children: ReactNode
}
const AppContextProvider: React.FunctionComponent<appProps> = ({ children }) => {
    const [user, setUser] = useState<User>({
        _id: "",
        email: '',
        lastName: '',
        firstName: '',
        phone: '',
        gender: '',
        address: {
            country: "",
            address: "",
            city: "",
            postalCode: "",
        }
    });
    const [isLogged, setIsLogged] = useState(false)
    const getUser = async () => {
        try {
            const { data } = await axios.get('/api/user/verfiy');
            setUser(data.user)
            setIsLogged(true)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getUser()
    }, [])

    return (
        <appContext.Provider value={{ user, isLogged, setIsLogged }}>
            {children}
        </appContext.Provider>
    )
}
export const UseAppContext = () => {
    return (
        useContext(appContext)
    )
}
export default AppContextProvider