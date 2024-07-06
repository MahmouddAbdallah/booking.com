import axios from 'axios';
import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState
} from 'react'


const appContext = createContext<undefined>(undefined);
interface appProps {
    children: ReactNode
}
const AppContextProvider: React.FunctionComponent<appProps> = ({ children }) => {
    const [user, setUser] = useState(null);
    const getUser = async () => {
        try {
            const { data } = await axios.get('/api/user/verfiy');
            console.log({ user: data.user });

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