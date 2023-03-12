import React from 'react'
import {MdContentCopy} from 'react-icons/md'
import {FaFlagCheckered} from 'react-icons/fa'
import './rightslide.css'
import Profile from './images/unnamed.jpg'
import {RiNotificationLine} from 'react-icons/ri'
import {MdNavigateNext} from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import {TbDiscount2} from 'react-icons/tb'
import {BsFolder2Open} from 'react-icons/bs'
import { FaUserLock } from 'react-icons/fa'



const RightSlide = () => {
    let navigate = useNavigate()
  return (
    <div style={{display:"flex"}}>
         <div className='slide-div'>
        <div>
            <div className='first-slide-div-up'> 
                <div className='first-slide-div'>
                    <h6 className='slide-h6' >Hello Ikenna</h6>
                    <div className='slide-img-and-notifications'>
                        <RiNotificationLine />
                        <img 
                        onClick={(event)=>{navigate('/Profile')}}
                        className='img-slide' src={Profile} alt={Profile}/>
                    </div>        
                </div>
            </div>
            <div className='slide-dashboard'>
                <p className='slide-dashboard-p'> Digital ID</p>
                    <div>
                        <h4 className='slide-dashboard-h4'> <MdContentCopy />1234567890</h4>
                    </div>
                    <div className='slide-dashboard-div'>
                        <p>View IDs</p>
                    </div>
                </div>
                <div className='slide-basic-id-up'>
                        <div className='slide-basic-id'
                            style={{borderLeft:'#4285F4 solid 0.9em'}}
                             onClick={(event)=>{navigate('/Dashboard')}}>
                            <div className='slide-basic-id-container'>
                                <div className='slide-basic-id-div'>
                                    <FaFlagCheckered className='slide-basic-id-icon extended' />
                                </div>
                                <div className='slide-basic-id-div-div'>
                                    <h4 className='slide-basic-id-div-h4 extended'> <b> Extended Bio Verification</b></h4>
                                    <p className='slide-basic-id-div-p'> NIN, Voters Card, BVN e.t.c</p> 
                                </div>
                            </div>
                            <div>
                                <MdNavigateNext />
                            </div>
                        </div>
                        <div className='slide-basic-id' onClick={(event)=>{navigate('/DashboardCredentials')}}>
                            <div className='slide-basic-id-container'
                           >
                                <div className='slide-basic-id-div'>
                                    <FaFlagCheckered className='slide-basic-id-icon credential' />
                                </div>
                                <div className='slide-basic-id-div-div'>
                                    <h4 className='slide-basic-id-div-h4 credential'> <b> Credential ID Verification</b></h4>
                                    <p className='slide-basic-id-div-p'> Primary, Secondary, Tertiary e.t.c</p> 
                                </div>
                            </div>
                            <div>
                                <MdNavigateNext />
                            </div>
                        </div>
                        <div className='slide-basic-id'
                        onClick={(event)=>{navigate('/DashboardMedicals')}}>
                            <div className='slide-basic-id-container'>
                                <div className='slide-basic-id-div'>
                                    <FaFlagCheckered className='slide-basic-id-icon also' />
                                </div>
                                <div className='slide-basic-id-div-div'>
                                    <h4 className='slide-basic-id-div-h4 also'> <b> Medical ID Verification</b></h4>
                                    <p className='slide-basic-id-div-p also'> Height, Genotype, Blood Group, e.t.c</p> 
                                </div>
                            </div>
                            <div>
                                <MdNavigateNext />
                            </div>
                        </div>

                        <div className='slide-basic-id'
                        onClick={e=>navigate('/Dashboardgovt')}

                         >
                            <div className='slide-basic-id-container'>
                                <div className='slide-basic-id-div'>
                                    <FaFlagCheckered className='slide-basic-id-icon' />
                                </div>
                                <div className='slide-basic-id-div-div' >
                                    <h4 className='slide-basic-id-div-h4'> <b> Government ID</b></h4>
                                    <p className='slide-basic-id-div-p'> Polling Unit, CAC, Tax records e.t.c</p> 
                                </div>
                            </div>
                            <div>
                                <MdNavigateNext />
                            </div>
                        </div>
                        <div className='slide'>
            <div className='nav-panel-column active'>
                <GiHamburgerMenu />
                <p>Home</p>
            </div>
            <div 
            onClick={(event)=>{navigate('/Offers')}}
            className='nav-panel-column'>
                <TbDiscount2/>
                <p>Offers</p>
            </div>
            <div onClick={(event)=>{navigate('/Browse-Apps')}} className='nav-panel-column'>
                <BsFolder2Open />
                <p>Browse App</p>
            </div>
            <div onClick={(event)=>{navigate('/RequestsNotifications')}} className='nav-panel-column'>
                <FaUserLock />
                <p>Requests</p>
            </div>
        </div>

                    
                
                </div>
            </div>
        <div>
      </div>
    </div>
           <div className='slide-div-duplicate'>
        <div>
            <div className='first-slide-div-up'> 
                <div className='first-slide-div'>
                    <h6 className='slide-h6' >Hello Ikenna</h6>
                    <div className='slide-img-and-notifications'>
                        <RiNotificationLine />
                        <img 
                        onClick={(event)=>{navigate('/Profile')}}
                        className='img-slide' src={Profile} alt={Profile}/>
                    </div>        
                </div>
            </div>
            <div className='slide-dashboard'>
                <p className='slide-dashboard-p'> Digital ID</p>
                    <div>
                        <h4 className='slide-dashboard-h4'> <MdContentCopy />1234567890</h4>
                    </div>
                    <div className='slide-dashboard-div'>
                        <p>View IDs</p>
                    </div>
                </div>
                <div className='slide-basic-id-up'>
                        <div className='slide-basic-id'
                             onClick={(event)=>{navigate('/ExtendedVerification')}}>
                            <div className='slide-basic-id-container'>
                                <div className='slide-basic-id-div'>
                                    <FaFlagCheckered className='slide-basic-id-icon extended' />
                                </div>
                                <div className='slide-basic-id-div-div'>
                                    <h4 className='slide-basic-id-div-h4 extended'> <b> Extended Bio Verification</b></h4>
                                    <p className='slide-basic-id-div-p'> NIN, Voters Card, BVN e.t.c</p> 
                                </div>
                            </div>
                            <div>
                                <MdNavigateNext />
                            </div>
                        </div>
                        <div className='slide-basic-id' onClick={(event)=>{navigate('/CredentialVerification')}}>
                            <div className='slide-basic-id-container'
                           >
                                <div className='slide-basic-id-div'>
                                    <FaFlagCheckered className='slide-basic-id-icon credential' />
                                </div>
                                <div className='slide-basic-id-div-div'>
                                    <h4 className='slide-basic-id-div-h4 credential'> <b> Credential ID Verification</b></h4>
                                    <p className='slide-basic-id-div-p'> Primary, Secondary, Tertiary e.t.c</p> 
                                </div>
                            </div>
                            <div>
                                <MdNavigateNext />
                            </div>
                        </div>
                        <div className='slide-basic-id'
                        onClick={(event)=>{navigate('/MedicalVerification')}}>
                            <div className='slide-basic-id-container'>
                                <div className='slide-basic-id-div'>
                                    <FaFlagCheckered className='slide-basic-id-icon also' />
                                </div>
                                <div className='slide-basic-id-div-div'>
                                    <h4 className='slide-basic-id-div-h4 also'> <b> Medical ID Verification</b></h4>
                                    <p className='slide-basic-id-div-p also'> Height, Genotype, Blood Group, e.t.c</p> 
                                </div>
                            </div>
                            <div>
                                <MdNavigateNext />
                            </div>
                        </div>

                        <div className='slide-basic-id'
                         >
                            <div className='slide-basic-id-container'>
                                <div className='slide-basic-id-div'>
                                    <FaFlagCheckered className='slide-basic-id-icon' />
                                </div>
                                <div className='slide-basic-id-div-div' >
                                    <h4 className='slide-basic-id-div-h4'> <b> Government ID</b></h4>
                                    <p className='slide-basic-id-div-p'> Polling Unit, CAC, Tax records e.t.c</p> 
                                </div>
                            </div>
                            <div>
                                <MdNavigateNext />
                            </div>
                        </div>
                        <div className='slide'>
            <div className='nav-panel-column active'>
                <GiHamburgerMenu />
                <p>Home</p>
            </div>
            <div 
            onClick={(event)=>{navigate('/Offers')}}
            className='nav-panel-column'>
                <TbDiscount2/>
                <p>Offers</p>
            </div>
            <div onClick={(event)=>{navigate('/Browse-Apps')}} className='nav-panel-column'>
                <BsFolder2Open />
                <p>Browse App</p>
            </div>
            <div onClick={(event)=>{navigate('/RequestsNotifications')}} className='nav-panel-column'>
                <FaUserLock />
                <p>Requests</p>
            </div>
        </div>

                    
                
                </div>

        </div>
        

      
      <div>
    
      </div>

    </div>

    </div>


  )
}

export default RightSlide