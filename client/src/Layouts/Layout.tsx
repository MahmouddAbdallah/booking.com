import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import AppContextProvider from '../context/appContext'

const Layout = () => {
    return (
        <AppContextProvider>
            <Navbar />
            <Outlet />
            <Footer />
        </AppContextProvider>
    )
}

export default Layout