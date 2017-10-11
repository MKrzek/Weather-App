import React from 'react';

import Title from './Title.jsx';
import FetchData from './FetchData.jsx';
import ShowLocations from './ShowLocations.jsx';


class App extends React.Component{
    render(){
        return <div>
              
                <Title />
                <FetchData />           
               
                </div>
    }}


 
module.exports = App;