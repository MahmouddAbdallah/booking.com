import axios from 'axios';
import {
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useEffect,
    useState
} from 'react'
export interface PartnerInterface {
    _id: string;
    email: string;
    lastname: string;
    firstname: string;
    phone: string;
    address: {
        country: string;
        address: string;
        city: string;
    }
}
type appContext = {
    partner: PartnerInterface;
    isLogged: boolean
    setIsLogged: React.Dispatch<SetStateAction<boolean>>;
    setPartner: React.Dispatch<SetStateAction<PartnerInterface>>
}
const appContext = createContext<appContext | undefined>(undefined);
interface appProps {
    children: ReactNode
}
const PartnerContextProvider: React.FunctionComponent<appProps> = ({ children }) => {
    const [partner, setPartner] = useState<PartnerInterface>({
        _id: "",
        email: '',
        lastname: '',
        firstname: '',
        phone: '',
        address: {
            country: "",
            address: "",
            city: "",
        }
    });
    const [isLogged, setIsLogged] = useState(false)
    const getPartner = async () => {
        try {
            const { data } = await axios.get('/api/partner/verfiy');
            setPartner(data.partner)
            setIsLogged(true)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getPartner()
    }, [])

    return (
        <appContext.Provider value={{ partner, isLogged, setIsLogged, setPartner }}>
            {children}
        </appContext.Provider>
    )
}
export const UseAppContext = () => {
    return (
        useContext(appContext)
    )
}
export default PartnerContextProvider