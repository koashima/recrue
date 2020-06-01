import React, { useState } from "react";
import { Link } from "react-router-dom";
import userService from "../../utils/userService";


const SignupForm = (props) => { 
  
  const [userCred, setUserCred] = useState({
    name: "",
    email: "",
    password: "",
    passwordConf: ""
  });
  
  function handleChange(e) {
    props.updateMessage('');
    e.persist()
    setUserCred({
      ...userCred, 
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await userService.signup(userCred);
      // let App know a user has signed up
      props.handleSignupOrLogin();
      // Successfully signed up - show HomePage
      props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      props.updateMessage(err.message);
    }
  }

  function isFormInvalid(){
    return !(userCred.name && userCred.email && userCred.password === userCred.passwordConf);
  }

  return (
    <div>
    <br/>
    <header className="">SIGN UP</header>
    <br/>
    <form className="form-horizontal ui form" onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="col-sm-12">
          <input
            type="text"
            className="form-control"
            placeholder="NAME"
            value={userCred.name}
            name="name"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-12">
          <input
            type="email"
            className="form-control"
            placeholder="EMAIL"
            value={userCred.email}
            name="email"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-12">
          <input
            type="password"
            className="form-control"
            placeholder="PASSWORD"
            value={userCred.password}
            name="password"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-12">
          <input
            type="password"
            className="form-control"
            placeholder="CONFIRM PASSWORD"
            value={userCred.passwordConf}
            name="passwordConf"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-12 text-center">
          <button
            className="btn btn-default"
            disabled={isFormInvalid()}
          >
            Sign Up
          </button>
          &nbsp;&nbsp;
          <Link to="/">CANCEL</Link>
        </div>
      </div>
    </form>
  </div>
  )
}

export default SignupForm;