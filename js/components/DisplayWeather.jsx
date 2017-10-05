import React from 'react';

export default class DisplayWeather extends React.Component{
    
    render(){
        const {descriptionMain, description, temperature, weatherIcon} = this.props;
        return <div>
                {temperature}
                {description}
                <img src={'http://openweathermap.org/img/w/' + weatherIcon + '.png'}></img>
                {descriptionMain}
               </div>
    }
}