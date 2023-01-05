import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Dashboard from './Components/Dashboard'
import Createuser from './Components/Users/Createuser'
import Edituser from './Components/Users/Edituser'
import Users from './Components/Users/Users'
import Profile from './Components/Users/Profile'
import Pagenotfound from './Components/Pagenotfound'
import AboutUs from './Components/Users/AboutUs'
import ProfileUser from './Components/Users/ProfileUser'

function App(props) {

  const [response, setResponse] = useState('User')

  return (
  <>
    <BrowserRouter>
    <Navbar  />
    <div className="container">
      <ProfileUser defaultprofilename={response}   />
      <Routes>
          <>
            <Route path='/' element={<Dashboard  /> } />
            <Route path='/users' element={<Users  /> } />
            <Route path='/users/create' element={<Createuser  />} />
            <Route path='/users/edit/:ids' element={<Edituser  />} />
            <Route path='/profile' element={<Profile getprofilename={setResponse} />} />
            <Route path='about' element={<AboutUs  />} />
            <Route path='*' element={<Pagenotfound />}  />
          </>
      </Routes>
    </div>
    </BrowserRouter>
  </>
)}

export default App
