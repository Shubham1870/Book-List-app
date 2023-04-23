import React from "react"
import "../signup/signup.css"
import {Link, useNavigate} from "react-router-dom"
import { useState } from "react"
const Signup=()=>{
    const [data,setdata]=useState({
        email:"",
        password:"",
        confirmpassword:""
    })
    const navigate=useNavigate()
    
    const [err,seterr]=useState("")
    const handlechange=(e)=>{
     const {name,value}=e.target
     setdata({...data,[name]:value})
    }
    const handlesubmit=async (e)=>{
        e.preventDefault()

        await fetch("http://localhost:8000/signup",{
            method:"POST",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(setdata)
        }).then(res=>{
            return res.json()
        }).then(data=>{
            if(data.message==="success"){
                seterr(data.message)
               navigate("/")
            }else{
                seterr(data.message)
            }

        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        <>
<div id="main-container">
    <div id="inside-container">
<h1>Member Signup</h1>
<form onSubmit={handlesubmit}>
    <label>Email:</label>
    <input type="email" name="email" id="first-input" required onChange={(e)=>{handlechange(e)}} />
    <br/>
    <label>Password:</label>
    <input type="password" name="password" onChange={(e)=>{handlechange(e)}}/>
    <br/>
    <label>ConfirmPass:</label>
    <input type="password" name="confirmpassword" onChange={(e)=>{handlechange(e)}}/>
    <br/>
    <button type="submit">Submit</button>
    <br/>
    <button><Link to="/">Signin</Link></button>
   
    <div>{err}</div>


</form>
    </div>
</div>
        </>
    )
}
export default Signup