import React from 'react'
import { useNavigate } from 'react-router-dom';


const EditProfile = () => {
    let navigate = useNavigate()

  return (
    <div className='firstslide-profile-div'>
        <div className='second-slide-profile-div'>
            <h1 className='profile-h1'>Profile</h1>
            <p 
                style={{marginBottom:'1em', }}
                > Upload a Profile Picture</p>
             
            <div>
               <input
               type='file'
               className=' file:mr-4 file:py-2 file:px-4
               file:rounded-full file:border-0
               file:text-sm file:font-semibold
               file:bg-violet-50 file:text-violet-700
               hover:file:bg-violet-100'
               />
            </div>
            <div>
                <div className='email-profile-div'>
                <div style={{display:'flex', flexDirection:'column'}} >
                    <label>Email Address</label>
                    <input 
                        className='email-profile-div-box'
                        type='email'
                        placeholder='Ibenemeikenna96@gmail.com' />
                   
                </div>
                
                <div style={{display:'flex', flexDirection:'column'}} >
                    <label>Phone Number</label>
                    <input 
                        className='email-profile-div-box'
                        type='email'
                        placeholder='08120710198' />
                   
                </div>
                </div>
                <div className='email-profile-div'>
                <div style={{display:'flex', flexDirection:'column'}} >
                    <label>Gender</label>
                    <select
                            className='email-profile-div-box'>

                        <option value="">Select Gender</option>
                        <option value="">Male</option>
                        <option value="">Female</option>

                    </select>
                   
                </div>
                <div>
                    
                    <div style={{display:'flex', flexDirection:'column'}} >
                    <label>Date of Birth</label>
                    <input 
                        className='email-profile-div-box'
                        type='date'
                         />
                   
                </div>
                </div>
                </div>
               
                <div className='email-profile-button-div'>
                    <button
                        onClick={(e)=>{navigate('/EditProfile')}}
                        className='email-profile-btn'
                     ><p>Save</p></button>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditProfile