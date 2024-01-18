import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { Link, useNavigate } from "react-router-dom";
import APIServices from './APIServices';
import AddColleges from './AddColleges';


const LoginRegForm = () => {

    const navigate = useNavigate();
    const [token,setToken,removeToken]=useCookies(['my-token'])
    const [login,setLogin]=useState(true)
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()
    const [status,setStatus]=useState(false)



    useEffect(()=>{
        if(!token['my-token']){
            setLogin(false)
        }
        else{
            setLogin(true)
            if(token['my-token'] != 'undefined'){
                navigate(`/admin/${token['my-token']}`)
                
            } 
        }
        if(token['my-token'] == 'undefined'){
            setLogin(false)
            console.log(token['my-token']);
            
        } 
        
        
    },[token])

    

    

    const loginHandler=()=>{
        APIServices.LoginFun({username,password})
        .then((resp)=>{
            setToken('my-token',resp.token)
            console.log(resp) 
            if(resp.non_field_errors[0]=='Unable to log in with provided credentials.'){
                
                alert("User Not Found Pleace Register First")
                
            }
            
        })
        .catch(error=>console.log(error))
        

    }

    const loginForm=<>
        <div className='flex justify-center items-center bg-white'>
            
            <div className='  border-[#2d5a80] border-2'>
                
                <div className='text-center font-bold bg-[#0c426f] p-5 text-white'>LOGIN</div>
                <div className='p-1 mx-4'>
                    <div className='py-3'><label >Username </label></div>
                    <div><input className='p-2 outline-none border-2 border-[#2d5a80] ' type="text" value={username} onChange={(e)=>setUsername(e.target.value)} /></div>
                </div>
                <div className='p-1 mx-4'>
                    <div className='py-3'><label >Password </label></div>
                    <div><input className='p-2 outline-none border-2 border-[#2d5a80] ' type="password" value={password} onChange={(e)=>setPassword(e.target.value)} /></div>
                </div>
                <div className='  text-white  '><input  type='submit'  className='bg-[#2d5a80] text-center  m-5 w-[70px] p-1 mt-4 hover:bg-[#4995d3]' onClick={loginHandler} placeholder='Login' /></div>
            </div>

        </div>
    </>

    

  return (
    <div>
      {
      login?
      <>
        {/* {navigate(`/admin/${token.token}`)} */}
        {login && navigate(`/admin/${token['my-token']}`)}
      </>
      :
        <>{!login && loginForm} </>
      }
    </div>
  )
}

export default LoginRegForm
