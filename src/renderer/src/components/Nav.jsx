import React, { useState } from 'react'
import logo from '../assets/images/logo.jpeg'
import { Link } from 'react-router-dom'
import LoginRegForm from './LoginRegForm'
import Registration from './Registration'

const Nav = () => {

    const about=<>
        <div className='  mt-2  '>
            <ul className='w-full'>
                <a href=""><li className='p-3  hover:bg-[#0c426f] '>Sample1</li></a>
                <li className='p-3  hover:bg-[#0c426f] '>Sample2</li>
                <li className='p-3  hover:bg-[#0c426f] '>Sample3</li>
            </ul>
        </div>
    </>

    const loginForm=<>
        <div className='absolute z-40  w-full  flex justify-center items-center  p-4 '>
            <div className='relative'>
                <button className='text-[20px] absolute right-0 px-2 text-white m-2 border-2 hover:bg-white hover:text-red-600' onClick={()=>setLogin(false)}>X</button>
                <LoginRegForm/>
            </div>
            
        </div>
    </>

    const RegisterForm=<>
    <div className='absolute z-40  w-full  flex justify-center items-center  p-4'>
        <div className='relative'>
            <button className='text-[20px] absolute right-0 px-2 text-white m-2 border-2 hover:bg-white hover:text-red-600' onClick={()=>setRegister(false)}>X</button>
            <Registration/>
        </div>
        
    </div>
    </>

    const [down,setDown]=useState(false)
    const [login,setLogin]=useState(false)
    const [register,setRegister]=useState(false)
    const[curr,setCurr]=useState('login')


  



  return (
    <div className='h-fit relative '  >
        <div className='bg-[#0c426f] w-full h-[150px] z-30 relative'>
            <div className=' w-full h-[70%] flex justify-between items-center'>
                
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='flex justify-center items-center'>
                    <div>
                        <div>
                            <p className='text-white text-[13px] py-2 ml-3'>8 January 2024 | മലയാളം</p>
                            <div>
                                <input type="search" placeholder='Search...'  className='px-2 py-1 outline-none bg-[#3c79af] text-white'/>
                                <button className='px-3 py-1 bg-[#13334e] text-white hover:bg-yellow-600'>S</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* <Link to='registration' className='p-3 text-white bg-[#13334e] hover:bg-yellow-600 m-2'>Register</Link> */}
                        <button onClick={()=>{
                            setRegister(true)
                            setCurr('register')
                        }} className='p-3 text-white bg-[#13334e] hover:bg-yellow-600 m-2'>Register</button>
                        {/* <Link to='login'  className='p-3 text-white bg-[#13334e] hover:bg-yellow-600 m-2'>Login</Link> */}
                        <button onClick={()=>{
                            setLogin(true)
                            setCurr('login')
                        }
                            
                            } className='p-3 text-white bg-[#13334e] hover:bg-yellow-600 m-2'>Login</button>
                    </div>
                </div>
            </div>
            <div className='w-full border-t-[1px] border-[#174b79] flex items-center justify-center '>
                <div className=''>
                    <ul className='lg:flex flex-row gap-3  mt-2 text-white font-medium text-[12px] border-[#174b79]  hidden '>
                        <li className=' hover:bg-[#3c79af] px-3 py-2 '>HOME</li>
                        <li className=' hover:bg-[#3c79af] px-3 py-2  text-center' onMouseMove={()=>setDown(true)} onMouseLeave={()=>setDown(false)} >ABOUT
                            {down && about}
                        </li>
                        <li className=' hover:bg-[#3c79af] px-3 py-2 '>UNIVERSITY</li>
                        <li className=' hover:bg-[#3c79af] px-3 py-2 '>ACADEMIC</li>
                        <li className=' hover:bg-[#3c79af] px-3 py-2 '>NAAC</li>
                        <li className=' hover:bg-[#3c79af] px-3 py-2 '>IQAC</li>
                        <li className=' hover:bg-[#3c79af] px-3 py-2 '>STUDENT ZONE</li>
                        <li className=' hover:bg-[#3c79af] px-3 py-2 '>INFO DESK</li>
                        <li className=' hover:bg-[#3c79af] px-3 py-2 '>CONTACT US</li>
                    </ul>
                </div>
            </div>

        </div>

        {curr == 'login'?
        <>{login && loginForm }</>
        :
        <>{register && RegisterForm}</>
        }
            
        
        



    </div>
  )
}

export default Nav