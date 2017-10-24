import React from 'react';
export default class LocateMeDetails extends React.Component{
    
    render(){
        const {descriptionMain, description, temperature, weatherIcon, name} = this.props;
        return <div>
                 <h3>Weather at your current location in {name}</h3>
                <div className='locateMeDetails'>
                    <span className='locateMeDetails-item'>{temperature}°C</span>
                    <span className='locateMeDetails-item'>{descriptionMain}</span>
                    {weatherIcon?(<img className='locateMeDetails-item' src={'https://openweathermap.org/img/w/' + weatherIcon + '.png'} alt={description}/>): null}
                </div>
               </div>
    }}