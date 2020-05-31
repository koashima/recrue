import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';


const LoginPage = (props) => {

  const [userCred, setUserCred] = useState({email: '', pw: ''})
  
  function handleChange(e) {
    e.persist()
    setUserCred({
      ...userCred,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await userService.login(userCred);
      // let App know a user has signed up
      props.handleSignupOrLogin();
      // Successfully signed up - show HomePage
      props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      alert('Invalid Credentials!')
    }
  }

    return (
      <div className="LoginPage">
        <header className="header-footer">Log In</header>
        <form className="form-horizontal" onSubmit={handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Email" 
                value={userCred.email} 
                name="email" 
                onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input 
                type="password" 
                className="form-control" 
                placeholder="Password" 
                value={userCred.pw} 
                name="pw" 
                onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
}

export default LoginPage;
