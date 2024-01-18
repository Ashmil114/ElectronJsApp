// import React from 'react'
import React, { useEffect, useState } from 'react'

import { useCookies } from 'react-cookie'
import { useParams } from 'react-router-dom';
import {  useNavigate } from "react-router-dom";
// import AdminNavBar from './AdminNavBar';
import AddColleges from './AddColleges'
import AllColleges from './AllColleges';

const AdminBoard = () => {

    const navigate = useNavigate();
    const [token,setToken,removeToken]=useCookies(['my-token'])
    const [navItem,setNavItem]=useState('Home')

    const LogoutHandler=()=>{
      removeToken(['my-token'])
      navigate('/')
    }
    
    const AdminNavBar=<>
      <div>
        <div className='md:w-[300px] w-1/5 h-screen bg-[#0c426f] fixed z-30'>
            <div className='flex flex-col p-2 h-full'>
                <div className=' h-[100px] flex justify-center items-center ' >
                    <div className='rounded-full bg-white md:h-[80px] mt-[100px] md:w-[80px] w-[50px] h-[50px] text-center flex justify-center items-center'>Profile</div>
                </div>
                <div className='flex items-center  h-2/3 justify-center'>
                    <ul className='w-full text-start md:ml-10  '>
                        <li className='p-4 border-b-2 border-[#0c426f] text-white hover:border-b-2 hover:border-white cursor-pointer' onClick={()=>setNavItem('Home')}>Home</li>
                        <li className='p-4 border-b-2 border-[#0c426f] text-white hover:border-b-2 hover:border-white cursor-pointer' onClick={()=>setNavItem('addCollege')}>Add College</li>
                        <li className='p-4 border-b-2 border-[#0c426f] text-white hover:border-b-2 hover:border-white cursor-pointer' onClick={()=>setNavItem('addBlogs')}>Add Blogs</li>
                        <li className='p-4 border-b-2 border-[#0c426f] text-white hover:border-b-2 hover:border-white cursor-pointer' onClick={()=>setNavItem('List')}>List</li>
                        <li className='p-4 border-b-2 border-[#0c426f] text-white hover:border-b-2 hover:border-white cursor-pointer' onClick={LogoutHandler}>Logout</li>

                    </ul>
                </div>
            </div>
            
        </div>
      </div>
    </>
    

  return (
    <div className=' '>
      <div>
        {AdminNavBar}
      </div>
      <div className='flex justify-center items-center h-screen md:ml-[300px] ml-[50px]'>
        {navItem == 'addCollege'?<AddColleges/>:
        navItem == 'List'?<AllColleges/>:
        
        <h1>{navItem}</h1>}
        
      </div>
        

        
    </div>
  )
}

export default AdminBoard