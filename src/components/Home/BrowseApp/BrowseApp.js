import React from 'react'
import { useNavigate } from 'react-router-dom'
import Svg from './svgs/3d-stripy-man-working-on-the-laptop-behind-the-desk.svg'
// import {RiNotificationFill} from 'react-icons/ri'
import './index.css'


const BrowseApp = () => {
  let navigate = useNavigate()
  return (
    <div style={{display:'flex', padding:'2em', flexDirection:'column', alignItems:'center', marginTop:'2em'}}>
    {/* <div className='request-div'>
        <h1 className='request-h1'>Browse Apps</h1>
        <p className='request-p' >Browse your apps verified with Passcoder</p>
    </div> */}
    <div  className='request-div mt-9'>

      <h1  className='illustration-whoops-h1'><span style={{color:'#292482'}}>Whoops.... </span> you've not used your ID on any Apps</h1>
      <p className='illustration-whoops-p' > We'll always send a notification when an app requests to use your ID</p>
      <img 
        src={Svg} alt={Svg} 
        className='illustration-whoops'/>

      <button
        onClick={(e)=>navigate('/dashboard')}
        className='border w-full border-blue-500 bg-[#292482] hover:bg-blue-500 p-4 mt-9 my-2 text-white'>
         Back to Home </button>
    </div>
{/*   
    <div className='request-today-div'>
        <p className='request-today-div-para'>  </p>
        <div className='pending-Card'>
            <div className='pending-Card-details-this' >
                <div className='pending-Card-details-div stroke-side'>
                    <div className='pending-Card-first-container'>

                    <div className='pending-Card-details-notifications'>
                        <RiNotificationFill />
                    </div >
                    <div className='pending-Card-second-div'>
                        <h1 className='pending-Card-first-h1'>Purple Pay</h1>
                        <p>Partner</p>
                    </div>

                    </div>

                    <div>
                        <p className='pending-Card-first-p'>15/04/23</p>
                        <p className='pending-Card-second-p'>09:34am</p>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div> */}
</div>
  )
}

export default BrowseApp