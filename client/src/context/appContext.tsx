import axios from 'axios';
import {
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useEffect,
    useState
} from 'react'
type appContext = {
    user: object
    isLogged: boolean
    setIsLogged: React.Dispatch<SetStateAction<boolean>>
}
const appContext = createContext<appContext | undefined>(undefined);
interface appProps {
    children: ReactNode
}
const AppContextProvider: React.FunctionComponent<appProps> = ({ children }) => {
    const [user, setUser] = useState({})
    const [isLogged, setIsLogged] = useState(false)
    const getUser = async () => {
        const { data } = await axios.get('/api/user/verfiy');
        setUser(data.user)
        setIsLogged(true)
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