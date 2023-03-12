import React from 'react'
import {MdNavigateNext} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'


export const Credentials = () => {
  let navigate = useNavigate()
  return (

 
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <h1 className='extended-first-div-h1' >Credentials Verification</h1>
      <p className='extended-first-div-p'> Choose document you want to upload</p>
      <div>
        <div 
          className='extended-first-div-div'
          onClick={(e)=>{navigate('/FSL')}}
        >
          <div className='extended-first-div-div-div'>
            <h1 className='extended-first-div-div-h1'>First School Leaving</h1>
            <p className='extended-first-div-div-p'>Upload</p>
          </div>
          <p className='icons-arr' > <MdNavigateNext /></p>
        </div>
        <div className='extended-first-div-div'
          onClick={(e)=>{navigate('/SSCE')}}>
          <div className='extended-first-div-div-div'>
            <h1 className='extended-first-div-div-h1'>SSCE Certificate</h1>
            <p className='extended-first-div-div-p'>Upload</p>
          </div>
          <p className='icons-arr' > <MdNavigateNext /></p>
        </div>
        <div 
        onClick={(e)=>{navigate('/UndergraduateDegree')}}
        className='extended-first-div-div'>
          <div className='extended-first-div-div-div'>
            <h1 className='extended-first-div-div-h1'>University, Polytechnic or College Degree</h1>
            <p className='extended-first-div-div-p'>Upload</p>
          </div>
          <p className='icons-arr' > <MdNavigateNext /></p>
        </div>
        <div 
         onClick={(e)=>{navigate('/Masters')}}
         className='extended-first-div-div'>
          <div className='extended-first-div-div-div'>
            <h1 className='extended-first-div-div-h1'>Masters Degree</h1>
            <p className='extended-first-div-div-p'>Upload </p>
          </div>
          <p className='icons-arr' > <MdNavigateNext /></p>
        </div>
        <div 
         onClick={(e)=>{navigate('/PHD')}}
         className='extended-first-div-div'>
          <div className='extended-first-div-div-div'>
            <h1 className='extended-first-div-div-h1'>Doctorate Degree</h1>
            <p className='extended-first-div-div-p'>Upload</p>
          </div>
          <p className='icons-arr' > <MdNavigateNext /></p>
        </div>
      </div>
    </div>
 
  )
}
