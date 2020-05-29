import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignupForm = (props) => { 
  
  const [userCred, setUserCred] = useState({
    name: "",
    email: "",
    password: "",
    passwordConf: ""
  });
  
  return (
    <h1>SIGNUP</h1>
  )
}

export default SignupForm;