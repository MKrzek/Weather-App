import React from 'react';
import SearchInput from './SearchInput.jsx';
import DisplayWeather from './DisplayWeather.jsx';


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

          
        }
    }
    
    handleNameChange=(event)=>{ 
        this.setState({
             cityName:event.target.value,
             render:false})
       
     }
     
    
     handleSubmitButton=(event)=>{
         event.preventDefault();
         this.setState({
            render:true,
         })
         this.showWeather() 
         
     }
     
    
    showWeather = () => {
        const apiURL='city.list.json';
        console.log (apiURL)
        return fetch(apiURL)
             .then(r=>r.json())
             .then(data=>{
                 console.log ('city fetch')
                 const cities=(data.map(a=>a.name))
                if ((!cities.includes(this.state.cityName))) {
                    console.log ('no such place')
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
              })      
            })    
         }
}      
             )}


   
    render(){
        const {descriptionMain, description, temperature, weatherIcon, name,render} = this.state;
        
            return<div>
                <SearchInput cityName={this.state.cityName} 
                handleNameChange={this.handleNameChange} 
                
                handleSubmitButton={this.handleSubmitButton}/>
                {render?(<DisplayWeather {...this.state}/>): null}
                 
                  </div>
        }  
}
    
  
    
    
        
        