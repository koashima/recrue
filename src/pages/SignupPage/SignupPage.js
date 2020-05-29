import React, { useState } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm'


const SignupPage = (props) => { 
  const [message, setMessage] = useState({message: ''});

  const updateMessage = (msg) => { 
    setMessage({message: msg});
  }

  return ( 
    <SignupForm updateMessage={updateMessage}/>
  )
}

export default SignupPage;