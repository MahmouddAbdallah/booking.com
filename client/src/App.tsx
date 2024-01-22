import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Layout from './components/Layout'
import axios from 'axios';
import AppContextProvider from './context/appContext';
import Login from './pages/Login';
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
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  )
}

export default App
