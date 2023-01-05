import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Pagenotfound() {
  const navigate= useNavigate();
  return (
    <>
      <h1 style={{color: 'red'}}>PAGE NOT FOUND ;-(</h1>
      <p><Link to='/'>click here</Link> to go to home page</p>
      <p>To crete users please click the below button</p>
      <button type='button' className='btn btn-primary' onClick={()=>{navigate('create')}} >create users</button>
    </>
  )
}

export default Pagenotfound;