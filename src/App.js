import React, { useState } from 'react';
import './App.css';
import { Route, Switch, Link} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProspectsPage from './pages/ProspectsPage/ProspectsPage';
import userService from './utils/userService';

function App() {
  let [user, setUser] = useState(userService.getUser())
  
  return (
    <Switch>
      <div className="App">
        <header className="App-header" style={{ fontStyle: "italic"}}>R E <span style={{ textDecoration: 'line-through'}}>C R U E</span></header>
        <Nav />
        <Switch>
          <Route 
            exact path='/signup' 
            render={ ({history}) => (
              <SignupPage
                history={history} 
              /> 
            )} 
          />
          <Route 
            exact path='/login'
            render={ (props) => 
              <LoginPage/>

            }
          />
          <Route 
            exact path='/prospects'
            render={ (props) => 
              <ProspectsPage/> 
          }/>

        </Switch>
      </div>      
    </Switch>

  );
}

export default App;
