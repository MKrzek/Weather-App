import React from 'react';
import {Link, IndexLink}from 'react-router';
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
    {enableHighAccuracy:true, timeout: 30000, maximumAge: 1000},
    )    
}

handleMyLocationWeather=()=>{
    let lat=this.state.latitude;
    let lon=this.state.longitude;
    return (fetch( `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=0d97dafb64ebaf36cf169cd4e5f02e5a`))
    .then (r=>r.json())
    .then (data=>{
        console.log ('my location fetch')
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
        return <div>
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
               <div>
               abababababababababab
               </div>
               </div>
    }
}