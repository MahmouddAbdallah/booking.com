import axios from 'axios';
import {
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useEffect,
    useState
} from 'react'
export interface UserInterface {
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
    user: UserInterface;
    setUser: React.Dispatch<SetStateAction<UserInterface>>
}
const appContext = createContext<appContext | undefined>(undefined);
interface appProps {
    children: ReactNode
}
const AppContextProvider: React.FunctionComponent<appProps> = ({ children }) => {
    const [user, setUser] = useState<UserInterface>({
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
    const getUser = async () => {
        try {
            const { data } = await axios.get('/api/user/verfiy');
            setUser(data.user)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getUser()
    }, [])

    return (
        <appContext.Provider value={{ user, setUser }}>
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