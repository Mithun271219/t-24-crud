import React from 'react'
import {  Navigate, NavLink, useNavigate  } from 'react-router-dom'

function Navbar() {
    
    const nevigate= useNavigate();

  return (
    <>
    <nav className="navbar navbar-expand-lg sticky-top" style={{backgroundColor: '#e3f2fd'}}>
        <div className="container-fluid">
            <NavLink className="navbar-brand" to='/'>Dashboard</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link" to='/users'>Users List</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/users/create'>Create Users</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/profile'>Profile</NavLink>
                </li>   
            </ul>
            </div>
            <button className='btn btn-outline-primary ' onClick={()=>{nevigate('about')}} >About Us</button>
        </div>
    </nav>
    </>
  )
}

export default Navbar