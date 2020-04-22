import React from "react";
import  ReactDom  from "react-dom";
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import  Login  from "./login";
import Demo from "./header";
import App from "./tables/apps.js";




ReactDom.render(
<Router>
  <Route exact path='/' component={Login}/> 
  <Route exact path='/Admin' component={Demo}/> 
  <Route exact path='/App' component={App}/>   
</Router>, document.getElementById("app"));