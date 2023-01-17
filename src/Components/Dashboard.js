import React from 'react'
import { useNavigate } from 'react-router-dom';

function Dashboard(props) {

  let navigate=useNavigate();
  
  return (
    <div>
      <h2>In this page we can perform Create, Read, Update and Delete (CRUD) operations </h2>
      <div>
        <section>
          <p>Click on create user button to get stared with adding users to the list</p>
          <p><button className='btn btn-primary mx-3' onClick={()=>{navigate('/users/create')}} >Create Users</button></p>
        </section>
        <section>
          <p>If you want to Edit the present users list kindly click the below button</p>
          <p><button className='btn btn-primary mx-3' onClick={()=>{navigate('users')}} >Users List</button></p>
        </section>
      </div>
    </div>
  )
}

export default Dashboard