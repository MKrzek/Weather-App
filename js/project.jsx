import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import ShowLocations from './components/ShowLocations.jsx';
import LocateMe from './components/LocateMe.jsx';

import {
    Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
  } from 'react-router';
  
document.addEventListener('DOMContentLoaded', function(){
ReactDOM.render(
        <Router history={hashHistory}>
        <Route path='/' component={App}/>
        <Route path='/ShowLocations' component={ShowLocations}/>
        <Route path='/:LocateMe' component={LocateMe}/>
        
        </Router>,
        document.querySelector('#app')
    );
})