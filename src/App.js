import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';





class App extends Component {

  onSignIn(){
    window.location.href = "/employee";
  }

  render() {

     return (
         <div style={{"height":'100%',"width":'100%'}}>
            <div class="g-signin2" data-onsuccess={this.onSignIn()}></div>
         </div>
      );
   
}
}

export default App;
