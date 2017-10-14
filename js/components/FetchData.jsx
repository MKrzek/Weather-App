import React from 'react';
import {Link, IndexLink}from 'react-router';
import SearchInput from './SearchInput.jsx';
import DisplayWeather from './DisplayWeather.jsx';
import DisplayAlert from './DisplayAlert.jsx';
import MyLocations from './MyLocations.jsx';
import ShowLocations from './ShowLocations.jsx';

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
        }
    }
    
    handleNameChange=(event)=>{ 
        this.setState({
             cityName:event.target.value,
             render:false,
             alertDisplay: false,
              })  
    }
     handleSubmitButton=(event)=>{
         event.preventDefault();
         this.setState({
            render:false,
            alertDisplay: false,
         })
         this.showWeather()   
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
        return fetch(apiURL)
             .then(r=>r.json())
             .then(data=>{
                 console.log ('city fetch')
                 const cities=(data.map(a=>a.name))
                 if ((!cities.includes(this.state.cityName))){
                    console.log ('no such place')
                    this.setState({
                        alertDisplay: true,
                    })
                }else{    
                return fetch('http://api.openweathermap.org/data/2.5/weather?q=' + this.state.cityName + '&units=metric&APPID=0d97dafb64ebaf36cf169cd4e5f02e5a')
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
        const {descriptionMain, description, temperature, weatherIcon, name,render, alertDisplay, cityName} = this.state;
            return<div>
                       <SearchInput cityName={this.state.cityName} 
                       handleNameChange={this.handleNameChange} 
                       handleSubmitButton={this.handleSubmitButton}/>
                       {alertDisplay?(<DisplayAlert />): null}
                        {render?(<DisplayWeather {...this.state}/>): null}
                    
                        <MyLocations myNewLocation={cityName}/> 
                   </div>
        }  
}
    
  
    
    
        
        