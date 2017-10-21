import React from 'react';
import ShowLocations from './ShowLocations.jsx';

export default class LocationDetails extends React.Component{

render(){
    const{ location, name, descriptionMain, weatherIcon, description, temperature}=this.props;
    return <div>
           <h3>Current weather in {name}</h3>
           <div className='locationDetails'>
                <p> {temperature}°C</p>
                <p> {descriptionMain}</p>
                {weatherIcon? (<img src={'http://openweathermap.org/img/w/' + weatherIcon + '.png'} alt={description}/>): null}
           </div>
           </div>
}
}