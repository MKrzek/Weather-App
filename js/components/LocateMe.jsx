import React from 'react';
import {Link, IndexLink} from 'react-router';
import ShowLocations from './ShowLocations.jsx';
import LocateMeDetails from './LocateMeDetails.jsx';
export default class LocateMe extends React.Component{
constructor(props){
    super(props);
    this.state={
        latitude: null,
        longitude: null, 
        error: null,
        temperature: null,
        description: null,
        weatherIcon:null,
        descriptionMain:null,
        name: null,
        render: false,
    }
}
componentDidMount(){
    this.watchId=navigator.geolocation.getCurrentPosition((position)=>{
        this.setState({
            latitude:position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
        });
        this.handleMyLocationWeather()
    },
    (error)=>this.setState({ error: error.message}),
    {enableHighAccuracy:true, timeout: 40000, maximumAge: 1000},
    )    
}

handleMyLocationWeather=()=>{
    const API_KEY='0d97dafb64ebaf36cf169cd4e5f02e5a';
    const lat=this.state.latitude;
    const lon=this.state.longitude;
    const myLocationURL= 'https://api.openweathermap.org/data/2.5/weather?APPID='+API_KEY+'&units=metric&lat='+lat+'&lon='+lon;
    return fetch(myLocationURL)
    .then (r=>r.json())
    .then (data=>{
        console.log ('my location fetch')
        this.setState({
            temperature: data.main.temp,
            description: data.weather[0].description,
            weatherIcon:data.weather[0].icon,
            descriptionMain:data.weather[0].main,
            name: data.name,
            render: true,
        })
    })
}
    render(){
        const {name, descriptionMain, weatherIcon, description, temperature}=this.state;
        return <div>
                <nav className='navbar navbar-default' id='bs-example-navbar-collapse-1'>
                    <div className='container-fluid'>
                     <ul className='nav navbar-nav'>
                       <li>
                        <Link to='/'>Back to Main Page</Link>
                       </li>
                       <li>
                        <Link to ='/ShowLocations'>My Locations</Link>
                       </li>
                   </ul>
                   </div>
               </nav>
               <div>
                    <div>
                        {this.state.error? 'Sorry, no position available': null}
                    </div>
                    <div>
                        {this.state.render?(<LocateMeDetails {...this.state}/>):'Please be patient the details are being loaded...'}
                    </div>
               </div>
               </div>
    }
}