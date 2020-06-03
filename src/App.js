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
import EditProspect from './pages/EditProspect/EditProspect';

function App() {

  let [user, setUser] = useState(userService.getUser())
  let [prospect, setProspect] = useState(getProspects())
  


  function handleLogout() { 
    userService.logout();
    setUser(null);
  }

  function handleSignupOrLogin() {
    setUser(userService.getUser());
  }


  
  const handleAddProspect = async newProspectData => {
    const newProspect = await prospectService.create(newProspectData);
    setProspect(state => ({
      prospect: [...prospect, newProspect]
    }), (props) => 
    props.history.push('/'));
  }

  const handleUpdateProspect = async updatedProspectData => {
    const updatedProspect = await prospectService.update(updatedProspectData);
  
    const newProspectArray = prospect.map(p => 
      p._id === updatedProspect._id ? updatedProspect : p);
    setProspect({prospect: newProspectArray})
  }


  const handleDeleteProspect = async id => {
    await prospectService.deleteOne(id);
    setProspect(state => ({
      prospect: prospect.filter(p => p._id !== id)
    }), (props) => 
    props.history.push('/'));
  }
  
  async function getProspects () {
    const prospects = await prospectService.getAll();
    console.log(prospects)
    setProspect(prospects);
  } 


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
            <ProspectsPage 
              prospect={prospect} 
              user={user} {...props}
              handleDeleteProspect={handleDeleteProspect} />
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
          <Route 
            exact path='/editprospect'
            render={ ({history, location}) => 
              <EditProspect 
                history={history}
                location={location}
                handleUpdateProspect={handleUpdateProspect}/>
            }
          />
      </div>      
    </Switch>
  );
}


export default App;