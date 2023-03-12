import React from 'react'
import { useNavigate } from 'react-router-dom'

export const DriversLicense = () => {
    let navigate = useNavigate()
    return (
      <div> 
          <form
          className='max-w-[700px] mx-auto my-16 p-4'>
      
          <h1 className='extended-first-div-h1'>Drivers License</h1>
          <p className='extended-first-div-p'>Upload Required Documents</p>
          <div className='flex flex-col py-2'>
           <label className='py-2 font-medium'>License Number </label>
            <input 
            type = 'Number'
            className='border p-3'
            required
            placeholder='Enter your Passport Number'
          
            />
        </div> 
        <div className='flex flex-col py-2'>
           <label className='py-2 font-medium'>Date of Issuance </label>
            <input 
            type = 'date'
            className='border p-3'
            required
            placeholder='Enter your Passport Number'
          
            />
        </div> 
        <div className='flex flex-col py-2'>
           <label className='py-2 font-medium'>Date of Expiry </label>
            <input 
            type = 'date'
            className='border p-3'
            required
            placeholder='Enter your Passport Number'
          
            />
        </div> 

  
        <div className='flex flex-col py-2'>
           <label className='py-2 font-medium'>Upload the front page of your drivers license</label>
            <input 
            style={{ height:"6em"}}
            type = 'file'
            accept='image/*'
            className='border p-3'
            required
          
            />
        </div>
        <div className='flex flex-col py-2'>
           <label className='py-2 font-medium'>Upload the back page of your drivers license</label>
            <input 
            style={{ height:"6em"}}
            type = 'file'
            accept='image/*'
            className='border p-3'
            required
          
            />
        </div>   
        <button 
          onClick={(e)=>navigate('/AddressSuccess')}
          className='border w-full border-blue-500 bg-[#292482] hover:bg-blue-500 p-4 mt-9 my-2 text-white'>
            Submit
          </button>
      </form></div>
    )
  }
