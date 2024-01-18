import React,{useState,useEffect} from 'react'
import bannerMain from '../assets/images/banner1.jpg'
import { Link } from 'react-router-dom'
import clg from '../assets/images/st.jpg'
import {FaTimes} from 'react-icons/fa'
import axios from 'axios'

import Carousal from './Carousal'
const { ipcRenderer } = window.require('electron')


const Home = () => {

  
  function runCommand() {
    ipcRenderer.send('run-command');
    console.log('clicked');
    
  }
  // useEffect(() => {
  //   // Use ipcRenderer here
  //   ipcRenderer.send('run-command');
  // }, [])


  const [colleges,setCollege]=useState([])

  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/college/',{
      'method':'GET',
    }).then(resp=>resp.json())
    .then(resp=>setCollege(resp))
    .catch(error=>console.log(error))
  },[])

  // Add Banner section

  const [banner,setBanner]=useState(true)
    const handleClick=()=>{
        setBanner(!banner)
    }
    
    const[adImg,SetAdImg]=useState([])

    const getAdImg=async()=>{
      const res=await axios.get('http://127.0.0.1:8000/api/adimg/')
      console.log(res.data)
      SetAdImg(res.data)
      
    }
    console.log(adImg.length)
    useEffect(()=>{
      getAdImg()
    },[])
    
    const contant=
      <>
        <div className=' lg:max-w-lg md:max-w-md max-w-sm fixed z-50 w-fit lg:mt-[300px]'>
          <div className=''>
            {banner?
            <button className='z-50   absolute right-0 m-2  rounded-full  bg-red-600 p-1 text-white' onClick={handleClick}>
                <FaTimes />
            </button>:
            <button className=' hidden' onClick={handleClick}>
            <FaTimes/>
            </button>
            }
          </div>
          
            <div className='  '>
            <Carousal autoSlide={true} autoSlideInterwel={1000}>
              {adImg.map((s,i)=>((
                
              (i == adImg.length-1)?
                  <img src={s.image}/>:false
              )
              ))}
            </Carousal>

              
            </div>
          </div>
      </>

  return (
    <div className=''>
      <div className='absolute flex  w-full justify-center items-center mt-[150px] lg:mt-[50px]'>
          {banner && contant}
      </div>
      <div  style={banner?{filter:'blur(10px)'}:null}>
        <div>
          <img src={bannerMain} alt="" />
          
        </div>
        <div className='grid   lg:grid-cols-4  h-[250px] mt-10 px-[100px] relative overflow-x-hidden overflow-y-auto '>
          {
            colleges.map((college)=>(
              <Link to={`more/${college.id}`} className='flex justify-center items-center  m-4 mb-10 '>
                <div  className='max-w-[250px]'>
                  <img src={college.image} className='object-cover ' alt="" />
                  <h1 className='font-bold mt-3  '>{college.name}</h1>
                </div>
              </Link>
            ))
          }
          
          {/* <Link to='allColleges' className='absolute right-0 mt-[100px] px-3 bg-gray-400 text-white rounded mr-10'>More</Link> */}
        
        </div>
        
      </div>
      <button className='border-2 z-50 w-100' >Click for CMD</button>
    </div>
  )
}

export default Home