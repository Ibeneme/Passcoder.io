import React from 'react'
import {MdNavigateNext} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'


const Medical = () => {
  let navigate = useNavigate()

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
    <h1 className='extended-first-div-h1' >Medical Details</h1>
    <p className='extended-first-div-p'> Choose document you want to upload</p>
    <div>
      <div 
        className='extended-first-div-div'
        onClick={(e)=>{navigate('/vitals')}}
      >
        <div className='extended-first-div-div-div'>
          <h1 className='extended-first-div-div-h1'>Basic Details</h1>
          <p className='extended-first-div-div-p'>Upload</p>
        </div>
        <p className='icons-arr' > <MdNavigateNext /></p>
      </div>
      <div className='extended-first-div-div'
        onClick={(e)=>{navigate('/EmergencyContact')}}>
        <div className='extended-first-div-div-div'>
          <h1 className='extended-first-div-div-h1'>Emergency Contact</h1>
          <p className='extended-first-div-div-p'>Upload</p>
        </div>
        <p className='icons-arr' > <MdNavigateNext /></p>
      </div>
      {/* <div 
      onClick={(e)=>{navigate('/HospitalHistory')}}
      className='extended-first-div-div'>
        <div className='extended-first-div-div-div'>
          <h1 className='extended-first-div-div-h1'>Hospital History</h1>
          <p className='extended-first-div-div-p'>Upload</p>
        </div>
        <MdNavigateNext />
      </div> */}
    
    </div>
  </div>

  )
}

export default Medical