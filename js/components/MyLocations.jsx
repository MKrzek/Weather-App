import React from 'react';
import {Link, IndexLink} from 'react-router';
import AlertContainer from 'react-alert';

export default class MyLocations extends React.Component{
    alertOptions={
        offset:14,
        position: 'bottom left',
        theme: 'dark',
        time: 5000, 
        transtion: 'fade'
    }
    
    addToLocalStorage=(event)=>{ 
        event.preventDefault();
        const locations=JSON.parse(localStorage.getItem('myLocations'))||[];
        if (locations.indexOf(this.props.myNewLocation)==-1){
            const myLocations=[this.props.myNewLocation, ...locations];
            localStorage.setItem('myLocations', JSON.stringify(myLocations));
        }
        this.msg.show('Your location has been saved',{
            time: 2000,
            type: 'success',
            })
        }

    
    render(){
       
        return <div>  
                 <AlertContainer ref={a=>this.msg=a} {...this.alertOptions}/>
                 <button className='btn btn-default btn-lg btn-block' 
                        onClick={this.addToLocalStorage}>Add To My Locations</button> 
                </div>
             
    }
}


