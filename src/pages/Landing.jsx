import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { IconButton } from '@material-ui/core'
import { HiOutlineLogin } from 'react-icons/hi'


function Landing() {
  const { loginWithRedirect } = useAuth0();

  return (
    // <>
    // Landing Page
    // </>

    // How to insert background image?
    // <div style={{ 
    //   backgroundImage: `url("https://images.unsplash.com/photo-1529148482759-b35b25c5f217?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")` 
    // }}>
    // </div>

    <IconButton
        edge="end"
        color="inherit"
        aria-label="login"
        onClick={() => loginWithRedirect()}
      >
        <div>Login/Signup</div>
        <HiOutlineLogin />
    </IconButton> 
  
    
  )
}

export default Landing