import { Routes, Route, Navigate } from 'react-router-dom'
import AddDoctor from "./pages/add-doctor/AddDoctor"
import AddServices from "./pages/add-services/AddServices"
import AllDoctors from "./pages/all-doctors/AllDoctors"
import AllOrders from "./pages/all-orders/AllOrders"
import AllServices from "./pages/all-services/AllServices"
import Login from "./pages/login/Login"
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import Navbar from './components/navbar/Navbar'


function App() {
  const {admin} = useContext(AuthContext)

  return (
    <>
    {admin && (
      <Navbar />
    )}
    <Routes>
      <Route path='/login' element={admin ? <Navigate to="/" /> : <Login /> } />
      <Route path='/' element={admin ? <AllOrders /> : <Navigate to="/login" />} />
      <Route path='/add-doctor' element={admin ? <AddDoctor /> : <Navigate to="/login" />} />
      <Route path='/add-services' element={admin ? <AddServices /> : <Navigate to="/login" />} />
      <Route path='/all-doctors' element={admin ? <AllDoctors /> : <Navigate to="/login" />} />
      <Route path='/all-services' element={admin ? <AllServices /> : <Navigate to="/login" />} />
    </Routes>
    </>
  )
}

export default App
