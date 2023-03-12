import React from 'react'
import illustration from './svgs/Group 176.svg'
import { useNavigate } from 'react-router-dom'



const ExtendedSuccess = () => {
    let navigate = useNavigate()
  return (
    <div    
     className='extended-first-div'>

        <h1 className='extended-first-div-h1'>Upload Successful</h1>
        <p className='extended-first-div-p'>Document uploaded successfully</p>
        <div>
            <img src={illustration} alt='Upload Successful' />
        </div>
        <button 
        onClick={(e)=>navigate('/ExtendedVerification')}
        style={{width:'29rem'}}
        className='border border-blue-500 bg-[#292482] hover:bg-blue-500 p-4 mt-9 my-2 text-white'>
          Submit
        </button>
     </div>
  )
}

export default ExtendedSuccess