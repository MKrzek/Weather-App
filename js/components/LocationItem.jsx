import React from 'react';
//import ShowLocations from './ShowLocations.jsx';


export default class LocationItem extends React.Component {
    
    handleWeatherDisplay=()=>{
        
         if (typeof this.props.handleWeatherDisplay==='function'){
             this.props.handleWeatherDisplay(this.props.location)
         }
         console.log ('display click works')
     }  
    
 


    render() {
       const {location}=this.props
        return (
            <li onClick={this.handleWeatherDisplay}>
             <h3>{location}</h3>
            <button>X</button>
            </li>
        )
    }
}
    
    