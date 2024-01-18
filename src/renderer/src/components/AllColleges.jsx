import React,{useState,useEffect} from 'react'
import banner from '../assets/images/banner1.jpg'
import { Link } from 'react-router-dom'

const AllColleges = () => {
    
    const [colleges,setCollege]=useState([])

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/college/',{
          'method':'GET',
        }).then(resp=>resp.json())
        .then(resp=>setCollege(resp))
        .catch(error=>console.log(error))
      },[])



  return (
    <div className=''>
      <div>
        <div className='grid grid-cols-4 h-[250px] px-[100px]'>
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
        </div>
      </div>
        
    </div>
  )
}

export default AllColleges
