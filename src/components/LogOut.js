import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';




const LogOut = () => {

  const {  logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div style={{
        backgroundColor:'white', 
        padding:'2em',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'0.2em'}}>

         <h1 className='text-xl font-bold  text-center py-4'>Confirm you want to Logout</h1>
      <p className='text-center' > You are about to log Out your passcoder account </p>
      <div className=' flex justify-center content-center mt-6'>
      <button 
      style={{border:'0.09em solid black'}}
      onClick={e=>{navigate('/Dashboard')}} 
      className=' mr-3 px-6 py-2 my-4'>
        Cancel
      </button>
         <button 
         style={{border:'0.09em solid red', color:'white', backgroundColor:'red'}}
         onClick={handleLogout} className='bg-red px-6 py-2 mr-3 my-4'>
         Logout
      </button>
      </div>
     

    </div>
  )
}

export default LogOut