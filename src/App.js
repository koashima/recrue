import React, { useState } from 'react';
import './App.css';
import { Route, Switch, } from 'react-router-dom';
import userService from './utils/userService';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Nav from './components/Nav/Nav';
import ProspectsPage from './pages/ProspectsPage/ProspectsPage';
import Prospect from './components/Prospect/Prospect';
import Note from './components/Note/Note';
import Interaction from './components/Interaction/Interaction';

  const swag = [
    {firstName: 'Koa',
     lastName: 'Shima'
    }
  ];

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
          <Route path="/prospects" render={ (props) => 
            <ProspectsPage swag={swag} {...props} />
          } />
          <Route path="/prospects/:id" render={ (props) => 
            <Prospect swag={swag} {...props} />
          } />
      </div>      
    </Switch>
  );
}

export default App;
