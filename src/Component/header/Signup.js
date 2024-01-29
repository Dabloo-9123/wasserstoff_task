import axios from 'axios'
import React, { useState } from 'react'
import './signup.css'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import FooterComp from '../footer/FooterComp';



function Signup() {
    const[name,setname]=useState('')
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const[phone,setphone]=useState()
    const Navi=useNavigate()
    

    const handleSubmit= async(e)=>{
   e.preventDefault()
   const tempobj={
    name:name,
    email:email,
    password:password,
    phone:phone
   }
   try{
    const response= await axios.post('https://ecommerce-server-r7xn.onrender.com/api/register',tempobj);
    console.log('response :',response.data);
    if(response && response.data.success){
      toast.success(`${response.data.msg}`)
      Navi('/login')
    }
    else{
      toast.error(`${response.data.msg}`)
    }
   }
   catch(err){
    console.log('error',err);
     
   }
// axios.post('https://ecommerce-server-r7xn.onrender.com/', tempobj)
//   .then(response => {
//     // Handle successful response
//     console.log(response.data);
//   })
//   .catch(error => {
//     // Handle error
//     console.error('Error:', error.message);
//   });
    

    }
   
  return (
    <>
   <div className='signup_main'>
   <h2 className='register-text'>Register</h2>
    <form>
        <input type='text' placeholder='Enter name' value={name} 
        onChange={(e)=>setname(e.target.value)} required></input><br></br>

        <input type='text' placeholder='Enter Email' value={email}
         onChange={(e)=>setemail(e.target.value)} required></input><br></br>

        <input type='text' placeholder='Enter Password' value={password}
         onChange={(e)=>setpassword(e.target.value)} required></input><br></br>

        <input type='text' placeholder='Enter Phone' value={phone}
         onChange={(e)=>setphone(e.target.value)} required></input><br></br>

        <button className='signup_button' onClick={handleSubmit}>Submit</button>
    </form>
    <ToastContainer/>
   </div>
   <FooterComp/>
    </>
  )
}

export default Signup