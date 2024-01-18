import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import APIServices from './APIServices';


const Registration = () => {

    const navigate = useNavigate();
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()
    const [password2,setPassword2]=useState()


    const RegisterHandler=()=>{
        APIServices.RegisterFun({username,password,password2})
        .then((res)=>{
            
            if (res.username[0] == 'A user with that username already exists.'){
                alert('A user with that username already exists.' )
            }
            else{
                alert(res.response)
                
            }
            
            
            
            
        })
        .catch(error=>console.log(error))
        
        
    }

    const RegistrationForm=<>
        <div className='flex justify-center items-center bg-white'>
            
            <div className='  border-[#2d5a80] border-2'>
                <div className='text-center font-bold bg-[#0c426f] p-5 text-white'>REGISTRATION</div>
                <div className='p-1 mx-10'>
                    <div className='py-3'><label >Username </label></div>
                    <div><input className='p-2 outline-none border-2 border-[#2d5a80] ' type="text" value={username}   onChange={(e)=>setUsername(e.target.value)}  /></div>
                </div>
                <div className='p-1 mx-10'>
                    <div className='py-3'><label >Password </label></div>
                    <div><input className='p-2 outline-none border-2 border-[#2d5a80] ' type="password" value={password}   onChange={(e)=>setPassword(e.target.value)} /></div>
                </div>
                <div className='p-1 mx-10'>
                    <div className='py-3'><label >Conform Password </label></div>
                    <div><input className='p-2 outline-none border-2 border-[#2d5a80] ' type="password" value={password2}    onChange={(e)=>setPassword2(e.target.value)} /></div>
                </div>
                <div className='  text-white  '><input  type='submit'  className='bg-[#2d5a80] text-center  mx-10 mb-4 w-[70px] p-1 mt-4 hover:bg-[#4995d3]' onClick={RegisterHandler} placeholder='Login' /></div>
            </div>

        </div>
    </>



  return (
    <div>
        { RegistrationForm} 
    </div>
  )
}

export default Registration
