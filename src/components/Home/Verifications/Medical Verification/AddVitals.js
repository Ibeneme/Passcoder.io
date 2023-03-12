import React from 'react'
import { useNavigate } from 'react-router-dom'


const AddVitals = () => {

        let navigate = useNavigate()
      return (
        <form
        className='max-w-[700px] mx-auto my-16 p-4'
        >
            <h1 className='extended-first-div-h1'>Health Details</h1>
            <p className='extended-first-div-p'>Add your health details incase of an Emergency</p>
            <div className='flex flex-col py-2'>
             <label className='py-2 font-medium'>What's your Height</label>
              <input 
           
              type = 'text'
              className='border p-3'
              required
              placeholder='How tall are you?'
            
              />
          </div>   
    
          <div className='flex flex-col py-2'>
             <label className='py-2 font-medium'>What's your Weight</label>
              <input 
           
              type = 'text'
              className='border p-3'
              required
              placeholder='What do you weigh in Kilo grams'
            
              />
          </div>   
    
          <div className='flex flex-col py-2'>
             <label className='py-2 font-medium'>What's your Blood Group</label>
              <input 
              
              type = 'text'
              className='border p-3'
              required
              placeholder='What Blood Group are you?'
            
              />
          </div>   
          <div className='flex flex-col py-2'>
             <label className='py-2 font-medium'>What's your Genotype</label>
              <input 
              
              type = 'text'
              className='border p-3'
              required
              placeholder='What Genotype are you?'
            
              />
          </div>  
          <div className='flex flex-col py-2'>
             <label className='py-2 font-medium'>Additional Information</label>
              <textarea 
              
              type = 'text'
              className='border p-3'
              required
              placeholder='Enter any other info'>

              </textarea>
          </div>  

          <button 
            onClick={(e)=>navigate('/AddressSuccess')}
            className='border w-full border-blue-500 bg-[#292482] hover:bg-blue-500 p-4 mt-9 my-2 text-white'>
              Save
            </button>
        </form>
      )
}

export default AddVitals