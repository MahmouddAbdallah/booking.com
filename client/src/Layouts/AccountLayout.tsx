import AccountFooter from '../components/AccountFooter'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import AppContextProvider from '../context/appContext'

const AccountLayout = () => {
    return (
        <AppContextProvider>
            <div >
                <div>
                    <Navbar />
                </div>
                <div>
                    <Outlet />
                </div>
                <div>
                    <AccountFooter />
                </div>
            </div>
        </AppContextProvider>

    )
}

export default AccountLayout