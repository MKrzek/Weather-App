import React from 'react';
import {Link, IndexLink}from 'react-router';


export default class MyLocations extends React.Component{
    constructor(props){
        super(props);
        
    }
    
    addToLocalStorage=(event)=>{ 
        event.preventDefault();
        const locations=JSON.parse(localStorage.getItem('myLocations'))||[];
        if (locations.indexOf(this.props.myNewLocation)==-1){
            const myLocations=[this.props.myNewLocation, ...locations];
            localStorage.setItem('myLocations', JSON.stringify(myLocations));
        }
    } 
    render(){
       
        return <div>
                <button onClick={this.addToLocalStorage}>Add to my Locations</button>
              </div>
    }
}


