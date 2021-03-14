import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

const SignupForm = (props) => {
  const [userCred, setUserCred] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  });

  function handleChange(e) {
    props.updateMessage('');
    e.persist();
    setUserCred({
      ...userCred,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await userService.signup(userCred);
      props.handleSignupOrLogin();
      props.history.push('/prospects');
    } catch (err) {
      props.updateMessage(err.message);
    }
  }

  function isFormInvalid() {
    return !(
      userCred.name &&
      userCred.email &&
      userCred.password === userCred.passwordConf
    );
  }

  return (
    <div>
      <br />
      <header className="ui top attached header">SIGN UP</header>
      <form className="ui form ui attached segment" onSubmit={handleSubmit}>
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
        <div>
          <div>
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
        <div>
          <div>
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
        <div>
          <div>
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
        <div>
          <button
            className="ui button"
            style={{ marginTop: `1.5rem` }}
            disabled={isFormInvalid()}
          >
            Sign Up
          </button>
          &nbsp;&nbsp;
          <Link to="/" className="ui button">
            CANCEL
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
