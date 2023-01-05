import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Edituser() {

  let navigate=useNavigate();
  let {ids}=useParams();
  
  const [updateuser, setUpdateuser] = useState({
    id:'',
    name:'',
    email:'',
    username:'',
    website:''
  })

  const {id, name, email, username, website } = updateuser;

  let onChange=(e)=>{
    setUpdateuser({...updateuser, [e.target.name]: e.target.value})
  }
  
  let loaduser=async ()=>{
    let res= await axios.get(`http://localhost:3001/users/${ids}`)
    setUpdateuser(res.data)
  }

  useEffect(()=>{
    loaduser();
  },[])
  
  let handelSubmit=async (e)=>{
    e.preventDefault();
    let puts= await axios.put(`http://localhost:3001/users/${ids}`,updateuser );
    navigate('/users');
  }

  return (
    <>
    <h2 style={{textAlign: 'center'}}>Kindly edit the details accordingly</h2>
      <form onSubmit={handelSubmit}>
        <div>
          <label htmlFor="name">Name:&nbsp;</label>
          <input type="text" name='name' id="name" onChange={onChange} value={name||''} />
        </div><br />
        <div>
          <label htmlFor="email">Email:&nbsp;</label>
          <input type="text" name="email" id="email" onChange={onChange} value={email||''} />
        </div><br />
        <div>
          <label htmlFor="uname">UserName:&nbsp;</label>
          <input type="text" name="username" id="uname" onChange={onChange}  value={username||''}/>
        </div><br />
        <div>
          <label htmlFor="website">Website:&nbsp;</label>
          <input type="text" name="website" id="website" onChange={onChange} value={website||''} />
        </div><br />
        <div>
          <button type='submit' className='btn btn-warning ' >Update user</button>
        </div>
      </form>
    </>
  )
}

export default Edituser