import React from 'react'
import {MdNavigateNext} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'


const RightDiv = () => {
    let navigate = useNavigate()
  return (
   <div>
     <div className='right-div-div'>
        <div className='max-w-[700px] mx-auto my-16 p-4'>
      <h1 className='extended-first-div-h1' >Extended Bio Verification</h1>
      <p className='extended-first-div-p'> Choose document you want to upload</p>
      <div>
        <div 
          className='extended-first-div-div'
          onClick={(e)=>{navigate('/ExtendedAddress')}}
        >
          <div className='extended-first-div-div-div'>
            <h1 className='extended-first-div-div-h1'>Address</h1>
            <p className='extended-first-div-div-p'>Enter Street, City, State, Country, e.t.c</p>
          </div>
          <MdNavigateNext />
        </div>
        <div className='extended-first-div-div'
          onClick={(e)=>{navigate('/NIMC')}}>
          <div className='extended-first-div-div-div'>
            <h1 className='extended-first-div-div-h1'>National Identity Card (NIMC/ NIN Slip)</h1>
            <p className='extended-first-div-div-p'>Upload front and back copies of NIN slip</p>
          </div>
          <MdNavigateNext />
        </div>
        <div 
        onClick={(e)=>{navigate('/BVN')}}
        className='extended-first-div-div'>
          <div className='extended-first-div-div-div'>
            <h1 className='extended-first-div-div-h1'>BVN</h1>
            <p className='extended-first-div-div-p'>Upload a copy of your BVN</p>
          </div>
          <MdNavigateNext />
        </div>
        <div 
         onClick={(e)=>{navigate('/VIN')}}
         className='extended-first-div-div'>
          <div className='extended-first-div-div-div'>
            <h1 className='extended-first-div-div-h1'>Permanent Voters Card </h1>
            <p className='extended-first-div-div-p'>Upload front and back copies of voters slip</p>
          </div>
          <MdNavigateNext />
        </div>
        <div 
         onClick={(e)=>{navigate('/InternationalPassport')}}
         className='extended-first-div-div'>
          <div className='extended-first-div-div-div'>
            <h1 className='extended-first-div-div-h1'>International Passport</h1>
            <p className='extended-first-div-div-p'>Upload a copy of your Passport data page</p>
          </div>
          <MdNavigateNext />
        </div>
        <div 
         onClick={(e)=>{navigate('/Driverslicense')}}
         className='extended-first-div-div'>
          <div className='extended-first-div-div-div'>
            <h1 className='extended-first-div-div-h1'>Drivers License</h1>
            <p className='extended-first-div-div-p'>Upload a copy of your drivers license</p>
          </div>
          <MdNavigateNext />
        </div>
      </div>
    </div>
    </div>
   </div>
  )
}

export default RightDiv