import React from 'react';
import {Link, IndexLink}from 'react-router';
import SearchInput from './SearchInput.jsx';
import DisplayWeather from './DisplayWeather.jsx';
import DisplayAlert from './DisplayAlert.jsx';
import MyLocations from './MyLocations.jsx';
import ShowLocations from './ShowLocations.jsx';
import EmptyStringAlert from './EmptyStringAlert.jsx';
const API_KEY='0d97dafb64ebaf36cf169cd4e5f02e5a';

export default class FetchData extends React.Component{
    constructor(props){
        super(props);
        this.state={
           temperature: null,
           description: null,
           weatherIcon:null,
           descriptionMain: null,    
           name: null,  
           cityName:'', 
           render: false,
           cityList:null,   
           alertDisplay: false, 
           emptyStringAlert: false,
        }
    }
    handleNameChange=(event)=>{ 
        this.setState({
             cityName:event.target.value,
             render:false,
             alertDisplay: false,
             emptyStringAlert: false
              })  
    }
     handleSubmitButton=(event)=>{
         event.preventDefault();
         this.setState({
            render:false,
            alertDisplay: false,  
         })
         if (this.state.cityName===''){
            this.setState({
             emptyStringAlert: true,
                })
        }else {
         this.showWeather() 
        }
         const tempLocalStorage= JSON.parse(localStorage.getItem('tempLocalStorage'))||[];
         const locations=JSON.parse(localStorage.getItem('myLocations'))||[];
         if (tempLocalStorage.includes(this.state.cityName)){
            const myLocations=[this.state.cityName, ...locations];
            localStorage.setItem('myLocations', JSON.stringify(myLocations))};
        if (!tempLocalStorage.includes(this.state.cityName)){
            const myTempLocations=[this.state.cityName,...tempLocalStorage];
            localStorage.setItem('tempLocalStorage', JSON.stringify(myTempLocations));
        }  
     }
     handleKeyPress=(event)=>{
         if ((event.keyCode==='13')&&(this.state.cityName!=='')){
             this.showWeather()
         }
         const tempLocalStorage= JSON.parse(localStorage.getItem('tempLocalStorage'))||[];
         const locations=JSON.parse(localStorage.getItem('myLocations'))||[];
         if (tempLocalStorage.includes(this.state.cityName)){
            const myLocations=[this.state.cityName, ...locations];
            localStorage.setItem('myLocations', JSON.stringify(myLocations))};
        if (!tempLocalStorage.includes(this.state.cityName)){
            const myTempLocations=[this.state.cityName,...tempLocalStorage];
            localStorage.setItem('tempLocalStorage', JSON.stringify(myTempLocations));
        }  


     }
    
    showWeather = () => {
        const apiURL='city.list.json';
        console.log (apiURL)
        const cityName=this.state.cityName.toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
            });
        return fetch(apiURL)
             .then(r=>r.json())
             .then(data=>{
                 console.log ('city fetch')
                 const cities=(data.map(a=>a.name))
                 if ((!cities.includes(cityName))){
                    console.log ('no such place')
                    this.setState({
                        alertDisplay: true,
                    })
                 
                }else{ 
                    const weatherURL='https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&APPID=' + API_KEY; 
                return fetch(weatherURL)
                   .then(r=>r.json())
                   .then(data=>{
                  console.log ('fetch')
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
}      
)}

    render(){
        const cityName=this.state.cityName.toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
            });
        const {descriptionMain, description, temperature, weatherIcon, name,render, alertDisplay, emptyStringAlert} = this.state;
            return<div>
                       <SearchInput cityName={cityName} 
                       handleNameChange={this.handleNameChange} 
                       handleSubmitButton={this.handleSubmitButton}
                       handleKeyPress={this.handleKeyPress}/>
                       {alertDisplay?(<DisplayAlert />): null}
                        {render?(<DisplayWeather {...this.state}/>): null}
                        {emptyStringAlert?(<EmptyStringAlert/>): null}
                        <MyLocations myNewLocation={cityName}/> 
                   </div>
        }  
}
    
  
    
    
        
        