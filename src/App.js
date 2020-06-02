import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch, } from 'react-router-dom';
import userService from './utils/userService';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Nav from './components/Nav/Nav';
import ProspectsPage from './pages/ProspectsPage/ProspectsPage';
import Prospect from './components/Prospect/Prospect';
import prospectService from './utils/prospectService';
import AddProspect from './pages/AddProspect/AddProspect';

function App() {

  let [user, setUser] = useState(userService.getUser())
  let [prospect, setProspect] = useState()
  
  function handleLogout() { 
    userService.logout();
    setUser(null);
  }

  function handleSignupOrLogin() {
    setUser(userService.getUser());
  }

  function handleNewProspect () {
    setProspect()
  }
  
  const handleAddProspect = async newProspectData => {
    const newProspect = await prospectService.create(newProspectData);
    setProspect(state => ({
      prospect: [...prospect, newProspect]
    }), (props) => 
    props.history.push('/'));
  }

  useEffect( () => {
    async function getProspects () {
      const prospects = await prospectService.getAll();
      setProspect(prospects);
    } 
    getProspects()
  }, []);

  return (
    <Switch>
      <div className="App">
        <header className="App-header" style={{ fontStyle: "italic"}}>R E <span style={{ textDecoration: 'line-through'}}>C R U E</span></header>
      <Switch>
        <Route 
          exact path='/'
          render={ (props) =>
            <Nav 
              user={user}
              handleLogout={handleLogout}
            />               
          }
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
          <Route exact path="/prospects" render={ (props) => 
            <ProspectsPage prospect={prospect} user={user} {...props} />
          } />
          <Route path="/prospects/:id" render={ (props) => 
            <Prospect prospect={prospect} {...props} />
          } />
          <Route 
            exact path='/addprospect'
            render={ ({history}) => 
              <AddProspect 
                history={history}
                handleAddProspect={handleAddProspect}/>
            }
          />
      </div>      
    </Switch>
  );
}



export default App;