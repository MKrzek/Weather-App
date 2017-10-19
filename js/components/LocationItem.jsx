import React from 'react';

//import ShowLocations from './ShowLocations.jsx';


export default class LocationItem extends React.Component {
    
    handleWeatherDisplay=()=>{
         if (typeof this.props.handleWeatherDisplay==='function'){
             this.props.handleWeatherDisplay(this.props.location)
         }
         console.log ('display click works')
     }  
    
    handleRemoveLocation=()=>{
        if (this.props.handleRemoveLocation==='function'){
            this.props.handleRemoveLocation (this.props.location)
        }
        console.log ('remove button works')
    }


    render() {
       const {location}=this.props
        return (
            <li>
            <h3 onClick={this.handleWeatherDisplay}> {location}</h3>
            <button onClick={this.handleRemoveLocation}>X</button>
            </li>
        )
    }
}
    

    