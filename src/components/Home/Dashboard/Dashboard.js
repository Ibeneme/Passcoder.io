import React from 'react'
import './dashboard.css'
import SideDash from './SideDash'
import RightSlide from './Right-slide/RightSlide'

export const Dashboard = () => {
  return (
    <>
        <div style={{display:"flex", justifyContent:"normal"}}>
          <div className='extended-dashboard-div'>
             <RightSlide /> 
          </div>
          <div className='extended-dashboard' >
             <SideDash />
          </div>
         
        </div>
       
        
       
    </>
  )
}
