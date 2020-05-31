import React, { useState } from 'react';
import './App.css';
import { Route, Switch, } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProspectsPage from './pages/ProspectsPage/ProspectsPage';
import userService from './utils/userService';

function App() {
  let [user, setUser] = useState(userService.getUser())
  

  function handleLogout() { 
    userService.logout();
    setUser({user: null});
  }

  function handleSignupOrLogin() {
    setUser({user: userService.getUser()});
  }

  return (
    <Switch>
      <div className="App">
        <header className="App-header" style={{ fontStyle: "italic"}}>R E <span style={{ textDecoration: 'line-through'}}>C R U E</span></header>
      <Switch>
        <Nav 
          user={user} 
          handleLogout={handleLogout}
        />
      </Switch>  
          <Route 
            exact path='/signup' 
            render={ ({history}) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={handleSignupOrLogin}
              /> 
            )} 
          />
          <Route 
            exact path='/login'
            render={ ({history}) => 
              <LoginPage 
                history={history}
                handleSignupOrLogin={handleSignupOrLogin}/>

            }
          />
          <Route 
            exact path='/prospects'
            render={ (props) => 
              <ProspectsPage/> 
          }/>
      </div>      
    </Switch>
  );
}

export default App;
