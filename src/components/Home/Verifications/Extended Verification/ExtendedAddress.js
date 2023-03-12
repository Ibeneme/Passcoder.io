import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ExtendedAddress = () => {
    let navigate = useNavigate()
  return (
    <form
    className='max-w-[700px] mx-auto my-16 p-4'
    >
        <h1 className='extended-first-div-h1'>Address</h1>
        <p className='extended-first-div-p'>Upload Required Documents</p>
        <div className='flex flex-col py-2'>
         <label className='py-2 font-medium'>Address</label>
          <input 
       
          type = 'text'
          className='border p-3'
          required
          placeholder='Enter your Address'
        
          />
      </div>   

      <div className='flex flex-col py-2'>
         <label className='py-2 font-medium'>Street Name</label>
          <input 
       
          type = 'text'
          className='border p-3'
          required
          placeholder='Enter your Street Name'
        
          />
      </div>   

      <div className='flex flex-col py-2'>
         <label className='py-2 font-medium'>City</label>
          <input 
          
          type = 'text'
          className='border p-3'
          required
          placeholder='Enter your City'
        
          />
      </div>   

      <div className='flex flex-col py-2'>
         <label className='py-2 font-medium'>State</label>
         <select 
            className='border p-3'
            style={{height:'3em', padding: '0 1em'}}
            id="country-state" name="country-state">
    <option value="">Select state</option>
    <option value="AB">Abia State</option>
    <option value="AD">Adamawa State</option>
    <option value="AK">Akwa Ibom State</option>
    <option value="AN">Anambra State</option>
    <option value="BA">Bauchi State</option>
    <option value="BY">Bayelsa State</option>
    <option value="BE">Benue State</option>
    <option value="BO">Borno State</option>
    <option value="CR">Cross River State</option>
    <option value="DE">Delta State</option>
    <option value="EB">Ebonyi State</option>
    <option value="ED">Edo State</option>
    <option value="EK">Ekiti State</option>
    <option value="EN">Enugu State</option>
    <option value="FC">Federal Capital Territory</option>
    <option value="GO">Gombe State</option>
    <option value="IM">Imo State</option>
    <option value="JI">Jigawa State</option>
    <option value="KD">Kaduna State</option>
    <option value="KN">Kano State</option>
    <option value="KT">Katsina State</option>
    <option value="KE">Kebbi State</option>
    <option value="KO">Kogi State</option>
    <option value="KW">Kwara State</option>
    <option value="LA">Lagos</option>
    <option value="NA">Nasarawa State</option>
    <option value="NI">Niger State</option>
    <option value="OG">Ogun State</option>
    <option value="ON">Ondo State</option>
    <option value="OS">Osun State</option>
    <option value="OY">Oyo State</option>
    <option value="PL">Plateau State</option>
    <option value="SO">Sokoto State</option>
    <option value="TA">Taraba State</option>
    <option value="YO">Yobe State</option>
    <option value="ZA">Zamfara State</option>
</select>
      </div>

          <div className='flex flex-col py-2'>
         <label className='py-2 font-medium'>Upload a copy of your Utility bill (NEPA) </label>
          <input 
          
          type = 'file'
          className='border p-3'
          required
          placeholder='Enter your City'
        
          />
      </div>   
Í
      <button 
        onClick={(e)=>navigate('/AddressSuccess')}
        className='border w-full border-blue-500 bg-[#292482] hover:bg-blue-500 p-4 mt-9 my-2 text-white'>
          Submit
        </button>
    </form>
  )
}
