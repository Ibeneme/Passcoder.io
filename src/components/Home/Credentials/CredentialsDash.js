import React from 'react'
import { useNavigate } from 'react-router-dom'
import {MdNavigateNext} from 'react-icons/md'
import './styles/sidedash.css'


const CredentialDash = () => {
    let navigate = useNavigate()
  return (
    <div className='w-full'> 
        <div className='max-w-[700px] mx-auto my-16 p-4'>
    <h1 className='extended-first-div-h1-divdash' >Credentials Verification</h1>
    <p className='extended-first-div-p-divdash'> Choose document you want to upload</p>
    <div className='nothing-div-div'>
      <div 
        className='extended-first-div-div-divdash'
        onClick={(e)=>{navigate('/FSL')}}
      >
        <div className='extended-first-div-div-div-divdash'>
          <h1 className='extended-first-div-div-h1-divdash'>First School Leaving</h1>
          <p className='extended-first-div-div-p-divdash'>Upload</p>
        </div>
        <MdNavigateNext />
      </div>
      <div className='extended-first-div-div-divdash'
       onClick={(e)=>{navigate('/SSCE')}}>
        <div className='extended-first-div-div-div-divdash'>
          <h1 className='extended-first-div-div-h1-divdash'>SSCE Certificate</h1>
          <p className='extended-first-div-div-p-divdash'>Upload </p>
        </div>
        <MdNavigateNext />
      </div>
      <div 
       onClick={(e)=>{navigate('/UndergraduateDegree')}}
      className='extended-first-div-div-divdash'>
        <div className='extended-first-div-div-div-divdash'>
          <h1 className='extended-first-div-div-h1-divdash'>University, Polytechnic or College Degree</h1>
          <p className='extended-first-div-div-p-divdash'>Upload</p>
        </div>
        <MdNavigateNext />
      </div>
      <div 
       onClick={(e)=>{navigate('/Masters')}}
       className='extended-first-div-div-divdash'>
        <div className='extended-first-div-div-div-divdash'>
          <h1 className='extended-first-div-div-h1-divdash'>Masters Degree</h1>
          <p className='extended-first-div-div-p-divdash'>Upload</p>
        </div>
        <MdNavigateNext />
      </div>
      <div 
        onClick={(e)=>{navigate('/PHD')}}
       className='extended-first-div-div-divdash'>
        <div className='extended-first-div-div-div-divdash'>
          <h1 className='extended-first-div-div-h1-divdash'>Doctorate Degree</h1>
          <p className='extended-first-div-div-p-divdash'>Upload </p>
        </div>
        <MdNavigateNext />
      </div>
    
    </div>
  </div></div>
  )
}

export default CredentialDash

