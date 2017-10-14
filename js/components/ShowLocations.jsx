import React from 'react';
import {Link, IndexLink}from 'react-router';
import LocationItem from './LocationItem.jsx';
import LocationDetails from './LocationDetails.jsx';
export default class ShowLocations extends React.Component{
    constructor(props){
        super(props);
        this.state={
            temperature: null,
            description: null,
            weatherIcon:null,
            descriptionMain:null,
            location:'',
            name: null,
            render: false,
           
        }
    } 

    handleWeatherDisplay=(location)=>{
        return (fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=0d97dafb64ebaf36cf169cd4e5f02e5a`))
            .then(r=>r.json())
            .then(data=>{
           console.log ('new fetch')
           
             this.setState({

             temperature: data.main.temp,
             description: data.weather[0].description,
             weatherIcon:data.weather[0].icon,
             descriptionMain:data.weather[0].main,
             location: location.toUpperCase(),
             name: data.name,
             

             })  
             
        })
       
    }
    
    render(){
        const myLocations=JSON.parse(localStorage.getItem('myLocations'))||[];
        
        const locationList=myLocations.map((location, index)=>{
            return <LocationItem key={index} location={location} handleWeatherDisplay={this.handleWeatherDisplay}/>
                                  
            
        })
        const {location, name, descriptionMain, weatherIcon, description, temperature}=this.state;
        return <div >
               <nav>
                   <ul>
                       <li>
                        <Link to="/">Back to Main Page</Link>
                       </li>
                       <li>
                        <Link to ="/LocateMe">Locate Me</Link>
                       </li>
                   </ul>
               </nav>
               <ul>
                   {locationList}
               </ul> 
               <div>
               {location?(<LocationDetails{...this.state}/>):null}
               </div>
               </div>
    }
}

          