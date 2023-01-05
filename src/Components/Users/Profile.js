import React from 'react';
import { useState } from 'react';
import {useNavigate } from 'react-router-dom'

function Profile(props) {

  const [profile, setprofile] = useState({
    name:'',
    email:'',
    password:''
  })

  let navigate=useNavigate();
  const {name, email, password} = profile

  let handelOnChange=(e)=>{
    setprofile({...profile,[e.target.name]:e.target.value})
  }

  let Convertoupper=(word)=>{
    let lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }

  let submitprofile=(e)=>{
    e.preventDefault();
    //console.table(name)
    //props.getdata('name')
    setprofile({  name:'', email:'',password:''})
    props.getprofilename(Convertoupper(name))
    navigate('/');
  }

  return (
    <form onSubmit={submitprofile}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" value={name||''} name='name' onChange={handelOnChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" value={email||''} name='email' onChange={handelOnChange} />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" value={password||''} name='password' onChange={handelOnChange} />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Profile