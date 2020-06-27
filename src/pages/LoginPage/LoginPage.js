import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

const LoginPage = (props) => {
  const [userCred, setUserCred] = useState({ email: '', pw: '' });

  function handleChange(e) {
    e.persist();
    setUserCred({
      ...userCred,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await userService.login(userCred);
      props.handleSignupOrLogin();
      props.history.push('/prospects');
    } catch (err) {
      alert('Invalid Credentials!');
    }
  }

  return (
    <div className="LoginPage ui form">
      <header className="header-footer">LOG IN</header>
      <form className="form-horizontal" onSubmit={handleSubmit}>
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
              value={userCred.pw}
              name="pw"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div
            className="col-sm-12 text-center"
            style={{ marginTop: `1.5rem` }}
          >
            <button className="ui button">LOG IN</button>&nbsp;&nbsp;&nbsp;
            <Link to="/" className="ui button">
              CANCEL
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
