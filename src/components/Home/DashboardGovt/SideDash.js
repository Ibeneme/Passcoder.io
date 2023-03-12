import React from 'react'
import { useNavigate } from 'react-router-dom'
import {MdNavigateNext} from 'react-icons/md'
import './styles/sidedash.css'


const SideDash = () => {
    let navigate = useNavigate()
  return (
    <div className='w-full'>  
        <div className='max-w-[700px] mx-auto my-16 p-4'>
    <h1 className='extended-first-div-h1-divdash' >Government ID</h1>
    <p className='extended-first-div-p-divdash'> Choose document you want to upload</p>
    <div className='nothing-div-div'>
  
      <div 
       onClick={(e)=>{navigate('/VIN')}}
       className='extended-first-div-div-divdash'>
        <div className='extended-first-div-div-div-divdash'>
          <h1 className='extended-first-div-div-h1-divdash'>Permanent Voters Card </h1>
          <p className='extended-first-div-div-p-divdash'>Upload front and back copies of voters slip</p>
        </div>
        <MdNavigateNext />
      </div>

      <div 
       onClick={(e)=>{navigate('/Driverslicense')}}
       className='extended-first-div-div-divdash'>
        <div className='extended-first-div-div-div-divdash'>
          <h1 className='extended-first-div-div-h1-divdash'>Drivers License</h1>
          <p className='extended-first-div-div-p-divdash'>Upload a copy of your drivers license</p>
        </div>
        <MdNavigateNext />
      </div>
    </div>
  </div></div>
  )
}

export default SideDash

