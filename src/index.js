import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Home from './Home';
import Login from './Login';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


ReactDOM.render(
     <Router>
     <Switch>
         <Route exact path='/login' component={App} />
         <Route exact path='/employee' component={Login} />
         </Switch>
               </Router>,
  document.getElementById('root')
);
