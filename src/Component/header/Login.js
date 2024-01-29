import axios from "axios";
import React, { useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import './login.css'
import FooterComp from "../footer/FooterComp";
import { useNavigate } from "react-router-dom";


function Login({ settoken }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navi = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tempobj = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        "https://ecommerce-server-r7xn.onrender.com/api/login",
        tempobj
      );
      console.log("response", response.data);
      if(response && response.data.success){
        toast.success(`${response.data.msg}`)
        settoken( localStorage.setItem("user",JSON.stringify(response)));
        navi('/')

      // localStorage.setItem("token",response.token)
      localStorage.setItem("user",JSON.stringify(response))
      // var token=localStorage.getItem("user")
      
      
      }
      else{
        toast.error(`${response.data.msg}`)
      }
    
      console.log(response);
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <>
     <div className="login_main">
     <h2 className="login_heading">Sign in to Account</h2>
      <form>
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
        ></input>
        <br></br>

        <input
          type="text"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          required
        ></input>
        <br></br>

        <button className="signin_button" onClick={handleSubmit}>Sign In</button>
        
      </form>
     
      <ToastContainer toastStyle={{ color:"teal" }} />
     </div>
     <FooterComp/>
    </>
  );
}

export default Login;
