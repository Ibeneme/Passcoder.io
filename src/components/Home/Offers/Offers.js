import React from 'react'

import './Offers.css'

const Offers = () => {

  return (
    <div>
        <div className='offers-first-container'>
            <div className='offers-gradient'>
                <h1> PassCoder</h1>
                <p>Endless Possibilities, Amazing Offers</p>
            </div>
            <div className='offers-main-first-h1-div'>
                <h1 className='offers-main-first-h1'>Offers</h1>   

            <div className='offers-main-first'>
               <div className='offers-main-first-div'>
                    <div className='offers-main-first-logo' >
                        <h1>Google</h1>
                    </div>
                    <div className='offers-main-secondcontainer-div'>
                        <div className='offers-main-secondcontainer-flex'>
                            <div className='offers-main-secondcontainer-column'>
                                <h2>Port Harcourt</h2>
                                <p>Ongoing</p>
                            </div>
                            <div className='offers-main-secondcontainer-discount'>
                                <h1>25%</h1>
                                <h2>Off</h2>
                            </div>
                            
                        </div>
                        <button
                        className='offers-button'>View Offer</button>
                    </div>
                </div>
                <div className='offers-main-first-div'>
                    <div className='offers-main-first-logo' >
                        <h1>Google</h1>
                    </div>
                    <div className='offers-main-secondcontainer-div'>
                        <div className='offers-main-secondcontainer-flex'>
                            <div className='offers-main-secondcontainer-column'>
                                <h2>Port Harcourt</h2>
                                <p>Ongoing</p>
                            </div>
                            <div className='offers-main-secondcontainer-discount'>
                                <h1>25%</h1>
                                <h2>Off</h2>
                            </div>
                            
                        </div>
                        <button
                        className='offers-button'>View Offer</button>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
</div>
  )
}

export default Offers