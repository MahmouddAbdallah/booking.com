import FooterPartner from "./components/FooterPartner"
import GlobalCustomer from "./components/GlobalCustomer"
import HeaderPartner from "./components/HeaderPartner"
import ManageYourProperty from "./components/ManageYourProperty"
import PropertyFullControl from "./components/PropertyFullControl"
import QualityBookings from "./components/QualityBookings"
import ScrollMouse from "./components/ScrollMouse"
const Partner = () => {
    return (
        <div>
            <div>
                <HeaderPartner />
                <GlobalCustomer />
                <QualityBookings />
                <PropertyFullControl />
                <ManageYourProperty />
                <FooterPartner />
            </div>
            <div className="hidden lg:block">
                <ScrollMouse />
            </div>
        </div>
    )
}

export default Partner