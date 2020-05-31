import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {

  const [userCred, setUserCred] = useState({email: '', pw: ''})
  
  function handleChange(e) {
    setUserCred(
      ...userCred,
      {
        [e.target.name]: e.target.value
      }
    
    )
  }

  function handleSubmit (e) {
    e.preventDefault();
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
