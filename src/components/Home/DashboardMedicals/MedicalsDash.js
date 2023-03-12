import React from 'react'
import { useNavigate } from 'react-router-dom'
import {MdNavigateNext} from 'react-icons/md'
import './styles/sidedash.css'


const MedicalsDash = () => {
    let navigate = useNavigate()
  return (
    <div className='w-full'> 
        <div className='max-w-[700px] mx-auto my-16 p-4'>
    <h1 className='extended-first-div-h1-divdash' >Medical Details</h1>
    <p className='extended-first-div-p-divdash'> Choose document you want to upload</p>
    <div className='nothing-div-div'>
      <div 
        className='extended-first-div-div-divdash'
        onClick={(e)=>{navigate('/vitals')}}
      >
        <div className='extended-first-div-div-div-divdash'>
          <h1 className='extended-first-div-div-h1-divdash'>Basic Details</h1>
          <p className='extended-first-div-div-p-divdash'>Upload</p>
        </div>
        <MdNavigateNext />
      </div>
      <div className='extended-first-div-div-divdash'
       onClick={(e)=>{navigate('/EmergencyContact')}}>
        <div className='extended-first-div-div-div-divdash'>
          <h1 className='extended-first-div-div-h1-divdash'>Emergency Contact</h1>
          <p className='extended-first-div-div-p-divdash'>Upload </p>
        </div>
        <MdNavigateNext />
      </div>
    </div>
  </div></div>
  )
}

export default MedicalsDash

