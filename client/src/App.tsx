import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home'
import Layout from './Layouts/Layout'
import { Toaster } from 'react-hot-toast'
const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));
const AccountLayout = lazy(() => import('./Layouts/AccountLayout'));
const Account = lazy(() => import('./pages/Account'));
const PersonalDetails = lazy(() => import('./pages/PersonalDetails/PersonalDetails'));
const PartnerLayout = lazy(() => import('./Layouts/PartnerLayout'));
const Partner = lazy(() => import('./pages/Partner/Partner'));
const SignInAsPartner = lazy(() => import('./pages/Partner/pages/SignInAsPartner'));
const SignUpPartner = lazy(() => import('./pages/Partner/pages/SignUpPartner'));
const SignUpCategory = lazy(() => import('./pages/Partner/pages/SignUpCategory'));
const DepartmentRegistration = lazy(() => import('./pages/Partner/pages/DepartmentRegistration'));
const HomesRegistration = lazy(() => import('./pages/Partner/pages/HomesRegistration'));
const HotelRegistration = lazy(() => import('./pages/Partner/pages/Hotel/HotelRegistration'));
const MyProperties = lazy(() => import('./pages/Partner/pages/MyProperties'));
const DepartmentSingle = lazy(() => import('./pages/Partner/pages/DepartmentSingle'));
const NotFound = lazy(() => import('./components/NotFound'));
const Apartment = lazy(() => import('./pages/Apartment/Apartment'))
const ShowApartment = lazy(() => import('./pages/Apartment/ShowApartment'));

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;
function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <Toaster position='bottom-right' />
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/sign-up' element={<Register />} />
            <Route path='/sign-in' element={<Login />} />
            <Route path='/apartment' element={<Apartment />} />
            <Route path='/apartment/:apartmentId' element={<ShowApartment />} />
          </Route>
          <Route path='/account' element={<AccountLayout />}>
            <Route index path='/account' element={<Account />} />
            <Route path='/account/PersonalDetails' element={<PersonalDetails />} />
          </Route>
          <Route element={<PartnerLayout />} >
            <Route index path='/partner' element={<Partner />} />
            <Route path='/partner/sign-in' element={<SignInAsPartner />} />
            <Route path='/partner/sign-up' element={<SignUpPartner />} />
            <Route path='/partner/sign-up/category' element={<SignUpCategory />} />
            <Route path='/partner/sign-up/category/department' element={<DepartmentRegistration />} />
            <Route path='/partner/sign-up/category/department/single' element={<DepartmentSingle />} />
            <Route path='/partner/sign-up/category/home' element={<HomesRegistration />} />
            <Route path='/partner/sign-up/category/guests' element={<HomesRegistration />} />
            <Route path='/partner/sign-up/category/hotel' element={<HotelRegistration />} />
            <Route path='/partner/my_properties' element={<MyProperties />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
