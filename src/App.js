import React from 'react';
import './App.css';
import { Route, Switch, Link} from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <Switch>
      <div className="App">
        <header className="App-header" style={{ fontStyle: "italic"}}>R E <span style={{ textDecoration: 'line-through'}}>C R U E</span></header>
        <Nav/>
        <Switch>
          <Route 
            exact path='/signup'
            
          />
          <Route 
            exact path='/login'
            
          />
          <Route 
            exact path='/prospects'
            
          />
        </Switch>
      </div>      
    </Switch>

  );
}

export default App;
