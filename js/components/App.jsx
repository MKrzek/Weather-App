import React from 'react';
import Title from './Title.jsx';
import Navigation from './Navigation.jsx';
import FetchData from './FetchData.jsx';



class App extends React.Component{
    render(){
        return <div className='app'>
                <Title />
                <Navigation/>
                <FetchData />  
                </div>
    }}


 
module.exports = App;