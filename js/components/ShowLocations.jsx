import React from 'react';
import {Link, IndexLink}from 'react-router';
import LocationItem from './LocationItem.jsx';

export default class ShowLocations extends React.Component{
     

    render(){
        const myLocations=JSON.parse(localStorage.getItem('myLocations'))||[];
        console.log(myLocations)
        const locationList=myLocations.map((location, index)=>{
            return <LocationItem key={index} location={location}/>
        
            
        })
        console.log (locationList)
        return <div>
               <Link to="/">Back to Main Page</Link>
               <ul>
                   {locationList}
               </ul> 
               </div>
    }
}

          