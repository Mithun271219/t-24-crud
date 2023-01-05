import  axios  from 'axios';
import React , { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Createuser() {

    let navigate=useNavigate();

    const [user, setUserdetails] = useState({
        id:'',
        name:'',
        email:'',
        username:'',
        website:''
    })

    const {userInArr, name, email, username, website } = user;

    let handelOnChange=(e)=>{
        setUserdetails({...user, [e.target.name] : e.target.value })
    }

    let handelSubmit=async (e)=>{
        e.preventDefault();
        setUserdetails({id:'', name:'', email:'', username:'', website:'' })
        await axios.post('http://localhost:3001/users', user)
        navigate('/users')
        //console.log(userInArr)
    }

  return (
    <>
        
        <form className='my-3 create-container' onSubmit={handelSubmit }  >
            <p>Fill the below form to create user data-base</p>
            <div>
                <label htmlFor="name">Name:&nbsp; </label><br />
                <input type="text" name="name" id="name" value={name || ""} onChange={handelOnChange} />
            </div><br />
            <div>
                <label htmlFor="email">Email:&nbsp; </label><br />
                <input type="email" name="email" id="email" value={email || ""} onChange={handelOnChange}  />    
            </div><br />
            <div>
                <label htmlFor="username">Username:&nbsp; </label><br />
                <input type='text' name="username" id="username" value={username || ""} onChange={handelOnChange}  />    
            </div><br />
            <div>
                <label htmlFor="male">website:&nbsp; </label><br />
                <input type="text" name="website" id="male" value={website ||''} onChange={handelOnChange}  />
            </div>
            <button type="submit" className='btn btn-primary my-3'>Submit</button>
        </form> 
    </>
  )
}

export default Createuser