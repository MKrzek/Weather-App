import React from 'react';
import {Router, 
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory} from 'react-router';
import Title from './Title.jsx';
import FetchData from './FetchData.jsx';


class App extends React.Component{
    render(){
        return <div>
                <Title />
                <FetchData />  
                </div>
    }}


 
module.exports = App;