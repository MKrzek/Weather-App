import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
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
        < Route path="/" component={App}/>
        </Router>,
        document.querySelector('#app')
    );
})