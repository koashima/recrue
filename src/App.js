import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header" style={{ fontStyle: "italic"}}>R E <span style={{ textDecoration: 'line-through'}}>C R U E</span></header>
        <Nav/>
        <Switch>
          <Route></Route>
        </Switch>
      </div>      
    </Router>

  );
}

export default App;
