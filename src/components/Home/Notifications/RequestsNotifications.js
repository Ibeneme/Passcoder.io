import React from 'react'
import './Request.css'
import Svg from './svgs/3d-stripy-man-working-on-the-laptop-behind-the-desk.svg'
// import { RiNotificationFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

const RequestsNotifications = () => {
    let navigate = useNavigate()
  return (

    <div style={{display:'flex', padding:'2em', flexDirection:'column', alignItems:'center', marginTop:'2em'}}>
    
     {/* <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'2em'}}>
    //     <div className='request-div'>
    //         <h1 className='request-h1'>Requests and Notifications</h1>
    //         <p className='request-p' >Passcoder notifications for you</p>
    //     </div>
    //     <div className='request-seconddiv'>
    //         <div className='request-toggle-div'>
    //            <p>Pending Requests</p>
    //         </div>
    //         <p   */}
    {/* //         onClick={(e)=>(navigate('/RequestsHistory'))}
    //         className='request-toggle-div-para'>Requests History</p>
    //     </div> */}
    {/* //     <div className='request-today-div'>
    //         <p className='request-today-div-para'> Today </p>
    //         <div className='pending-Card'>
    //             <div className='pending-Card-div'> */}
    {/* //                 <p>Request to use your ID</p>
    //             </div>
    //             <div className='pending-Card-details' >
    //                 <div className='pending-Card-details-div'>
    //                     <div className='pending-Card-first-container'>

                       
    //                     <div className='pending-Card-details-notifications'>
    //                         <RiNotificationFill />
    //                     </div >
    //                     <div className='pending-Card-second-div'>
    //                         <h1 className='pending-Card-first-h1'>Purple Pay</h1>
    //                         <p>Business is requesting for your:</p>
    //                         <h1 className='pending-Card-second-h1'>Address, NIN, Voter Card, Work History</h1>
    //                     </div>

    //                     </div>

    //                     <div>
    //                         <p className='pending-Card-first-p'>15/04/23</p>
    //                         <p className='pending-Card-second-p'>09:34am</p>
    //                     </div>
    //                 </div>
    //                 <div className='pending-Card-button-div'>
                       
    //                         <button className='pending-Card-button-decline'>Decline</button>
    //                         <button className='pending-Card-button-accept'>Accept</button>
                     */}
{/*                         
    //                 </div>
    //             </div> */}
    {/* //         </div>
    //     </div>
    // </div> */}

    <div  className='request-div mt-9'>

    <h1  className='illustration-whoops-h1'><span style={{color:'#292482'}}>Whoops.... </span> No new Notifications</h1>
    <p className='illustration-whoops-p' > We'll always send a notification when an app requests to use your ID</p>
    <img 
      src={Svg} alt={Svg} 
      className='illustration-whoops'/>

    <button
      onClick={(e)=>navigate('/dashboard')}
      className='border w-full border-blue-500 bg-[#292482] hover:bg-blue-500 p-4 mt-9 my-2 text-white'>
       Back to Home </button>
  </div>
  </div>
  )
}

export default RequestsNotifications