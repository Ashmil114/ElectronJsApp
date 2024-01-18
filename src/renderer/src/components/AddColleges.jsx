
import axios from 'axios'
import React, { useState } from 'react'

import { Link,useNavigate } from 'react-router-dom'


const AddColleges = () => {


  const [image,setImage]=useState(null)
  const [name,setName]=useState()
  const [description,setDescription]=useState()
  const [year,setYear]=useState()
  const [place,setPlace]=useState()
  

  
  const navigate= useNavigate()
  
  

  const AddCollege = async () =>{

    let formField = new FormData()

    formField.append('name',name)
    formField.append('description',description)
    formField.append('year',year)
    formField.append('place',place)

    if (image !== null){
      formField.append('image',image) 
    }

    await axios({
      method:'post',
      url:'http://127.0.0.1:8000/api/college/',
      data:formField
    }).then((response)=>{
      console.log(response.data);
      navigate('/')
    })

  }

  return (
    <div className='flex  justify-center items-center w-full  '>
 
    <form class=" md:w-[500px] ml-[100px]  w-[300px] md:max-w-lg bg-white p-10  rounded-lg relative">
      
      {/* <Link to={'/'} className='absolute top-0 right-0 m-3 bg-[#ef7278] hover:bg-[#9b3a3f] w-[30px] h-[30px] text-white flex justify-center items-center font-extrabold rounded-md'>X</Link> */}
      
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" for="grid-password">
            Upload Your Image
          </label>
          <input class="appearance-none block w-full bg-white text-black border-2 border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="file" placeholder="" name='image' src={image} onChange={(e)=> setImage(e.target.files[0])}/>
          <p class="text-gray-600 text-xs italic"></p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" for="grid-first-name">
            College Name
          </label>
          <input class="appearance-none block w-full bg-white text-black border border-gray-400  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" name='name' value={name} onChange={(e)=> setName(e.target.value)} />
          <p class="text-red-500 text-xs italic"></p>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" for="grid-last-name">
           Description
          </label>
          <input class="appearance-none block w-full bg-white text-black border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" name='agedescription' value={description} onChange={(e)=> setDescription(e.target.value)}/>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" for="grid-password">
            Year
          </label>
          <input class="appearance-none block w-full bg-white text-black border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="year" placeholder="" name='year' value={year} onChange={(e)=> setYear(e.target.value)}/>
          <p class="text-gray-600 text-xs italic"></p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full  px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" for="grid-city">
            Place
          </label>
          <input class="appearance-none block w-full bg-white text-black border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="" name='place' value={place} onChange={(e)=> setPlace(e.target.value)}/>
        </div>
        
        
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3 pt-10">
          <input class="cursor-pointer  appearance-none block w-full bg-green-500  placeholder:text-black placeholder:font-bold  border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none   text-center" id="grid-password" type="sumbit"  placeholder="Add" onClick={AddCollege}/>
          
        </div>
      </div>
    </form>
      
    </div>
  )
}

export default AddColleges
