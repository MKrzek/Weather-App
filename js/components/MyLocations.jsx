import React from 'react';

export default class MyLocations extends React.Component{
    
    addToLocalStorage=(event)=>{
        event.preventDefault();
        const locations=JSON.parse(localStorage.getItem('myLocations'))||[];
        if (locations.indexOf(this.props.myNewLocation)==-1){
            const myLocations=[this.props.myNewLocation, ...locations];
            console.log (myLocations);
            localStorage.setItem('myLocations', JSON.stringify(myLocations));
        }
    }  
    
    
    render(){
        return <div>
                <button onClick={this.addToLocalStorage}>Add to my Locations</button>
               <button onClick={this.handleRetriveFromLS}>My Locations</button>
              
              </div>
    }
}


