import Footer from './Footer'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
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
    )
}

export default Layout