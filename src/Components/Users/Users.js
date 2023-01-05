import React from 'react';
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

 function Users() {

  let navigate=useNavigate();
  let {ids}= useParams();

  const [apidata, setapidata] = useState([])

  let link='http://localhost:3001/users'

  useEffect(()=>{
    loadeData();
  },[])

  const loadeData= async ()=>{
    let result=await axios.get(link)
    setapidata(result.data)
  }
  
  let handelDelete=async(idss)=>{
    let res=await axios.delete(`http://localhost:3001/users/${idss}`)
    loadeData();
  }

  return (
    <div>
      <table className='table my-3'>
            <thead >
                <tr className="table-dark">
                    <th># Id </th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                   apidata.map((ele)=>{
                    return(
                        <tr className="table-light" key={ele.id}>
                            <th>{ele.id}</th>
                            <td>{ele.name}</td>
                            <td>{ele.username}</td>
                            <td>{ele.email}</td>
                            <td>{ele.website}</td>
                            <td><button className='btn btn-primary' onClick={()=>{navigate(`/users/edit/${ele.id}`)}}> Edit </button></td>
                            <td><button className='btn btn-danger' onClick={()=>{handelDelete(ele.id)}}> Delete </button></td>
                        </tr>
                    )
                   }) 
                }
            </tbody>
        </table>

    </div>
  )
}

export default Users