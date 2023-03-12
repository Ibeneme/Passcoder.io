import React from 'react';
import { Profile } from './Home/Profile/Profile';
import LogOut from './LogOut';


const Account = () => {
 

  return (
    <div
    style={{
      overflow:'scroll',
      overflowY:'auto',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center'
    }}>
      <div 
         style={{
              overflowY:'auto',
              display:'flex',
              flexDirection:'column',
              justifyContent:'center'
            }}>
        <div  style={{
              position:'relative',
              top:'0',
              left:'0'
            }}>
            <Profile />
            <div
              style={{
                backgroundColor:'#00000085',
                width:'100vw',
                height:'100%',
                bottom: "0",
                left:'0',
                overflowY:'auto',
                position:'absolute',
              }}>

            </div>
            <div
              style={{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                position:'absolute',
                width:'100%',
                top:'35vh'
              }}>
                <LogOut />

            </div>
        </div>
     
    </div>
    </div>
    

  );
};

export default Account;