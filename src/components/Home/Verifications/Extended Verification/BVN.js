import React from 'react'
import { useNavigate } from 'react-router-dom' 

const BVN = () => {
    let navigate = useNavigate()
  return (
    <form
    className='max-w-[700px] mx-auto my-16 p-4'
    >
        <h1 className='extended-first-div-h1'>BVN Number</h1>
        <p className='extended-first-div-p'>Upload Required Documents</p>
        <div className='flex flex-col py-2'>
         <label className='py-2 font-medium'>BVN Number</label>
          <input 
          type = 'text'
          className='border p-3'
          required
          placeholder='Enter your NIN Number'
        
          />
      </div>   
   
      <button 
        onClick={(e)=>navigate('/AddressSuccess')}
        className='border w-full border-blue-500 bg-[#292482] hover:bg-blue-500 p-4 mt-9 my-2 text-white'>
          Submit
        </button>
    </form>
  )
}

export default BVN