import React from 'react'
import { useNavigate } from 'react-router-dom'
import svg from './svg/3d-stripy-man-working-on-the-laptop-behind-the-desk.svg'


const Vitals = () => {
   
        let navigate = useNavigate()
      return (
        <form
        className='max-w-[700px] mx-auto my-16 p-4'
        >
            <h1 className='extended-first-div-h1'> No Health details added yet</h1>
            <p className='extended-first-div-p'>Add your health details incase of an Emergency</p>
            <div className='flex flex-col py-2'>
          </div>  
          <div
            style={{
                display:'flex',
                justifyContent:'center',
            }}>
            <img 
                 style={{
                    height: '18em',
                    width: '26em'
                }}
                src={svg} alt='svg' />
            
            </div> 
           
         
          <button 
            onClick={(e)=>navigate('/AddVitals')}
            className='border w-full border-blue-500 bg-[#292482] hover:bg-blue-500 p-4 mt-9 my-2 text-white'>
              Add a Detail
            </button>
        </form>
  )
}

export default Vitals