import React from 'react'
import './dashboard.css'
import RightSlide from './Right-slide/RightSlide'
import MedicalsDash from './MedicalsDash'

export const MedicalsDashboard = () => {
  return (
    <>
        <div style={{display:"flex", justifyContent:"normal"}}>
          <div className='extended-dashboard-div'>
             <RightSlide /> 
          </div>
          <div className='extended-dashboard' >
             <MedicalsDash />
             
          </div>
         
        </div>
       
    </>
  )
}
