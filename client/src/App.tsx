import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Layout from './Layouts/Layout'
import axios from 'axios';
import AppContextProvider from './context/appContext';
import Login from './pages/Login';
import Account from './pages/Account';
import AccountLayout from './Layouts/AccountLayout';
import PersonalDetails from './pages/PersonalDetails/PersonalDetails';
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;
function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/sign-up' element={<Register />} />
            <Route path='/sign-in' element={<Login />} />
          </Route>
          <Route path='/account' element={<AccountLayout />}>
            <Route path='/account' element={<Account />} />
            <Route path='/account/PersonalDetails' element={<PersonalDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  )
}

export default App
