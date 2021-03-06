import React, { useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import userService from './utils/userService';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Nav from './components/Nav/Nav';
import ProspectsPage from './pages/ProspectsPage/ProspectsPage';
import prospectService from './utils/prospectService';
import AddProspect from './pages/AddProspect/AddProspect';
import EditProspect from './pages/ShowEditProspect/ShowEditProspect';

const App = () => {
  let [user, setUser] = useState(userService.getUser());

  let [prospect, setProspect] = useState([]);

  function handleLogout() {
    userService.logout();
    setUser(null);
  }

  function handleSignupOrLogin() {
    setUser(userService.getUser());
  }

  const handleAddProspect = async (newProspectData) => {
    const newProspect = await prospectService.create(newProspectData);
    setProspect(
      {
        prospect: [...prospect, newProspect],
      },
      (props) => props.history.push('/')
    );
  };

  const handleUpdateProspect = async (updatedProspectData) => {
    const updatedProspect = await prospectService.update(updatedProspectData);
    console.log(updatedProspect);
    const newProspectArray = prospect.map((p) =>
      p._id === updatedProspect._id ? updatedProspect : p
    );
    setProspect(newProspectArray);
  };

  return (
    <Switch>
      <>
        <div className="App">
          <header className="App-header" style={{ fontStyle: 'italic' }}>
            R E <span style={{ textDecoration: 'underline' }}>C R U E</span>
          </header>
          <Route
            exact
            path="/"
            render={() => <Nav user={user} handleLogout={handleLogout} />}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/prospects"
            render={({ props, history }) => (
              <ProspectsPage
                history={history}
                prospect={prospect}
                user={user}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/addprospect"
            render={({ history }) => (
              <AddProspect
                history={history}
                handleAddProspect={handleAddProspect}
              />
            )}
          />
          <Route
            exact
            path="/prospect"
            render={({ history, location }) => (
              <EditProspect
                history={history}
                location={location}
                handleUpdateProspect={handleUpdateProspect}
              />
            )}
          />
        </div>
      </>
    </Switch>
  );
};

export default App;
