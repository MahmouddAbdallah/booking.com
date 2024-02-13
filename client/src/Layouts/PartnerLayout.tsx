import { Outlet } from 'react-router-dom'
import NavbarPartner from '../pages/Partner/components/NavbarPartner'
import { useEffect } from 'react'
import PartnerContextProvider from '../context/partnerContext'

const PartnerLayout = () => {
    useEffect(() => {
        document.title = 'List Your Apartment, Hotel, Holiday Home or B&B on Booking.com'
    }, [])
    return (
        <div >
            <PartnerContextProvider>
                <div>
                    <NavbarPartner />
                </div>
                <div>
                    <Outlet />
                </div>
            </PartnerContextProvider>
        </div>
    )
}

export default PartnerLayout