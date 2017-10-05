import React from 'react';
import SearchInput from './SearchInput.jsx';
const API_KEY='0d97dafb64ebaf36cf169cd4e5f02e5a';

export default class FetchData extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
           temperature: null,
           description: null,
           weatherIcon:null,
           descriptionMain: null,
           
            
            
        }
    }
    componentDidMount(){
        
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Cracow&units=metric&APPID=0d97dafb64ebaf36cf169cd4e5f02e5a')
        .then(r=>r.json())
        .then(data=>{
            console.log ('fetch')
            
            this.setState({
             temperature: data.main.temp,
             description: data.weather[0].description,
             weatherIcon:data.weather[0].icon,
             descriptionMain:data.weather[0].main
             

              })
              console.log (this.state.cloudsIcon)
            })
            
        
        
    }

    render(){
        const {descriptionMain, description, temperature, weatherIcon} = this.state;
        
            return<div>
                {temperature}
                {description}
                <img src={'http://openweathermap.org/img/w/' + this.state.weatherIcon + '.png'}></img>
                {descriptionMain}
                </div>
        }  
        }
    
    
    
    
        
        