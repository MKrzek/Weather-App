import React from 'react';
export default class LocateMeDetails extends React.Component{
    
    render(){
        const {descriptionMain, description, temperature, weatherIcon, name} = this.props;
        return <div>
                 <div>Weather at your current location in {name}</div>
               
                <span>{temperature}°C</span>
                <span>{descriptionMain}</span>
                {weatherIcon?(<img src={'http://openweathermap.org/img/w/' + weatherIcon + '.png'} alt={description}/>): null}
               </div>
    }}