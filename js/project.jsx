import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import ShowLocations from './components/ShowLocations.jsx';
import MyLocations from './components/MyLocations.jsx';
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
        <Route path="/" component={App}/>
        <Route path="/:ShowLocations" component={ShowLocations}/>
        <Route path="/my-locations" component={MyLocations}/>
        </Router>,
        document.querySelector('#app')
    );
})