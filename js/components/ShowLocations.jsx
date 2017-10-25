import React from 'react';
import {Link, IndexLink} from 'react-router';
import LocationItem from './LocationItem.jsx';
import LocationDetails from './LocationDetails.jsx';
export default class ShowLocations extends React.Component{
    constructor(props){
        super(props);
        this.state={
            locationList:JSON.parse(localStorage.getItem('myLocations'))||[],
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
        const API_KEY='0d97dafb64ebaf36cf169cd4e5f02e5a';
        const myPlacesURL=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${API_KEY}`;
        return fetch(myPlacesURL)
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
    handleRemoveLocation=(location)=>{
        console.log('remove function works');
     let storedLocations=JSON.parse(localStorage.getItem('myLocations'));
     storedLocations=storedLocations.filter((item)=>item!==location)
     console.log (storedLocations)
     localStorage.setItem('myLocations', JSON.stringify(storedLocations));
     this.setState({
        locationList:storedLocations
     })
 
   }
 
    
    
    render(){
        const myLocations=this.state.locationList;
        const locationList=myLocations.map((location, index)=>{
            return <LocationItem key={index} 
                                 location={location} 
                                 handleWeatherDisplay={this.handleWeatherDisplay} 
                                 handleRemoveLocation={this.handleRemoveLocation}/>    
        })
        const {location, name, descriptionMain, weatherIcon, description, temperature}=this.state;
        return <div >
               <nav className='navebar navbar-default' id='bs-example-navbar-collapse-1'>
                   <div className='container-fluid'>
                   <ul className='nav navbar-nav'>
                       <li>
                        <Link to='/'>Back to Main Page</Link>
                       </li>
                       <li>
                        <Link to ='/LocateMe'>Locate Me</Link>
                       </li>
                       
                   </ul>
                   </div>
               </nav>
               <ul>
                   {locationList}
               </ul> 
               <div>
               {location?(<LocationDetails {...this.state}/>): null}
               </div>
               </div>
    }
}

          