import  axios  from 'axios';
import { useFormik } from 'formik';
import React , { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateuserSchema } from './ValidateSchema';

function Createuser() {

    let navigate=useNavigate();

    const initialValues={
        id:'',
        name:'',
        email:'',
        username:'',
        website:''
    }

    // const [user, setUserdetails] = useState({
    //     id:'',
    //     name:'',
    //     email:'',
    //     username:'',
    //     website:''
    // })

    const { values, errors,touched, handleBlur,handleChange,handleSubmit}=  useFormik({
        initialValues,
        validationSchema: CreateuserSchema,
        onSubmit: async(values, claer)=>{
            //initialValues.id=Math.floor(Math.random()*10000);
            //console.log(values)
            await axios.post('http://localhost:3001/users', values)
            navigate('/users')
            claer.resetForm();
        }
    })

    //console.log(Formik)

    //const {userInArr, name, email, username, website } = user;

    // let handelOnChange=(e)=>{
    //     setUserdetails({...user, [e.target.name] : e.target.value })
    // }

    // let handelSubmit=async (e)=>{
    //     e.preventDefault();
    //     setUserdetails({id:'', name:'', email:'', username:'', website:'' })
    //     await axios.post('http://localhost:3001/users', user)
    //     navigate('/users')
    //     //console.log(userInArr)
    // }

  return (
    <> 
        <form className='my-3 create-container' onSubmit={handleSubmit }  >
            <p>Fill the below form to create user data-base</p>
            <div>
                <label htmlFor="name">Name:&nbsp; </label><br />
                <input type="text" name="name" id="name" value={values.name} onChange={handleChange} onBlur={handleBlur}  />
                {errors.name && touched.name ?<p className='text-danger'>{errors.name}</p>: null  }
            </div><br />
            <div>
                <label htmlFor="email">Email:&nbsp; </label><br />
                <input type="email" name="email" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />    
                {errors.email && touched.email ?<p className='text-danger' >{errors.email}</p>: null}
            </div><br />
            <div>
                <label htmlFor="username">Username:&nbsp; </label><br />
                <input type='text' name="username" id="username" value={values.username} onChange={handleChange} onBlur={handleBlur}   />    
                {errors.username && touched.username ? <p className='text-danger'>{errors.username} </p>: null }
            </div><br />
            <div>
                <label htmlFor="male">website:&nbsp; </label><br />
                <input type="text" name="website" id="male" value={values.website} onChange={handleChange} onBlur={handleBlur}  />
                {errors.website && touched.website ? <p className='text-danger'>{errors.website} </p>: null}
            </div>
            <button type="submit" className='btn btn-primary my-3'>Submit</button>
        </form> 
    </>
  )
}

export default Createuser