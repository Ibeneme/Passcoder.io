import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Svg from './svg/Component 1154.svg'

  const Otp = () => {
      const [email, setEmail] = useState('');
      const navigate = useNavigate()
  
  // email form actions
    function handleEmailClick(e){
      setEmail(e.target.value)
     
     }
    


  const handleSubmit = async (e) => {
     e.preventDefault();
     navigate('/dashboard')
      console.log(e.message);
    }
 

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
       <div>
        {/* I had a had time centering the logo as an image 
          so i put the logo inside of a paragraph element */}
        <p
          style={{ color: "#292482", fontWeight: "bold" }}
          className="py-1 flex content-center justify-center text-center "
        >
          <img
            className="py-1 flex content-center justify-center w-10"
            alt={Svg}
            src={Svg}
          />
        </p>
        <h1 className="text-2xl text-center font-bold py-2 mt-2">
          Enter your 6 Digits OTP
        </h1>
        <p
          style={{ color: "gray", fontWeight: "bold" }}
          className="py-1 text-center "
        >
          Please check your email for your OTP
          {/* <Link
            to="/signin"
            style={{ color: "#292482", fontWeight: "bold" }}
            className="underline"
          >
            Sign in.
          </Link> */}
        </p>
      </div>
      <br />
      
     

      <br />
      <form onSubmit={handleSubmit}>
    

        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Otp</label>

          <input
            required
            value={email}
            onChange={handleEmailClick}
            className='border p-3 bg-gray-200 date:text-gray-350'
            type='text'
            placeholder='Enter your Email Address'
          />
        
        </div>



        <br />
        <button 
        
        className='border border-blue-500 bg-[#292482] hover:bg-blue-500 w-full p-4 my-2 text-white'>
          Proceed
        </button>
            <br>
            
            </br>
            <p> Didn't get a code? Resend Code</p>
      </form>
            <br/><br/>
        {/* <button 
      
         onClick={handleClick}
            style={{
            border:"0.05em solid black", 
            borderRadius:"0.1em"}} 
            className=' w-full p-4 my-2 text-black mb-2' > 
            <span style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <FcGoogle style={{marginRight:"1em"}} /> 
            <p>Continue With Google</p> </span></button> 

         <button 
            onClick={handleClickFb}
            style={{
            border:"0.05em solid black", 
            borderRadius:"0.1em"}} 
            className=' w-full p-4 my-2 text-black mb-7' > 
            <span style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <BsFacebook style={{marginRight:"1em", color:'blue'}} /> 
            <p>Continue With Facebook</p> </span></button>  */}
    </div>
  );
};

export default Otp;