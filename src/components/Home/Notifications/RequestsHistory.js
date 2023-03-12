import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Request.css'
import {RiNotificationFill} from 'react-icons/ri'

const RequestsHistory = () => {
    let navigate = useNavigate()
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'2em'}}>
    <div className='request-div'>
        <h1 className='request-h1'>Requests and Notifications</h1>
        <p className='request-p' >Passcoder notifications for you</p>
    </div>
    <div className='request-seconddiv'>
        <p  
        onClick={(e)=>(navigate('/RequestsNotifications'))}
        className='request-toggle-div-para'> Pending Requests</p>
         <div className='request-toggle-div'>
           <p>Requests History</p>
        </div>
    </div>
    <div className='request-today-div'>
        <p className='request-today-div-para'> Today </p>
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
    </div>
</div>
  )
}

export default RequestsHistory