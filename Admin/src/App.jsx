import React from 'react'
import { BrowserRouter, Route, Routes, Navigate }  from  "react-router-dom"
import Hotel from './pages/Hotel'
import Room from './pages/Room'
import Bookings from './pages/Bookings'
import Users from './pages/Users'
import Setting from './pages/Setting'
import Dashboard from "./pages/Dashboard"
import Login from './pages/Login'

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Dashboard/>} />
 <Route path="/hotel" element={<Hotel />} />

  <Route path="/room" element={<Room/>} />
  <Route path="/bookings" element={<Bookings/>}/>
  <Route path="/users" element={<Users/>} />
  <Route path="/setting" element={<Setting/>}/>
  <Route path="/login" element={<Login/>} />
</Routes>

</BrowserRouter>
  )
}

export default App