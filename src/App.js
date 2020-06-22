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

class App extends React.Component  {
  
  state = { 
    prospects: [],
    user: userService.getUser
  }

  handleLogout = () => { 
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser()});
  }

  handleAddProspect = async newProspectData => {
    const newProspect = await prospectService.create(newProspectData);
    this.setState(state => ({
      prospects: [...state.prospects, newProspect]
    }), () => 
    this.props.history.push('/'));
  }

  handleUpdateProspect = async updatedProspectData => {
    const updatedProspect = await prospectService.update(updatedProspectData);
    const newProspectArray = this.state.prospects.map(p => 
      p._id === updatedProspect._id ? updatedProspect : p
    );
    this.setState(
      {prospects: newProspectArray},
      () => this.props.history.push('/')
    );
  }

  async componentDidMount() {
    const prospects = await prospectService.getAll();
    this.setState({prospects});
  }

  render() {
  return (
    <Switch>
      <>
      <div className="App">
        <header className="App-header" style={{ fontStyle: "italic"}}>R E <span style={{ textDecoration: 'line-through'}}>C R U E</span></header>

        <Route 
          exact path='/'
          render={ () =>
            <Nav 
              user={this.user}
              handleLogout={this.handleLogout}
            />               
          }
        />

        <Route 
          exact path='/signup' 
          render={ ({history}) => (
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            /> 
          )} 
        />
        <Route 
          exact path='/login'
          render={ ({history}) => 
            <LoginPage 
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}/>
          }
        />
        <Route exact path="/prospects" render={ ({props, history}) => 
          <ProspectsPage
            history={history}
            prospects={this.state.prospects} 
            user={this.state.user} {...props} />
        } />
        <Route path="/prospects/:id" render={ (props) => 
          <Prospect prospects={this.prospects} {...props} />
        } />
        <Route 
          exact path='/addprospect'
          render={ ({history}) => 
            <AddProspect 
              history={history}
              handleAddProspect={this.handleAddProspect}/>
          }
        />
        <Route 
          exact path='/editprospect'
          render={ ({history, location}) => 
            <EditProspect 
              history={history}
              location={location}
              handleUpdateProspect={this.handleUpdateProspect}/>
          }
        />
      </div>      
    </>
    </Switch>
  );
  }
}


export default App;