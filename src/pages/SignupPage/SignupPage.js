import React, { useState } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm'


const SignupPage = (props) => { 
  const [message, setMessage] = useState('');

  const updateMessage = (msg) => { 
    setMessage(msg);
  }

  return ( 
    <div>
      <SignupForm {...props} updateMessage={updateMessage}/>
      <p>{message}</p>
    </div>

  
  )
}

export default SignupPage;