import AccountFooter from '../components/AccountFooter'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const AccountLayout = () => {
    return (
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
    )
}

export default AccountLayout