import React from 'react';

export default class DisplayWeather extends React.Component{
    
    render(){
        const {descriptionMain, description, temperature, weatherIcon, name} = this.props;
        return <div>
                 <div>Current Weather</div>
                <span>{name}</span>
                <span>{temperature}</span>
                <span>{description}</span>
                <img src={'http://openweathermap.org/img/w/' + weatherIcon + '.png'}></img>
                <span>{descriptionMain}</span>
               </div>
    }
}