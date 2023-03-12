import React from 'react'
import './dashboard.css'
import RightSlide from './Right-slide/RightSlide'
import CredentialDash from './CredentialsDash'

export const CredentialsDashboard = () => {
  return (
    <>
        <div style={{display:"flex", justifyContent:"normal"}}>
          <div className='extended-dashboard-div'>
             <RightSlide /> 
          </div>
          <div className='extended-dashboard' >
             <CredentialDash />
             
          </div>
         
        </div>
       
        
       
    </>
  )
}
