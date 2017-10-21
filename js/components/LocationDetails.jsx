import React from 'react';
import ShowLocations from './ShowLocations.jsx';

export default class LocationDetails extends React.Component{

render(){
    const{ location, name, descriptionMain, weatherIcon, description, temperature}=this.props;
    return <div>
           <h3 className='locationDetails-name'>Current weather in {name}</h3>
           <div className='locationDetails'>
                <p className='locationDetails-items'> {temperature}°C</p>
                <p className='locationDetails-items'> {descriptionMain}</p>
                {weatherIcon? (<img className='locationDetails-icon' src={'http://openweathermap.org/img/w/' + weatherIcon + '.png'} alt={description}/>): null}
           </div>
           </div>
}
}