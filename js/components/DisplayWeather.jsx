import React from 'react';

export default class DisplayWeather extends React.Component{
    
    render(){
        const {descriptionMain, description, temperature, weatherIcon, name} = this.props;
        return <div>
                 <div>Current Weather</div>
                <span>{name}</span>
                <span>{temperature}°C</span>
                <span>{descriptionMain}</span>
                {weatherIcon?(<img src={'http://openweathermap.org/img/w/' + weatherIcon + '.png'} alt={description}/>): null}
                
               
               </div>
    }
}