import React from 'react';

export default class DisplayWeather extends React.Component{
    
    render(){
        const {descriptionMain, description, temperature, weatherIcon, name} = this.props;
        return <div>
                 <h4>Current Weather in {name}</h4>
                <span className='displayWeather-item'>{temperature}°C</span>
                <span className='displayWeather-item' >{descriptionMain}</span>
                {weatherIcon?(<img className='displayWeather-item'  src={'http://openweathermap.org/img/w/' + weatherIcon + '.png'} alt={description}/>): null}
                
               
               </div>
    }
}