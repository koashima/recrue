import React, { useState } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm'


const SignupPage = (props) => { 
  const [message, setMessage] = useState('');

  const updateMessage = (msg) => { 
    setMessage(msg);
  }

  return ( 
    <SignupForm updateMessage={updateMessage}/>
  )
}

export default SignupPage;