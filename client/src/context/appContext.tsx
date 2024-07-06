import axios from 'axios';
import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
    Dispatch,
    SetStateAction,
    FunctionComponent
} from 'react';

export interface User {
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

interface AppContextValue {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
}

const appContext = createContext<AppContextValue | undefined>(undefined);

interface AppProps {
    children: ReactNode;
}

const AppContextProvider: FunctionComponent<AppProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
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
    );
};

export const UseAppContext = () => {
    const context = useContext(appContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppContextProvider');
    }
    return context;
};

export default AppContextProvider;
