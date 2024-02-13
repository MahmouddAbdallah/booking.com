import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import AppContextProvider from '../context/appContext'

const Layout = () => {
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
                    <Footer />
                </div>
            </div>
        </AppContextProvider>
    )
}

export default Layout