import React, {useState} from 'react';

const LoginPage = () => { 
  const [userCred] = useState({email: '', password: ''})
  
  return ( 
    <h1>LOGIN</h1>
  )
}

export default LoginPage;