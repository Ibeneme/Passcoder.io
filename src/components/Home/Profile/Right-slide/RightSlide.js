import React from 'react'
import svg from './images/unnamed.jpg'
import './rightslide.css'
import { useNavigate } from 'react-router-dom'



    
const RightSlide = () => {
  
    const navigate = useNavigate();
  
    
  return (
    <div className='firstslide-profile-div'>
        <div className='second-slide-profile-div'>
            <h1 className='profile-h1'>Profile</h1>
            <div className='slide-profile-div'>
                <img src={svg} alt={svg} />
                <div className='email-profile-div-div'>
                    <p>Loyalty Points</p>
                    <h1> 10.76</h1>
                </div>
            </div>
            <div>
                <div className='email-profile-div'>
                <div >
                    <label>Email Address</label>
                    <div className='email-profile-div-box'>
                        <p className='email-profile-div-para'> Ibenemeikenna96@gmail.com </p>
                    </div>
                </div>
                <div>
                    <label>Phone Number</label>
                    <div className='email-profile-div-box'>
                        <p className='email-profile-div-para'> 08120710198</p>
                    </div>
                </div>
                </div>
                <div className='email-profile-div'>
                <div >
                    <label>Gender</label>
                    <div className='email-profile-div-box'>
                        <p className='email-profile-div-para'> Male </p>
                    </div>
                </div>
                <div>
                    <label>Date of Birth</label>
                    <div className='email-profile-div-box'>
                        <p className='email-profile-div-para'> 10th May 2020</p>
                    </div>
                </div>
                </div>
                <div className='email-profile-div'>
                <div >
                    <label>Referral Link</label>
                    <div className='email-profile-div-box'>
                        <p className='email-profile-div-para'> Ikenna@Passcoder.io </p>
                    </div>
                </div>
                <div>
                    <label>Two factor authentication (2FA) </label>
                    <div className='email-profile-div-box'>
                        <p className='email-profile-div-para-second'> 
                        Activate
                        <label className='switch'>
                            <input className='input-switch' type ='checkbox' />
                            <span className='slider'> </span>
                        </label>
                        </p>
                    </div>
                </div>
                </div>
                <div className='email-profile-button-div'>
                    <button
                        onClick={(e)=>{navigate('/EditProfile')}}
                        className='email-profile-btn'
                     ><p>Edit</p></button>
                       <button
                        onClick={(e)=>{navigate('/logout')}}
                        className='email-profile-btn-logout'
                     ><p>Log Out</p></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightSlide