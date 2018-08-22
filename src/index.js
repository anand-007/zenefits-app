import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import './style/index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


ReactDOM.render(
     <Router>
     <Switch>
         <Route exact path='/login' component={Login} />
         <Route exact path='/employee' component={App} />
         </Switch>
               </Router>,
  document.getElementById('root')
);
