import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddHospitalHistory = () => {
    let navigate = useNavigate()
  return (
    <form
    className='max-w-[700px] mx-auto my-16 p-4'
    >
        <h1 className='extended-first-div-h1'>Hospital History</h1>
        <p className='extended-first-div-p'>Add a Hospital History</p>
        <div className='flex flex-col py-2'>
         <label className='py-2 font-medium'>Name of Contact</label>
          <input 
       
          type = 'text'
          className='border p-3'
          required
          placeholder='Enter Contact Name'
        
          />
      </div>   

      <div className='flex flex-col py-2'>
         <label className='py-2 font-medium'>Phone Number</label>
          <input 
       
          type = 'text'
          className='border p-3'
          required
          placeholder='Enter Contact Phone Number'
        
          />
      </div>   

      <div className='flex flex-col py-2'>
         <label className='py-2 font-medium'>What's your relationship with this Contact</label>
          <input 
          
          type = 'text'
          className='border p-3'
          required
          placeholder='Enter your relationship with this Contact'
        
          />
      </div>   

     
      <button 
        onClick={(e)=>navigate('/AddressSuccess')}
        className='border w-full border-blue-500 bg-[#292482] hover:bg-blue-500 p-4 mt-9 my-2 text-white'>
          Add this Contact
        </button>
    </form>
  )
}

export default AddHospitalHistory