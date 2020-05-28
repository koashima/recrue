import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
   <Router><Route><App /></Route></Router> 
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
