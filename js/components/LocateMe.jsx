import React from 'react';
import {Link, IndexLink}from 'react-router';
export default class LocateMe extends React.Component{
constructor(props){
    super(props);
    this.state={
        latitude: null,
        longitute: null, 
        error: null,
    }
}
componentDidMount(){
    this.watchId=navigator.geolocation.getCurrentPosition((position)=>{
        this.setState({
            latitute:position.coords.latitude,
            longitute: position.coords.longitude,
            error: null,
        });
    },
    (error)=>this.setState({ error: error.message}),
    {enableHighAccuracy:true, timeout: 30000, maximumAge: 1000},
)

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