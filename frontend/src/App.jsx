import { Routes, Route } from 'react-router-dom'

import TopStats from "./components/top-stats/TopStats"
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import BookNewService from './pages/book-new-service/BookNewService'
import BookedServices from './pages/booked-services/BookedServices'
import AllServices from './pages/all-services/AllServices'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

function App() {

  return (
    <>
      <TopStats />
      <Navbar />
      <div style={{width: "100%", marginTop: "16vh"}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/book-new' element={<BookNewService />} />
          <Route path='/booked' element={<BookedServices />} />
          <Route path='/all-services' element={<AllServices />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </>
  )
}

export default App
