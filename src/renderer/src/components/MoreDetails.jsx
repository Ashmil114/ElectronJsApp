
import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import clg1 from "../assets/images/st.jpg"

const MoreDetails = () => {
    const { id } = useParams();
    const [clg,setClg]=useState([])

    useEffect(()=>{
      fetch(`http://127.0.0.1:8000/api/college/${id}`,{
        'method':'GET',
      }).then(resp=>resp.json())
      .then(resp=>setClg(resp))
      .catch(error=>console.log(error))
    },[])

  return (
    <div>
        <Link to='/' >
    <p className='bg-red-500 w-[50px] h-[25px] text-center text-white m-3'>Back</p>
        </Link>
      <div className='h-screen w-full  flex p-20  flex-col'>
        <div className='flex w-1/2  items-center '>
          <div>
            <img src={clg.image} className=' ' width='500px'  alt="CollegeImage" />
          </div>
            
        </div>
        <div className='lg:flex justify-center items-center  mt-10 lg:mt-0'>
            <div className=''>
                <h1 className='font-bold lg:text-[50px] text-[30px]'>{clg.name}</h1>
                <p className='font-bold'>{clg.place}</p>
                <p className='font-bold'>{clg.year}</p>
                <p className='text-justify'>{clg.description}</p>
                
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default MoreDetails
