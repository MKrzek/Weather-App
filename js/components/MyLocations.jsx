import React from 'react';
import {Link, IndexLink}from 'react-router';
import ShowLocations from './ShowLocations.jsx';

export default class MyLocations extends React.Component{
    constructor(props){
        super(props);
        this.state={
            temperature: null,
            description: null,
            weatherIcon:null,
            descriptionMain:null,
            name: null,
        }
    }
    
    addToLocalStorage=(event)=>{
       
        event.preventDefault();
        const locations=JSON.parse(localStorage.getItem('myLocations'))||[];
        if (locations.indexOf(this.props.myNewLocation)==-1){
            const myLocations=[this.props.myNewLocation, ...locations];
            localStorage.setItem('myLocations', JSON.stringify(myLocations));
        }
    } 
    ComponentWillMount(){
        this.handleWeatherDisplay()
    }
        

    handleWeatherDisplay=()=>{
        const weatherList=[];
        const locations=JSON.parse(localStorage.getItem('myLocations'))||[];
        locations.map((location)=>{
        return (fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=0d97dafb64ebaf36cf169cd4e5f02e5a`))
            .then(r=>r.json())
            .then(data=>{
           console.log ('new fetch')
           
             this.setState({
             temperature: data.main.temp,
             description: data.weather[0].description,
             weatherIcon:data.weather[0].icon,
             descriptionMain:data.weather[0].main,
             name: data.name,
             })  
             const {temperature, description, weatherIcon, descriptionMain, name}=this.state;
             console.log (this.state)
             weatherList.push(this.state)
             console.log (weatherList)
            
             
            
        })
       
    })
    }
    render(){
       
        return <div>
                <button onClick={this.addToLocalStorage} onClick={this.handleWeatherDisplay}>Add to my Locations</button>
                <button ><Link to ="/ShowLocations" >My Locations</Link></button>
                
              </div>
    }
}


